/**
 * Meta Tags Component
 * For pages that need additional meta tags beyond what Next.js metadata provides
 * 
 * Note: In App Router, prefer using the metadata export in page.tsx
 * This component is for edge cases requiring dynamic head content
 */

interface MetaTagsProps {
  // Additional tags for AI discoverability (AEO)
  aiDescription?: string;
  // Verification tags
  googleVerification?: string;
  bingVerification?: string;
  // Custom tags
  customTags?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
}

export function MetaTags({
  aiDescription,
  googleVerification,
  bingVerification,
  customTags,
}: MetaTagsProps) {
  return (
    <>
      {/* AI-specific meta tags for enhanced discoverability */}
      {aiDescription && (
        <>
          <meta name="ai-content-summary" content={aiDescription} />
          <meta name="gpt-summary" content={aiDescription} />
        </>
      )}

      {/* Search engine verification */}
      {googleVerification && (
        <meta name="google-site-verification" content={googleVerification} />
      )}
      {bingVerification && (
        <meta name="msvalidate.01" content={bingVerification} />
      )}

      {/* Custom meta tags */}
      {customTags?.map((tag, index) => (
        <meta
          key={index}
          name={tag.name}
          property={tag.property}
          content={tag.content}
        />
      ))}
    </>
  );
}

/**
 * Article-specific meta tags
 */
export function ArticleMetaTags({
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
}: {
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  section?: string;
  tags?: string[];
}) {
  return (
    <>
      <meta property="article:published_time" content={publishedTime} />
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      <meta property="article:author" content={author} />
      {section && <meta property="article:section" content={section} />}
      {tags?.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
    </>
  );
}

