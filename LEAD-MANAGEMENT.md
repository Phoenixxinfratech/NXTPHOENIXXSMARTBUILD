# PHOENIXX SmartBuild - Lead Management Guide

## 📊 Overview

This document explains how leads are captured, stored, and downloaded from the PHOENIXX SmartBuild website.

---

## 🔗 Lead Sources (Forms)

| Page | Form Type | URL | Purpose |
|------|-----------|-----|---------|
| Get a Quote | Quote Request | `/get-a-quote` | Product/Solution pricing inquiries |
| Contact Us | Contact Form | `/contact-us` | General inquiries, support |
| Career | Job Application | `/career` | Employment applications |
| Become Partner | Partnership | `/become-partner` | Dealer/partner applications |
| Vendor Registration | Vendor | `/vendor-registration` | Supplier registration |
| Newsletter | Subscription | Various pages | Email newsletter signup |

---

## 📥 Where Leads Are Stored

### 1. **Netlify Forms** (Primary - Recommended)

All form submissions are automatically captured by Netlify Forms.

**How to Access:**
1. Log in to [Netlify Dashboard](https://app.netlify.com)
2. Select the **phoenixxsmartbuild** site
3. Go to **Forms** in the left sidebar
4. Click on the form name to view submissions

**How to Download:**
1. Select the form with submissions
2. Click **Download as CSV** button
3. CSV includes all fields with timestamps

### 2. **Server Logs** (Backup)

All submissions are logged to server functions.

**How to Access:**
1. Netlify Dashboard → Functions → View logs
2. Search for "NEW LEAD RECEIVED"
3. Each lead has a unique ID: `LEAD-{timestamp}-{random}`

### 3. **Email Notifications** (Real-time Alerts)

Configure email notifications in Netlify:
1. Site Settings → Forms → Form notifications
2. Add email: `projects@phoenixxsmartbuild.com`
3. Each submission triggers an email

---

## 📋 Lead Data Fields

### Standard Fields (All Forms)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | String | ✅ Yes | Full name of lead |
| `email` | String | ✅ Yes | Email address |
| `phone` | String | Optional | Phone number |
| `company` | String | Optional | Company/Organization |
| `message` | String | ✅ Yes | Inquiry details |
| `source` | String | Auto | Form name (Quote, Contact, etc.) |
| `timestamp` | DateTime | Auto | Submission time |
| `ip` | String | Auto | IP address |
| `userAgent` | String | Auto | Browser info |

### Quote-Specific Fields

| Field | Description |
|-------|-------------|
| `industry` | Industry category |
| `products` | Selected products (array) |
| `solutions` | Selected solutions (array) |
| `area` | Project area (sq.ft) |
| `location` | Project location |
| `timeline` | Expected timeline |
| `budget` | Budget range |

---

## 🔄 Integration Options

### Option 1: Google Sheets (Free)

Sync leads to Google Sheets using Zapier or Make.com:

1. Create a Google Sheet with matching columns
2. Connect Netlify Forms to Zapier
3. Map fields to spreadsheet columns
4. Automatic sync on each submission

### Option 2: HubSpot CRM (Recommended for B2B)

1. Create HubSpot free account
2. Set up webhook integration
3. Map lead fields to HubSpot contacts
4. Automatic lead scoring and nurturing

### Option 3: Email Marketing (Mailchimp/Brevo)

1. Export newsletter subscribers
2. Import to email marketing platform
3. Segment by source/industry

---

## 📈 Lead Analytics

### Track in Google Analytics 4

All form submissions trigger GA4 events:

| Event | Category | Description |
|-------|----------|-------------|
| `generate_lead` | Quote | Quote form submission |
| `generate_lead` | Contact | Contact form submission |
| `sign_up` | Newsletter | Newsletter subscription |

**View in GA4:**
1. Reports → Engagement → Events
2. Filter by event name
3. Track conversions over time

### Track in Meta Pixel

Lead events are also tracked for Facebook/Instagram ads:
- `Lead` event on form submission
- Use for retargeting campaigns

---

## 📧 Email Notification Setup

### Netlify Dashboard Configuration

1. Go to **Site Settings** → **Forms** → **Notifications**
2. Add **Outgoing webhook** or **Email notification**
3. Configure recipients:

```
Primary: projects@phoenixxsmartbuild.com
CC: sales@phoenixxsmartbuild.com
```

### Custom Email Service (Future)

For advanced email templates, integrate with:
- **SendGrid** - Transactional emails
- **Postmark** - Reliable delivery
- **AWS SES** - Cost-effective at scale

---

## 🛠️ API Reference

### POST /api/lead

Submit a new lead:

```bash
curl -X POST https://phoenixxsmartbuild.com/api/lead \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@company.com",
    "phone": "+91 98765 43210",
    "company": "ABC Industries",
    "message": "Looking for PUF panels for our warehouse",
    "source": "Quote Form",
    "industry": "manufacturing"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your inquiry. We will contact you shortly.",
  "leadId": "LEAD-1704307200000-ABC123XYZ",
  "timestamp": "2024-01-03T12:00:00.000Z"
}
```

### GET /api/lead

Health check:

```bash
curl https://phoenixxsmartbuild.com/api/lead
```

---

## 📊 Lead Reports

### Monthly Export Checklist

- [ ] Download all form submissions from Netlify
- [ ] Export GA4 conversion data
- [ ] Review lead sources and quality
- [ ] Update CRM with new leads
- [ ] Analyze conversion rates by form

### Key Metrics to Track

1. **Total Leads** - All form submissions
2. **Qualified Leads** - Leads with complete info
3. **Conversion Rate** - Visitors → Leads
4. **Source Distribution** - Which forms perform best
5. **Response Time** - Time to first contact

---

## 🔒 Data Privacy

- All lead data is stored securely
- HTTPS encryption for all submissions
- No third-party data sharing without consent
- Comply with data protection regulations
- Retention period: As per Privacy Policy

---

## 📞 Support

For technical issues with lead management:
- **Email:** engineering@phoenixxsmartbuild.com
- **Developer:** Review server logs in Netlify

---

*Last Updated: January 2025*

