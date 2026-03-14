import { SITE } from "@/app/lib/site";
import { getGitHubUser, getRepo } from "@/app/lib/github";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { loadCanon, loadDossier } from "@/content/load";

export const metadata = {
  title: "Proof",
  description: "Outcome proof, source records, and verifiable artifacts for protective computing work.",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

function fmt(n: number) {
  return new Intl.NumberFormat(undefined, { notation: "compact" }).format(n);
}

function date(d: string) {
  try {
    return new Date(d).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return d;
  }
}

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

  const [ghUser, pain, overtonRepo] = await Promise.all([
    getGitHubUser("CrisisCore-Systems"),
    getRepo("CrisisCore-Systems", "pain-tracker"),
    getRepo("CrisisCore-Systems", "overton-framework"),
  ]);
  const statsUnavailable = !ghUser || !pain || !overtonRepo;

  return (
    <div className="py-12">
      <Panel className="p-7 sm:p-8">
        <div className="cc-kicker">Proof</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Evidence a buyer can evaluate without taking my word for it.
        </h1>
        <p className="mt-4 cc-lede">
          This page is for operators deciding whether the work is credible,
          applicable, and worth contacting about. It shows what changed, what
          risks were reduced, and where the source record lives.
        </p>
        <p className="mt-2 text-sm text-white/70">
          Open access. DOI-backed where relevant. Repo-visible. Live where public.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge className="normal-case tracking-[0.08em]">Outcome evidence</Badge>
          <Badge className="normal-case tracking-[0.08em]">Repo-visible</Badge>
          <Badge className="normal-case tracking-[0.08em]">Low-trust verifiable</Badge>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button href="/case-study/pain-tracker">
            Review flagship case
          </Button>
          <Button href="/artifacts/security-and-audits/redacted-threat-model-excerpt" variant="ghost">
            Open redacted audit artifact
          </Button>
          <Button
            href={canonPrimary?.href ?? "https://doi.org/10.5281/zenodo.18688516"}
            variant="ghost"
          >
            Canon (DOI)
            {" ↗"}
          </Button>
          <Button href="/contact" variant="ghost">
            Send fit-check inquiry
          </Button>
        </div>
      </Panel>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Panel className="p-7">
          <div className="text-sm font-semibold">What changed</div>
          <p className="mt-2 text-sm text-white/70">
            The proof surface is strongest when it shows operating change, not just principles.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>• Reduced default collection of dangerous data</li>
            <li>• Kept critical flows usable under partial connectivity</li>
            <li>• Replaced silent failure with explicit recovery paths</li>
            <li>• Produced decision-grade artifacts teams can act on</li>
          </ul>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">What risks get reduced</div>
          <p className="mt-2 text-sm text-white/70">
            This work is aimed at trust failures that become operationally expensive.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>• Sensitive data turning into centralized exhaust</li>
            <li>• Critical paths failing in offline or degraded conditions</li>
            <li>• Ambiguous boundaries during incidents, audits, or launch pressure</li>
            <li>• Findings that cannot be reproduced, verified, or handed off cleanly</li>
          </ul>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">What kind of product this applies to</div>
          <p className="mt-2 text-sm text-white/70">
            Best fit is post-MVP software where trust failure harms users or operations.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>• Health, advocacy, or clinician-adjacent tools</li>
            <li>• Internal operator systems with incident or coercion pressure</li>
            <li>• Products storing sensitive personal or behavioral data</li>
            <li>• Teams shipping into low-trust, low-bandwidth, or unstable conditions</li>
          </ul>
        </Panel>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.35fr_0.95fr]">
        <Panel className="p-7 sm:p-8">
          <div className="cc-kicker">Flagship case</div>
          <h2 className="mt-2 text-2xl font-semibold">PainTracker: from trust-sensitive workflow to defensible operating posture</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
            {painDossier?.tagline ?? "Privacy-first pain documentation built for low energy, low trust, and partial connectivity."}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">Starting condition</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Most pain tracking products assume accounts, high attention, stable connectivity, and willingness to centralize intimate health data.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">Trust risks</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                When those assumptions break, the user loses continuity, privacy boundaries blur, and the system becomes least reliable when it is most needed.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">Hardening moves</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Local-first storage, offline-capable logging, explicit export paths, and a reduced-friction interface designed for cognitive overload.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">Resulting posture</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                A live PWA that supports core use without sign-up, avoids background sharing by default, and remains usable under degraded conditions.
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
            This is the order a skeptical buyer should use.
          </p>

          <div className="mt-5 space-y-4 text-sm text-white/75">
            <div>
              <div className="font-semibold text-white">1. Inspect the live system</div>
              <p className="mt-1 text-white/65">See whether the product behavior matches the trust claims.</p>
            </div>
            <div>
              <div className="font-semibold text-white">2. Inspect the repository</div>
              <p className="mt-1 text-white/65">Review implementation history, issue shape, and whether the build is real.</p>
            </div>
            <div>
              <div className="font-semibold text-white">3. Inspect the dossier and artifacts</div>
              <p className="mt-1 text-white/65">Problem, constraints, method, proof, and outputs are shown as operating evidence.</p>
            </div>
            <div>
              <div className="font-semibold text-white">4. Inspect the canon</div>
              <p className="mt-1 text-white/65">Use the DOI-backed framework if you want theory, methodology, and audit vocabulary.</p>
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
            <Button href="/case-study/pain-tracker" variant="ghost" className="w-full justify-center">
              Open case study
            </Button>
            <Button href="/artifacts/pain-tracker/architecture" variant="ghost" className="w-full justify-center">
              Open architecture artifact
            </Button>
          </div>
        </Panel>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
        <Panel className="p-7 sm:p-8">
          <div className="cc-kicker">Release-bound trust case</div>
          <h2 className="mt-2 text-2xl font-semibold">ProofVault: reproducible trust evidence tied to the hosted-green release</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
            {proofVaultDossier?.tagline ?? "Trust made legible, reproducible, and release-bound through a pinned specimen, drift enforcement, and hosted-CI provenance."}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">What changed</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                A trust dossier, pinned specimen, verifier path, regeneration flow, and drift checks now live in the repo as part of the proof burden.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">Why it matters</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Hosted CI became the release gate, so provenance follows the exact final non-debug commit instead of a locally-green approximation.
              </p>
            </div>
          </div>
        </Panel>

        <Panel className="p-7 sm:p-8">
          <div className="text-sm font-semibold">Inspect the path</div>
          <p className="mt-2 text-sm text-white/70">
            Start with the short case, then inspect the dossier and long-form walkthrough.
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
          <div className="text-sm font-semibold">Canonical reference</div>
          <p className="mt-2 text-sm text-white/70">
            A layered canon with sources of record (DOIs): foundational theory →
            operational translation → measurement &amp; audit.
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
            If you need a single anchor, start at Layer 1 (Overton Framework).
          </div>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">Public source surface</div>
          <p className="mt-2 text-sm text-white/70">
            Public repositories, commit history, issues, and published artifacts.
          </p>
          <p className="mt-2 text-xs text-white/55">
            Visibility stats are shown for transparency; primary proof remains artifacts (DOIs, repos, deployments, redacted packets).
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs text-white/55">Followers</div>
              <div className="mt-1 text-xl font-semibold">
                {ghUser ? fmt(ghUser.followers) : "—"}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs text-white/55">Public repos</div>
              <div className="mt-1 text-xl font-semibold">
                {ghUser ? fmt(ghUser.public_repos) : "—"}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <Button href={SITE.socials.github} variant="ghost" className="w-full justify-center">
              Open GitHub profile ↗
            </Button>
          </div>

          {statsUnavailable ? (
            <div className="mt-3 text-xs text-white/50">
              Some stats are temporarily unavailable. Source links remain the authoritative proof surface.
            </div>
          ) : null}
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">Flagship system</div>
          <p className="mt-2 text-sm text-white/70">
            PainTracker.ca — privacy-first pain tracking PWA, local-first by default.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs text-white/55">Stars</div>
              <div className="mt-1 text-xl font-semibold">
                {pain ? fmt(pain.stargazers_count) : "—"}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs text-white/55">Last push</div>
              <div className="mt-1 text-sm font-semibold">
                {pain ? date(pain.pushed_at) : "—"}
              </div>
            </div>
          </div>

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
            Audit and security work is evidenced through bounded outputs, remediation structure, and a redacted artifact sample.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {(auditDossier?.outcomes.items ?? []).slice(0, 5).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="mt-5 grid gap-2">
            <Button href="/artifacts/security-and-audits/redacted-threat-model-excerpt" variant="ghost" className="w-full justify-center">
              Open redacted threat model excerpt
            </Button>
            <Button href="https://doi.org/10.5281/zenodo.18783432" variant="ghost" className="w-full justify-center">
              Open PLS rubric ↗
            </Button>
          </div>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">Framework repo</div>
          <p className="mt-2 text-sm text-white/70">
            Versioned framework workstream and canonical text iteration.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs text-white/55">Stars</div>
              <div className="mt-1 text-lg font-semibold">
                {overtonRepo ? fmt(overtonRepo.stargazers_count) : "—"}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs text-white/55">Forks</div>
              <div className="mt-1 text-lg font-semibold">
                {overtonRepo ? fmt(overtonRepo.forks_count) : "—"}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs text-white/55">Issues</div>
              <div className="mt-1 text-lg font-semibold">
                {overtonRepo ? fmt(overtonRepo.open_issues_count) : "—"}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <Button
              href="https://github.com/CrisisCore-Systems/overton-framework"
              variant="ghost"
              className="w-full justify-center"
            >
              Open repo ↗
            </Button>
          </div>
        </Panel>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <Panel className="p-7">
          <div className="text-sm font-semibold">How to evaluate the work quickly</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">Applicable</div>
              <p className="mt-2 text-sm text-white/70">
                The evidence should look relevant to your product category, threat model, and operating constraints.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">Verifiable</div>
              <p className="mt-2 text-sm text-white/70">
                Claims should resolve to a repo, DOI, deployment, artifact, or explicit failure-mode analysis.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">Actionable</div>
              <p className="mt-2 text-sm text-white/70">
                The output should suggest how your team would change architecture, operations, and release decisions.
              </p>
            </div>
          </div>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">Integrity stance</div>
          <p className="mt-2 text-sm text-white/70">
            The work is designed for adversarial environments: low trust, coercion risk, degraded infrastructure.
            Verification beats narrative.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-white/50">Rule</div>
            <div className="mt-2 text-base font-semibold">Proof over promises.</div>
            <p className="mt-2 text-sm text-white/70">
              Every claim should have a source of record: DOI, repo, deployment, or artifact.
            </p>
          </div>

          <div className="mt-5">
            <Button href="/contact" className="w-full justify-center">
              Send fit-check inquiry
            </Button>
          </div>
        </Panel>
      </div>

      <Panel className="mt-4 p-7">
        <div className="text-sm font-semibold">Fetchability diagnostics</div>
        <p className="mt-2 text-sm text-white/70">
          Quick verifier for non-browser clients. Primary checks are HTML-first; mirror checks include raw endpoints that may be selectively blocked.
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
        </ul>

        <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/50">Mirror checks</div>
        <ul className="mt-3 space-y-2 text-sm text-white/75">
          <li>
            • <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={withBuild("/sitemap.xml")}>/sitemap.xml</a>
            <span className="text-white/55"> — XML mirror for crawlers</span>
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
        </ul>

        <div className="mt-4 text-xs text-white/50">
          Command check (GET, primary): curl -sS -D - -o NUL -A &quot;python-requests/2.31.0&quot; https://crisiscore-portfolio.vercel.app/site-map
        </div>
      </Panel>
    </div>
  );
}
