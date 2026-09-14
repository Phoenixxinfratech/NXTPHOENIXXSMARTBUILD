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
  ogImage: '/og-image.png',
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
    phone: '+91 88665 56879',
    phoneAlt: '+91 88665 56879',
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
  whatsapp: '918866556879',
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Canonical company figures.
 *
 * These were previously hardcoded per page and had drifted badly: years in
 * business appeared as 10+, 12+, 13+, 14+ and 18+, projects as 100+, 150+,
 * 200+, 210+ and 500+, and clients as 300+ and 500+. Quote these from here so
 * a correction lands everywhere at once.
 *
 * Update `projectsDelivered` and `clientsServed` whenever the real figures
 * change; they are claims made to buyers, not decoration.
 */
const FOUNDING_YEAR = Number(siteConfig.company.foundingDate);

export const companyStats = {
  foundingYear: FOUNDING_YEAR,
  projectsDelivered: '500+',
  clientsServed: '500+',
  /** Derived so it never goes stale, e.g. "13+" in 2026. */
  get yearsExperience(): string {
    return `${new Date().getFullYear() - FOUNDING_YEAR}+`;
  },
  /** e.g. "13+ years" */
  get yearsExperienceLabel(): string {
    return `${this.yearsExperience} years`;
  },
} as const;
