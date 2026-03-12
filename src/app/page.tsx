import { ArrowUpRight } from "lucide-react";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/Section";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function HomePage() {
  return (
    <div className="py-12">
      <Panel className="p-8 sm:p-10">
        <div className="cc-kicker">Protective Computing for Post-MVP Teams</div>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
          Defensible Trust Architecture for Sensitive-Data Products
        </h1>
        <p className="mt-5 text-xl font-semibold text-white">
          Two-week Trust Hardening Review for products that cannot afford trust failure.
        </p>
        <p className="mt-3 text-sm text-white/75 sm:text-base">
          For post-MVP teams building tools for clinicians, advocates, operators, and people under coercive pressure.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          If your product handles harm-prone data, the question is no longer whether the MVP works.
          The question is whether the system stays usable, bounded, and defensible when power,
          trust, connectivity, or operator confidence start to fail.
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          I help teams reduce dangerous data collection, harden critical flows, and leave with a
          decision-grade roadmap instead of another vague security memo.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge className="normal-case tracking-[0.08em]">2-week front-door review</Badge>
          <Badge className="normal-case tracking-[0.08em]">Post-MVP teams only</Badge>
          <Badge className="normal-case tracking-[0.08em]">Sensitive-data products</Badge>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">
            Send repo + context for fit check <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          <Button href="/proof" variant="ghost">
            Proof & Artifacts
          </Button>
          <Button href="/case-study/pain-tracker" variant="ghost">
            Read flagship case study
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">Front door</div>
            <div className="mt-2 text-base font-semibold">Trust Hardening Review</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Fixed-scope diagnostic for teams that need fast clarity before a larger hardening push.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">What you leave with</div>
            <div className="mt-2 text-base font-semibold">Defensibility Packet</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Threat model snapshot, abuse cases, trust boundaries, quick wins, and a now/next/later roadmap.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">Best fit</div>
            <div className="mt-2 text-base font-semibold">Decision-ready teams</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              You already have users or an imminent launch, plus the authority and budget to act on findings.
            </p>
          </div>
        </div>

        <div className="mt-6 text-sm text-white/65">
          Default ownership lives on-device. Cloud is optional, not assumed. Pricing is shared during fit check rather than guessed in public.
        </div>
      </Panel>

      <Section title="Who hires me and when" kicker="Fit first">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">Who hires me</h3>
            <p className="mt-2 text-sm text-white/70">
              Founders, technical leads, and operators responsible for products that handle sensitive,
              high-consequence data.
            </p>
          </div>
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">When they call</h3>
            <p className="mt-2 text-sm text-white/70">
              After MVP, before audit pain, before a launch with trust gaps, or after a near-miss that exposed weak boundaries.
            </p>
          </div>
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">What they need</h3>
            <p className="mt-2 text-sm text-white/70">
              Clear risk prioritization, fewer dangerous assumptions, and implementation guidance a product team can actually ship.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Outcome snapshots" kicker="Plain-English proof">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">Reduced dangerous data collection</h3>
            <p className="mt-2 text-sm text-white/70">
              Replace default collection with explicit boundaries, local authority, and user-initiated sharing paths.
            </p>
          </div>
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">Kept critical flows usable offline</h3>
            <p className="mt-2 text-sm text-white/70">
              Core actions still work under partial connectivity, degraded infrastructure, and attention collapse.
            </p>
          </div>
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">Replaced silent failure with visible recovery</h3>
            <p className="mt-2 text-sm text-white/70">
              Teams leave with clearer recovery states, safer fallbacks, and a decision trail they can defend.
            </p>
          </div>
        </div>
      </Section>

      <Section title="What happens in week one" kicker="Process without mystery">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">1. Boundary read</h3>
            <p className="mt-2 text-sm text-white/70">
              I review the product surface, repo, docs, and stated constraints to find where trust currently depends on hope.
            </p>
          </div>

          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">2. Risk compression</h3>
            <p className="mt-2 text-sm text-white/70">
              The highest-risk failure paths, abuse cases, and dangerous collection patterns get reduced into a prioritized map.
            </p>
          </div>

          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">3. Actionable handoff</h3>
            <p className="mt-2 text-sm text-white/70">
              You get a packet your team can use immediately: boundaries, quick wins, and a roadmap aligned to product reality.
            </p>
          </div>
        </div>
      </Section>

      <Section title="What you get" kicker="Deliverables">
        <div className="cc-card p-7">
          <ul className="space-y-3 text-sm text-white/80">
            <li>• Highest-risk failure paths and abuse cases, clearly mapped</li>
            <li>• Simpler data model with explicit boundaries and exits</li>
            <li>• Prioritized hardening roadmap your team can ship</li>
            <li>• Clear trust narrative for users, partners, and investors</li>
          </ul>
        </div>
      </Section>

      <Section title="Services" kicker="3 engagement paths">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="cc-card p-6">
            <h3 className="text-base font-semibold">1) Trust Hardening Review (front door)</h3>
            <p className="mt-2 text-sm text-white/70">For post-MVP teams needing fast clarity in a defined review window.</p>
            <p className="mt-2 text-sm text-white/80">
              Output: <span className="font-semibold text-white">Defensibility Packet</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Threat model snapshot + abuse cases</li>
              <li>• Boundary statement + data-flow trust map</li>
              <li>• Top 10 risks + quick wins + now/next/later roadmap</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              Best first move if you need to know where trust breaks and what to fix first.
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

      <Section title="Flagship walkthrough" kicker="Case-style proof">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="cc-card p-7">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">PainTracker.ca</div>
            <h3 className="mt-2 text-xl font-semibold">Before, risk, intervention, outcome</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-sm font-semibold text-white">Before</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Pain documentation tools often assume accounts, always-on sync, and high user energy.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Risk</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Sensitive health data becomes centralized exhaust, while the tool fails exactly when stress and connectivity get worse.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Intervention</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Local-first storage, offline-capable logging, explicit exports, and a reduced-friction flow designed for cognitive overload.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Outcome</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Core use without sign-up, no background sharing by default, and a live PWA that keeps working under degraded conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="cc-card p-7">
            <div className="text-sm font-semibold">Check the source surface</div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>• Live deployment</li>
              <li>• Public repository</li>
              <li>• Architecture and UI artifacts</li>
              <li>• Dossier with problem → constraints → method → proof → outputs</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/case-study/pain-tracker">Open case study</Button>
              <Button href="/proof" variant="ghost">
                Open proof surface
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Fit filters" kicker="Qualification">
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
          If your product handles high-stakes data, start with the review that shows where trust breaks.
        </h2>
        <p className="mt-3 text-sm text-white/70">
          Best fit: 4–12 week engagements for high-risk tools, clinics, or critical workflows. First step: send repo, context, constraints, and your decision timeline.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contact">
            Send repo + context for fit check <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          <Button href="/proof" variant="ghost">
            Review proof first
          </Button>
        </div>
      </Panel>
    </div>
  );
}

