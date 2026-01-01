import { NextRequest, NextResponse } from 'next/server';

/**
 * Lead Capture API Endpoint
 * Handles form submissions from contact forms and lead capture forms
 */

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  source?: string;
  industry?: string;
}

// POST /api/lead - Create a new lead
export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // TODO: Integrate with your preferred services:
    // - Send to CRM (Salesforce, HubSpot, etc.)
    // - Store in database
    // - Send notification email
    // - Add to email marketing list

    // Placeholder: Log the lead (replace with actual integration)
    console.log('New lead received:', {
      ...body,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry. We will contact you shortly.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

// OPTIONS - Handle CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}




