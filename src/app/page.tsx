import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/Section";
import { FitCheckCta } from "@/components/FitCheckCta";
import { BUYER_INTENT_PAGES } from "@/app/lib/buyer-intent";

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
          Find product and privacy issues before they become launch problems.
        </h1>
        <p className="mt-5 text-xl font-semibold text-white">
          I review sensitive-data products for risky defaults, confusing consent, and avoidable data collection.
        </p>
        <p className="mt-3 text-sm text-white/75 sm:text-base">
          Best fit: teams near launch or already live.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          You get a prioritized list of what is wrong, what matters now, and what to fix first.
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
              No padded report. Just clear problems, priority order, and the smallest useful way forward.
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
            <h3 className="text-base font-semibold">48-hour teardown</h3>
            <p className="mt-2 text-sm text-white/70">A fast first pass for teams that need a clear answer on whether a real product problem exists.</p>
            <p className="mt-4 text-sm font-semibold text-white">Starting at CA$250</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• 48 hour turnaround</li>
              <li>• Top 3 issues to address first</li>
              <li>• Concrete fixes you can act on</li>
              <li>• Recommendation on whether deeper review is worth it</li>
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
              <li>• Structural weakness analysis</li>
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

      <Section title="Common Founder Queries" kicker="Search-entry pages">
        <div className="grid gap-4 md:grid-cols-3">
          {BUYER_INTENT_PAGES.map((page) => (
            <Panel key={page.slug} className="p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">{page.query}</div>
              <h3 className="mt-3 text-lg font-semibold">{page.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{page.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button href={`/services/${page.slug}`} variant="ghost" className="justify-center">
                  Open page
                </Button>
                <Button href={page.proofHref} variant="ghost" className="justify-center">
                  See proof
                </Button>
              </div>
            </Panel>
          ))}
        </div>

        <div className="mt-5 text-sm text-white/65">
          These pages are built around plain-language problems founders actually search for.
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

        <div className="mt-5 text-sm text-white/65">
          If you are unsure which package fits, start with the 48-hour teardown.
        </div>
      </Section>

      <Section id="process" title="How It Starts" kicker="Simple process">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">1. Send the link, stage, and deadline</h3>
            <p className="mt-2 text-sm text-white/70">
              Keep it short: product link, launch stage, and one clear concern.
            </p>
          </div>
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">2. I identify the highest-risk issues</h3>
            <p className="mt-2 text-sm text-white/70">
              I look for risky defaults, privacy gaps, misleading product behavior, and weak operational assumptions.
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
            Need a straight answer on whether your product has a real problem?
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Send the link, deadline, and main concern. I&apos;ll tell you whether a 48-hour teardown, deeper review, or no engagement makes sense.
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

