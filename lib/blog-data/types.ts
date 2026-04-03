export interface BlogPost {
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; role: string };
  keywords: string[];
  relatedProducts: { name: string; href: string }[];
  relatedSolutions: { name: string; href: string }[];
  faqs?: { question: string; answer: string }[];
}

export interface BlogListing {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
}
