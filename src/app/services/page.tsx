import { absoluteUrl, SITE } from "@/app/lib/site";
import { Section } from "@/components/Section";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Services",
  description: "Fast teardown reviews, full trust hardening reviews, and fix sprints for sensitive-data products.",
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
              price: 300,
              priceCurrency: "CAD",
              valueAddedTaxIncluded: false,
            },
            url: `${SITE.url}/services`,
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Trust Hardening Review",
              description:
                "A flagship structural review covering threat model snapshot, privacy and coercion risk review, trust boundaries, and a prioritized roadmap.",
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

export default function ServicesPage() {
  return (
    <div className="py-12">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd()) }}
      />

      <Panel className="p-8 sm:p-10">
        <div className="cc-kicker">Services</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Clear offers for founders shipping trust-sensitive products.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          The goal is simple: find structural trust failures, prioritize the highest-value fixes, and harden the parts of the product that will hurt you if they stay vague.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
            Need speed? Start with Fast Teardown.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
            Need the full map? Choose the Full Trust Hardening Review.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
            Need implementation help? Move into a Fix Sprint.
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contact">Book a review</Button>
          <Button href="/proof" variant="ghost">
            See proof
          </Button>
        </div>
      </Panel>

      <Section title="Packages" kicker="Starting points">
        <div className="grid gap-4 lg:grid-cols-3">
          <Panel className="p-7 sm:p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">Fast Teardown</div>
            <h2 className="mt-2 text-xl font-semibold">Starting at CA$300</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              A focused review for founders who need sharp eyes on a live product before a launch, demo, or decision window.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/75">
              <li>• 48 hour turnaround</li>
              <li>• Architecture and trust risk findings</li>
              <li>• Concrete priority fixes</li>
              <li>• Short written packet</li>
            </ul>
            <div className="mt-6 text-sm text-white/70">
              Best for: founders who need clarity quickly and do not want to wait for a larger engagement to spot obvious structural weakness.
            </div>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">Full Trust Hardening Review</div>
            <h2 className="mt-2 text-xl font-semibold">Starting at CA$1,200</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              The flagship offer for products handling sensitive, personal, legal, health, or high-risk data.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/75">
              <li>• Threat model snapshot</li>
              <li>• Privacy and coercion risk review</li>
              <li>• Structural weakness analysis</li>
              <li>• Product trust boundary review</li>
              <li>• Prioritized roadmap</li>
            </ul>
            <div className="mt-6 text-sm text-white/70">
              Best for: teams with live product pressure who need a serious review they can act on, not a vague audit summary.
            </div>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">Fix Sprint</div>
            <h2 className="mt-2 text-xl font-semibold">Starting at CA$1,500</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Implementation support for the highest-value corrections once the trust failures are already known.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/75">
              <li>• Deploy issues</li>
              <li>• Trust boundary cleanup</li>
              <li>• Copy and UX trust fixes</li>
              <li>• Architectural hardening</li>
            </ul>
            <div className="mt-6 text-sm text-white/70">
              Best for: teams that already know what hurts and want the hardest, highest-leverage corrections shipped quickly.
            </div>
          </Panel>
        </div>
      </Section>

      <Section title="What You Leave With" kicker="Concrete outputs">
        <div className="grid gap-4 md:grid-cols-2">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Every package is built to leave you with:</div>
            <ul className="space-y-2 text-sm text-white/75">
              <li>• Ranked findings instead of vague concern lists</li>
              <li>• Explicit trust boundaries and architectural weak points</li>
              <li>• Concrete fixes your team can implement in priority order</li>
              <li>• Written notes that survive after the call ends</li>
            </ul>
          </Panel>
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">How engagement sizing works</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Final scope depends on product surface area, access available, and whether the ask is diagnostic, roadmap-focused, or implementation-heavy. The listed prices are starting points so buyers do not have to guess whether the work is accessible.
            </p>
            <div className="mt-5 text-sm text-white/70">
              If you are unsure, send the app, stack, and concern and I&apos;ll point you to the smallest useful starting point.
            </div>
          </Panel>
        </div>
      </Section>

      <Section title="How To Hire" kicker="Simple intake">
        <Panel className="p-8 sm:p-10">
          <p className="max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
            Send the app, stack, and concern. Include repo or deployment links if you have them, plus your decision timeline. I&apos;ll reply with fit, likely package, and next step.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact">Book a review</Button>
            <Button href="/proof" variant="ghost">
              Review proof first
            </Button>
          </div>
        </Panel>
      </Section>
    </div>
  );
}
