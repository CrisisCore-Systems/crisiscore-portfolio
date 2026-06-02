import Link from "next/link";
import { absoluteUrl } from "@/app/lib/site";
import { SECURITY_TOOL_PAGES } from "@/app/security-tools/data";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Security tools",
  description:
    "Dedicated security and trust product pages for CrisisCore Systems: trust surface audit, privacy risk review, failure mode analysis, protective computing review, and local-first security audit.",
  openGraph: {
    images: [{ url: absoluteUrl("/assets/service-panels/trust_hardening_review.svg") }],
  },
  twitter: {
    images: [absoluteUrl("/assets/service-panels/trust_hardening_review.svg")],
  },
};

export default function SecurityToolsPage() {
  return (
    <div className="py-12">
      <Panel className="p-8 sm:p-10">
        <div className="cc-kicker">Security tools</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Dedicated product pages for security, privacy, and trust hardening.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          These tools make the offering clear to buyers by presenting each audit as a discrete product with the problem it solves, the ideal buyer, the review scope, deliverables, example findings, pricing, and the next step.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/trust-risk-read">Ask whether a tool fits</Button>
          <Button href="/services" variant="ghost">
            See the broader services catalog
          </Button>
        </div>
      </Panel>

      <Section title="Choose the right review" kicker="How to decide">
        <div className="grid gap-4 md:grid-cols-3">
          <Panel className="p-6 sm:p-7">
            <div className="text-sm font-semibold">Need a trust audit?</div>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Pick Trust Surface Audit when the biggest gap is what buyers see and believe about the product.
            </p>
          </Panel>
          <Panel className="p-6 sm:p-7">
            <div className="text-sm font-semibold">Concerned about user data?</div>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Choose Privacy Risk Review when collection, retention, and third-party data flows are the real risks.
            </p>
          </Panel>
          <Panel className="p-6 sm:p-7">
            <div className="text-sm font-semibold">Worried the product may fail?</div>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Use Failure Mode Analysis when bad connectivity, degraded states, or hostile conditions are part of the threat model.
            </p>
          </Panel>
        </div>
      </Section>

      <Section title="Security tools" kicker="Choose the smallest useful review">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {SECURITY_TOOL_PAGES.map((tool) => (
            <Panel key={tool.slug} className="p-7 sm:p-8">
              <div className="text-xs uppercase tracking-[0.18em] text-white/45">Tool</div>
              <h2 className="mt-3 text-xl font-semibold">{tool.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{tool.summary}</p>
              <div className="mt-6 grid gap-3">
                <Button href={`/security-tools/${tool.slug}`} variant="ghost" className="w-full justify-center">
                  Open tool page
                </Button>
                <Link className="text-sm font-medium text-[color:var(--acc)] hover:text-white" href={`/security-tools/${tool.slug}`}>
                  /security-tools/{tool.slug}
                </Link>
              </div>
            </Panel>
          ))}
        </div>
      </Section>

      <Section title="Why this matters" kicker="Conversion clarity">
        <div className="grid gap-4 md:grid-cols-2">
          <Panel className="p-7 sm:p-8">
            <p className="text-sm leading-relaxed text-white/75">
              Each product page is built so a visitor can understand what is offered, who it is for, and what action to take next without decoding the broader philosophy.
            </p>
          </Panel>
          <Panel className="p-7 sm:p-8">
            <p className="text-sm leading-relaxed text-white/75">
              This reduces the risk that the site feels like a manifesto instead of a purchasable service funnel.
            </p>
          </Panel>
        </div>
      </Section>
    </div>
  );
}
