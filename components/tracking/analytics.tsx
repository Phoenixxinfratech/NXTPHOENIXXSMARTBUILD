'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Analytics & Tracking Scripts
 * PHOENIXX SMARTBUILD - Comprehensive Tracking
 * 
 * GA4 Stream: PHOENIXX SMARTBUILD – Official Website
 * Stream ID: 13223843241
 * Measurement ID: G-L19YN99F03
 */

// Analytics IDs
const GA4_ID = 'G-L19YN99F03';
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';

// Page category mapping for better GA4 reports
const getPageCategory = (pathname: string): string => {
  if (pathname === '/') return 'homepage';
  if (pathname.startsWith('/products/sandwich-panels')) return 'product_sandwich_panels';
  if (pathname.startsWith('/products/doors')) return 'product_doors';
  if (pathname.startsWith('/products/cleanroom')) return 'product_cleanroom';
  if (pathname.startsWith('/products')) return 'products';
  if (pathname.startsWith('/solutions/peb')) return 'solution_peb';
  if (pathname.startsWith('/solutions/cold-storage')) return 'solution_cold_storage';
  if (pathname.startsWith('/solutions')) return 'solutions';
  if (pathname.startsWith('/industries')) return 'industries';
  if (pathname.startsWith('/resources/blogs')) return 'blog';
  if (pathname.startsWith('/resources/project-gallery')) return 'projects';
  if (pathname.startsWith('/resources')) return 'resources';
  if (pathname === '/get-a-quote') return 'lead_form';
  if (pathname === '/contact-us') return 'contact';
  if (pathname === '/about-us') return 'about';
  if (pathname === '/clientele') return 'clientele';
  if (pathname === '/career') return 'careers';
  if (pathname === '/thank-you') return 'conversion';
  return 'other';
};

// Page type for content grouping
const getPageType = (pathname: string): string => {
  if (pathname === '/') return 'Landing Page';
  if (pathname.includes('/products/') && pathname.split('/').length > 3) return 'Product Detail';
  if (pathname.startsWith('/products/')) return 'Product Category';
  if (pathname.startsWith('/products')) return 'Products Overview';
  if (pathname.includes('/solutions/')) return 'Solution Detail';
  if (pathname.startsWith('/solutions')) return 'Solutions Overview';
  if (pathname.includes('/industries/')) return 'Industry Detail';
  if (pathname.startsWith('/industries')) return 'Industries Overview';
  if (pathname.includes('/blogs/')) return 'Blog Post';
  if (pathname.startsWith('/resources')) return 'Resource Page';
  if (pathname === '/get-a-quote' || pathname === '/contact-us') return 'Lead Generation';
  if (pathname === '/thank-you') return 'Conversion Page';
  return 'Information Page';
};

// Business intent classification
const getBusinessIntent = (pathname: string): string => {
  if (pathname === '/get-a-quote') return 'high_intent';
  if (pathname === '/contact-us') return 'high_intent';
  if (pathname === '/thank-you') return 'converted';
  if (pathname.includes('/products/') && pathname.split('/').length > 3) return 'consideration';
  if (pathname.startsWith('/products')) return 'awareness';
  if (pathname.startsWith('/solutions')) return 'consideration';
  if (pathname === '/clientele') return 'trust_building';
  if (pathname === '/about-us') return 'trust_building';
  if (pathname.startsWith('/resources')) return 'education';
  return 'browsing';
};

export function GoogleAnalytics() {
  if (!GA4_ID) return null;

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Default consent mode - denied until user accepts
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
          });
          
          // Configure GA4 with enhanced settings
          gtag('config', '${GA4_ID}', {
            'anonymize_ip': true,
            'allow_google_signals': true,
            'allow_ad_personalization_signals': false,
            'send_page_view': true,
            'cookie_flags': 'SameSite=None;Secure',
            'custom_map': {
              'dimension1': 'page_category',
              'dimension2': 'page_type',
              'dimension3': 'business_intent',
              'dimension4': 'user_type'
            }
          });

          // Enhanced link tracking
          gtag('set', 'linker', {
            'domains': ['phoenixxsmartbuild.com', 'www.phoenixxsmartbuild.com']
          });
        `}
      </Script>
    </>
  );
}

/**
 * Page View Tracker Component
 * Tracks detailed page views with custom dimensions
 */
export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return;

    const pageCategory = getPageCategory(pathname);
    const pageType = getPageType(pathname);
    const businessIntent = getBusinessIntent(pathname);

    // Send enhanced page view
    window.gtag('event', 'page_view', {
      page_path: pathname,
      page_title: document.title,
      page_location: window.location.href,
      page_category: pageCategory,
      page_type: pageType,
      business_intent: businessIntent,
      content_group1: pageCategory,
      content_group2: pageType,
    });

    // Track scroll depth
    let maxScroll = 0;
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track at 25%, 50%, 75%, 90% thresholds
        if ([25, 50, 75, 90].includes(scrollPercent)) {
          window.gtag?.('event', 'scroll_depth', {
            percent_scrolled: scrollPercent,
            page_path: pathname,
            page_category: pageCategory,
          });
        }
      }
    };

    window.addEventListener('scroll', trackScroll, { passive: true });

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      window.gtag?.('event', 'time_on_page', {
        seconds: timeSpent,
        page_path: pathname,
        page_category: pageCategory,
      });
    };

    // Track when user leaves page
    window.addEventListener('beforeunload', trackTimeOnPage);

    return () => {
      window.removeEventListener('scroll', trackScroll);
      window.removeEventListener('beforeunload', trackTimeOnPage);
    };
  }, [pathname]);

  return null;
}

export function MetaPixel() {
  if (!META_PIXEL_ID) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

/**
 * Combined Analytics Provider
 */
export function AnalyticsProvider() {
  return (
    <>
      <GoogleAnalytics />
      <MetaPixel />
      <PageViewTracker />
    </>
  );
}

/**
 * Event Tracking Helpers
 * Use these throughout the application
 */
export const trackEvent = {
  // ===== LEAD GENERATION EVENTS =====
  
  // Quote form started
  quoteFormStart: () => {
    window.gtag?.('event', 'generate_lead', {
      event_category: 'lead_generation',
      event_label: 'quote_form_start',
      value: 1,
    });
    window.fbq?.('track', 'InitiateCheckout');
  },

  // Quote form submitted
  quoteFormSubmit: (formData?: { product?: string; industry?: string }) => {
    window.gtag?.('event', 'form_submit', {
      event_category: 'lead_generation',
      event_label: 'quote_request',
      form_name: 'get_a_quote',
      product_interest: formData?.product || 'not_specified',
      industry: formData?.industry || 'not_specified',
      value: 10,
    });
    window.fbq?.('track', 'Lead', {
      content_name: 'Quote Request',
      content_category: formData?.product || 'general',
    });
  },

  // Contact form submitted
  contactFormSubmit: () => {
    window.gtag?.('event', 'form_submit', {
      event_category: 'lead_generation',
      event_label: 'contact_form',
      form_name: 'contact_us',
      value: 5,
    });
    window.fbq?.('track', 'Contact');
  },

  // ===== ENGAGEMENT EVENTS =====

  // WhatsApp click
  whatsappClick: (location: string) => {
    window.gtag?.('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: location,
      click_location: location,
    });
    window.fbq?.('track', 'Contact', { content_name: 'WhatsApp', location });
  },

  // Phone call click
  phoneClick: (phoneNumber: string, location: string) => {
    window.gtag?.('event', 'phone_click', {
      event_category: 'engagement',
      event_label: phoneNumber,
      click_location: location,
    });
    window.fbq?.('track', 'Contact', { content_name: 'Phone Call' });
  },

  // Email click
  emailClick: (email: string) => {
    window.gtag?.('event', 'email_click', {
      event_category: 'engagement',
      event_label: email,
    });
  },

  // CTA button click
  ctaClick: (ctaName: string, destination: string, location: string) => {
    window.gtag?.('event', 'cta_click', {
      event_category: 'engagement',
      event_label: ctaName,
      click_url: destination,
      click_location: location,
    });
  },

  // ===== PRODUCT/SOLUTION EVENTS =====

  // Product category viewed
  productCategoryView: (category: string) => {
    window.gtag?.('event', 'view_item_list', {
      event_category: 'ecommerce',
      item_list_name: category,
    });
    window.fbq?.('track', 'ViewContent', { content_category: category });
  },

  // Product detail viewed
  productView: (productName: string, category: string, productId?: string) => {
    window.gtag?.('event', 'view_item', {
      event_category: 'ecommerce',
      items: [{
        item_id: productId || productName.toLowerCase().replace(/\s+/g, '-'),
        item_name: productName,
        item_category: category,
      }],
    });
    window.fbq?.('track', 'ViewContent', {
      content_name: productName,
      content_category: category,
      content_type: 'product',
    });
  },

  // Solution viewed
  solutionView: (solutionName: string) => {
    window.gtag?.('event', 'view_item', {
      event_category: 'solutions',
      item_name: solutionName,
    });
  },

  // Industry page viewed
  industryView: (industryName: string) => {
    window.gtag?.('event', 'industry_view', {
      event_category: 'industries',
      industry_name: industryName,
    });
  },

  // ===== CONTENT EVENTS =====

  // Blog post read
  blogRead: (title: string, category?: string) => {
    window.gtag?.('event', 'blog_read', {
      event_category: 'content',
      event_label: title,
      blog_category: category || 'general',
    });
  },

  // FAQ expanded
  faqExpand: (question: string) => {
    window.gtag?.('event', 'faq_expand', {
      event_category: 'content',
      event_label: question.substring(0, 100),
    });
  },

  // ===== DOWNLOAD EVENTS =====

  // Brochure download
  brochureDownload: (brochureName: string) => {
    window.gtag?.('event', 'file_download', {
      event_category: 'downloads',
      event_label: brochureName,
      file_type: 'brochure',
    });
    window.fbq?.('trackCustom', 'Download', { file_name: brochureName });
  },

  // Technical sheet download
  techSheetDownload: (sheetName: string) => {
    window.gtag?.('event', 'file_download', {
      event_category: 'downloads',
      event_label: sheetName,
      file_type: 'technical_sheet',
    });
  },

  // Catalog download
  catalogDownload: () => {
    window.gtag?.('event', 'file_download', {
      event_category: 'downloads',
      event_label: 'product_catalog',
      file_type: 'catalog',
    });
  },

  // ===== NAVIGATION EVENTS =====

  // Main navigation click
  navClick: (menuItem: string) => {
    window.gtag?.('event', 'navigation_click', {
      event_category: 'navigation',
      event_label: menuItem,
    });
  },

  // Internal link click
  internalLinkClick: (linkText: string, destination: string) => {
    window.gtag?.('event', 'internal_link_click', {
      event_category: 'navigation',
      event_label: linkText,
      link_url: destination,
    });
  },

  // ===== SEARCH EVENTS =====

  // Site search
  siteSearch: (searchTerm: string, resultsCount?: number) => {
    window.gtag?.('event', 'search', {
      search_term: searchTerm,
      results_count: resultsCount,
    });
  },

  // Product finder used
  productFinderUse: (filters: Record<string, string>) => {
    window.gtag?.('event', 'product_finder', {
      event_category: 'engagement',
      filters_applied: JSON.stringify(filters),
    });
  },

  // ===== VIDEO EVENTS =====

  // Video play
  videoPlay: (videoTitle: string, videoUrl?: string) => {
    window.gtag?.('event', 'video_start', {
      event_category: 'video',
      video_title: videoTitle,
      video_url: videoUrl,
    });
  },

  // Video complete
  videoComplete: (videoTitle: string) => {
    window.gtag?.('event', 'video_complete', {
      event_category: 'video',
      video_title: videoTitle,
    });
  },

  // ===== SOCIAL EVENTS =====

  // Social link click
  socialClick: (platform: string) => {
    window.gtag?.('event', 'social_click', {
      event_category: 'social',
      event_label: platform,
      social_platform: platform,
    });
  },

  // ===== ERROR EVENTS =====

  // 404 error
  error404: (attemptedUrl: string) => {
    window.gtag?.('event', 'page_not_found', {
      event_category: 'error',
      event_label: attemptedUrl,
    });
  },

  // Form error
  formError: (formName: string, errorMessage: string) => {
    window.gtag?.('event', 'form_error', {
      event_category: 'error',
      event_label: formName,
      error_message: errorMessage,
    });
  },
};

// TypeScript declarations
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
