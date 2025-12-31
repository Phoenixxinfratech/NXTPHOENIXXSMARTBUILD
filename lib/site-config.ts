/**
 * Site Configuration
 * Central configuration for site metadata and settings
 * ⚠️ CRITICAL: These values must match across all pages
 */

export const siteConfig = {
  name: 'PHOENIXX SMARTBUILD',
  tagline: 'Building the Next-Gen Industrial Infrastructure Ecosystem!',
  description:
    'PHOENIXX designs and delivers high-performance insulated panels, industrial doors, cleanroom systems, and EPC solutions for modern infrastructure. From Pre-Engineered Buildings to cold chain and controlled environments.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://phoenixxsmartbuild.com',
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@phoenixxsmartbuild',
  keywords: [
    'insulated panels',
    'PIR panels',
    'PUF panels',
    'sandwich panels',
    'cleanroom solutions',
    'pre-engineered buildings',
    'PEB construction',
    'cold storage construction',
    'industrial doors',
    'cleanroom doors',
    'fire rated doors',
    'EPC contractor',
    'turnkey projects',
    'pharmaceutical cleanroom',
    'food processing',
    'cold chain',
    'controlled environments',
  ],
  links: {
    twitter: 'https://twitter.com/phoenixxsmartbuild',
    linkedin: 'https://www.linkedin.com/company/phoenixxinfratech',
    facebook: 'https://www.facebook.com/phoenixxsmartbuild',
    instagram: 'https://instagram.com/phoenixxsmartbuild',
    googleBusiness: 'https://g.page/phoenixxsmartbuild',
  },
  contact: {
    // Primary contact
    phone: '+91 93289 15237',
    phoneAlt: '+91 9727700442',
    // Official email IDs
    email: 'info@phoenixxsmartbuild.com',
    sales: 'sales@phoenixxsmartbuild.com',
    projects: 'projects@phoenixxsmartbuild.com',
    engineering: 'engineering@phoenixxsmartbuild.com',
    accounts: 'accounts@phoenixxsmartbuild.com',
    hr: 'hr@phoenixxsmartbuild.com',
    // Location
    address: 'Ahmedabad, Gujarat, India',
  },
  company: {
    name: 'PHOENIXX SMARTBUILD',
    legalName: 'NXT PHOENIXX SMARTBUILD LLP',
    foundingDate: '2013',
  },
  // WhatsApp number for floating button (use without + for wa.me link)
  whatsapp: '919328915237',
} as const;

export type SiteConfig = typeof siteConfig;
