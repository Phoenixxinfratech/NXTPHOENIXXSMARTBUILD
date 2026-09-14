import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/lib/site-config';

/**
 * Lead Capture API Endpoint
 * 
 * Handles all form submissions from the website:
 * - Quote requests (/get-a-quote)
 * - Contact form (/contact-us)
 * - Career applications (/career)
 * - Partner applications (/become-partner)
 * - Vendor registration (/vendor-registration)
 * - Newsletter subscriptions
 * 
 * LEAD MANAGEMENT GUIDE:
 * =======================
 * 
 * WHERE LEADS ARE STORED:
 * 1. Netlify Forms (Recommended for production):
 *    - Go to Netlify Dashboard → Your Site → Forms
 *    - All submissions are automatically captured
 *    - Export as CSV from the dashboard
 * 
 * 2. Email Notifications:
 *    - Configure in netlify.toml or Netlify Dashboard
 *    - Notifications sent to: projects@phoenixxsmartbuild.com
 * 
 * 3. Server Logs (Vercel/Netlify):
 *    - All submissions are logged with timestamps
 *    - View in Functions logs
 * 
 * HOW TO DOWNLOAD LEADS:
 * 1. Netlify Dashboard → Forms → Select Form → Download CSV
 * 2. CSV includes: Name, Email, Phone, Company, Message, Source, Timestamp
 * 
 * INTEGRATIONS TO CONSIDER:
 * - Google Sheets API for real-time sync
 * - HubSpot CRM integration
 * - Mailchimp for email marketing
 * - Slack notifications for instant alerts
 */

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  source?: string;
  industry?: string;
  formType?: string;
}

interface LeadRecord extends LeadData {
  id: string;
  timestamp: string;
  ip: string;
  userAgent: string;
  pageUrl?: string;
}

// Generate unique ID for lead
function generateLeadId(): string {
  return `LEAD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}

// Format lead for logging/storage
function formatLeadRecord(data: LeadData, request: NextRequest): LeadRecord {
  return {
    id: generateLeadId(),
    ...data,
    timestamp: new Date().toISOString(),
    ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
    userAgent: request.headers.get('user-agent') || 'unknown',
    pageUrl: request.headers.get('referer') || 'unknown',
  };
}

// Send notification (placeholder - integrate with email service)
async function sendNotification(lead: LeadRecord): Promise<void> {
  // TODO: Integrate with email service (SendGrid, Postmark, etc.)
  // Example with SendGrid:
  // await sgMail.send({
  //   to: 'projects@phoenixxsmartbuild.com',
  //   from: 'noreply@phoenixxsmartbuild.com',
  //   subject: `New Lead: ${lead.source || 'Website'}`,
  //   html: `<h2>New Lead Received</h2>...`,
  // });
  
  console.log('📧 Notification would be sent for lead:', lead.id);
}

// Store lead (placeholder - integrate with database/CRM)
async function storeLead(lead: LeadRecord): Promise<void> {
  // TODO: Integrate with your preferred storage:
  // - MongoDB/PostgreSQL database
  // - Google Sheets API
  // - HubSpot CRM
  // - Airtable
  
  // For now, log to server logs (viewable in Netlify/Vercel dashboard)
  console.log('='.repeat(60));
  console.log('📝 NEW LEAD RECEIVED');
  console.log('='.repeat(60));
  console.log(JSON.stringify(lead, null, 2));
  console.log('='.repeat(60));
}

// Best-effort in-process rate limit. Serverless instances are not shared, so
// this throttles per-instance bursts rather than acting as a global quota.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(request: NextRequest): boolean {
  const ip =
    request.headers.get('x-nf-client-connection-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    'unknown';
  const now = Date.now();
  const hits = (recentSubmissions.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  recentSubmissions.set(ip, hits);

  // Keep the map from growing without bound on long-lived instances.
  if (recentSubmissions.size > 1000) {
    recentSubmissions.forEach((times: number[], key: string) => {
      if (times.every((t: number) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        recentSubmissions.delete(key);
      }
    });
  }

  return hits.length > RATE_LIMIT_MAX_REQUESTS;
}

// POST /api/lead - Create a new lead
export async function POST(request: NextRequest) {
  try {
    if (isRateLimited(request)) {
      return NextResponse.json(
        { success: false, error: 'Too many submissions. Please try again in a minute.' },
        { status: 429 }
      );
    }

    const body: LeadData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Missing required fields: name, email, and message are required' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Invalid email format' 
        },
        { status: 400 }
      );
    }

    // Validate phone format (if provided)
    if (body.phone) {
      const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;
      if (!phoneRegex.test(body.phone)) {
        return NextResponse.json(
          { 
            success: false,
            error: 'Invalid phone number format' 
          },
          { status: 400 }
        );
      }
    }

    // Format the lead record
    const leadRecord = formatLeadRecord(body, request);

    // Store the lead
    await storeLead(leadRecord);

    // Send notification
    await sendNotification(leadRecord);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry. We will contact you shortly.',
        leadId: leadRecord.id,
        timestamp: leadRecord.timestamp,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Lead submission error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'An error occurred while processing your request. Please try again.' 
      },
      { status: 500 }
    );
  }
}

// GET /api/lead - Health check and info
export async function GET() {
  return NextResponse.json({
    status: 'active',
    endpoint: '/api/lead',
    methods: ['POST'],
    description: 'Lead capture API for PHOENIXX SmartBuild website',
    requiredFields: ['name', 'email', 'message'],
    optionalFields: ['phone', 'company', 'source', 'industry', 'formType'],
    documentation: '/LEAD-MANAGEMENT.md',
  });
}

// OPTIONS - Handle CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      // Only our own site posts leads; a wildcard lets any origin submit.
      'Access-Control-Allow-Origin': siteConfig.url,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'Origin',
    },
  });
}
