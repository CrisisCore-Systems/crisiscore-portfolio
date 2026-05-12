import { absoluteUrl } from "@/app/lib/site";
import { AssetFigure } from "@/components/AssetFigure";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { FitCheckCta } from "@/components/FitCheckCta";
import { loadCanon, loadDossier } from "@/content/load";

export const metadata = {
  title: "Proof",
  description: "Evidence-backed work: case studies, redacted audit artifacts, source records, and public proof buyers can inspect.",
  openGraph: {
    images: [{ url: absoluteUrl("/assets/proof-cards/trust_case_excerpt_wide_16x9.svg") }],
  },
  twitter: {
    images: [absoluteUrl("/assets/proof-cards/trust_case_excerpt_wide_16x9.svg")],
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ProofPage() {
  const buildStamp = process.env.NEXT_PUBLIC_BUILD_COMMIT;
  const buildSuffix = buildStamp && buildStamp !== "unknown" ? `?v=${buildStamp}` : "";
  const withBuild = (path: string) => `${path}${buildSuffix}`;

  const canon = loadCanon();
  const painDossier = loadDossier("pain-tracker");
  const proofVaultDossier = loadDossier("proofvault");
  const auditDossier = loadDossier("security-and-audits");
  const canonPrimary = canon.layers[0]?.links?.[0];
  const canonLastLayer = canon.layers.at(-1);

  return (
    <div className="py-12">
      <Panel className="p-7 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div>
            <div className="cc-kicker">Proof</div>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Release evidence, trust case materials, and verification receipts.
            </h1>
            <p className="mt-4 cc-lede">
              Start here if you want to verify the work. This page shows what can be inspected, what order to inspect it in, and where the public source record lives.
            </p>
            <p className="mt-2 max-w-3xl rounded-2xl border border-[rgba(212,162,97,0.32)] bg-[rgba(212,162,97,0.08)] px-4 py-3 text-sm leading-relaxed text-white/80">
              What this page is not: not a claim of perfect security, universal protection, or guaranteed outcomes. It is an inspection surface.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/case-study">Review commercial case study</Button>
              <Button href="/services" variant="ghost">Match proof to service</Button>
              <Button href="/contact" variant="ghost">Bring me your product</Button>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-3xl border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(120,167,181,0.14),rgba(10,17,24,0.92))] p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-[rgba(180,207,219,0.72)]">What this page is</div>
              <p className="mt-2 text-sm font-medium leading-relaxed text-white/84">
                Release evidence, trust case materials, verification receipts, and links into the public proof-of-work behind the commercial claims.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">Verification path</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">Review one case, inspect one artifact, then inspect the public repo and supporting records.</p>
              </div>
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">What is out of scope</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">No claim here should be read as perfect security, universal protection, or a substitute for your own review.</p>
              </div>
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(212,162,97,0.08)] p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">GitHub org role</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">Public proof-of-work, public docs, and inspectable artifacts that anchor the commercial trust path.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/45">Deeper inspection</div>

        <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <div className="text-sm font-semibold">The proof path has three layers</div>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-[0.18em] text-white/45">1. Working product case</div>
              <p className="mt-2 text-sm text-white/75">
                PainTracker shows minimization-first health logging with local default storage, no account requirement for core use, and explicit export.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-[0.18em] text-white/45">2. Release-bound trust case</div>
              <p className="mt-2 text-sm text-white/75">
                ProofVault shows how claims were narrowed to what the release process could actually prove through pinned specimens, verifier paths, CI, and drift checks.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-[0.18em] text-white/45">3. Public method</div>
              <p className="mt-2 text-sm text-white/75">
                Protective Computing and the Overton Framework provide the doctrine, DOI-backed records, and audit vocabulary behind the work.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <div className="text-sm font-semibold">How to inspect CrisisCore in 5 minutes</div>
          <ol className="mt-3 space-y-2 text-sm text-white/75">
            <li>Read the PainTracker case.</li>
            <li>Inspect the redacted threat model excerpt.</li>
            <li>Review the ProofVault trust case.</li>
            <li>Check public source records.</li>
            <li>Send your product URL if the failure pattern looks familiar.</li>
          </ol>
        </div>

        <div className="mt-3 flex flex-wrap gap-2.5">
            <Button
              href="/artifacts/security-and-audits/defensibility-packet-preview"
              variant="ghost"
              className="border-white/10 px-3 py-1.5 text-xs text-white/70 hover:text-white"
            >
              Open packet preview
            </Button>
            <Button
              href="/artifacts/security-and-audits/redacted-threat-model-excerpt"
              variant="ghost"
              className="border-white/10 px-3 py-1.5 text-xs text-white/70 hover:text-white"
            >
              Open redacted audit artifact
            </Button>
            <Button
              href="/artifacts/security-and-audits/sample-48-hour-teardown"
              variant="ghost"
              className="border-white/10 px-3 py-1.5 text-xs text-white/70 hover:text-white"
            >
              View sample teardown
            </Button>
            <Button
              href={canonPrimary?.href ?? "https://doi.org/10.5281/zenodo.18688516"}
              variant="ghost"
              className="border-white/10 px-3 py-1.5 text-xs text-white/70 hover:text-white"
            >
              Canon (DOI)
              {" ↗"}
            </Button>
        </div>

        <FitCheckCta
          className="mt-8"
          title="If the proof surface feels close to your situation, send the URL and the failure you&apos;re worried about."
          description="I&apos;ll tell you which proof path is most relevant, what I would inspect first, and whether the service fit is real."
        />

        <div className="mt-8 rounded-2xl border border-[rgba(212,162,97,0.28)] bg-[rgba(212,162,97,0.08)] p-5">
          <div className="text-sm font-semibold">Want this inspection applied to your product?</div>
          <p className="mt-3 text-sm leading-relaxed text-white/78">
            Start with a 48-hour teardown if you need the first risks fast. Use a full review if you need a deeper buyer-ready risk map.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/artifacts/security-and-audits/sample-48-hour-teardown">48 Hour Trust Teardown Sample</Button>
            <Button href="/services/privacy-review-for-health-apps" variant="ghost">Privacy Review for Health Apps</Button>
            <Button href="/services/pre-launch-privacy-audit" variant="ghost">Pre-Launch Privacy Audit for Sensitive Data Apps</Button>
            <Button href="/contact" variant="ghost">Contact</Button>
          </div>
        </div>
      </Panel>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Panel className="p-7">
          <div className="text-sm font-semibold">PainTracker</div>
          <p className="mt-2 text-sm text-white/70">
            Reduced default centralization of sensitive health-adjacent data and kept core use local by default.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>• Reduced default collection of dangerous data</li>
            <li>• Kept critical flows usable under partial connectivity</li>
            <li>• Replaced silent failure with explicit recovery paths</li>
            <li>• Made sharing explicit instead of background-assumed</li>
          </ul>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">ProofVault</div>
          <p className="mt-2 text-sm text-white/70">
            Turned trust claims into release-bound evidence with a narrower, more defensible guarantee surface.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>• Tied public claims to hosted-green release evidence</li>
            <li>• Reduced unearned claim surface</li>
            <li>• Made drift a visible failure condition</li>
            <li>• Left a clearer inspection path for skeptical buyers</li>
          </ul>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">Why this matters to a buyer</div>
          <p className="mt-2 text-sm text-white/70">
            You are not buying theory. You are buying a clearer risk picture, fewer bad assumptions, and a faster path to practical fixes.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>• Less risky default collection</li>
            <li>• Fewer hidden trust failures near launch</li>
            <li>• Clearer boundaries for product and engineering teams</li>
            <li>• Proof a buyer can inspect without a long sales call</li>
          </ul>
        </Panel>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.35fr_0.95fr]">
        <Panel className="p-7 sm:p-8">
          <div className="cc-kicker">Flagship case</div>
          <h2 className="mt-2 text-2xl font-semibold">PainTracker: minimization-first redesign for a trust-sensitive workflow</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
            {painDossier?.tagline ?? "Privacy-first pain documentation built for low energy, low trust, and partial connectivity."}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">Before</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Most pain tracking products assume accounts, stable connectivity, and default centralization of intimate health data.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">After</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Core logging stays local by default, primary use does not require sign-up, and sharing happens through explicit exports instead of background sync.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">Minimization delta</div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/70">
                <li>• Removed default collection paths that centralize sensitive symptom history</li>
                <li>• Moved day-to-day ownership to on-device storage by default</li>
                <li>• Replaced ambient sharing assumptions with explicit user-initiated export</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">Proof you can inspect</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Boundary statements, data inventory, retention posture, and export behavior are all visible.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {(painDossier?.outcomes.items ?? []).slice(0, 4).map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
                {item}
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="p-7 sm:p-8">
          <div className="text-sm font-semibold">Check the evidence path</div>
          <p className="mt-2 text-sm text-white/70">
            Suggested inspection order for a buyer evaluating fit.
          </p>

          <div className="mt-5 space-y-4 text-sm text-white/75">
            <div>
              <div className="font-semibold text-white">1. Inspect the live system</div>
              <p className="mt-1 text-white/65">See whether the product behavior matches the public claims.</p>
            </div>
            <div>
              <div className="font-semibold text-white">2. Inspect the repository</div>
              <p className="mt-1 text-white/65">Review implementation history, issue shape, and whether the build is real.</p>
            </div>
            <div>
              <div className="font-semibold text-white">3. Inspect the dossier and artifacts</div>
              <p className="mt-1 text-white/65">Problem, constraints, decisions, and outputs are shown as evidence.</p>
            </div>
            <div>
              <div className="font-semibold text-white">4. Inspect the canon</div>
              <p className="mt-1 text-white/65">Use the DOI-backed framework if you want the deeper method behind the work.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-2">
            <Button href="https://paintracker.ca" variant="ghost" className="w-full justify-center">
              Open live app ↗
            </Button>
            <Button
              href="https://github.com/CrisisCore-Systems/pain-tracker"
              variant="ghost"
              className="w-full justify-center"
            >
              Open repo ↗
            </Button>
            <Button href="/projects/pain-tracker" variant="ghost" className="w-full justify-center">
              Open dossier
            </Button>
            <Button href="/artifacts/pain-tracker/architecture" variant="ghost" className="w-full justify-center">
              Open architecture artifact
            </Button>
            <Button href="/services" variant="ghost" className="w-full justify-center">
              See matching services
            </Button>
          </div>
        </Panel>
      </div>

      <div className="mt-4 grid gap-4">
        <Panel className="p-7 sm:p-8">
          <div className="cc-kicker">Release-bound trust case</div>
          <h2 className="mt-2 text-2xl font-semibold">ProofVault: bounded trust evidence tied to the hosted-green release</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
            {proofVaultDossier?.tagline ?? "A deliberately bounded trust case that reduces unearned claim surface through a pinned specimen, drift enforcement, and hosted-CI provenance."}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">What changed</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                A trust dossier, pinned specimen, verifier path, regeneration flow, and drift checks now live in the repo. The guarantee surface is narrowed to what those artifacts can prove.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">Why it matters</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Hosted CI became the release gate, so the public trust case is tied to the exact final non-debug commit, not a locally-green approximation.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5">
            <AssetFigure
              src="/assets/proof-cards/trust_case_excerpt_wide_16x9.svg"
              alt="ProofVault trust case excerpt proof card"
              title="Trust case excerpt"
              mediaClassName="aspect-[16/9]"
              imageClassName="object-contain p-0"
            />
            <AssetFigure
              src="/assets/proof-cards/release_bound_artifact_hash_wide_16x9.svg"
              alt="ProofVault release-bound artifact hash proof card"
              title="Release-bound provenance"
              mediaClassName="aspect-[16/9]"
              imageClassName="object-contain p-0"
            />
          </div>
        </Panel>

        <Panel className="p-7 sm:p-8">
          <div className="text-sm font-semibold">Inspect the path</div>
          <p className="mt-2 text-sm text-white/70">
            Short case first, then dossier, then long-form walkthrough.
          </p>

          <div className="mt-6 grid gap-2">
            <Button href="/case-study/proofvault" variant="ghost" className="w-full justify-center">
              Open case study
            </Button>
            <Button href="/projects/proofvault" variant="ghost" className="w-full justify-center">
              Open trust dossier
            </Button>
            <Button href="/writing/proofvault-trust-case-v1-0-1" variant="ghost" className="w-full justify-center">
              Open article walkthrough
            </Button>
          </div>

          <div className="mt-6 grid gap-3">
            {(proofVaultDossier?.outcomes.items ?? []).slice(0, 3).map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
                {item}
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Panel className="p-7">
          <div className="text-sm font-semibold">Artifact index</div>
          <p className="mt-2 text-sm text-white/70">
            Start with the bounded materials that directly support commercial trust review.
          </p>

          <div className="mt-5 grid gap-2">
            <Button href="/artifacts/security-and-audits/defensibility-packet-preview" variant="ghost" className="justify-start">
              Defensibility packet
            </Button>
            <Button href="/artifacts/security-and-audits/redacted-threat-model-excerpt" variant="ghost" className="justify-start">
              Threat model
            </Button>
            <Button href="/case-study/proofvault" variant="ghost" className="justify-start">
              Release evidence
            </Button>
            <Button href={withBuild("/proof/fetchability.json")} variant="ghost" className="justify-start">
              Verification policy
            </Button>
          </div>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">Method and sources</div>
          <p className="mt-2 text-sm text-white/70">
            If you want the deeper method behind the service work, the canon shows the operating model behind the artifacts.
          </p>

          <div className="mt-4 grid gap-2">
            {canon.layers.map((x) => (
              <Button
                key={x.layer}
                href={x.links[0]?.href ?? "https://doi.org/10.5281/zenodo.18688516"}
                variant="ghost"
                className="justify-start"
              >
                Layer {x.layer} — {x.title} ↗
              </Button>
            ))}
            {canonLastLayer?.links?.find(
              (l) => l.label.toLowerCase().includes("all") || l.label.toLowerCase().includes("records")
            ) ? (
              <Button
                href={
                  canonLastLayer.links.find(
                    (l) => l.label.toLowerCase().includes("all") || l.label.toLowerCase().includes("records")
                  )!.href
                }
                variant="ghost"
                className="justify-start"
              >
                All canon records ↗
              </Button>
            ) : null}
          </div>

          <div className="mt-5 text-xs text-white/55">
            Optional for buyers. Start at Layer 1 if you want the theory behind the practice.
          </div>

          <div className="mt-5 grid gap-2">
            <Button href="/artifacts/overton-framework/protective-computing-lifecycle" variant="ghost" className="justify-start">
              Lifecycle diagram
            </Button>
            <Button href="/artifacts/overton-framework/local-authority-vs-cloud-dependence" variant="ghost" className="justify-start">
              Local authority diagram
            </Button>
          </div>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">Public source surface</div>
          <p className="mt-2 text-sm text-white/70">
            Public repositories, commit history, public docs, and published artifacts.
          </p>
          <p className="mt-2 text-xs text-white/55">
            The GitHub org exists in this trust path as public proof-of-work: a place to inspect code, docs, and artifact history rather than accept marketing claims on faith.
          </p>

          <div className="mt-5">
            <Button href="https://github.com/CrisisCore-Systems" variant="ghost" className="w-full justify-center">
              View GitHub org ↗
            </Button>
          </div>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">Flagship system in the open</div>
          <p className="mt-2 text-sm text-white/70">
            PainTracker.ca — minimization-first pain tracking PWA, local-first by default.
          </p>

          <div className="mt-4 grid gap-2">
            <Button href="https://paintracker.ca" variant="ghost" className="w-full justify-center">
              Open app ↗
            </Button>
            <Button
              href="https://github.com/CrisisCore-Systems/pain-tracker"
              variant="ghost"
              className="w-full justify-center"
            >
              Open repo ↗
            </Button>
          </div>
        </Panel>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <Panel className="p-7">
          <div className="text-sm font-semibold">Redacted audit surface</div>
          <p className="mt-2 text-sm text-white/70">
            Audit and security work is shown through bounded outputs, remediation structure, and a redacted artifact sample.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {(auditDossier?.outcomes.items ?? []).slice(0, 5).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="mt-5 grid gap-2">
            <Button href="/artifacts/security-and-audits/defensibility-packet-preview" variant="ghost" className="w-full justify-center">
              Open defensibility packet preview
            </Button>
            <Button href="/artifacts/security-and-audits/redacted-threat-model-excerpt" variant="ghost" className="w-full justify-center">
              Open redacted threat model excerpt
            </Button>
            <Button href="/contact" className="w-full justify-center">
              Book a review
            </Button>
          </div>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">If you are comparing options</div>
          <p className="mt-2 text-sm text-white/70">
            Fastest path: review the flagship case, inspect one redacted artifact, then send your product details.
          </p>

          <div className="mt-5 grid gap-2">
            <Button href="/contact" className="w-full justify-center">
              Send the app, stack, and concern
            </Button>
            <Button
              href="https://github.com/CrisisCore-Systems/overton-framework"
              variant="ghost"
              className="w-full justify-center"
            >
              Open method repo ↗
            </Button>
          </div>
        </Panel>
      </div>

      <div className="mt-4 grid gap-4">
        <AssetFigure
          src="/assets/proof-cards/defensibility_packet_preview_wide_16x9.svg"
          alt="Defensibility Packet preview artifact"
          title="Defensibility Packet preview"
          mediaClassName="aspect-[16/9]"
          imageClassName="object-contain p-0"
        />
        <AssetFigure
          src="/assets/diagram_plates/diagram_04_local_authority_vs_cloud_dependence.svg"
          alt="Local authority versus cloud dependence diagram"
          title="Trust boundary reference"
          mediaClassName="aspect-[16/9]"
          imageClassName="object-contain p-0"
        />
        <AssetFigure
          src="/assets/diagram_plates/diagram_03_threat_boundary_map.svg"
          alt="Threat boundary map diagram"
          title="Audit boundary reference"
          mediaClassName="aspect-[16/9]"
          imageClassName="object-contain p-0"
        />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <Panel className="p-7">
          <div className="text-sm font-semibold">Verification path</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">1. Case</div>
              <p className="mt-2 text-sm text-white/70">
                Start with the commercial case-study route, then confirm the matching PainTracker case surface.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">2. Artifacts</div>
              <p className="mt-2 text-sm text-white/70">
                Inspect the defensibility packet, threat model excerpt, and release-bound trust materials.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">3. Public records</div>
              <p className="mt-2 text-sm text-white/70">
                Use the GitHub org, live systems, and fetchability diagnostics to confirm the inspection path is real.
              </p>
            </div>
          </div>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">Integrity stance</div>
          <p className="mt-2 text-sm text-white/70">
            The work is designed for adversarial environments: low trust, coercion risk, degraded infrastructure. Verification beats narrative.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-white/50">Rule</div>
            <div className="mt-2 text-base font-semibold">Proof over promises.</div>
            <p className="mt-2 text-sm text-white/70">
              Every claim should have a source of record: DOI, repo, deployment, or artifact.
            </p>
          </div>

          <div className="mt-5 grid gap-2">
            <Button href="/artifacts/security-and-audits/defensibility-packet-preview" className="w-full justify-center">
              Inspect docs
            </Button>
            <Button href="https://github.com/CrisisCore-Systems" variant="ghost" className="w-full justify-center">
              View GitHub org ↗
            </Button>
            <Button href="/contact" variant="ghost" className="w-full justify-center">
              Contact for audit work
            </Button>
          </div>
        </Panel>
      </div>

      <Panel className="mt-4 p-7">
        <div className="text-sm font-semibold">Fetchability diagnostics</div>
        <p className="mt-2 text-sm text-white/70">
          Quick verifier for non-browser clients. Primary checks are HTML-first; mirror checks cover XML, RSS, and raw mirrors that should also be verified from a second network.
        </p>

        <div className="mt-4 text-xs uppercase tracking-[0.2em] text-white/50">Primary checks</div>
        <ul className="mt-4 space-y-2 text-sm text-white/75">
          <li>
            • <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={withBuild("/proof/fetchability.json")}>/proof/fetchability.json</a>
            <span className="text-white/55"> — machine-readable verification targets</span>
          </li>
          <li>
            • <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={withBuild("/deploy-id")}>/deploy-id</a>
            <span className="text-white/55"> — plaintext no-store deployment canary</span>
          </li>
          <li>
            • <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={withBuild("/site-map")}>/site-map</a>
            <span className="text-white/55"> — HTML sitemap (primary)</span>
          </li>
          <li>
            • <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={withBuild("/artifacts/pain-tracker/architecture")}>/artifacts/pain-tracker/architecture</a>
            <span className="text-white/55"> — HTML artifact viewer</span>
          </li>
          <li>
            • <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={withBuild("/artifacts/security-and-audits/redacted-threat-model-excerpt")}>/artifacts/security-and-audits/redacted-threat-model-excerpt</a>
            <span className="text-white/55"> — HTML artifact viewer</span>
          </li>
          <li>
            • <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={withBuild("/artifacts/security-and-audits/defensibility-packet-preview")}>/artifacts/security-and-audits/defensibility-packet-preview</a>
            <span className="text-white/55"> — HTML artifact viewer</span>
          </li>
        </ul>

        <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/50">Mirror checks</div>
        <ul className="mt-3 space-y-2 text-sm text-white/75">
          <li>
            • <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={withBuild("/sitemap.xml")}>/sitemap.xml</a>
            <span className="text-white/55"> — XML mirror for crawlers</span>
          </li>
          <li>
            • <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={withBuild("/rss.xml")}>/rss.xml</a>
            <span className="text-white/55"> — RSS mirror for non-browser readers</span>
          </li>
          <li>
            • <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={withBuild("/artifacts/pain-tracker/architecture")}>/artifacts/pain-tracker/architecture</a>
            <span className="text-white/55"> — HTML viewer (raw: /projects/pain-tracker/architecture.svg)</span>
          </li>
          <li>
            • <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={withBuild("/artifacts/pain-tracker/ui-01-fastlog")}>/artifacts/pain-tracker/ui-01-fastlog</a>
            <span className="text-white/55"> — HTML viewer (raw: /projects/pain-tracker/ui-01.svg)</span>
          </li>
          <li>
            • <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={withBuild("/artifacts/security-and-audits/redacted-threat-model-excerpt")}>/artifacts/security-and-audits/redacted-threat-model-excerpt</a>
            <span className="text-white/55"> — HTML viewer (raw: /projects/security-and-audits/redacted-threat-model-excerpt.md)</span>
          </li>
          <li>
            • <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={withBuild("/artifacts/security-and-audits/defensibility-packet-preview")}>/artifacts/security-and-audits/defensibility-packet-preview</a>
            <span className="text-white/55"> — HTML viewer (raw: /assets/proof-cards/defensibility_packet_preview_wide_16x9.svg)</span>
          </li>
        </ul>

        <div className="mt-4 text-xs text-white/50">
          Command check (GET, primary): curl -sS -D - -o NUL -A &quot;python-requests/2.31.0&quot; https://crisiscore-systems.ca/site-map
        </div>
      </Panel>
    </div>
  );
}
