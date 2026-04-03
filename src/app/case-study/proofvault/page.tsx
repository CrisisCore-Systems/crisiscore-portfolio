import Link from "next/link";
import { absoluteUrl } from "@/app/lib/site";
import { AssetFigure } from "@/components/AssetFigure";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { loadDossier, loadProject } from "@/content/load";

export const metadata = {
  title: "ProofVault Trust Case v1.0.1",
  description:
    "A reproducible trust case for an offline-first encrypted evidence app, with a bounded guarantee surface, pinned specimen, drift enforcement, and hosted-CI-backed release provenance.",
  openGraph: {
    images: [{ url: absoluteUrl("/assets/proof-cards/release_bound_artifact_hash_wide_16x9.svg") }],
  },
  twitter: {
    images: [absoluteUrl("/assets/proof-cards/release_bound_artifact_hash_wide_16x9.svg")],
  },
};

export const revalidate = 21600;

export default function ProofVaultCaseStudyPage() {
  const project = loadProject("proofvault");
  const dossier = loadDossier("proofvault");

  return (
    <div className="py-12">
      <Link href="/proof" className="text-sm text-white/60 hover:text-white">
        ← Back to proof
      </Link>

      <div className="mt-6">
        <div className="cc-kicker">Case study</div>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          ProofVault Trust Case v1.0.1
        </h1>
        <p className="mt-3 max-w-4xl text-base text-white/80 sm:text-lg">
          A reproducible trust case for an offline-first encrypted evidence app, with a bounded guarantee surface, pinned specimen, drift enforcement, and a public release tied to an exact hosted-green commit.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70">
          {dossier?.tagline ?? project.description}
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
          This shows the kind of structural review and bounded-evidence work behind release-critical trust claims.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} className="normal-case tracking-[0.08em]">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <Button href="/writing/proofvault-trust-case-v1-0-1">Read full article walkthrough</Button>
        <Button href="/projects/proofvault" variant="ghost">
          Inspect the trust dossier
        </Button>
        <Button href="/services" variant="ghost">
          See services
        </Button>
        <Button href="/proof" variant="ghost">
          Review the proof surface
        </Button>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Summary</div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/70">
              <p>
                ProofVault now carries part of its own proof burden in the repository.
              </p>
              <p>
                I built a trust dossier, a pinned specimen, automated regeneration and drift detection, and a hosted-CI-enforced release path that narrows the public claim to what the evidence can actually support.
              </p>
              <p>
                The guarantee boundary was narrowed until the remaining claims could survive skeptical review.
              </p>
            </div>
          </Panel>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <AssetFigure
              src="/assets/proof-cards/trust_case_excerpt_wide_16x9.svg"
              alt="ProofVault trust case excerpt proof card"
              title="Bounded claim"
            />
            <AssetFigure
              src="/assets/proof-cards/release_bound_artifact_hash_wide_16x9.svg"
              alt="ProofVault release-bound artifact hash proof card"
              title="Hosted-green release binding"
            />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Panel className="p-7">
              <div className="text-sm font-semibold">What I built</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {[
                  "Bounded trust case and threat model.",
                  "Reduced claim surface so the public guarantee matches what the evidence can actually support.",
                  "Pinned demo specimen with observed outputs.",
                  "Verifier path showing valid and tampered behavior.",
                  "Local and hosted-CI specimen regeneration.",
                  "Drift detection that fails on trust-critical output changes.",
                  "Public release tags preserving provenance across v1.0 and v1.0.1.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[2px] text-white/40">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel className="p-7">
              <div className="text-sm font-semibold">What made this hard</div>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
                <p>Local success was not enough.</p>
                <p>
                  GitHub&apos;s hosted runner exposed cross-environment drift that did not appear on the initial local path.
                </p>
                <p>
                  The specimen had to be stabilized without weakening the invariant.
                </p>
              </div>
            </Panel>
          </div>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">What I fixed</div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Timestamps",
                  body: "Normalized host-local timestamp rendering so observed output stopped drifting between environments.",
                },
                {
                  title: "Archive metadata",
                  body: "Eliminated archive metadata instability that only became visible on the hosted runner.",
                },
                {
                  title: "Node stamping",
                  body: "Stopped the pinned specimen metadata from incorrectly inheriting the live Node patch version.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/45">{item.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.body}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Outcome</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {(dossier?.outcomes.items ?? []).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base font-semibold text-white">
              Trust claims narrowed, legible, reproducible, and release-bound.
            </p>
          </Panel>
        </div>

        <div className="lg:col-span-4">
          <Panel className="p-7">
            <div className="text-sm font-semibold">How to inspect it</div>
            <div className="mt-4 grid gap-2">
              <Button href="/writing/proofvault-trust-case-v1-0-1" variant="ghost" className="justify-start">
                Case Study
              </Button>
              <Button href="/projects/proofvault" variant="ghost" className="justify-start">
                Trust Dossier
              </Button>
              <Button href="/proof" variant="ghost" className="justify-start">
                Proof Surface
              </Button>
            </div>
          </Panel>

          <Panel className="mt-4 p-7">
            <div className="text-sm font-semibold">Release provenance</div>
            <div className="mt-4 space-y-4 text-sm text-white/70">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">Immutable baseline</div>
                <p className="mt-2">proofvault-trust-case-v1.0 remains intact as the original public record.</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">Corrective cut</div>
                <p className="mt-2">proofvault-trust-case-v1.0.1 publishes the hosted-stable release tied to the exact final non-debug commit.</p>
              </div>
            </div>
          </Panel>

          <Panel className="mt-4 p-7">
            <div className="text-sm font-semibold">Why it matters</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li className="flex gap-2">
                <span className="mt-[2px] text-white/40">•</span>
                <span>Trust claims are narrowed and inspectable instead of rhetorical.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[2px] text-white/40">•</span>
                <span>Release integrity depends on hosted evidence, not a private local path.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[2px] text-white/40">•</span>
                <span>Drift becomes a visible failure condition instead of hidden uncertainty.</span>
              </li>
            </ul>

            <div className="mt-6 grid gap-2">
              <Button href="/services" variant="ghost" className="w-full justify-center">
                See services
              </Button>
              <Button href="/contact" className="w-full justify-center">
                Book a review
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}