import type { BlogPost, BlogListing } from './types';
import { existingBlogs } from './existing-blogs';
import { moneyBlogsPart1 } from './money-blogs-part1';
import { moneyBlogsPart2 } from './money-blogs-part2';
import { comparisonBlogs } from './comparison-blogs';
import { problemSolvingBlogs } from './problem-solving-blogs';
import { locationBlogs } from './location-blogs';
import { authorityBlogs } from './authority-blogs';
import { serpBlogsPart1 } from './serp-blogs-part1';
import { serpBlogsPart2 } from './serp-blogs-part2';
import { serpBlogsPart3 } from './serp-blogs-part3';
import { seoMissionBlogs } from './seo-mission-blogs';
import { exportBlogs } from './export-blogs';
import { getBlogCoverImage } from './blog-images';
import { getAuthorForBlog } from '@/lib/blog-authors';

export type { BlogPost, BlogListing };

// Mon/Wed/Fri publish schedule — interleaved by category for variety
const publishSchedule: Record<string, string> = {
  // Week 1
  'puf-panel-vs-pir-panel-comparison': '2026-03-16',
  'how-to-reduce-heat-in-industrial-shed': '2026-03-18',
  'puf-panel-supplier-ahmedabad-guide': '2026-03-20',
  // Week 2
  'what-is-puf-panel-complete-guide': '2026-03-23',
  'puf-panel-vs-rockwool-panel': '2026-03-25',
  'best-roofing-solution-factory-india': '2026-03-27',
  // Week 3
  'cold-storage-construction-gujarat': '2026-03-30',
  'what-is-pir-panel-benefits-uses': '2026-04-01',
  'sandwich-panel-vs-brick-wall-construction': '2026-04-03',
  // Week 4
  'how-to-build-cold-storage-step-by-step': '2026-04-06',
  'sandwich-panel-supplier-surat': '2026-04-08',
  'types-of-sandwich-panels-explained': '2026-04-10',
  // Week 5
  'puf-panel-vs-eps-panel': '2026-04-13',
  'how-to-choose-right-insulated-panel': '2026-04-15',
  'puf-panel-manufacturer-vadodara': '2026-04-17',
  // Week 6
  'what-is-cold-storage-construction': '2026-04-20',
  'pir-panel-vs-mineral-wool-panel': '2026-04-22',
  'how-to-reduce-electricity-cost-cold-storage': '2026-04-24',
  // Week 7
  'pir-panel-supplier-rajkot': '2026-04-27',
  'what-is-cleanroom-how-it-works': '2026-04-29',
  'best-insulated-panel-for-cold-storage': '2026-05-01',
  // Week 8
  'best-wall-material-for-warehouse': '2026-05-04',
  'industrial-panel-supplier-vapi': '2026-05-06',
  'what-is-peb-structure': '2026-05-08',
  // Week 9
  'puf-panel-vs-glass-wool-insulation': '2026-05-11',
  'industrial-insulation-guide-beginners': '2026-05-13',
  'puf-panel-ankleshwar-industrial-guide': '2026-05-15',
  // Week 10
  'advantages-of-prefabricated-buildings': '2026-05-18',
  'fire-resistant-panel-pir-vs-puf': '2026-05-20',
  'how-to-build-cleanroom-india': '2026-05-22',
  // Week 11
  'best-puf-panel-supplier-dahej': '2026-05-25',
  'future-of-industrial-construction-india': '2026-05-27',
  'puf-panel-vs-rcc-construction': '2026-05-29',
  // Week 12
  'warehouse-construction-guide-india': '2026-06-01',
  'cleanroom-contractor-ahmedabad': '2026-06-03',
  'benefits-of-insulated-panels': '2026-06-05',
  // Week 13
  'prefabricated-vs-conventional-construction': '2026-06-08',
  'factory-roofing-problems-solutions': '2026-06-10',
  'warehouse-construction-company-gujarat': '2026-06-12',
  // Week 14
  'why-puf-panels-best-for-india-climate': '2026-06-15',
};

const allBlogsRaw: Record<string, BlogPost> = {
  ...existingBlogs,
  ...moneyBlogsPart1,
  ...moneyBlogsPart2,
  ...comparisonBlogs,
  ...problemSolvingBlogs,
  ...locationBlogs,
  ...authorityBlogs,
  ...serpBlogsPart1,
  ...serpBlogsPart2,
  ...serpBlogsPart3,
  ...seoMissionBlogs,
  ...exportBlogs,
};

// Apply scheduled dates and cover images to blog records
export const blogPosts: Record<string, BlogPost> = Object.fromEntries(
  Object.entries(allBlogsRaw).map(([slug, post]) => {
    const authorInfo = getAuthorForBlog(slug);
    return [
      slug,
      {
        ...post,
        author: post.author.name === 'Engineering Team'
          ? { name: authorInfo.name, role: authorInfo.role }
          : post.author,
        ...(publishSchedule[slug] ? { date: publishSchedule[slug] } : {}),
        coverImage: post.coverImage || getBlogCoverImage(slug),
      },
    ];
  })
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(blogPosts);
}

const featuredSlugs = new Set([
  'what-is-puf-panel-how-does-it-work',
  'puf-panel-vs-traditional-roofing-sheets',
  'how-puf-panels-reduce-energy-costs-factories',
  'puf-panel-price-india-cost-per-sq-ft',
]);

/**
 * Returns blog listings filtered to only include posts whose date <= today.
 * Scheduled future posts exist as pages but won't appear in the listing
 * until their publish date arrives and the site is rebuilt.
 */
export function getBlogListings(): BlogListing[] {
  const today = new Date().toISOString().split('T')[0];
  return Object.entries(blogPosts)
    .filter(([, post]) => post.date <= today)
    .map(([slug, post]) => ({
      slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      date: post.date,
      readTime: post.readTime,
      featured: featuredSlugs.has(slug),
      coverImage: post.coverImage,
    }));
}
