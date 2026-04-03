import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/Section";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const HOME_SECTIONS = [
  { href: "#services", label: "Services", number: "01" },
  { href: "#proof", label: "Proof", number: "02" },
  { href: "#fit", label: "Fit", number: "03" },
  { href: "#process", label: "Process", number: "04" },
  { href: "#contact", label: "Contact", number: "05" },
];

export default function HomePage() {
  return (
    <div className="py-12">
      <Panel className="p-8 sm:p-10">
        <div className="cc-kicker">For health and sensitive-data apps</div>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
          Pre-launch privacy teardown for health and sensitive-data apps.
        </h1>
        <p className="mt-5 text-xl font-semibold text-white">
          I help founders catch the risky defaults, privacy gaps, and trust-breaking flows most likely to become launch friction or user distrust.
        </p>
        <p className="mt-3 text-sm text-white/75 sm:text-base">
          Best fit: health-adjacent, wellness, case-management, AI, or other products handling sensitive user data where the wrong architecture can quietly create trust risk.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          If you are close to launch, already live, or uneasy about what your product is collecting, storing, or assuming in the background, this is the point of entry.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70 sm:text-sm">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">48-hour risk read from CA$250</span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">Full Review from CA$1,200</span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">Fix Sprint from CA$1,500</span>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">Get a 3-point risk read</Button>
          <Button href="/services" variant="ghost">
            See services
          </Button>
          <Button href="/proof" variant="ghost">
            See outcomes
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">What I do</div>
            <div className="mt-2 text-base font-semibold">Privacy teardowns, full reviews, and fix sprints</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              I find the product choices most likely to create trust problems before users, partners, or auditors do.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">Who hires me</div>
            <div className="mt-2 text-base font-semibold">Founders shipping sensitive workflows</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Small teams with real users, real launch pressure, and no patience for vague security theater.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">How to start</div>
            <div className="mt-2 text-base font-semibold">Send the link, concern, and deadline</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              No long brief required. Send the product link, one sentence on the concern, and your deadline.
            </p>
          </div>
        </div>

        <div className="mt-6 text-sm text-white/65">
          Founder of CrisisCore Systems. I review fragile software systems for trust, privacy, and structural risk.
        </div>
      </Panel>

      <nav
        aria-label="Home page sections"
        className="sticky top-16 z-20 mt-6 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur"
      >
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <div className="mr-2 text-[11px] uppercase tracking-[0.18em] text-white/45">Jump to</div>
          {HOME_SECTIONS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              <span className="font-mono text-white/45">{item.number}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      <Section id="services" title="Services" kicker="3 engagement paths">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">48-hour Trust Teardown</h3>
            <p className="mt-2 text-sm text-white/70">A low-friction first step for founders who want a fast read on whether trust risk is real.</p>
            <p className="mt-4 text-sm font-semibold text-white">Starting at CA$250</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• 48 hour turnaround</li>
              <li>• Top 3 trust risks</li>
              <li>• 3 concrete fixes</li>
              <li>• Recommendation on whether deeper review is worth it</li>
              <li>• Short written readout</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              Use this when you want a small first step instead of a full engagement.
            </p>
          </div>

          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">Full Trust Review</h3>
            <p className="mt-2 text-sm text-white/70">The flagship review for products where sensitive data and user trust are central to the product.</p>
            <p className="mt-4 text-sm font-semibold text-white">Starting at CA$1,200</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Threat model snapshot</li>
              <li>• Privacy risk review</li>
              <li>• Structural weakness analysis</li>
              <li>• Product trust boundary review</li>
              <li>• Prioritized roadmap</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              Use this when you need the full map of what could break trust and what to fix first.
            </p>
          </div>

          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">Fix Sprint</h3>
            <p className="mt-2 text-sm text-white/70">Implementation support for the highest-value corrections.</p>
            <p className="mt-4 text-sm font-semibold text-white">Starting at CA$1,500</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Deploy issues</li>
              <li>• Trust boundary cleanup</li>
              <li>• Copy and UX trust fixes</li>
              <li>• Architectural hardening</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              Use this when the problems are already known and you want them fixed fast.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Button href="/services">See service details</Button>
          <Button href="/contact" variant="ghost">
            Get a 3-point risk read
          </Button>
        </div>
      </Section>

      <Section id="proof" title="Proof" kicker="Why believe this">
        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.95fr]">
          <Panel className="p-7 sm:p-8">
            <div className="cc-kicker">Flagship evidence path</div>
            <h3 className="mt-2 text-xl font-semibold">PainTracker, ProofVault, redacted audit artifacts, and technical essays</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              The proof surface already shows the kind of work buyers need to inspect: minimization decisions, trust boundary design, release-bound evidence, public repos, and long-form technical reasoning.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">PainTracker</div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Privacy-first redesign work for a sensitive health-adjacent workflow, with local-first defaults and explicit sharing.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">ProofVault</div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Bounded trust evidence tied to a hosted-green release path, with a smaller and more defensible claim surface.
                </p>
              </div>
            </div>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Start here</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• Review the flagship case study</li>
              <li>• See the before-and-after outcome</li>
              <li>• Check one redacted artifact</li>
              <li>• If it matches your situation, start with the 48-hour teardown</li>
            </ul>

            <div className="mt-6 grid gap-2">
              <Button href="/case-study/pain-tracker">Read flagship case study</Button>
              <Button href="/services" variant="ghost" className="justify-center">
                See services
              </Button>
              <Button href="/artifacts/security-and-audits/redacted-threat-model-excerpt" variant="ghost" className="justify-center">
                Open redacted artifact
              </Button>
              <Button href="/contact" variant="ghost" className="justify-center">
                Get a 3-point risk read
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
              <li>• Founders who want concrete fixes instead of posture language</li>
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

        <div className="mt-5 text-sm text-white/65">
          If you are not sure which package fits, start with the 48-hour Trust Teardown.
        </div>
      </Section>

      <Section id="process" title="How It Starts" kicker="Simple process">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">1. Send the link, concern, and deadline</h3>
            <p className="mt-2 text-sm text-white/70">
              The first message can be tiny. Product link, one-sentence concern, and deadline is enough.
            </p>
          </div>
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">2. I identify the highest-risk issues</h3>
            <p className="mt-2 text-sm text-white/70">
              I look for risky defaults, privacy gaps, misleading flows, and trust-breaking assumptions that matter most.
            </p>
          </div>
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">3. You get concrete next moves</h3>
            <p className="mt-2 text-sm text-white/70">
              You get a short written readout or roadmap with clear fixes, not homework disguised as strategy.
            </p>
          </div>
        </div>
      </Section>

      <div id="contact" className="scroll-mt-28">
        <Panel className="p-8 sm:p-10">
          <div className="text-xs uppercase tracking-[0.2em] text-white/45">Get started</div>
          <h2 className="mt-2 text-2xl font-semibold">
            Want a quick read on whether your product has a trust problem?
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Send the link, your main concern, and your deadline. I&apos;ll tell you whether a 48-hour teardown or a deeper review makes sense.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact">Get a 3-point risk read</Button>
            <Button href="/services" variant="ghost">
              See services
            </Button>
            <Button href="mailto:crisiscore.systems@proton.me" variant="ghost">
              Email directly
            </Button>
          </div>
        </Panel>
      </div>
    </div>
  );
}

