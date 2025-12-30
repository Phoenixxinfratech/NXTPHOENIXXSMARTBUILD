/**
 * Site Navigation Configuration
 * Centralized navigation structure for header, footer, and sitemap
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

// Main Header Navigation
export const mainNavigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Sandwich Panels',
        href: '/products/sandwich-panels',
        description: 'High-quality insulated sandwich panels',
        children: [
          { label: 'PIR Panel', href: '/products/sandwich-panels/pir-panel' },
          { label: 'Sandwich PUF Panel', href: '/products/sandwich-panels/sandwich-puf-panel' },
          { label: 'Roofing PUF Panel', href: '/products/sandwich-panels/roofing-puf-panel' },
          { label: 'Wall & Ceiling Panel', href: '/products/sandwich-panels/wall-ceiling-panel' },
        ],
      },
      {
        label: 'Doors',
        href: '/products/doors',
        description: 'Specialized doors for various applications',
        children: [
          { label: 'Cleanroom Door', href: '/products/doors/cleanroom-door' },
          { label: 'Fire Door – Emergency Exit', href: '/products/doors/fire-door-emergency-exit' },
          { label: 'Fire Rated Multipurpose Door', href: '/products/doors/fire-rated-multipurpose-door' },
        ],
      },
      {
        label: 'Cleanroom Solutions',
        href: '/products/cleanroom-solutions',
        description: 'Complete cleanroom infrastructure',
        children: [
          { label: 'Cleanroom Partition', href: '/products/cleanroom-solutions/cleanroom-partition' },
          { label: 'Cleanroom Doors', href: '/products/cleanroom-solutions/cleanroom-doors' },
          { label: 'Cleanroom False Ceiling', href: '/products/cleanroom-solutions/cleanroom-false-ceiling' },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'PEB', href: '/solutions/peb', description: 'Pre-Engineered Buildings' },
      { label: 'Walkable Ceiling Systems', href: '/solutions/walkable-ceiling-systems' },
      { label: 'Non-Walkable Ceiling Systems', href: '/solutions/non-walkable-ceiling-systems' },
      { label: 'Partition Solutions', href: '/solutions/partition-solutions' },
      { label: 'Cold Storage Construction', href: '/solutions/cold-storage-construction' },
      { label: 'Prefab House', href: '/solutions/prefab-house' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Dairy Industries', href: '/industries/dairy' },
      { label: 'Pharma & Chemical', href: '/industries/pharma-chemical' },
      { label: 'Food Processing', href: '/industries/food-processing' },
      { label: 'Cold Chain', href: '/industries/cold-chain' },
      { label: 'Precision Engineering', href: '/industries/precision-engineering' },
      { label: 'Hospitality', href: '/industries/hospitality' },
      { label: 'Automobile', href: '/industries/automobile' },
      { label: 'Agri Processing', href: '/industries/agri-processing' },
    ],
  },
  {
    label: 'Clientele',
    href: '/clientele',
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Blogs', href: '/resources/blogs' },
      { label: 'Project Gallery', href: '/resources/project-gallery' },
      { label: 'Technical Sheet', href: '/resources/technical-sheet' },
      { label: 'Brochure', href: '/resources/brochure' },
      { label: 'FAQ', href: '/resources/faq' },
    ],
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
    children: [
      { label: 'Get a Quote', href: '/get-a-quote' },
      { label: 'Career', href: '/career' },
      { label: 'Become Partner', href: '/become-partner' },
    ],
  },
];

// Footer Navigation Sections
export const footerNavigation = {
  products: [
    { label: 'Sandwich Panels', href: '/products/sandwich-panels' },
    { label: 'Doors', href: '/products/doors' },
    { label: 'Cleanroom Solutions', href: '/products/cleanroom-solutions' },
  ],
  solutions: [
    { label: 'PEB', href: '/solutions/peb' },
    { label: 'Walkable Ceiling Systems', href: '/solutions/walkable-ceiling-systems' },
    { label: 'Cold Storage Construction', href: '/solutions/cold-storage-construction' },
    { label: 'Prefab House', href: '/solutions/prefab-house' },
  ],
  industries: [
    { label: 'Dairy Industries', href: '/industries/dairy' },
    { label: 'Pharma & Chemical', href: '/industries/pharma-chemical' },
    { label: 'Food Processing', href: '/industries/food-processing' },
    { label: 'Cold Chain', href: '/industries/cold-chain' },
  ],
  company: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Clientele', href: '/clientele' },
    { label: 'Career', href: '/career' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
  resources: [
    { label: 'Blogs', href: '/resources/blogs' },
    { label: 'Project Gallery', href: '/resources/project-gallery' },
    { label: 'Technical Sheet', href: '/resources/technical-sheet' },
    { label: 'FAQ', href: '/resources/faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Return Policy', href: '/return-policy' },
    { label: 'Business Terms', href: '/business-terms' },
    { label: 'Sitemap', href: '/sitemap-page' },
  ],
  quickLinks: [
    { label: 'Get a Quote', href: '/get-a-quote' },
    { label: 'Become Partner', href: '/become-partner' },
    { label: 'Vendor Registration', href: '/vendor-registration' },
  ],
};

// Products data structure
export const productsData = {
  'sandwich-panels': {
    title: 'Sandwich Panels',
    description: 'High-quality insulated sandwich panels for industrial and commercial applications',
    products: [
      {
        slug: 'pir-panel',
        title: 'PIR Panel',
        description: 'Polyisocyanurate insulated panels with superior fire resistance',
      },
      {
        slug: 'sandwich-puf-panel',
        title: 'Sandwich PUF Panel',
        description: 'Polyurethane foam sandwich panels for thermal insulation',
      },
      {
        slug: 'roofing-puf-panel',
        title: 'Roofing PUF Panel',
        description: 'Specialized PUF panels designed for roofing applications',
      },
      {
        slug: 'wall-ceiling-panel',
        title: 'Wall & Ceiling Panel',
        description: 'Versatile panels for wall and ceiling installations',
      },
    ],
  },
  doors: {
    title: 'Doors',
    description: 'Specialized doors for cleanrooms, fire safety, and industrial applications',
    products: [
      {
        slug: 'cleanroom-door',
        title: 'Cleanroom Door',
        description: 'Doors designed for controlled environment applications',
      },
      {
        slug: 'fire-door-emergency-exit',
        title: 'Fire Door – Emergency Exit',
        description: 'Fire-rated emergency exit doors for safety compliance',
      },
      {
        slug: 'fire-rated-multipurpose-door',
        title: 'Fire Rated Multipurpose Door',
        description: 'Versatile fire-rated doors for various applications',
      },
    ],
  },
  'cleanroom-solutions': {
    title: 'Cleanroom Solutions',
    description: 'Complete cleanroom infrastructure solutions for controlled environments',
    products: [
      {
        slug: 'cleanroom-partition',
        title: 'Cleanroom Partition',
        description: 'Modular partition systems for cleanroom environments',
      },
      {
        slug: 'cleanroom-doors',
        title: 'Cleanroom Doors',
        description: 'Specialized doors for cleanroom applications',
      },
      {
        slug: 'cleanroom-false-ceiling',
        title: 'Cleanroom False Ceiling',
        description: 'False ceiling systems for cleanroom facilities',
      },
    ],
  },
};

// Solutions data
export const solutionsData = [
  {
    slug: 'peb',
    title: 'PEB (Pre-Engineered Buildings)',
    description: 'Cost-effective and rapid construction with pre-engineered steel buildings',
    icon: '🏭',
  },
  {
    slug: 'walkable-ceiling-systems',
    title: 'Walkable Ceiling Systems',
    description: 'Robust ceiling systems designed to support maintenance access',
    icon: '🚶',
  },
  {
    slug: 'non-walkable-ceiling-systems',
    title: 'Non-Walkable Ceiling Systems',
    description: 'Lightweight ceiling solutions for standard applications',
    icon: '📐',
  },
  {
    slug: 'partition-solutions',
    title: 'Partition Solutions',
    description: 'Modular partition systems for flexible space management',
    icon: '🧱',
  },
  {
    slug: 'cold-storage-construction',
    title: 'Cold Storage Construction',
    description: 'Complete cold storage facility construction and solutions',
    icon: '❄️',
  },
  {
    slug: 'prefab-house',
    title: 'Prefab House',
    description: 'Prefabricated housing solutions for rapid construction',
    icon: '🏠',
  },
];

// Industries data
export const industriesData = [
  {
    slug: 'dairy',
    title: 'Dairy Industries',
    description: 'Specialized solutions for dairy processing and storage facilities',
    icon: '🥛',
  },
  {
    slug: 'pharma-chemical',
    title: 'Pharma & Chemical',
    description: 'Controlled environment solutions for pharmaceutical and chemical industries',
    icon: '💊',
  },
  {
    slug: 'food-processing',
    title: 'Food Processing',
    description: 'Hygienic infrastructure for food processing facilities',
    icon: '🍽️',
  },
  {
    slug: 'cold-chain',
    title: 'Cold Chain',
    description: 'End-to-end cold chain infrastructure solutions',
    icon: '🧊',
  },
  {
    slug: 'precision-engineering',
    title: 'Precision Engineering',
    description: 'Controlled environments for precision manufacturing',
    icon: '⚙️',
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    description: 'Construction solutions for hotels and hospitality sector',
    icon: '🏨',
  },
  {
    slug: 'automobile',
    title: 'Automobile',
    description: 'Industrial infrastructure for automotive manufacturing',
    icon: '🚗',
  },
  {
    slug: 'agri-processing',
    title: 'Agri Processing',
    description: 'Processing and storage solutions for agriculture sector',
    icon: '🌾',
  },
];

