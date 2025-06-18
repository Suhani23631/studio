import { AiTagSuggestor } from '@/components/ai/AiTagSuggestor';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Tag Suggester | Chronicler',
  description: 'Use AI to generate relevant tags for your blog posts.',
};

export default function SuggestTagsDemoPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-headline font-bold text-primary mb-4">
          AI-Powered Tag Suggestions
        </h1>
        <p className="text-lg text-muted-foreground">
          Enhance your blog posts with smart, AI-generated tags. This tool helps you find the best keywords to categorize your content and reach a wider audience.
        </p>
      </div>
      <AiTagSuggestor />
    </main>
  );
}
