/**
 * AI Summary Block Component
 * Provides structured content summaries for AI crawlers (ChatGPT, Gemini, Claude, etc.)
 * 
 * This component helps with AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization)
 * by providing clear, structured information that AI systems can easily parse.
 */

import { cn } from '@/lib/utils';

interface AISummaryBlockProps {
  /** Main summary text - should be comprehensive and factual */
  summary: string;
  /** Key terms/keywords relevant to the content */
  keywords?: string[];
  /** Is this the primary/main content? */
  isPrimary?: boolean;
  /** Additional context for AI systems */
  context?: string;
  /** Structured facts for the page */
  facts?: string[];
  /** CSS class name */
  className?: string;
  /** Whether to render visually (false = only for AI crawlers) */
  visible?: boolean;
}

export function AISummaryBlock({
  summary,
  keywords = [],
  isPrimary = false,
  context,
  facts,
  className,
  visible = false,
}: AISummaryBlockProps) {
  // The sr-only class makes this visible to screen readers and AI crawlers
  // but hidden from visual users unless visible=true
  return (
    <aside
      className={cn(
        visible ? 'my-6 rounded-lg border bg-muted/50 p-6' : 'sr-only',
        className
      )}
      aria-label="Content Summary"
      data-ai-summary={isPrimary ? 'primary' : 'supplementary'}
    >
      {/* Main Summary - Critical for AI understanding */}
      <div itemScope itemType="https://schema.org/WebPageElement">
        <meta itemProp="name" content="Page Summary" />
        <p itemProp="description">{summary}</p>
      </div>

      {/* Keywords for context */}
      {keywords.length > 0 && (
        <div className="mt-4">
          <span className="font-medium">Key Topics: </span>
          <span>{keywords.join(', ')}</span>
        </div>
      )}

      {/* Additional Context */}
      {context && (
        <div className="mt-2">
          <span className="font-medium">Context: </span>
          <span>{context}</span>
        </div>
      )}

      {/* Structured Facts */}
      {facts && facts.length > 0 && (
        <ul className="mt-4 space-y-1">
          {facts.map((fact, index) => (
            <li key={index}>• {fact}</li>
          ))}
        </ul>
      )}
    </aside>
  );
}

/**
 * AI Definition Block
 * For providing clear definitions that AI can easily parse
 */
export function AIDefinitionBlock({
  term,
  definition,
  relatedTerms,
  visible = false,
}: {
  term: string;
  definition: string;
  relatedTerms?: string[];
  visible?: boolean;
}) {
  return (
    <div
      className={visible ? 'my-4' : 'sr-only'}
      itemScope
      itemType="https://schema.org/DefinedTerm"
    >
      <dt itemProp="name" className="font-semibold">
        What is {term}?
      </dt>
      <dd itemProp="description" className="mt-1 text-muted-foreground">
        {definition}
      </dd>
      {relatedTerms && relatedTerms.length > 0 && (
        <div className="mt-2 text-sm">
          <span className="font-medium">Related: </span>
          {relatedTerms.join(', ')}
        </div>
      )}
    </div>
  );
}

/**
 * AI Context Block
 * Provides additional context about the page/section for AI systems
 */
export function AIContextBlock({
  pageType,
  audience,
  purpose,
  mainTopics,
}: {
  pageType: string;
  audience?: string;
  purpose?: string;
  mainTopics?: string[];
}) {
  return (
    <div className="sr-only" aria-hidden="true">
      <meta name="page-type" content={pageType} />
      {audience && <meta name="target-audience" content={audience} />}
      {purpose && <meta name="page-purpose" content={purpose} />}
      {mainTopics && (
        <div>
          Main Topics: {mainTopics.join(', ')}
        </div>
      )}
    </div>
  );
}



