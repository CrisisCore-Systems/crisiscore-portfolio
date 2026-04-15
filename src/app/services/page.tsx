import { absoluteUrl, SITE } from "@/app/lib/site";
import { BUYER_INTENT_PAGES } from "@/app/lib/buyer-intent";
import { Section } from "@/components/Section";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { FitCheckCta } from "@/components/FitCheckCta";

export const metadata = {
  title: "Services",
  description: "48-hour teardowns, full reviews, and fix sprints for sensitive-data products.",
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
          Three ways to get a clear read on a sensitive-data product.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          Start with a fast teardown, move to a full review if needed, or use a fix sprint when issues are already known.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
            Need a quick answer? Start with the 48-hour teardown.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
            Need the full picture? Choose the full review.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
            Need help shipping corrections? Move into a fix sprint.
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contact">Get a 3-point risk read</Button>
          <Button href="/proof" variant="ghost">
            See outcomes
          </Button>
        </div>

        <FitCheckCta
          className="mt-8"
          title="Send three details: URL, launch stage, and one concrete concern."
          description="I will tell you whether this looks like a teardown, full review, or not a fit before you commit to anything larger."
        />
      </Panel>

      <Section title="Packages" kicker="Starting points">
        <div className="grid gap-4 lg:grid-cols-3">
          <Panel className="p-7 sm:p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">48-hour teardown</div>
            <h2 className="mt-2 text-xl font-semibold">Starting at CA$250</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              A fast first pass for teams that need to know if a real product problem exists.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/75">
              <li>• 48 hour turnaround</li>
              <li>• Top 3 issues to address first</li>
              <li>• 3 fixes worth making first</li>
              <li>• Recommendation on whether a deeper review is worth it</li>
              <li>• Short written readout</li>
            </ul>
            <div className="mt-6 text-sm text-white/70">
              Best for: teams that want a quick signal without starting a larger engagement.
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
              <li>• Privacy risk review</li>
              <li>• Structural weakness analysis</li>
              <li>• Product boundary review</li>
              <li>• Prioritized roadmap</li>
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
              <li>• Deploy issues</li>
              <li>• Data boundary cleanup</li>
              <li>• Copy and UX fixes</li>
              <li>• Architectural hardening</li>
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

      <Section title="Start From The Query" kicker="Buyer-intent pages">
        <div className="grid gap-4 md:grid-cols-3">
          {BUYER_INTENT_PAGES.map((page) => (
            <Panel key={page.slug} className="p-7 sm:p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">{page.query}</div>
              <h2 className="mt-2 text-xl font-semibold">{page.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{page.summary}</p>
              <div className="mt-6 grid gap-2">
                <Button href={`/services/${page.slug}`} variant="ghost" className="w-full justify-center">
                  Open query page
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
            <Button href="/contact">Get a 3-point risk read</Button>
            <Button href="/proof" variant="ghost">
              Review outcomes first
            </Button>
          </div>
        </Panel>
      </Section>
    </div>
  );
}
