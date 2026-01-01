/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Experimental features for better performance
  experimental: {
    // Enable scroll restoration
    scrollRestoration: true,
  },

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

  // Redirects configuration (add your redirects here)
  async redirects() {
    return [];
  },

  // Rewrites configuration (add your rewrites here)
  async rewrites() {
    return [];
  },
};

export default nextConfig;



