# 📁 Image Assets Structure

This document describes the organized folder structure for all website images.

---

## 📂 Folder Structure

```
public/images/
├── brand/                    # 🏷️ Brand Assets
│   ├── logos/                # Logo variations
│   ├── favicons/             # Favicon & app icons
│   └── og-images/            # Open Graph / social sharing images
│
├── clients/                  # 🤝 Client Logos (107 logos)
│   └── [client-name].png     # Use kebab-case: amul.png, coca-cola.jpg
│
├── products/                 # 📦 Product Images
│   ├── sandwich-panels/
│   │   ├── pir-panel/
│   │   ├── puf-panel/
│   │   ├── roofing-panel/
│   │   └── wall-ceiling-panel/
│   ├── doors/
│   │   ├── fire-door/
│   │   └── multipurpose-door/
│   ├── cleanroom/
│   │   ├── partition/
│   │   ├── doors/
│   │   ├── ceiling/
│   │   └── flooring/
│   └── cold-storage/
│       ├── cold-room/
│       ├── freezer/
│       ├── ripening-chamber/
│       └── blast-freezer/
│
├── solutions/                # 🏗️ Solution Images
│   ├── peb/                  # Pre-Engineered Buildings
│   ├── cold-storage/         # Cold Storage Construction
│   ├── cleanroom/            # Cleanroom Solutions
│   ├── false-ceiling/        # Walkable & Non-walkable Ceilings
│   ├── partition/            # Partition Systems
│   └── prefab-house/         # Prefab Housing
│
├── industries/               # 🏭 Industry Images (18 industries)
│   ├── pharmaceuticals/
│   ├── biotechnology/
│   ├── medical-devices/
│   ├── healthcare/
│   ├── hospitals/
│   ├── precision-engineering/
│   ├── electronics/
│   ├── cosmetics/
│   ├── automotive/
│   ├── aerospace/
│   ├── solar-panel/
│   ├── semiconductor/
│   ├── food-processing/
│   ├── dairy/
│   ├── hospitality/
│   ├── textile/
│   ├── chemical/
│   └── research-development/
│
├── projects/                 # 🖼️ Project Gallery
│   └── gallery/              # Individual project images
│
├── team/                     # 👥 Team Photos
│   ├── leadership/           # CEO, Directors
│   └── operations/           # Operations team
│
├── testimonials/             # 💬 Testimonial Images
│   └── clients/              # Client photos for testimonials
│
├── resources/                # 📚 Resource Images
│   ├── blogs/                # Blog post images
│   ├── brochures/            # Brochure thumbnails
│   ├── technical-sheets/     # Technical document images
│   └── case-studies/         # Case study images
│
├── pages/                    # 📄 Page-Specific Images
│   ├── home/
│   │   ├── hero/             # Homepage hero images
│   │   ├── features/         # Feature section images
│   │   ├── clients/          # Homepage client section
│   │   └── stats/            # Statistics section
│   ├── about/
│   │   ├── hero/
│   │   ├── timeline/
│   │   └── values/
│   ├── contact/
│   ├── careers/
│   ├── get-a-quote/
│   └── clientele/
│
├── backgrounds/              # 🎨 Background Images
│   ├── patterns/             # Repeating patterns
│   ├── gradients/            # Gradient backgrounds
│   └── textures/             # Texture overlays
│
└── icons/                    # 🎯 Icons
    ├── ui/                   # UI icons
    ├── social/               # Social media icons
    └── features/             # Feature icons
```

---

## 📏 Recommended Image Sizes

### Logos
| Type | Size | Format |
|------|------|--------|
| Header Logo | 160×40px | PNG/SVG |
| Footer Logo (white) | 200×50px | PNG/SVG |
| Favicon | 32×32px | PNG/ICO |
| Apple Touch Icon | 180×180px | PNG |
| Android Chrome | 192×192px, 512×512px | PNG |
| OG Image | 1200×630px | JPG/PNG |

### Client Logos
| Type | Size | Format |
|------|------|--------|
| Client Logo | 200×100px (max) | PNG (transparent) |
| Homepage Display | 120×60px | PNG |
| Clientele Page | 180×90px | PNG |

### Products & Solutions
| Type | Size | Format |
|------|------|--------|
| Thumbnail | 400×300px | JPG/WebP |
| Card Image | 600×400px | JPG/WebP |
| Hero/Banner | 1920×600px | JPG/WebP |
| Gallery | 1200×800px | JPG/WebP |

### Industries
| Type | Size | Format |
|------|------|--------|
| Card Image | 400×300px | JPG/WebP |
| Hero Image | 1920×600px | JPG/WebP |

### Team Photos
| Type | Size | Format |
|------|------|--------|
| Leadership | 400×400px | JPG (square) |
| Team Grid | 300×300px | JPG (square) |

### Blog/Resources
| Type | Size | Format |
|------|------|--------|
| Featured Image | 1200×630px | JPG/WebP |
| Thumbnail | 400×250px | JPG/WebP |

---

## 📝 Naming Conventions

### General Rules
- Use **kebab-case** for all file names: `cold-storage-facility.jpg`
- Use **lowercase** only: `amul-logo.png` ✅ not `Amul_Logo.PNG` ❌
- Include **descriptive names**: `pir-panel-installation.jpg` ✅ not `IMG_1234.jpg` ❌
- Add **variant suffix** for variations: `logo-white.png`, `logo-dark.png`

### Client Logos
```
clients/
├── amul.png
├── coca-cola.jpg
├── reliance-industries.png
├── skf.png
└── uflex.png
```

### Product Images
```
products/sandwich-panels/pir-panel/
├── pir-panel-hero.jpg
├── pir-panel-01.jpg
├── pir-panel-02.jpg
├── pir-panel-specs.png
└── pir-panel-thumbnail.jpg
```

### Project Gallery
```
projects/gallery/
├── vyara-tiles-01.jpg
├── vyara-tiles-02.jpg
├── reliance-jamnagar-01.jpg
└── skf-ahmedabad-01.jpg
```

---

## 🔗 Usage in Code

### Import Examples

```tsx
// Logo in Header
<Image src="/images/brand/logos/logo.png" alt="PHOENIXX" />

// Client Logo
<Image src="/images/clients/amul.png" alt="Amul" />

// Product Image
<Image src="/images/products/sandwich-panels/pir-panel/hero.jpg" alt="PIR Panel" />

// Industry Image
<Image src="/images/industries/pharmaceuticals/pharma-cleanroom.jpg" alt="Pharma" />

// Page-specific Image
<Image src="/images/pages/home/hero/main-hero.jpg" alt="Hero" />
```

---

## ✅ Checklist for Adding New Images

- [ ] Image is optimized (compressed, correct format)
- [ ] Placed in the correct folder
- [ ] Named using kebab-case
- [ ] Appropriate size for use case
- [ ] Has WebP alternative for web optimization (optional)
- [ ] Alt text is descriptive and SEO-friendly

---

## 🗂️ Current Image Count

| Folder | Count |
|--------|-------|
| clients/ | 107 |
| brand/logos/ | 14 |
| brand/favicons/ | 3 |
| solutions/peb/ | 17 |
| industries/ | 2 |
| (other folders) | Ready for images |

---

*Last updated: December 2024*
