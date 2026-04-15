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

  const subject = "CrisisCore Systems quick fit check";
  const body = `Product URL: ${productUrl.trim()}\nLaunch stage or deadline: ${concern.trim() || "Not provided"}`;

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
      <div className="text-xs uppercase tracking-[0.2em] text-white/45">Quick fit check (10-minute intake)</div>
      <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>

      <div className="mt-4 grid gap-3 text-sm text-white/72 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-black/10 p-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">You send</div>
          <p className="mt-2 leading-relaxed">Product URL and launch window. One sentence on what might be wrong.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/10 p-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">You get</div>
          <p className="mt-2 leading-relaxed">A direct fit call, first check areas, and the best starting package.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/10 p-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">Not needed</div>
          <p className="mt-2 leading-relaxed">Decks, long docs, and any personal or production-sensitive data.</p>
        </div>
      </div>

      <form className="mt-5 grid gap-3" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fit-check-product-url" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Product URL
          </label>
          <input
            id="fit-check-product-url"
            type="url"
            inputMode="url"
            required
            value={productUrl}
            onChange={(event) => setProductUrl(event.target.value)}
            className="cc-field"
            placeholder="https://app.example.com"
            aria-label="Product URL"
          />
        </div>

        <div>
          <label htmlFor="fit-check-concern" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Launch stage and main concern
          </label>
          <textarea
            id="fit-check-concern"
            required
            value={concern}
            onChange={(event) => setConcern(event.target.value)}
            className="cc-field min-h-24"
            placeholder="Example: Beta in 4 weeks. Onboarding asks for detailed health history before users can try core features."
            aria-label="Launch stage and main concern"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <Button type="submit">Open email draft</Button>
          <Button type="button" variant="ghost" onClick={handleCopy}>
            {copied ? "Copied" : "Copy text"}
          </Button>
        </div>
      </form>

      <p className="mt-4 text-xs leading-relaxed text-white/55">
        I reply in 1-3 days with fit, first checks, and whether this should be a teardown, full review, or fix sprint.
      </p>
    </div>
  );
}