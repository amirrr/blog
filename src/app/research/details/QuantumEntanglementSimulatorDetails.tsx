"use client";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Button } from "@/components/ui/button";
import type { ResearchDetailProps } from "@/app/research/components/ResearchCard"; // Path updated

export default function QuantumEntanglementSimulatorDetails({
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
          Qubit Playground (Placeholder)
        </h4>
        <p className="text-xs text-muted-foreground mb-3">
          Visualize qubit states and entanglement. (Interactive component to be
          built here)
        </p>
        <Button
          size="sm"
          variant="outline"
          onClick={() => alert("Quantum Simulator Interactivity!")}
        >
          Simulate Bell Test
        </Button>
      </div>
    </div>
  );
}
