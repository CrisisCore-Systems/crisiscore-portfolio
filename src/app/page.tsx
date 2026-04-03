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
        <div className="cc-kicker">CrisisCore Systems</div>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
          I help founders find structural trust failures before users do.
        </h1>
        <p className="mt-5 text-xl font-semibold text-white">
          Trust hardening, privacy architecture, and structural risk review for real products.
        </p>
        <p className="mt-3 text-sm text-white/75 sm:text-base">
          I help founders find the hidden weaknesses in apps handling sensitive, personal, legal, health, or high-risk data before those weaknesses become trust failures.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          Best fit: post-MVP teams with a live product, launch pressure, or a growing sense that privacy, trust boundaries, and risky defaults are weaker than they should be.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70 sm:text-sm">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">Fast Teardown from CA$300</span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">Full Review from CA$1,200</span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">Fix Sprint from CA$1,500</span>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">Book a review</Button>
          <Button href="/services" variant="ghost">
            See services
          </Button>
          <Button href="/proof" variant="ghost">
            See proof
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">What I do</div>
            <div className="mt-2 text-base font-semibold">Audits, hardening, and fix sprints</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Sharp reviews for fragile products handling sensitive user reality.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">Who hires me</div>
            <div className="mt-2 text-base font-semibold">Founders and technical owners</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Teams with real users, real exposure, and not much patience for vague advice.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">How to start</div>
            <div className="mt-2 text-base font-semibold">Send the app, stack, and concern</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Need a sharp review on your product&apos;s privacy, trust, or risk posture? Send the app, stack, and concern and I&apos;ll point you to the right package.
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
            <h3 className="text-base font-semibold">Fast Teardown</h3>
            <p className="mt-2 text-sm text-white/70">A focused review for founders who need sharp eyes on a live product.</p>
            <p className="mt-4 text-sm font-semibold text-white">Starting at CA$300</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• 48 hour turnaround</li>
              <li>• Architecture and trust risk findings</li>
              <li>• Concrete priority fixes</li>
              <li>• Short written packet</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              Use this when you need an informed second set of eyes before you ship.
            </p>
          </div>

          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">Full Trust Hardening Review</h3>
            <p className="mt-2 text-sm text-white/70">The flagship review for products handling sensitive user reality.</p>
            <p className="mt-4 text-sm font-semibold text-white">Starting at CA$1,200</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Threat model snapshot</li>
              <li>• Privacy and coercion risk review</li>
              <li>• Structural weakness analysis</li>
              <li>• Product trust boundary review</li>
              <li>• Prioritized roadmap</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              Use this when you need to know where trust breaks, why, and what to fix first.
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
            Book a review
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
              <li>• Open the proof page for artifacts and outcomes</li>
              <li>• Inspect a redacted threat-model excerpt</li>
              <li>• Go to services if you already know the work is relevant</li>
            </ul>

            <div className="mt-6 grid gap-2">
              <Button href="/case-study/pain-tracker">Read flagship case study</Button>
              <Button href="/services" variant="ghost" className="justify-center">
                See services
              </Button>
              <Button href="/proof" variant="ghost" className="justify-center">
                Open proof surface
              </Button>
              <Button href="/contact" variant="ghost" className="justify-center">
                Book a review
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
          If you are not sure which package fits, start with Fast Teardown.
        </div>
      </Section>

      <Section id="process" title="How It Starts" kicker="Simple process">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">1. Send the app, stack, and concern</h3>
            <p className="mt-2 text-sm text-white/70">
              The fastest path is a short note with repo, deployment, screenshots, or docs and the issue you are worried about.
            </p>
          </div>
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">2. I review the edges</h3>
            <p className="mt-2 text-sm text-white/70">
              I look for hidden trust failures in architecture, defaults, boundary assumptions, privacy posture, and degraded-path behavior.
            </p>
          </div>
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">3. You get concrete next moves</h3>
            <p className="mt-2 text-sm text-white/70">
              Findings come back as a short packet or roadmap with clear priority fixes, not a vague deck.
            </p>
          </div>
        </div>
      </Section>

      <div id="contact" className="scroll-mt-28">
        <Panel className="p-8 sm:p-10">
          <div className="text-xs uppercase tracking-[0.2em] text-white/45">Get started</div>
          <h2 className="mt-2 text-2xl font-semibold">
            Need a sharp review on your product&apos;s privacy, trust, or risk posture?
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Send the app, stack, and concern. If it looks like a fit, I&apos;ll point you to the right engagement and next step.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact">Book a review</Button>
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

