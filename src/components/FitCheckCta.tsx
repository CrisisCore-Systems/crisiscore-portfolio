"use client";

import { useState } from "react";
import { SITE } from "@/app/lib/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

type FitCheckCtaProps = {
  title: string;
  description: string;
  className?: string;
};

export function FitCheckCta({ title, description, className }: Readonly<FitCheckCtaProps>) {
  const [productUrl, setProductUrl] = useState("");
  const [concern, setConcern] = useState("");
  const [copied, setCopied] = useState(false);

  const subject = "CrisisCore Systems fit check";
  const body = `Product URL: ${productUrl.trim()}\nConcern: ${concern.trim() || "No extra concern provided."}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <div className={cn("rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6", className)}>
      <div className="text-xs uppercase tracking-[0.2em] text-white/45">Quick fit check</div>
      <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>

      <form className="mt-5 grid gap-3" onSubmit={handleSubmit}>
        <input
          type="url"
          inputMode="url"
          required
          value={productUrl}
          onChange={(event) => setProductUrl(event.target.value)}
          className="cc-field"
          placeholder="Product URL"
          aria-label="Product URL"
        />
        <textarea
          value={concern}
          onChange={(event) => setConcern(event.target.value)}
          className="cc-field min-h-24"
          placeholder="Optional concern: what feels risky, fragile, or trust-breaking?"
          aria-label="Optional concern"
        />

        <div className="flex flex-wrap gap-3">
          <Button type="submit">Open email draft</Button>
          <Button type="button" variant="ghost" onClick={handleCopy}>
            {copied ? "Copied" : "Copy text"}
          </Button>
        </div>
      </form>

      <p className="mt-4 text-xs leading-relaxed text-white/55">
        I reply with fit, the smallest useful starting point, and whether this looks like a teardown, full review, or fix sprint.
      </p>
    </div>
  );
}