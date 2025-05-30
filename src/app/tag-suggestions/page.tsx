// This page has been removed for static export compatibility.
// The AI Tag Suggester feature requires a server to run Genkit flows.
// For a static site, consider deploying the AI functionality as a separate backend API.

// import TagSuggestionForm from './components/TagSuggestionForm';
// import type { Metadata } from 'next';
// import { Lightbulb } from 'lucide-react';

// export const metadata: Metadata = {
//   title: 'AI Tag Suggester | Scholar Blog',
//   description: 'Get AI-powered tag suggestions for your blog posts.',
// };

export default function TagSuggestionsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 fade-in py-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold font-serif text-foreground">AI Tag Suggester (Disabled)</h1>
        <p className="text-lg text-muted-foreground mt-2">
          This feature is currently disabled for static site export.
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          The AI Tag Suggester requires server-side processing which is not available in a statically exported site.
          To use this feature, the application would need to be hosted on a platform with server capabilities,
          or the AI functionality could be deployed as a separate backend API.
        </p>
      </header>
    </div>
  );
}
