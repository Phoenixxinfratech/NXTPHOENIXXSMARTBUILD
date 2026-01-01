# PHOENIXX SmartBuild

A production-ready, AI-first, SEO-optimized website built with Next.js (App Router), TypeScript, and Sanity CMS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI (Radix-based)
- **CMS**: Sanity (Headless)
- **Hosting**: Netlify
- **Rendering**: Hybrid (SSG + SSR)

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (site)/            # Site layout group
│   ├── products/          # Product pages
│   ├── solutions/         # Solution pages
│   ├── industries/        # Industry pages
│   ├── cleanroom-solutions/
│   ├── blog/              # Blog pages
│   ├── resources/         # Resource downloads
│   ├── faqs/              # FAQ page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/
│   ├── ui/                # ShadCN UI components
│   ├── blocks/            # Page block components
│   ├── seo/               # SEO components
│   └── ai/                # AI discoverability components
├── lib/                   # Utility functions
│   ├── sanity.client.ts   # Sanity client config
│   ├── sanity.queries.ts  # GROQ queries
│   ├── schema.ts          # JSON-LD schema generators
│   ├── seo.ts             # SEO utilities
│   └── utils.ts           # General utilities
├── styles/
│   └── globals.css        # Global styles
├── public/                # Static assets
│   ├── images/
│   └── pdfs/
└── netlify.toml           # Netlify configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nxtphoenixxsmartbuild
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your configuration values.

5. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🔧 Configuration

### Sanity CMS Setup

1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Add your project ID and dataset to `.env.local`
3. Set up schemas in your Sanity Studio
4. Configure CORS settings to allow your domains

### Environment Variables

See `.env.example` for all available configuration options:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Dataset name (usually 'production')
- `SANITY_API_TOKEN` - API token for server-side queries
- `REVALIDATION_SECRET` - Secret for on-demand revalidation

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🚀 Deployment

### Netlify

1. Connect your repository to Netlify
2. Set environment variables in Netlify dashboard
3. Deploy automatically on push

The `netlify.toml` file contains all necessary build configuration.

### Build Settings

- Build command: `npm run build`
- Publish directory: `.next`
- Required plugin: `@netlify/plugin-nextjs`

## 🔍 SEO & AI Discoverability

### Schema Implementation

JSON-LD schemas are automatically generated for:
- Organization
- Products
- FAQs
- Breadcrumbs
- Articles

### AI Optimization (AEO/GEO)

- AI Summary blocks for content summarization
- Structured data for AI crawlers
- robots.txt configured for major AI bots
- Semantic HTML throughout

## 📝 Content Management

### Adding New Content Types

1. Create Sanity schema
2. Add GROQ query in `lib/sanity.queries.ts`
3. Create page component
4. Implement SEO metadata

### Revalidation

On-demand revalidation is available via:
```
POST /api/revalidate
```

Configure webhooks in Sanity to trigger revalidation on content changes.

## 🎨 Styling

### Tailwind CSS

Custom configuration in `tailwind.config.ts`:
- Brand colors
- Custom animations
- Typography settings

### CSS Variables

Theme colors use CSS variables for easy customization.
See `styles/globals.css` for available variables.

## 🧩 Components

### UI Components (ShadCN)

Pre-built components in `components/ui/`:
- Button
- Input
- Accordion
- Card
- and more...

### Block Components

Reusable page sections in `components/blocks/`:
- Hero
- Header/Footer
- FAQ Block
- Specifications Table
- Contact Form

## 📄 License

Private - All rights reserved.

## 🤝 Support

For questions or issues, contact the development team.




