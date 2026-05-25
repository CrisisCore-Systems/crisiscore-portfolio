import React from "react";

type Props = { className?: string };

export default function CrisisCoreVisualStrip({ className = "" }: Props) {
  const labels = [
    "Small business trust cleanup",
    "Three point risk read",
    "Trust failure radar",
  ];

  return (
    <div className={className + " cc-visual-strip"} style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {labels.map((label) => (
        <div key={label} className="inline-flex items-center justify-center rounded-xl bg-white/5 px-3 py-2 text-xs text-white/75">
          {label}
        </div>
      ))}
    </div>
  );
}
