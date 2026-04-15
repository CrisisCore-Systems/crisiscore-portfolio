"use client";

import { useState } from "react";
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

  const summary = `Product URL: ${productUrl.trim() || "Not provided"}\nStage + concern: ${concern.trim() || "Not provided"}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={cn("rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6", className)}>
      <div className="text-xs uppercase tracking-[0.2em] text-white/45">Quick fit check (60 seconds)</div>
      <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>

      <ul className="mt-4 space-y-1.5 text-sm text-white/72">
        <li>• Send URL + stage + one concern.</li>
        <li>• Start from contact and send only the basics.</li>
        <li>• Skip decks and long docs.</li>
      </ul>

      <div className="mt-5 grid gap-3">
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
            Stage + concern (optional)
          </label>
          <textarea
            id="fit-check-concern"
            value={concern}
            onChange={(event) => setConcern(event.target.value)}
            className="cc-field min-h-24"
            placeholder="Example: Launching in 3 weeks. Onboarding may ask for too much sensitive data."
            aria-label="Stage and concern"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href="/contact">Start here</Button>
          <Button type="button" variant="ghost" onClick={handleCopy}>
            {copied ? "Copied" : "Copy details"}
          </Button>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-white/55">
        Usually answered in 1-2 days with fit, first checks, and suggested package.
      </p>
    </div>
  );
}