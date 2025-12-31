/**
 * Site Configuration
 * Central configuration for site metadata and settings
 */

export const siteConfig = {
  name: 'PHOENIXX SmartBuild',
  tagline: 'Building Tomorrow\'s Infrastructure Today',
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
    linkedin: 'https://linkedin.com/company/phoenixxsmartbuild',
    facebook: 'https://facebook.com/phoenixxsmartbuild',
    instagram: 'https://instagram.com/phoenixxsmartbuild',
    googleBusiness: 'https://g.page/phoenixxsmartbuild',
  },
  contact: {
    email: 'projects@phoenixxsmartbuild.com',
    phone: '+91 97277 00442',
    phoneAlt: '+91 95126 16169',
    address: 'Ahmedabad, India',
  },
  company: {
    name: 'PHOENIXX SmartBuild',
    legalName: 'NXT PHOENIXX SMARTBUILD LLP',
    foundingDate: '2013',
  },
} as const;

export type SiteConfig = typeof siteConfig;
