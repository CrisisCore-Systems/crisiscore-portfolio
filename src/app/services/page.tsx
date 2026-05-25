import { absoluteUrl, SITE } from "@/app/lib/site";
import { PRIMARY_BUYER_INTENT_PAGES } from "@/app/lib/buyer-intent";
import { Section } from "@/components/Section";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { FitCheckCta } from "@/components/FitCheckCta";

export const metadata = {
  title: "Services",
  description: "Pre-compliance trust hardening for sensitive-data products: 48-hour teardowns, full reviews, and fix sprints.",
  openGraph: {
    images: [{ url: absoluteUrl("/assets/service-panels/trust_hardening_review.svg") }],
  },
  twitter: {
    images: [absoluteUrl("/assets/service-panels/trust_hardening_review.svg")],
  },
};

function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "OfferCatalog",
        "@id": `${SITE.url}/services#catalog`,
        name: "CrisisCore Systems services",
        url: `${SITE.url}/services`,
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fast Teardown",
              description:
                "A focused review for founders who need sharp eyes on a live product with fast turnaround and concrete priority fixes.",
            },
            priceCurrency: "CAD",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: 250,
              priceCurrency: "CAD",
              valueAddedTaxIncluded: false,
            },
            url: `${SITE.url}/services`,
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Trust Review",
              description:
                "A flagship structural review covering threat model snapshot, privacy risk review, trust boundaries, and a prioritized roadmap.",
            },
            priceCurrency: "CAD",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: 1200,
              priceCurrency: "CAD",
              valueAddedTaxIncluded: false,
            },
            url: `${SITE.url}/services`,
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fix Sprint",
              description:
                "Implementation support for the highest-value corrections across trust boundaries, copy, UX, deploy issues, and architectural hardening.",
            },
            priceCurrency: "CAD",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: 1500,
              priceCurrency: "CAD",
              valueAddedTaxIncluded: false,
            },
            url: `${SITE.url}/services`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/services#webpage`,
        url: `${SITE.url}/services`,
        name: "Services",
        description: "Fast teardown reviews, full trust hardening reviews, and fix sprints for sensitive-data products.",
        isPartOf: {
          "@id": `${SITE.url}#service`,
        },
      },
    ],
  };
}

const reviewPathNotes: Record<string, string> = {
  "privacy-review-for-health-apps": "For health, wellness, and mental-health workflows where sensitive context is part of the product.",
  "pre-launch-privacy-audit": "For launch-readiness, AI trust, and security-relevant behavior when sensitive-data exposure is near.",
  "local-first-health-app-architecture": "Primary path for local-first, degraded-mode, and explicit-export architecture concerns.",
  "data-minimization-review-for-apps": "For collection, retention, logging, analytics, and sharing defaults that need a narrower boundary.",
};

export default function ServicesPage() {
  return (
    <div className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd()) }}
      />

      <Panel className="p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <div className="cc-kicker">Services</div>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Three ways to get a clear read on a sensitive-data product.
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
              This work sits before compliance automation, pentest cleanup, or legal document review. Start with a fast teardown, move to a full review if needed, or use a fix sprint when issues are already known.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/trust-risk-read">Find the right package</Button>
              <Button href="/case-study" variant="ghost">
                Review case study first
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-3xl border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(120,167,181,0.14),rgba(10,17,24,0.92))] p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-[rgba(180,207,219,0.72)]">What these packages are for</div>
              <p className="mt-2 text-sm leading-relaxed text-white/75">Need to know whether the product itself is defensible before you buy more machinery? Start with the 48-hour teardown. Need the full picture? Choose the full review. Need help shipping corrections? Move into a fix sprint.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-4 text-sm text-white/75">Fast answer when something about the product feels risky but the failure is not clear yet.</div>
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-4 text-sm text-white/75">Deeper read when privacy, trust, buyer scrutiny, and launch risk stack together.</div>
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(212,162,97,0.08)] p-4 text-sm text-white/75">Implementation support when the fixes matter more than another report.</div>
            </div>
          </div>
        </div>

        <FitCheckCta
          className="mt-8"
          title="Send the URL, launch stage, and one concern. I&apos;ll size the engagement from there."
          description="This page is for package selection: I&apos;ll tell you whether to start small, go straight to the full review, or skip the larger engagement entirely."
        />
      </Panel>

      <Section title="Where This Sits" kicker="Not another category clone">
        <div className="grid gap-4 md:grid-cols-2">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">CrisisCore is for product trust hardening</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• Before SOC 2 evidence collection and trust-center workflows</li>
              <li>• Before HIPAA-ready hosting becomes a shelter for bad product decisions</li>
              <li>• Before buyers force the team to defend weak consent, recovery, or retention flows</li>
              <li>• Before a pentest or lawyer sees the downstream mess</li>
            </ul>
          </Panel>
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">This is not</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• Not a compliance certification</li>
              <li>• Not a law firm or regulatory opinion service</li>
              <li>• Not a generic pentest replacement</li>
              <li>• Not policy-only rewriting or security theater</li>
            </ul>
          </Panel>
        </div>
      </Section>

      <Section title="Who Buys This" kicker="Common pressure points">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            "Health app founder before launch",
            "AI tool handling sensitive prompts",
            "Legal-tech product under buyer review",
            "Wellness app collecting intimate behavior",
          ].map((item) => (
            <Panel key={item} className="p-5">
              <p className="text-sm font-semibold leading-relaxed text-white">{item}</p>
            </Panel>
          ))}
        </div>
      </Section>

      <Section title="Packages" kicker="Starting points">
        <div className="grid gap-4 lg:grid-cols-3">
          <Panel className="p-7 sm:p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">48-hour teardown</div>
            <h2 className="mt-2 text-xl font-semibold">Starting at CA$250</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              A fast first pass for teams that need to know if a real product problem exists.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/75">
              <li>• Top 3 product trust risks</li>
              <li>• Why each risk matters</li>
              <li>• First fix for each issue</li>
              <li>• Recommendation on whether a deeper review is worth it</li>
              <li>• Short written readout</li>
            </ul>
            <div className="mt-6 text-sm text-white/70">
              Best for: teams that want a quick signal without starting a larger engagement.
            </div>
            <div className="mt-5">
              <Button href="/artifacts/security-and-audits/sample-48-hour-teardown" variant="ghost">
                View sample teardown
              </Button>
            </div>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">Full review</div>
            <h2 className="mt-2 text-xl font-semibold">Starting at CA$1,200</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              The full option when you need a review of collection, storage, and product behavior around sensitive data.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/75">
              <li>• Threat model snapshot</li>
              <li>• Data boundary map</li>
              <li>• Collection and retention review</li>
              <li>• Product claims review</li>
              <li>• Risk-ranked fix roadmap</li>
              <li>• Proof gaps and buyer scrutiny notes</li>
            </ul>
            <div className="mt-6 text-sm text-white/70">
              Best for: teams under launch pressure or real user exposure that need a full picture and practical fix order.
            </div>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">Fix Sprint</div>
            <h2 className="mt-2 text-xl font-semibold">Starting at CA$1,500</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Implementation support for the highest-value corrections once the problems are already known.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/75">
              <li>• Patch privacy or UX copy</li>
              <li>• Tighten data collection boundaries</li>
              <li>• Improve export, deletion, recovery, or consent flows</li>
              <li>• Add verification notes or tests where practical</li>
              <li>• Ship the highest-leverage corrections first</li>
            </ul>
            <div className="mt-6 text-sm text-white/70">
              Best for: teams that already know the issues and want the hardest fixes shipped quickly.
            </div>
          </Panel>
        </div>
      </Section>

      <Section title="What You Leave With" kicker="Concrete outputs">
        <div className="grid gap-4 md:grid-cols-2">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Every package is built to leave you with:</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• Ranked findings instead of a vague concern list</li>
              <li>• Clear boundaries and weak points</li>
              <li>• Concrete fixes in priority order</li>
              <li>• Written notes the team can keep using after the call</li>
            </ul>
          </Panel>
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">How engagement sizing works</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Final scope depends on product surface area, access, and whether the work is diagnostic, roadmap-focused, or implementation-heavy. Listed prices are starting points so buyers do not have to guess whether the work is accessible.
            </p>
            <div className="mt-5 text-sm text-white/70">
              If you are unsure, send the link, launch stage, and deadline and I&apos;ll point you to the smallest useful starting point.
            </div>
          </Panel>
        </div>
      </Section>

      <Section title="Common Review Paths" kicker="Primary service pages">
        <div className="grid gap-4 md:grid-cols-3">
          {PRIMARY_BUYER_INTENT_PAGES.map((page) => (
            <Panel key={page.slug} className="p-7 sm:p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">Review path</div>
              <h2 className="mt-2 text-xl font-semibold">{page.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{page.summary}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {reviewPathNotes[page.slug]}
              </p>
              <div className="mt-6 grid gap-2">
                <Button href={`/services/${page.slug}`} variant="ghost" className="w-full justify-center">
                  Open review path
                </Button>
                <Button href={page.proofHref} variant="ghost" className="w-full justify-center">
                  See matching proof
                </Button>
              </div>
            </Panel>
          ))}
        </div>
      </Section>

      <Section title="How To Hire" kicker="Simple intake">
        <Panel className="p-8 sm:p-10">
          <p className="max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
            Send the product URL, launch stage, and main concern. Add a deadline only if timing matters. I&apos;ll reply with fit, likely package, and next step.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/trust-risk-read">Ask for package fit</Button>
            <Button href="/case-study" variant="ghost">
              Review case study first
            </Button>
          </div>
        </Panel>
      </Section>
    </div>
  );
}
