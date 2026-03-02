"use client";

import { useState } from "react";

export function CopyInquiryTemplateButton({
  template,
}: Readonly<{ template: string }>) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(template);
      setCopied(true);
      globalThis.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="cc-button cc-button-ghost inline-flex items-center justify-center rounded-2xl border border-white/15 px-4 py-2 text-sm font-mono text-white/85 transition hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-white active:translate-y-0"
    >
      {copied ? "Template copied" : "Copy inquiry template"}
    </button>
  );
}
