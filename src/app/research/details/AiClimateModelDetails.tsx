"use client";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Button } from "@/components/ui/button";
import type { ResearchDetailProps } from "@/app/research/components/ResearchCard";

export default function AiClimateModelDetails({
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
          Interactive Element Placeholder
        </h4>
        <p className="text-xs text-muted-foreground mb-3">
          This section can host custom React components for interactive charts,
          simulations, or code demos specific to this project.
        </p>
        <Button
          size="sm"
          variant="outline"
          onClick={() => alert("AI Climate Model Interactivity!")}
        >
          Example Interaction
        </Button>
      </div>
    </div>
  );
}
