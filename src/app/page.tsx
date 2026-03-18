import { ArrowUpRight } from "lucide-react";
import { AssetFigure } from "@/components/AssetFigure";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
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
          Two-week Trust Hardening Review that cuts dangerous data collection, makes boundaries explicit, and leaves you with a roadmap your team can ship.
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
          roadmap a product team can actually act on.
        </p>

        <p className="mt-6 text-sm font-medium text-white/85 sm:text-base">
          A two-week front-door review for post-MVP teams building sensitive-data products.
        </p>

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

        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.95fr)] lg:items-start">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
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
                Boundary statement, data inventory and purpose map, collection defaults audit, retention and deletion plan, and a now/next/later roadmap.
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

          <AssetFigure
            src="/assets/founder-banners/site_hero_banner.svg"
            alt="CrisisCore site hero banner showing protective computing positioning"
            title="Hero surface"
          />
        </div>

        <div className="mt-6 text-sm text-white/65">
          Default ownership stays on-device. Cloud is optional, not assumed. Pricing is discussed after fit is established.
        </div>
      </Panel>

      <Section title="Defensibility Packet Preview" kicker="What you actually get">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <AssetFigure
            src="/assets/proof-cards/defensibility_packet_preview_wide_16x9.svg"
            alt="Redacted Defensibility Packet preview showing packet outline, measurable endpoints, and required access"
            title="Redacted packet specimen"
            imageClassName="object-cover p-0"
          />

          <div className="grid gap-4">
            <div className="cc-card p-6">
              <h3 className="text-base font-semibold">What this preview makes concrete</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li>• The packet is a real deliverable shape, not a vague consulting promise</li>
                <li>• The end state is measurable: ranked risks, explicit boundaries, offline findings</li>
                <li>• The access boundary is visible, so the two-week scope reads as bounded</li>
              </ul>
            </div>

            <div className="cc-card p-6">
              <h3 className="text-base font-semibold">Open the artifact</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Inspect the preview directly.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/artifacts/security-and-audits/defensibility-packet-preview" variant="ghost">
                  Open packet preview
                </Button>
                <Button href="/artifacts/security-and-audits/redacted-threat-model-excerpt" variant="ghost">
                  Open redacted artifact
                </Button>
                <Button href="/proof" variant="ghost">
                  See proof surface
                </Button>
              </div>
            </div>

            <div className="cc-card p-6">
              <h3 className="text-base font-semibold">What gets proved by the end</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li>• Boundary statement your team can review and accept</li>
                <li>• Top 10 risks ranked by severity, blast radius, and fix effort</li>
                <li>• Data inventory before/after decisions called out explicitly</li>
                <li>• Offline critical-path findings for the flows that matter most</li>
              </ul>
            </div>

            <div className="cc-card p-6">
              <h3 className="text-base font-semibold">What I need from you</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li>• Repo, docs, and deployment links</li>
                <li>• One technical owner and one decision-maker</li>
                <li>• A small number of working sessions, not a meeting-heavy process</li>
                <li>• Enough access to inspect the critical flows without blocking on procurement churn</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Fast Fit" kicker="Qualify early">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="cc-card p-6">
              <h3 className="text-base font-semibold">Great fit</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li>• Post-MVP product with live usage or an imminent launch</li>
                <li>• Sensitive, harm-prone, or coercion-sensitive data</li>
                <li>• One technical owner and one decision-maker available</li>
                <li>• Team is willing to reduce collection and enforce boundaries</li>
              </ul>
            </div>

            <div className="cc-card p-6">
              <h3 className="text-base font-semibold">Not for</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li>• Idea-stage MVP builds or generic staff augmentation</li>
                <li>• Checkbox compliance shopping without product changes</li>
                <li>• Generic pentest replacement expectations</li>
                <li>• Teams with no owner, no authority, or meeting-heavy churn</li>
              </ul>
            </div>
          </div>

          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Works well with</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Product-facing trust work where architecture, defaults, and degraded-mode behavior matter more than a generic audit checklist.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
                Web apps, PWAs, and mobile-adjacent products with critical user flows
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
                Clinician-adjacent, HIPAA-adjacent, and trust-sensitive startup products
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
                SOC2-bound teams that need product reality, not compliance theater
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
                Internal operator systems with incident pressure, degraded conditions, or coercion risk
              </div>
            </div>

            <div className="mt-5 text-sm text-white/70">
              Not a generic pentest. Not a paper-only audit. The focus is product-facing trust boundaries, minimization decisions, offline resilience, and a ship-ready roadmap.
            </div>
          </Panel>
        </div>
      </Section>

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
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
            <ul className="space-y-3 text-sm text-white/80">
              <li>• Data inventory + purpose map for sensitive categories and flows</li>
              <li>• Collection defaults audit showing what is reduced, refused, or made explicit</li>
              <li>• Retention and deletion plan with concrete boundary decisions</li>
              <li>• User-initiated sharing design plus a prioritized hardening roadmap</li>
            </ul>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <AssetFigure
                src="/assets/service-panels/trust_hardening_review.svg"
                alt="Trust Hardening Review service panel"
                title="Front-door review"
              />
              <AssetFigure
                src="/assets/service-panels/defensibility_packet.svg"
                alt="Defensibility Packet service panel"
                title="Primary deliverable"
              />
            </div>
          </div>
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
              <li>• Boundary statement + data inventory + purpose map</li>
              <li>• Collection defaults audit + retention/deletion plan + roadmap</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-white">
              Use this when you need to know where trust breaks and what to fix first.
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
            <h3 className="mt-2 text-xl font-semibold">Minimization-first redesign</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
              Reduce collection by default, keep core use on-device, and make sharing explicit.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-sm font-semibold text-white">Before</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Pain documentation tools often collect intimate symptom history into centralized accounts, assume always-on sync, and persist records beyond the user&apos;s immediate control.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">After</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Core logging stays local by default, no sign-up is required for primary use, and sharing happens through explicit user-initiated export paths.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Minimization delta</div>
                <ul className="mt-2 space-y-2 text-sm leading-relaxed text-white/70">
                  <li>• Removed default collection paths that push sensitive entries into centralized account systems</li>
                  <li>• Moved symptom logging and day-to-day ownership to on-device storage by default</li>
                  <li>• Replaced background sharing assumptions with explicit export the user initiates when needed</li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Why it matters</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  The product stays usable under degraded conditions without expanding collection surface area just to preserve convenience.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white">Proof you can inspect</div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/45">Boundary statement</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Core use refuses account-first collection and avoids background sharing as the default operating model.
                  </p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/45">Data inventory</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Sensitive categories and their purpose are mapped so collection is justified, bounded, and inspectable.
                  </p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/45">Retention and deletion</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Retention follows user-controlled local ownership by default, with deletion posture kept legible instead of implied.
                  </p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/45">Export and sharing</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Sharing paths are explicit and user-initiated, replacing silent sync assumptions with deliberate export behavior.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="cc-card p-7">
            <div className="text-sm font-semibold">Check the source surface</div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>• Live deployment</li>
              <li>• Public repository</li>
              <li>• Boundary statement, architecture, and UI artifacts</li>
              <li>• Dossier with problem → constraints → minimization decisions → proof → outputs</li>
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

      <Section title="More Proof Snapshots" kicker="Beyond one flagship">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="cc-card p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">ProofVault</div>
            <h3 className="mt-2 text-base font-semibold">Bounded trust evidence for a release path</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              ProofVault narrows the public claim to what a pinned specimen, verifier path, drift enforcement, and hosted-green release provenance can prove.
            </p>
            <div className="mt-4 text-sm text-white/80">
              Output: smaller claim surface, reproducible specimen, release-bound provenance.
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/case-study/proofvault" variant="ghost">
                Open case study
              </Button>
              <Button href="/writing/proofvault-trust-case-v1-0-1" variant="ghost">
                Open article
              </Button>
            </div>
          </div>

          <div className="cc-card p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">Security and audits</div>
            <h3 className="mt-2 text-base font-semibold">Audit output shaped for operators, not theater</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              This work turns threat boundaries, reproduction paths, and remediation evidence into a bounded risk register and verification plan.
            </p>
            <div className="mt-4 text-sm text-white/80">
              Output: top findings, explicit assumptions, verification steps, operator-ready next actions.
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/proof" variant="ghost">
                Open proof page
              </Button>
              <Button href="/artifacts/security-and-audits/redacted-threat-model-excerpt" variant="ghost">
                Open redacted artifact
              </Button>
            </div>
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
          Best fit: 4–12 week engagements for high-risk tools, clinician-adjacent products, and critical workflows. First step: send repo, context, constraints, and your decision timeline.
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

