/**
 * Sanity GROQ Queries
 * Centralized queries for fetching content from Sanity CMS
 */

// ============================================
// PRODUCT QUERIES
// ============================================

export const productsQuery = `*[_type == "product"] | order(orderRank) {
  _id,
  _type,
  title,
  slug,
  description,
  category->{
    _id,
    title,
    slug
  },
  mainImage {
    asset->{
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    },
    alt
  },
  featured
}`;

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  _type,
  title,
  slug,
  description,
  category->{
    _id,
    title,
    slug
  },
  mainImage {
    asset->{
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    },
    alt
  },
  gallery[] {
    asset->{
      _id,
      url
    },
    alt
  },
  specifications[] {
    label,
    value
  },
  features,
  body,
  faqs[] {
    question,
    answer
  },
  seo {
    metaTitle,
    metaDescription,
    ogImage
  }
}`;

// ============================================
// SOLUTION QUERIES
// ============================================

export const solutionsQuery = `*[_type == "solution"] | order(orderRank) {
  _id,
  title,
  slug,
  description,
  icon,
  mainImage
}`;

export const solutionBySlugQuery = `*[_type == "solution" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  icon,
  mainImage,
  overview,
  benefits,
  body,
  faqs[] {
    question,
    answer
  },
  seo
}`;

// ============================================
// INDUSTRY QUERIES
// ============================================

export const industriesQuery = `*[_type == "industry"] | order(orderRank) {
  _id,
  name,
  slug,
  icon,
  image
}`;

export const industryBySlugQuery = `*[_type == "industry" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  icon,
  image,
  description,
  overview,
  solutions,
  products[]->{
    _id,
    title,
    slug
  },
  faqs[] {
    question,
    answer
  },
  seo
}`;

// ============================================
// CLEANROOM QUERIES
// ============================================

export const cleanroomsQuery = `*[_type == "cleanroom"] | order(orderRank) {
  _id,
  title,
  slug,
  description,
  classification,
  mainImage
}`;

export const cleanroomBySlugQuery = `*[_type == "cleanroom" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  classification,
  mainImage,
  overview,
  specifications,
  features,
  body,
  faqs[] {
    question,
    answer
  },
  seo
}`;

// ============================================
// BLOG QUERIES
// ============================================

export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author->{
    name,
    image
  },
  categories[]->{
    title,
    slug
  }
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author->{
    name,
    image,
    role
  },
  categories[]->{
    title,
    slug
  },
  body,
  seo
}`;

// ============================================
// RESOURCE QUERIES
// ============================================

export const resourcesQuery = `*[_type == "resource"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  type,
  format,
  thumbnail
}`;

export const resourceBySlugQuery = `*[_type == "resource" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  type,
  format,
  thumbnail,
  content,
  file {
    asset->{
      url
    }
  },
  seo
}`;

// ============================================
// FAQ QUERIES
// ============================================

export const faqsQuery = `*[_type == "faqCategory"] | order(orderRank) {
  _id,
  category,
  faqs[] {
    question,
    answer
  }
}`;

// ============================================
// PAGE & SETTINGS QUERIES
// ============================================

export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  body,
  seo
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  title,
  description,
  logo,
  favicon,
  socialLinks,
  contactInfo,
  footerContent
}`;

export const navigationQuery = `*[_type == "navigation"][0] {
  mainNav[] {
    label,
    href,
    children[] {
      label,
      href,
      description
    }
  },
  footerNav
}`;




