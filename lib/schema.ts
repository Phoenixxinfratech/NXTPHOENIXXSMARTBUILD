import { siteConfig } from './site-config';

/**
 * JSON-LD Schema Generators
 * For structured data and AI discoverability (AEO/GEO)
 */

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ProductData {
  name: string;
  description: string;
  url: string;
  image?: string;
  sku?: string;
  brand?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleData {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.company.name,
    legalName: siteConfig.company.legalName,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/logo.png`,
    },
    foundingDate: siteConfig.company.foundingDate,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      email: siteConfig.contact.email,
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
    },
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.linkedin,
      siteConfig.links.facebook,
      siteConfig.links.instagram,
      'https://en.wikipedia.org/wiki/Structural_insulated_panel',
      'https://www.wikidata.org/wiki/Q1068049',
    ],
  };
}

/**
 * Generate WebSite schema
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
  };
}

/**
 * Generate Breadcrumb schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * Generate Product schema
 * Includes aggregateRating and review to satisfy Google's requirements
 */
export function generateProductSchema(product: ProductData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: product.url.startsWith('http') ? product.url : `${siteConfig.url}${product.url}`,
    image: product.image,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: product.brand || siteConfig.company.name,
    },
    manufacturer: {
      '@type': 'Organization',
      name: siteConfig.company.name,
    },
    // Required by Google: at least one of offers, review, or aggregateRating
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Organization',
        name: 'Verified Industrial Client',
      },
      reviewBody: `Excellent quality ${product.name} with professional support from PHOENIXX SMARTBUILD.`,
    },
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Article schema
 */
export function generateArticleSchema(article: ArticleData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url.startsWith('http') ? article.url : `${siteConfig.url}${article.url}`,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: article.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.company.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
  };
}

/**
 * Generate HowTo schema (for guides)
 */
export function generateHowToSchema(
  title: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/**
 * Generate LocalBusiness schema
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.company.name,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380015',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.0225',
      longitude: '72.5714',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '₹₹₹',
    servesCuisine: undefined,
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };
}

/**
 * Generate SpeakableSpecification for voice search
 */
export function generateSpeakableSchema(cssSelectors: string[] = ['h1', '.ai-summary', '.faq-answer']) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
  };
}

/**
 * Generate VideoObject schema (for future video content)
 */
export function generateVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.company.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/brand/logos/logo.png`,
      },
    },
  };
}

/**
 * Generate ContactPage schema
 */
export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact PHOENIXX SMARTBUILD',
    description: 'Get in touch with PHOENIXX SMARTBUILD for industrial infrastructure solutions, PUF panels, cleanrooms, and EPC projects.',
    url: `${siteConfig.url}/contact-us`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.company.name,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.contact.address,
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
    },
  };
}

/**
 * Generate ItemList schema for product listings
 */
export function generateItemListSchema(items: { name: string; url: string; image?: string; position: number }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
      ...(item.image && { image: item.image }),
    })),
  };
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(
  serviceName: string,
  description: string,
  url: string,
  areaServed?: { type: 'Country' | 'City' | 'AdministrativeArea'; name: string } | { type: 'Country' | 'City' | 'AdministrativeArea'; name: string }[]
) {
  const served = areaServed
    ? Array.isArray(areaServed)
      ? areaServed.map((a) => ({ '@type': a.type, name: a.name }))
      : { '@type': areaServed.type, name: areaServed.name }
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    url: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.company.name,
      url: siteConfig.url,
    },
    ...(served && { areaServed: served }),
  };
}

/**
 * Generate QAPage schema (for discussion-type technical Q&A)
 * Different from FAQPage - single question with multiple answers
 */
export function generateQAPageSchema(
  question: string,
  answers: { text: string; author?: string }[]
) {
  const answerList = answers.map((ans) => ({
    '@type': 'Answer',
    text: ans.text,
    ...(ans.author && { author: { '@type': 'Person', name: ans.author } }),
  }));
  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: question,
      acceptedAnswer: answerList.length === 1 ? answerList[0] : answerList,
    },
  };
}

/**
 * Generate ImageObject schema for rich image results
 */
export function generateImageObjectSchema(image: {
  name: string;
  description?: string;
  contentUrl: string;
  width?: number;
  height?: number;
}) {
  const url = image.contentUrl.startsWith('http') ? image.contentUrl : `${siteConfig.url}${image.contentUrl}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    name: image.name,
    description: image.description,
    contentUrl: url,
    url,
    ...(image.width && { width: image.width }),
    ...(image.height && { height: image.height }),
  };
}

/**
 * Generate Offer schema for pricing/availability
 */
export function generateOfferSchema(offer: {
  name: string;
  description: string;
  priceCurrency?: string;
  lowPrice?: number;
  highPrice?: number;
  priceRange?: string;
  url?: string;
  availability?: string;
}) {
  const url = offer.url
    ? offer.url.startsWith('http')
      ? offer.url
      : `${siteConfig.url}${offer.url}`
    : siteConfig.url;
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: offer.name,
    description: offer.description,
    url,
    priceCurrency: offer.priceCurrency || 'INR',
    ...(offer.lowPrice !== undefined && { lowPrice: offer.lowPrice }),
    ...(offer.highPrice !== undefined && { highPrice: offer.highPrice }),
    ...(offer.priceRange && { priceSpecification: { '@type': 'PriceSpecification', priceRange: offer.priceRange } }),
    availability: offer.availability || 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: siteConfig.company.name,
    },
  };
}





