# Image Folder Structure

This document explains the organization of images for the PHOENIXX SmartBuild website.

## 📁 Folder Structure

```
public/images/
├── products/                    # Product images
│   ├── sandwich-panels/
│   │   ├── pir-panel/          # PIR Panel images
│   │   ├── sandwich-puf-panel/ # Sandwich PUF Panel images
│   │   ├── roofing-puf-panel/  # Roofing PUF Panel images
│   │   └── wall-ceiling-panel/ # Wall & Ceiling Panel images
│   ├── doors/
│   │   ├── cleanroom-door/     # Cleanroom Door images
│   │   ├── fire-door-emergency-exit/
│   │   └── fire-rated-multipurpose-door/
│   └── cleanroom-solutions/
│       ├── cleanroom-partition/
│       ├── cleanroom-doors/
│       └── cleanroom-false-ceiling/
│
├── solutions/                   # Solution images
│   ├── peb/                    # Pre-Engineered Buildings
│   ├── cold-storage-construction/
│   ├── walkable-ceiling-systems/
│   ├── non-walkable-ceiling-systems/
│   ├── partition-solutions/
│   └── prefab-house/
│
├── industries/                  # Industry-specific images
│   ├── pharma-chemical/        # Pharmaceuticals & Life Sciences
│   ├── food-processing/        # Food & Beverage
│   ├── dairy/                  # Dairy Industries
│   ├── cold-chain/             # Cold Chain & Logistics
│   ├── precision-engineering/  # Manufacturing & Engineering
│   ├── hospitality/            # Hospitality & Commercial
│   ├── automobile/             # Automotive Industry
│   └── agri-processing/        # Agriculture & Agri-Processing
│
├── pages/                       # Page-specific images
│   ├── home/
│   │   ├── hero/              # Homepage hero section
│   │   ├── about/             # Homepage about section
│   │   └── features/          # Homepage features section
│   ├── about-us/
│   │   ├── hero/              # About page hero
│   │   ├── team/              # Team photos
│   │   └── milestones/        # Milestone/timeline images
│   ├── contact-us/
│   ├── get-a-quote/
│   ├── career/
│   └── clientele/
│
├── resources/                   # Resource images
│   ├── blogs/                  # Blog post images
│   ├── project-gallery/        # Project photos
│   ├── brochures/              # Brochure thumbnails
│   └── technical-sheets/       # Technical sheet images
│
├── clients/                     # Client logos
├── team/                        # Team member photos
├── icons/                       # Custom icons
├── logos/                       # Company logos (main, white, dark)
├── backgrounds/                 # Background images/patterns
└── testimonials/                # Testimonial author photos
```

## 📝 Naming Conventions

### General Rules
- Use lowercase letters
- Use hyphens (-) instead of spaces
- Use descriptive names
- Include dimensions for different sizes (e.g., `hero-1920x1080.jpg`)

### Examples
```
products/sandwich-panels/pir-panel/
├── pir-panel-hero.jpg          # Main hero image
├── pir-panel-detail-1.jpg      # Detail shots
├── pir-panel-detail-2.jpg
├── pir-panel-installation.jpg  # Installation image
├── pir-panel-thumbnail.jpg     # Thumbnail (300x200)
└── pir-panel-og.jpg            # OpenGraph image (1200x630)

clients/
├── coca-cola.png               # Client logo (transparent PNG)
├── amul.png
├── ford.png
└── torrent-pharma.png

team/
├── piyush-gupta.jpg            # CEO photo
├── harshad-gupta.jpg           # Operations Head photo
└── team-group.jpg              # Group photo
```

## 🖼️ Recommended Sizes

| Image Type | Recommended Size | Format |
|------------|-----------------|--------|
| Hero images | 1920×1080 px | JPG/WebP |
| Product images | 800×600 px | JPG/WebP |
| Thumbnails | 400×300 px | JPG/WebP |
| Client logos | 200×100 px | PNG (transparent) |
| Team photos | 400×400 px | JPG |
| OpenGraph | 1200×630 px | JPG |
| Icons | 64×64 px | SVG/PNG |
| Backgrounds | 1920×1080 px | JPG/WebP |

## 🎨 Image Optimization

Before uploading, optimize images using:
- [TinyPNG](https://tinypng.com/) - PNG compression
- [Squoosh](https://squoosh.app/) - WebP conversion
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

### Next.js Image Component
Use the Next.js `<Image>` component for automatic optimization:

```tsx
import Image from 'next/image';

<Image
  src="/images/products/sandwich-panels/pir-panel/pir-panel-hero.jpg"
  alt="PIR Panel"
  width={800}
  height={600}
  priority={false}
/>
```

## 📋 Required Images Checklist

### Homepage
- [ ] Hero background image
- [ ] Featured product images (4)
- [ ] Solution icons or images (6)
- [ ] Industry category images (4)

### About Us
- [ ] Company hero image
- [ ] Team member photos
- [ ] Milestone/timeline images
- [ ] Office/facility photos

### Products (per product)
- [ ] Hero/main image
- [ ] 2-3 detail images
- [ ] Installation image
- [ ] Thumbnail

### Clients
- [ ] All client logos (PNG, transparent)

### General
- [ ] Company logo (color, white, dark versions)
- [ ] Favicon
- [ ] OpenGraph image
- [ ] 404 page image

