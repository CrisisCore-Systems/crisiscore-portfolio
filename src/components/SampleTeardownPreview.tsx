import React from "react";

type Props = { className?: string };

export default function SampleTeardownPreview({ className = "" }: Props) {
  return (
    <div className={className + " cc-card p-4"} aria-hidden>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.16em] text-white/60">Sample brief (redacted)</div>
          <div className="mt-2 text-sm font-semibold text-white">Executive verdict — high risk: collection & export</div>
        </div>
        <div className="text-sm font-mono text-white/70">CA$250 • 48h</div>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <div className="rounded-md bg-black/10 p-2">
          <div className="text-xs text-white/70">Top risk</div>
          <div className="mt-1 font-semibold text-white text-sm">Over-collection</div>
        </div>
        <div className="rounded-md bg-black/10 p-2">
          <div className="text-xs text-white/70">Evidence</div>
          <div className="mt-1 font-semibold text-white text-sm">Public API exposes PII</div>
        </div>
        <div className="rounded-md bg-black/10 p-2">
          <div className="text-xs text-white/70">First fix</div>
          <div className="mt-1 font-semibold text-white text-sm">Limit collection & add explicit export control</div>
        </div>
      </div>

      <div className="mt-3 text-sm text-white/70">
        <div className="bg-white/6 rounded-sm p-2">
          <div className="h-3 bg-white/12 rounded-sm w-3/4 mb-2" />
          <div className="h-3 bg-white/12 rounded-sm w-1/2" />
        </div>
      </div>
    </div>
  );
}
