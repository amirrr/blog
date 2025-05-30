"use client";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Button } from "@/components/ui/button";
import type { ResearchDetailProps } from "@/app/research/components/ResearchCard"; // Path updated

export default function NlpHealthcareAnalysisDetails({
  markdownContent,
}: ResearchDetailProps) {
  return (
    <div className="py-4">
      <MarkdownRenderer
        content={markdownContent}
        className="prose-sm max-w-none"
      />
      <div className="mt-6 p-4 border border-dashed rounded-md bg-muted/30">
        <h4 className="text-sm font-semibold font-serif text-foreground mb-2">
          Record Analyzer (Placeholder)
        </h4>
        <p className="text-xs text-muted-foreground mb-3">
          Try out Named Entity Recognition on sample clinical notes.
          (Interactive component to be built here)
        </p>
        <Button
          size="sm"
          variant="outline"
          onClick={() => alert("NLP Analysis Interactivity!")}
        >
          Analyze Sample Text
        </Button>
      </div>
    </div>
  );
}
