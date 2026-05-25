import type { Metadata } from "next";
import { Panel } from "@/components/ui/Panel";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/Section";
import { FitCheckCta } from "@/components/FitCheckCta";
import CrisisCoreVisualStrip from "@/components/CrisisCoreVisualStrip";
import SampleTeardownPreview from "@/components/SampleTeardownPreview";

export const metadata: Metadata = {
  title: {
    absolute: "CrisisCore Systems | Protective Computing for Privacy First Health Software",
  },
  description:
    "Protective Computing, privacy-first health app architecture, and trust hardening for teams building sensitive-data software before launch or buyer review.",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function HomePage() {
  return (
    <div className="py-12">
      <Panel className="overflow-hidden p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
          <div>
            <div className="cc-kicker">Pre-compliance trust hardening for sensitive-data products</div>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl cc-hero-title">
              Your product may pass launch and still fail trust review.
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold text-white sm:text-xl">
              I find the collection, consent, logging, export, recovery, and privacy-claim gaps buyers will question before they become expensive.
            </p>

            <div className="mt-6">
              <FitCheckCta
                title="Send your product URL. Get the first 3 trust risks."
                description="Free fit check — I&apos;ll reply with the top 3 issues and the smallest useful next step."
                className="cc-hero"
                splitStageAndConcern
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/78 sm:text-sm">
              <span className="cc-chip">48-Hour Trust Risk Brief — from CA$250</span>
              <span className="cc-chip">Full Review — from CA$1,200</span>
              <span className="cc-chip">Fix Sprint — from CA$1,500</span>
            </div>
            <div className="mt-5 rounded-3xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.04)] p-5 text-sm leading-relaxed text-white/75">
              <p className="font-semibold text-white">Small business website trust cleanup</p>
              <p className="mt-2">A fast first look for motels, plumbers, contractors, clinics, salons, and other local services. Send your website and I’ll identify the top 3 trust issues that keep customers from calling or booking.</p>
              <div className="mt-4">
                <Button href="/trust-risk-read#small-business-trust-surface" variant="ghost">
                  Open Gmail and send your website
                </Button>
              </div>
              <div className="mt-4">
                <CrisisCoreVisualStrip />
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-white/55">
              Free fit check, not an audit. Direct email: <span className="font-mono text-white/78">crisiscore.systems@proton.me</span>. Do not include sensitive personal data in the first note. If safer intake is needed, write &quot;secure channel needed.&quot;
            </p>
          </div>

          <div className="grid gap-3">
            <div className="rounded-3xl overflow-hidden border border-[color:var(--line)] bg-[rgba(0,0,0,0.04)]">
              <Image
                src="/assets/crisiscore/01_trust_surface_radar.png"
                alt="Trust surface radar diagram showing six product trust risk areas: collection defaults, consent mismatch, logging and retention, export and deletion, recovery failure, and claim integrity."
                width={1800}
                height={1100}
                className="w-full h-auto block"
                priority
              />
              <div className="p-4 text-sm text-white/75">Trust surface radar — get a 3-point trust risk read.</div>
            </div>
            <div className="rounded-3xl border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(120,167,181,0.14),rgba(10,17,24,0.92))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <div className="text-xs uppercase tracking-[0.2em] text-[rgba(180,207,219,0.72)]">Where this fits</div>
              <div className="mt-2 text-lg font-semibold">Before SOC 2 evidence, HIPAA hosting, or audit cleanup</div>
              <p className="mt-2 text-sm leading-relaxed text-white/72">
                Compliance automation proves controls exist. This work checks whether the product behavior is worth defending in the first place.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">What this catches</div>
                <p className="mt-2 text-sm leading-relaxed text-white/74">Over-collection, weak consent, brittle recovery, and risky defaults buyers, users, auditors, or regulators will question first.</p>
              </div>
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(212,162,97,0.08)] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">What you get back</div>
                <p className="mt-2 text-sm leading-relaxed text-white/74">A short list of issues, fixes, and next moves. Written readout, not a slide deck and not a generic compliance checklist.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">Need trust review for your product</div>
            <p className="mt-3 text-sm leading-relaxed text-white/74">
              Start with the dedicated offer page if you need to know what gets reviewed, what comes back, and how to request the work.
            </p>
            <div className="mt-4">
              <Button href="/services" variant="ghost">
                View services
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">Read the Protective Computing doctrine</div>
            <p className="mt-3 text-sm leading-relaxed text-white/74">
              Use the broader route if you want the explanatory layer, product ecosystem, and doctrine behind the service work.
            </p>
            <div className="mt-4">
              <Button href="/writing" variant="ghost">
                Read method
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(212,162,97,0.08)] p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">View proof artifacts and case studies</div>
            <p className="mt-3 text-sm leading-relaxed text-white/74">
              Inspect the evidence path first if you need proof before you care about the pitch.
            </p>
            <div className="mt-4">
              <Button href="/proof" variant="ghost">
                See proof
              </Button>
            </div>
          </div>
        </div>

        <FitCheckCta
          className="mt-8"
          title="Get a 3-point risk read."
          description="Free fit check, not an audit. Send the product URL, launch stage, and one concern. I&apos;ll reply with whether this looks like a 48-hour teardown, full review, fix sprint, or no-fit."
          splitStageAndConcern
          checklistItems={[
            "Send product URL, launch stage, and one concern.",
            "Get the first 3 defensibility gaps and the recommended next step.",
            "Use this before buying a larger review path.",
          ]}
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
            <h3 className="text-base font-semibold">48-Hour Trust Risk Brief</h3>
            <p className="mt-2 text-sm text-white/70">A ranked 3-risk teardown of your product’s public trust surface, privacy claims, collection defaults, and launch-risk gaps.</p>
            <p className="mt-4 text-sm font-semibold text-white">CA$250 — 48-hour delivery</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Executive verdict and top 3 trust risks</li>
              <li>• Evidence references or screenshots</li>
              <li>• Why each risk matters and buyer-facing consequence</li>
              <li>• First fix and recommended next path (stop / full review / fix sprint)</li>
              <li>• Packaged as a polished brief (PDF/Markdown) with one-line quote</li>
            </ul>
            <div className="mt-4">
              <Button href="/artifacts/security-and-audits/sample-48-hour-teardown" variant="ghost">
                View sample brief
              </Button>
            </div>
            <div className="mt-4">
              <SampleTeardownPreview />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/64">
              The brief is a delivery artifact, not informal notes — ready to share with buyers or internal stakeholders.
            </p>
            <p className="mt-4 text-sm font-medium text-white">
              Use this when you need signal quickly and a shareable artifact to move the conversation forward.
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
          <Button href="/trust-risk-read">Get a 3-point risk read</Button>
        </div>
      </Section>

      <Section id="fit-layer" title="Where CrisisCore Fits" kicker="Category boundary">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Panel className="p-7 sm:p-8">
            <div className="cc-kicker">Earlier than most trust vendors</div>
            <h3 className="mt-2 text-xl font-semibold">This is the pre-audit product risk layer.</h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/72">
              <p>
                CrisisCore is not a compliance automation platform, law firm, or pentest replacement.
              </p>
              <p>
                It sits earlier: before SOC 2 evidence collection, before HIPAA hosting decisions, before enterprise questionnaires, and before risky defaults harden into expensive architecture.
              </p>
              <p>
                I review the product itself: what it collects, what it assumes, what it stores, what it shares, what breaks under pressure, and what a skeptical buyer will question first.
              </p>
            </div>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Use CrisisCore when</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• The product works, but the trust model feels wrong</li>
              <li>• You are unsure whether collection, consent, export, deletion, or recovery flows are defensible</li>
              <li>• You need to know whether to fix the product before buying compliance machinery</li>
              <li>• You want product behavior reviewed, not just paperwork</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-[rgba(212,162,97,0.28)] bg-[rgba(212,162,97,0.08)] p-4 text-sm leading-relaxed text-white/76">
              Not sure if you need compliance automation, a lawyer, a pentest, or a product trust review? Send the URL, launch stage, and one concern. I&apos;ll tell you where the risk actually points.
            </div>
            <div className="mt-6">
              <Button href="/trust-risk-read">Get a 3-point risk read</Button>
            </div>
          </Panel>
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
                See proof
              </Button>
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="text-sm font-semibold">Related evidence</div>
              <div className="mt-3 grid gap-2">
                <Button href="/projects/pain-tracker" variant="ghost" className="justify-center">
                  PainTracker reference implementation
                </Button>
                <Button href="/case-study/proofvault" variant="ghost" className="justify-center">
                  ProofVault trust case
                </Button>
                <Button href="/writing/the-overton-framework" variant="ghost" className="justify-center">
                  Overton Framework
                </Button>
                <Button href="/writing/protective-computing-doctrine" variant="ghost" className="justify-center">
                  Protective Computing canon
                </Button>
                <Button href="/writing" variant="ghost" className="justify-center">
                  Public writing archive
                </Button>
              </div>
            </div>
          </Panel>
        </div>
      </Section>

      <Section id="fit" title="Who This Fits" kicker="Sharp qualification">
        <div className="grid gap-4 md:grid-cols-2">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Who buys this</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• Health app founders before launch or partner review</li>
              <li>• AI tools handling sensitive prompts, outputs, or logs</li>
              <li>• Legal-tech products facing buyer or procurement scrutiny</li>
              <li>• Wellness apps collecting intimate behavioral data</li>
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
            Free fit check. Not an audit. I&apos;ll tell you whether the 48-hour teardown, a full review, a fix sprint, or no engagement makes sense.
          </p>
          <div className="mt-6">
            <Button href="/trust-risk-read">Get a 3-point risk read</Button>
          </div>
        </Panel>
      </div>
    </div>
  );
}
