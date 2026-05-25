import { absoluteUrl } from "@/app/lib/site";
import { FitCheckCta } from "@/components/FitCheckCta";
import { Section } from "@/components/Section";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Trust Hardening Review",
  description:
    "A clear service page for founders who need a trust, privacy, and failure review before launch, buyer scrutiny, or compliance cleanup.",
  openGraph: {
    images: [{ url: absoluteUrl("/assets/service-panels/trust_hardening_review.svg") }],
  },
  twitter: {
    images: [absoluteUrl("/assets/service-panels/trust_hardening_review.svg")],
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function TrustHardeningReviewPage() {
  return (
    <div className="py-12">
      <Panel className="p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <div className="cc-kicker">Primary offer</div>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Trust hardening review for sensitive-data products.
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-semibold text-white sm:text-xl">
              CrisisCore reviews software for trust, privacy, and failure under pressure before buyers, auditors, or users force the issue.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/74 sm:text-base">
              This is for teams with a real product, real stakes, and a suspicion that the current defaults are harder to defend than they look. I inspect collection, consent, retention, recovery, export, logging, privacy claims, and the product behaviors most likely to break trust when someone looks closely.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/trust-risk-read">Request a Trust Hardening Review</Button>
              <Button href="/proof" variant="ghost">
                Inspect proof first
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-3xl border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(120,167,181,0.14),rgba(10,17,24,0.92))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <div className="text-xs uppercase tracking-[0.18em] text-[rgba(180,207,219,0.72)]">What this is for</div>
              <p className="mt-2 text-sm font-medium leading-relaxed text-white/84">
                Products that work well enough to launch, but may not be defensible under buyer scrutiny, privacy review, procurement, or public pressure.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">What changes</div>
                <p className="mt-2 text-sm leading-relaxed text-white/74">
                  You leave with ranked risks, a fix order, and a clearer sense of what is safe to claim, ship, or delay.
                </p>
              </div>
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(212,162,97,0.08)] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">What this is not</div>
                <p className="mt-2 text-sm leading-relaxed text-white/74">
                  Not a pentest, not compliance theater, and not a paperwork-first exercise that ignores product behavior.
                </p>
              </div>
            </div>
          </div>
        </div>

        <FitCheckCta
          className="mt-8"
          title="Request a Trust Hardening Review."
          description="Send the app URL, launch stage, and biggest concern. I&apos;ll reply with the top trust risks I see, the smallest sensible engagement path, and whether CrisisCore is the right category of help."
          splitStageAndConcern
          checklistItems={[
            "Send app URL, launch stage, and biggest concern.",
            "Get the top trust risks and the recommended entry point.",
            "Use this before a larger review, a pentest, or compliance tooling spend.",
          ]}
        />
      </Panel>

      <Section title="Choose The Closest Case Study" kicker="Proof before pitch">
        <div className="grid gap-4 md:grid-cols-2">
          <Panel className="p-7 sm:p-8">
            <div className="text-xs uppercase tracking-[0.18em] text-[rgba(180,207,219,0.72)]">PainTracker</div>
            <h2 className="mt-2 text-xl font-semibold">Health-adjacent trust failures, local-first defaults, and reviewed sharing</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Start here if the product handles sensitive logs, degraded conditions, export review, or users under stress and low trust.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• Local-first default behavior</li>
              <li>• Explicit review before sharing</li>
              <li>• Reduced recall burden and drift</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/case-study/pain-tracker">Open PainTracker case study</Button>
              <Button href="/proof" variant="ghost">
                Inspect matching proof
              </Button>
            </div>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-xs uppercase tracking-[0.18em] text-[rgba(180,207,219,0.72)]">ProofVault</div>
            <h2 className="mt-2 text-xl font-semibold">Buyer scrutiny, release evidence, and narrower product claims</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Start here if the product risk is overclaiming, weak release evidence, trust drift, or buyer-facing guarantees that are wider than the system can defend.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• Release-bound trust claims</li>
              <li>• Visible drift and verification paths</li>
              <li>• Clearer buyer inspection surface</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/case-study/proofvault">Open ProofVault case study</Button>
              <Button href="/proof" variant="ghost">
                Inspect matching proof
              </Button>
            </div>
          </Panel>
        </div>
      </Section>

      <Section title="Who This Fits" kicker="Buyer intent first">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Founders nearing launch</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              The product works, but nobody has pressure-tested whether the defaults are defensible.
            </p>
          </Panel>
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Teams facing buyer review</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Procurement, security questionnaires, or privacy questions are coming faster than the product boundary decisions are maturing.
            </p>
          </Panel>
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Sensitive-data products</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Health, wellness, legal, AI, and other products where weak collection, consent, recovery, or retention choices can damage trust quickly.
            </p>
          </Panel>
        </div>
      </Section>

      <Section title="What Gets Reviewed" kicker="Product behavior">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Panel className="p-7 sm:p-8">
            <ul className="space-y-3 text-sm text-white/75">
              <li>• Collection defaults and minimization boundary</li>
              <li>• Consent, disclosure, and user expectation mismatches</li>
              <li>• Logging, retention, export, deletion, and recovery paths</li>
              <li>• Failure states that become trust failures under pressure</li>
              <li>• Product claims the release process cannot yet defend</li>
              <li>• The shortest useful fix order for product and engineering</li>
            </ul>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">What you receive</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• A 48-hour teardown when fast signal is enough</li>
              <li>• A full review when you need the broader risk picture</li>
              <li>• A fix sprint when the highest-value corrections should ship fast</li>
              <li>• Written notes that stay useful after the first conversation</li>
            </ul>
            <div className="mt-6">
              <Button href="/services" variant="ghost">
                Review packages and starting points
              </Button>
            </div>
          </Panel>
        </div>
      </Section>

      <Section title="Proof Before Pitch" kicker="Inspectability">
        <div className="grid gap-4 md:grid-cols-3">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Case studies</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              PainTracker and ProofVault show concrete trust, privacy, and release-bound changes rather than generic consulting claims.
            </p>
            <div className="mt-5">
              <Button href="/case-study" variant="ghost">
                Open case studies
              </Button>
            </div>
          </Panel>
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Artifacts</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Redacted threat models, teardown samples, and defensibility packets show the shape of the work.
            </p>
            <div className="mt-5">
              <Button href="/proof" variant="ghost">
                Inspect proof artifacts
              </Button>
            </div>
          </Panel>
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Doctrine</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Protective Computing explains the discipline, but this offer page keeps the commercial conclusion clear first.
            </p>
            <div className="mt-5">
              <Button href="/start-here" variant="ghost">
                Open the broader ecosystem
              </Button>
            </div>
          </Panel>
        </div>
      </Section>
    </div>
  );
}