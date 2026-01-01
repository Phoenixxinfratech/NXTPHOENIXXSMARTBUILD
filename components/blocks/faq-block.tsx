'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQBlockProps {
  title?: string;
  faqs: FAQ[];
  className?: string;
}

export function FAQBlock({ title, faqs, className }: FAQBlockProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className={cn('', className)}>
      {title && <h2 className="mb-6 text-2xl font-bold">{title}</h2>}

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

// Compact FAQ variant for sidebars
export function FAQCompact({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index}>
          <h4 className="text-sm font-medium">{faq.question}</h4>
          <p className="mt-1 text-sm text-muted-foreground">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}



