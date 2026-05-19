import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/Section";
import { FitCheckCta } from "@/components/FitCheckCta";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function HomePage() {
  return (
    <div className="py-12">
      <Panel className="overflow-hidden p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
          <div>
            <div className="cc-kicker">For health and sensitive-data apps</div>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Find the trust failures buyers will question after launch.
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold text-white sm:text-xl">
              CrisisCore reviews health, wellness, legal, AI, and other sensitive-data products before launch, procurement review, or public scrutiny.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/74 sm:text-base">
              I inspect product behavior itself: collection defaults, consent flows, recovery paths, logging, export, retention, and privacy claims the system cannot yet defend. You get a short written readout with the real risks, the fix order, and the smallest useful next step.
            </p>

            <div className="mt-7 flex flex-wrap gap-2 text-xs text-white/78 sm:text-sm">
              <span className="cc-chip">48-hour teardown from CA$250</span>
              <span className="cc-chip">Full Review from CA$1,200</span>
              <span className="cc-chip">Fix Sprint from CA$1,500</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Get the 3-point risk read</Button>
              <Button href="/proof" variant="ghost">
                See verifiable proof
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-3xl border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(120,167,181,0.14),rgba(10,17,24,0.92))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <div className="text-xs uppercase tracking-[0.2em] text-[rgba(180,207,219,0.72)]">What this catches</div>
              <div className="mt-2 text-lg font-semibold">Over-collection, weak consent, and brittle flows</div>
              <p className="mt-2 text-sm leading-relaxed text-white/72">
                I focus on the few product choices most likely to create legal, reputational, or buyer-facing trouble.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">What you get back</div>
                <p className="mt-2 text-sm leading-relaxed text-white/74">A short list of issues, fixes, and next moves. Written readout, not a slide deck.</p>
              </div>
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(212,162,97,0.08)] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">Why teams use this</div>
                <p className="mt-2 text-sm leading-relaxed text-white/74">To avoid expensive cleanup after launch and narrow the risk surface before buyers inspect it.</p>
              </div>
            </div>
          </div>
        </div>

        <FitCheckCta
          className="mt-8"
          title="Start with the smallest useful brief: URL, launch window, and one concrete concern."
          description="I reply with the fastest sensible entry point, the top areas to inspect first, and whether the 48-hour teardown is enough."
        />

        <div className="mt-6 text-sm leading-relaxed text-white/65">
          I&apos;m the founder of CrisisCore Systems. I review fragile software systems for trust, privacy, and structural risk, with a focus on how real users experience consent, recovery, collection defaults, and boundary failures under launch pressure.
          <br />
          <br />
          The same method used in client work is visible in public: PainTracker (a minimization-first production app), ProofVault (release-bound trust evidence), and the Overton Framework canon.
        </div>
      </Panel>

      <Section id="services" title="Services" kicker="3 engagement paths">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="cc-card p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-[rgba(180,207,219,0.72)]">Fast signal</div>
            <h3 className="text-base font-semibold">48-hour teardown</h3>
            <p className="mt-2 text-sm text-white/70">A fast first pass for teams that need a clear answer on whether a real product problem exists.</p>
            <p className="mt-4 text-sm font-semibold text-white">Starting at CA$250</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Top 3 product trust risks</li>
              <li>• Why each risk matters</li>
              <li>• First fix for each issue</li>
              <li>• Recommendation: stop here, full review, or fix sprint</li>
              <li>• Short written readout</li>
            </ul>
            <div className="mt-4">
              <Button href="/artifacts/security-and-audits/sample-48-hour-teardown" variant="ghost">
                View sample teardown
              </Button>
            </div>
            <p className="mt-4 text-sm font-medium text-white">
              Use this when you need signal quickly and do not want to start with a full engagement.
            </p>
          </div>

          <div className="cc-card p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-[rgba(180,207,219,0.72)]">Full picture</div>
            <h3 className="text-base font-semibold">Full review</h3>
            <p className="mt-2 text-sm text-white/70">The deeper audit for products where data handling, product behavior, and buyer scrutiny all matter.</p>
            <p className="mt-4 text-sm font-semibold text-white">Starting at CA$1,200</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Threat model snapshot</li>
              <li>• Data boundary map</li>
              <li>• Collection and retention review</li>
              <li>• Product claims review</li>
              <li>• Risk-ranked fix roadmap</li>
              <li>• Proof gaps and buyer scrutiny notes</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              Use this when you need the full map of what is risky, what is sloppy, and what to fix first.
            </p>
          </div>

          <div className="cc-card p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-[rgba(180,207,219,0.72)]">Ship corrections</div>
            <h3 className="text-base font-semibold">Fix Sprint</h3>
            <p className="mt-2 text-sm text-white/70">Implementation support for the highest-value corrections.</p>
            <p className="mt-4 text-sm font-semibold text-white">Starting at CA$1,500</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Patch privacy or UX copy</li>
              <li>• Tighten data collection boundaries</li>
              <li>• Improve export, deletion, recovery, or consent flows</li>
              <li>• Add verification notes or tests where practical</li>
              <li>• Ship the highest-leverage corrections first</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              Use this when the problems are already known and you want them fixed fast.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <Button href="/contact">Get the 3-point risk read</Button>
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
                  Internal R&amp;D trust case showing how security claims were narrowed to what the release process could actually prove, then used to strengthen external client-facing review method.
                </p>
              </div>
            </div>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">See the work</div>
            <p className="mt-3 text-sm text-white/70">A flagship case study and a redacted artifact from a real engagement.</p>

            <div className="mt-6 grid gap-2">
              <Button href="/case-study/pain-tracker">Open PainTracker case study</Button>
              <Button href="/proof" variant="ghost" className="justify-center">
                See proof surface
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
              Get your 3-point risk read.
            </h2>
          <p className="mt-3 text-sm text-white/70">
            I&apos;ll tell you whether the 48-hour teardown, a full review, or no engagement makes sense.
          </p>
          <div className="mt-6">
              <Button href="/contact">Get the 3-point risk read</Button>
            </div>
        </Panel>
      </div>
    </div>
  );
}
