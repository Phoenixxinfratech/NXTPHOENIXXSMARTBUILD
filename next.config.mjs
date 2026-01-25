/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Compiler optimizations for production
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization configuration
  images: {
    // Disable image optimization to use direct images (fixes Netlify IPX issues)
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize image quality for performance while maintaining visual quality
    minimumCacheTTL: 31536000,
  },

  // Experimental features for better performance
  experimental: {
    // Enable scroll restoration
    scrollRestoration: true,
    // Optimize package imports - reduces bundle size significantly
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-tabs',
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
    ],
  },

  // Modular imports to reduce bundle size
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
  },

  // Enable powered by header removal for security
  poweredByHeader: false,
  
  // Generate ETags for better caching
  generateEtags: true,
  
  // Compress responses
  compress: true,

  // Headers for security, caching, and image protection
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            // Prevent embedding in iframes (additional protection)
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self'",
          },
        ],
      },
      // Image-specific headers for protection
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            // Prevent hotlinking from other domains
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            // Discourage automated scraping tools
            key: 'X-Robots-Tag',
            value: 'noindex, noimageindex',
          },
        ],
      },
      // Product images protection
      {
        source: '/products/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noimageindex',
          },
        ],
      },
      // Industries images protection
      {
        source: '/industries/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noimageindex',
          },
        ],
      },
      // Solutions images protection
      {
        source: '/solutions/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noimageindex',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Static assets caching (JS, CSS)
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // HTML pages with stale-while-revalidate
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
      // Next.js Image optimization route protection
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, noimageindex',
          },
        ],
      },
    ];
  },

  // Redirects configuration - 301 redirects for legacy/broken URLs
  async redirects() {
    return [
      // ============================================
      // Generic "puf-panel-manufacturer" redirects (short URLs → SEO pages)
      // ============================================
      {
        source: '/puf-panel-manufacturer-in-india',
        destination: '/best-puf-panel-manufacturer-in-india',
        permanent: true,
      },
      {
        source: '/puf-panel-manufacturer-in-ahmedabad',
        destination: '/sandwich-puf-panel-in-ahmedabad',
        permanent: true,
      },

      // ============================================
      // Blog slug redirects (short/incorrect slugs → correct slugs)
      // ============================================
      {
        source: '/resources/blogs/sustainable-peb-structures',
        destination: '/resources/blogs/rise-of-sustainable-peb-structures',
        permanent: true,
      },
      {
        source: '/resources/blogs/cold-storage-energy-efficiency',
        destination: '/resources/blogs/optimizing-cold-storage-energy-efficiency',
        permanent: true,
      },
      {
        source: '/resources/blogs/turnkey-epc-projects',
        destination: '/resources/blogs/turnkey-epc-project-delivery',
        permanent: true,
      },
      {
        source: '/resources/blogs/future-of-prefab-construction',
        destination: '/resources/blogs/turnkey-epc-project-delivery',
        permanent: true,
      },
      {
        source: '/resources/blogs/what-is-a-puf-panel',
        destination: '/resources/blogs/what-is-puf-panel-how-does-it-work',
        permanent: true,
      },
      {
        source: '/resources/blogs/how-puf-panels-reduce-energy-costs',
        destination: '/resources/blogs/how-puf-panels-reduce-energy-costs-factories',
        permanent: true,
      },
      {
        source: '/resources/blogs/puf-panel-thickness-guide',
        destination: '/resources/blogs/puf-panel-thickness-guide-industrial-buildings',
        permanent: true,
      },
      {
        source: '/resources/blogs/applications-of-puf-panels-in-cold-storage-pharma',
        destination: '/resources/blogs/puf-panels-cold-storage-pharma-applications',
        permanent: true,
      },
      {
        source: '/resources/blogs/choosing-right-insulation-cold-storage',
        destination: '/resources/blogs/choosing-right-insulated-panel',
        permanent: true,
      },
      {
        source: '/resources/blogs/industrial-door-solutions-guide',
        destination: '/resources/blogs/industrial-doors-selection-guide',
        permanent: true,
      },
      {
        source: '/resources/blogs/puf-panels-food-processing',
        destination: '/resources/blogs/puf-panels-cold-storage-pharma-applications',
        permanent: true,
      },

      // ============================================
      // Industry slug redirects
      // ============================================
      {
        source: '/industries/semiconductor',
        destination: '/industries/precision-engineering',
        permanent: true,
      },
      {
        source: '/industries/research-development',
        destination: '/industries/pharma-chemical',
        permanent: true,
      },
      {
        source: '/industries/automotive',
        destination: '/industries/automobile',
        permanent: true,
      },
      {
        source: '/industries/electronics',
        destination: '/industries/precision-engineering',
        permanent: true,
      },
      {
        source: '/industries/textile',
        destination: '/industries/precision-engineering',
        permanent: true,
      },
      {
        source: '/industries/pharma',
        destination: '/industries/pharma-chemical',
        permanent: true,
      },
      {
        source: '/industries/healthcare',
        destination: '/industries/pharma-chemical',
        permanent: true,
      },

      // ============================================
      // Solution redirects
      // ============================================
      {
        source: '/solutions/false-ceiling-partition',
        destination: '/solutions/partition-solutions',
        permanent: true,
      },

      // ============================================
      // Sitemap redirect
      // ============================================
      {
        source: '/sitemap',
        destination: '/sitemap-page',
        permanent: true,
      },
    ];
  },

  // Rewrites configuration (sitemaps now use direct route handlers)
  async rewrites() {
    return [];
  },
};

export default nextConfig;



