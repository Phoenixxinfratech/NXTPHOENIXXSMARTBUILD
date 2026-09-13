/**
 * Named author profiles for EEAT blog attribution.
 */
export interface BlogAuthorProfile {
  name: string;
  role: string;
  bio: string;
  url: string;
  expertise: string[];
}

export const blogAuthors: Record<string, BlogAuthorProfile> = {
  'piyush-gupta': {
    name: 'Piyush Gupta',
    role: 'Managing Director & Co-Founder',
    bio: 'Piyush Gupta leads PHOENIXX SMARTBUILD with over 15 years of experience in industrial construction, PUF panel manufacturing, and turnkey EPC project delivery across India and international markets.',
    url: '/about-us',
    expertise: ['PUF Panel Manufacturing', 'Industrial Construction', 'EPC Project Management', 'Export Operations'],
  },
  'harshad-gupta': {
    name: 'Harshad Gupta',
    role: 'Director – Operations & Engineering',
    bio: 'Harshad Gupta oversees manufacturing quality, engineering standards, and installation protocols at PHOENIXX SMARTBUILD, ensuring every project meets IS 14925 and client-specific compliance requirements.',
    url: '/about-us',
    expertise: ['Panel Engineering', 'Quality Assurance', 'Installation Standards', 'Cold Storage Design'],
  },
  'engineering-team': {
    name: 'PHOENIXX Engineering Team',
    role: 'Technical Content & Application Engineering',
    bio: 'The PHOENIXX Engineering Team comprises application engineers and project specialists with hands-on experience in sandwich panel systems, cleanroom construction, and industrial insulation across diverse sectors.',
    url: '/about-us',
    expertise: ['Sandwich Panels', 'Cleanroom Systems', 'Cold Storage', 'Industrial Insulation'],
  },
};

const authorRotation = ['piyush-gupta', 'harshad-gupta', 'engineering-team'] as const;

// Posts written in the first person cannot be credited to the collective
// Engineering Team profile, which has no "I" to speak with.
const individualAuthors = ['piyush-gupta', 'harshad-gupta'] as const;

const FIRST_PERSON_SINGULAR = /\b(I['\u2019]ve|I['\u2019]m|I have|I've|\bI\b(?=\s+(?:have|had|see|seen|learned|watched|recommend|know|think|would|usually))|my team|in my experience)/i;

function hashSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) | 0;
  return Math.abs(hash);
}

export function getAuthorForBlog(
  slug: string,
  content?: string
): { name: string; role: string; profile?: BlogAuthorProfile } {
  const rotation = content && FIRST_PERSON_SINGULAR.test(content) ? individualAuthors : authorRotation;
  const key = rotation[hashSlug(slug) % rotation.length];
  const profile = blogAuthors[key];
  return { name: profile.name, role: profile.role, profile };
}
