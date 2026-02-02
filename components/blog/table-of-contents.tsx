'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  className?: string;
}

/**
 * Extracts headings (H2 and H3) from HTML content
 */
function extractHeadings(htmlContent: string): TOCItem[] {
  const headings: TOCItem[] = [];
  
  // Match h2 and h3 tags with their content
  const headingRegex = /<h([23])[^>]*>([^<]+)<\/h[23]>/gi;
  let match;
  let index = 0;
  
  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1], 10);
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .slice(0, 50);
    
    headings.push({
      id: `${id}-${index}`,
      text,
      level,
    });
    index++;
  }
  
  return headings;
}

/**
 * Table of Contents component for blog posts
 * Auto-generates from HTML content headings
 */
export function TableOfContents({ content, className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const extractedHeadings = extractHeadings(content);
    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map((h) => 
        document.getElementById(h.id)
      ).filter(Boolean);

      const scrollPosition = window.scrollY + 100;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  return (
    <nav
      className={cn(
        'rounded-xl border bg-slate-50 p-5',
        className
      )}
      aria-label="Table of contents"
    >
      <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={cn(
              heading.level === 3 && 'ml-4'
            )}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={cn(
                'block text-sm leading-relaxed transition-colors hover:text-primary',
                activeId === heading.id
                  ? 'font-semibold text-primary'
                  : 'text-slate-600'
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Injects IDs into HTML content headings for TOC linking
 * Use this to process blog content before rendering
 */
export function injectHeadingIds(htmlContent: string): string {
  let index = 0;
  
  return htmlContent.replace(
    /<h([23])([^>]*)>([^<]+)<\/h([23])>/gi,
    (match, level, attrs, text, closeLevel) => {
      const id = text
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .slice(0, 50);
      
      const fullId = `${id}-${index}`;
      index++;
      
      // Check if id attribute already exists
      if (attrs.includes('id=')) {
        return match;
      }
      
      return `<h${level}${attrs} id="${fullId}">${text}</h${closeLevel}>`;
    }
  );
}

export default TableOfContents;
