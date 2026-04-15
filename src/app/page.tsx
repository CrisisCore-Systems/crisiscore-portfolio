import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/Section";
import { FitCheckCta } from "@/components/FitCheckCta";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function HomePage() {
  return (
    <div className="py-12">
      <Panel className="p-8 sm:p-10">
        <div className="cc-kicker">For health and sensitive-data apps</div>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
          Catch risky defaults, weak consent, and data-collection mistakes before launch.
        </h1>
        <p className="mt-5 text-lg font-semibold text-white sm:text-xl">
          I review sensitive-data products for trust, privacy, and boundary failures that create buyer, legal, and launch risk.
        </p>
        <p className="mt-3 text-sm text-white/75 sm:text-base">
          Best for teams near launch or already live.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          You get the real issues, the priority order, and the first fixes.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70 sm:text-sm">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">48-hour teardown from CA$250</span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">Full Review from CA$1,200</span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">Fix Sprint from CA$1,500</span>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">Get a 3-point risk read</Button>
          <Button href="/proof" variant="ghost">
            See proof
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">What this catches</div>
            <div className="mt-2 text-base font-semibold">Over-collection, weak consent, and brittle flows</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              I focus on the few product choices most likely to create legal, reputational, or buyer-facing trouble.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">What you get back</div>
            <div className="mt-2 text-base font-semibold">A short list of issues, fixes, and next moves</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Written readout, not a slide deck. Sent within the delivery window for the package you choose.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">Why teams use this</div>
            <div className="mt-2 text-base font-semibold">To avoid expensive cleanup after launch</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              This is for teams that want direct correction, not an audit slide deck with no product change.
            </p>
          </div>
        </div>

        <FitCheckCta
          className="mt-8"
          title="Start with three details: product URL, launch window, and one concrete concern."
          description="I reply with a clear fit call, top problem areas to check first, and the package that makes the most sense."
        />

        <div className="mt-6 text-sm text-white/65">
          Founder of CrisisCore Systems. I review fragile software systems for trust, privacy, and structural risk.
        </div>
      </Panel>

      <Section id="services" title="Services" kicker="3 engagement paths">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">48-hour teardown</h3>
            <p className="mt-2 text-sm text-white/70">A fast first pass for teams that need a clear answer on whether a real product problem exists.</p>
            <p className="mt-4 text-sm font-semibold text-white">Starting at CA$250</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• 48 hour turnaround</li>
              <li>• Top 3 issues to address first</li>
              <li>• Concrete fixes you can act on</li>
              <li>• Short written readout</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              Use this when you need signal quickly and do not want to start with a full engagement.
            </p>
          </div>

          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">Full review</h3>
            <p className="mt-2 text-sm text-white/70">The deeper audit for products where data handling, product behavior, and buyer scrutiny all matter.</p>
            <p className="mt-4 text-sm font-semibold text-white">Starting at CA$1,200</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Threat model snapshot</li>
              <li>• Privacy risk review</li>
              <li>• Product boundary review</li>
              <li>• Prioritized roadmap</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              Use this when you need the full map of what is risky, what is sloppy, and what to fix first.
            </p>
          </div>

          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">Fix Sprint</h3>
            <p className="mt-2 text-sm text-white/70">Implementation support for the highest-value corrections.</p>
            <p className="mt-4 text-sm font-semibold text-white">Starting at CA$1,500</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Deploy issues</li>
              <li>• Data boundary cleanup</li>
              <li>• Copy and UX fixes</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              Use this when the problems are already known and you want them fixed fast.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <Button href="/contact">Get a 3-point risk read</Button>
        </div>
      </Section>

      <Section id="proof" title="Proof" kicker="Why believe this">
        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.95fr]">
          <Panel className="p-7 sm:p-8">
            <div className="cc-kicker">Plain-English outcomes</div>
            <h3 className="mt-2 text-xl font-semibold">Real product changes, not hand-wavy claims</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Proof shows concrete changes in product behavior, data handling, and public claims that can be defended.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">PainTracker result</div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Sensitive logging stayed local by default, sharing became explicit, and failure states became easier for users to recover from.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">ProofVault result</div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Security claims were narrowed to what the release process could actually prove, making the product easier to defend to skeptical buyers.
                </p>
              </div>
            </div>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">See the work</div>
            <p className="mt-3 text-sm text-white/70">A flagship case study and a redacted artifact from a real engagement.</p>

            <div className="mt-6 grid gap-2">
              <Button href="/case-study/pain-tracker">Read flagship case study</Button>
              <Button href="/artifacts/security-and-audits/redacted-threat-model-excerpt" variant="ghost" className="justify-center">
                Open redacted artifact
              </Button>
            </div>
          </Panel>
        </div>
      </Section>

      <Section id="fit" title="Who This Fits" kicker="Sharp qualification">
        <div className="grid gap-4 md:grid-cols-2">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Good fit</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• Post-MVP products with live users or a near-term launch</li>
              <li>• Sensitive personal, legal, health, or operator data</li>
              <li>• Founders who want concrete fixes instead of vague reassurance</li>
              <li>• Teams willing to reduce collection and tighten boundaries</li>
            </ul>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Not for</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• Idea-stage product brainstorming</li>
              <li>• Generic pentest replacement expectations</li>
              <li>• Compliance theater with no appetite for product change</li>
              <li>• Teams without an owner, budget, or decision path</li>
            </ul>
          </Panel>
        </div>

      </Section>

      <Section id="process" title="How It Starts" kicker="Three steps">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">1. Send the link, stage, and deadline</h3>
            <p className="mt-2 text-sm text-white/70">
              Keep it short: product link, launch stage, and one clear concern.
            </p>
          </div>
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">2. I look for the issues most likely to cause damage</h3>
            <p className="mt-2 text-sm text-white/70">
              Not a checklist pass. I prioritize by impact on buyers, legal exposure, and launch risk.
            </p>
          </div>
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">3. You get a short written readout</h3>
            <p className="mt-2 text-sm text-white/70">
              Issues ranked by severity, with the first fix for each. No padding, no slide deck.
            </p>
          </div>
        </div>
      </Section>

      <div id="contact" className="scroll-mt-28">
        <Panel className="p-8 sm:p-10">
          <div className="text-xs uppercase tracking-[0.2em] text-white/45">Get started</div>
          <h2 className="mt-2 text-2xl font-semibold">
            Send the link, launch stage, and one concern.
          </h2>
          <p className="mt-3 text-sm text-white/70">
            I&apos;ll tell you whether the 48-hour teardown, a full review, or no engagement makes sense.
          </p>
          <div className="mt-6">
            <Button href="/contact">Get a 3-point risk read</Button>
          </div>
        </Panel>
      </div>
    </div>
  );
}

