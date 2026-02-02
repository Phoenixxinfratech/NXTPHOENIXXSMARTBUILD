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
