import { Metadata } from 'next';
import { siteConfig } from './site-config';

/**
 * SEO Utilities
 * Helper functions for generating SEO metadata
 */

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
}

/**
 * Generate page metadata
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description = siteConfig.description,
    keywords = siteConfig.keywords,
    image = siteConfig.ogImage,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors,
    noIndex = false,
  } = config;

  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const fullImage = image.startsWith('http') ? image : `${siteConfig.url}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: authors?.map((name) => ({ name })),
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      locale: 'en_US',
      type: type === 'article' ? 'article' : 'website',
      ...(type === 'article' && publishedTime
        ? {
            publishedTime,
            modifiedTime: modifiedTime || publishedTime,
            authors,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

/**
 * Generate product metadata
 */
export function generateProductMetadata(product: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  category?: string;
}): Metadata {
  return generateMetadata({
    title: product.title,
    description: product.description,
    url: `/products/${product.slug}`,
    image: product.image,
    type: 'product',
    keywords: [
      product.title,
      product.category || '',
      ...siteConfig.keywords,
    ].filter(Boolean),
  });
}

/**
 * Generate blog post metadata
 */
export function generateBlogMetadata(post: {
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category?: string;
}): Metadata {
  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    image: post.image,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [post.author],
    keywords: [
      post.title,
      post.category || '',
      'blog',
      ...siteConfig.keywords,
    ].filter(Boolean),
  });
}

/**
 * Generate industry page metadata
 */
export function generateIndustryMetadata(industry: {
  name: string;
  description: string;
  slug: string;
  image?: string;
}): Metadata {
  return generateMetadata({
    title: `${industry.name} Solutions`,
    description: industry.description,
    url: `/industries/${industry.slug}`,
    image: industry.image,
    keywords: [
      industry.name,
      `${industry.name} solutions`,
      `${industry.name} cleanroom`,
      ...siteConfig.keywords,
    ],
  });
}

/**
 * Strip HTML tags from text for meta descriptions
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Truncate text for meta descriptions (recommended ~155-160 chars)
 */
export function truncateDescription(text: string, maxLength = 155): string {
  const stripped = stripHtml(text);
  if (stripped.length <= maxLength) return stripped;
  return stripped.slice(0, maxLength - 3).trim() + '...';
}


