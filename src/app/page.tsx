import { ArrowUpRight } from "lucide-react";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/Section";

export default function HomePage() {
  return (
    <div className="py-12">
      <Panel className="p-8 sm:p-10">
        <div className="cc-kicker">Protective Computing</div>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
          Defensible Trust Architecture for Sensitive-Data Products
        </h1>
        <p className="mt-5 text-xl font-semibold text-white">Your MVP works. Now make it defensible.</p>
        <p className="mt-3 text-sm text-white/75 sm:text-base">
          For post-MVP teams building tools for clinicians, advocates, and people under coercive pressure.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          For products handling harm-prone data, “good enough” is liability. I design local-first,
          reversible systems that keep people functional when power, trust, or connectivity are
          failing.
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          Built for low energy, low trust, partial connectivity, and real coercion risk.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge className="normal-case tracking-[0.08em]">Threat model → clear boundaries</Badge>
          <Badge className="normal-case tracking-[0.08em]">Data minimization → smaller blast radius</Badge>
          <Badge className="normal-case tracking-[0.08em]">Decision-grade handoff</Badge>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">
            Apply for a Trust Hardening Review <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          <Button href="/proof" variant="ghost">
            Proof & Artifacts
          </Button>
          <Badge className="normal-case tracking-[0.08em]">Proof beats narrative</Badge>
        </div>

        <div className="mt-6 text-sm text-white/65">
          Default ownership lives on-device. Cloud is optional, not assumed.
        </div>
      </Panel>

      <Section title="What I actually do" kicker="In practice">
        <div className="cc-card p-7">
          <ul className="space-y-3 text-sm text-white/80">
            <li>• Architect privacy-preserving, local-first apps</li>
            <li>• Design degraded-mode UX and recovery playbooks</li>
            <li>• Build measurable protective criteria (scores, checklists, tests)</li>
          </ul>
        </div>
      </Section>

      <Section title="Core definitions" kicker="Semantic anchor">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">Protective computing</h3>
            <p className="mt-2 text-sm text-white/70">
              Systems designed to degrade safely under instability, not just perform under ideal
              conditions.
            </p>
          </div>
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">Local authority</h3>
            <p className="mt-2 text-sm text-white/70">
              Data ownership and control remain with the user’s device by default; cloud is optional.
            </p>
          </div>
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">Reversible by design</h3>
            <p className="mt-2 text-sm text-white/70">
              Critical actions include undo paths and safe failure modes so harm is harder to make
              permanent.
            </p>
          </div>
        </div>
      </Section>

      <Section title="What you get" kicker="Outcomes">
        <div className="cc-card p-7">
          <ul className="space-y-3 text-sm text-white/80">
            <li>• Highest-risk failure paths and abuse cases, clearly mapped</li>
            <li>• Simpler data model with explicit boundaries and exits</li>
            <li>• Prioritized hardening roadmap your team can ship</li>
            <li>• Clear trust narrative for users, partners, and investors</li>
          </ul>
        </div>
      </Section>

      <Section title="The Protective Computing difference" kicker="Why this works">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">1) Risk-first, not feature-first</h3>
            <p className="mt-2 text-sm text-white/70">
              Privacy is architectural: minimize dangerous data, or never collect it.
            </p>
            <p className="mt-4 text-sm font-medium text-white">
              “We don’t add privacy later. We design the system so the dangerous data doesn’t exist.”
            </p>
          </div>

          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">2) Built for reality, not ideal conditions</h3>
            <p className="mt-2 text-sm text-white/70">
              Built for low signal, low battery, stressed users, and messy environments.
            </p>
            <p className="mt-4 text-sm font-medium text-white">
              “Built for low signal, low battery, and high stress—because that’s when trust matters.”
            </p>
          </div>

          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">3) Defensibility shipped + documented</h3>
            <p className="mt-2 text-sm text-white/70">
              You ship protections plus a decision trail your team can defend and maintain.
            </p>
            <p className="mt-4 text-sm font-medium text-white">
              “You don’t just get a build. You get defensibility—and the receipts.”
            </p>
          </div>
        </div>
      </Section>

      <Section title="Services" kicker="3 offers">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">1) Trust Hardening Review (front door)</h3>
            <p className="mt-2 text-sm text-white/70">For post-MVP teams needing fast clarity.</p>
            <p className="mt-2 text-sm text-white/80">
              Output: <span className="font-semibold text-white">Defensibility Packet</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Threat model snapshot + abuse cases</li>
              <li>• Boundary statement + data-flow trust map</li>
              <li>• Top 10 risks + quick wins + now/next/later roadmap</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              Know where trust breaks and what to fix first.
            </p>
          </div>

          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">2) Hardening Sprint (implementation)</h3>
            <p className="mt-2 text-sm text-white/70">For teams ready to ship protections.</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Data minimization redesign</li>
              <li>• Local-first/offline upgrades for critical flows</li>
              <li>• Telemetry discipline + guardrails + handoff docs</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              From risk map to shipped protections, fast.
            </p>
          </div>

          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">3) Fractional Trust Architect (retainer)</h3>
            <p className="mt-2 text-sm text-white/70">For teams scaling features under scrutiny.</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Release gating + architecture reviews</li>
              <li>• Threat model updates per major changes</li>
              <li>• Continuous minimization + boundary enforcement + incident readiness</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              A long-term trust backbone in product decisions.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Fit filters" kicker="Premium gate">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">Great fit</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Post-MVP (live usage or imminent launch)</li>
              <li>• You handle sensitive, harm-prone data</li>
              <li>• Resourced team with implementation budget</li>
              <li>• One decision-maker + one technical owner</li>
              <li>• Willing to minimize data and enforce boundaries</li>
            </ul>
          </div>

          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">Not a fit</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Idea-stage “build my MVP cheap”</li>
              <li>• Teams unwilling to change data collection behavior</li>
              <li>• No ownership, no authority, committee churn</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Proof" kicker="Make the claims undeniable">
        <div className="cc-card p-7">
          <ul className="space-y-3 text-sm text-white/80">
            <li>• Before/after data-flow diagrams</li>
            <li>• Redacted trust artifacts: threat model, boundary map, decision log</li>
            <li>• Outcome tiles: less data, better offline coverage, lower support load and risk</li>
            <li>• Build receipts: redacted PRs, release gates, checklists</li>
            <li>• Method-specific testimonials</li>
          </ul>
          <p className="mt-4 text-sm text-white/70">
            Gives collaborators a testable vocabulary for protective design reviews and audits.
          </p>
        </div>
      </Section>

      <Panel className="p-8 sm:p-10">
        <div className="text-xs uppercase tracking-[0.2em] text-white/45">Close</div>
        <h2 className="mt-2 text-2xl font-semibold">
          If your product handles high-stakes data, you don’t need more features. You need defensibility.
        </h2>
        <p className="mt-3 text-sm text-white/70">
          Best fit: 4–12 week engagements for high-risk tools, clinics, or critical workflows.
        </p>
        <div className="mt-6">
          <Button href="/contact">
            Apply for a Trust Hardening Review <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Panel>
    </div>
  );
}

