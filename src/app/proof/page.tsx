import { SITE } from "@/app/lib/site";
import { getGitHubUser, getRepo } from "@/app/lib/github";

export const metadata = {
  title: "Proof",
  description: "DOI-backed canon, live systems, and verifiable artifacts.",
};

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
  const ghUser = await getGitHubUser("CrisisCore-Systems");
  const pain = await getRepo("CrisisCore-Systems", "pain-tracker");
  const overtonRepo = await getRepo("CrisisCore-Systems", "overton-framework");

  return (
    <div className="py-12">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-xs uppercase tracking-[0.2em] text-white/45">Proof</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Verifiable artifacts. Minimal trust required.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70">
          This page exists so claims can be checked. Links go to sources of record: DOI entries, live deployments, and repositories.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://doi.org/10.5281/zenodo.18688516"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-2 text-sm hover:bg-white/[0.12]"
          >
            Overton Framework DOI ↗
          </a>
          <a
            href={SITE.socials.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/[0.06] hover:text-white"
          >
            GitHub ↗
          </a>
          <a
            href="https://paintracker.ca"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/[0.06] hover:text-white"
          >
            PainTracker live ↗
          </a>
        </div>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-sm font-semibold">Canonical reference</div>
          <p className="mt-2 text-sm text-white/70">
            The Overton Framework: Protective Computing in Conditions of Human Vulnerability (DOI-backed).
          </p>
          <div className="mt-4 text-xs text-white/55">DOI</div>
          <div className="mt-1 font-mono text-sm text-white/85">10.5281/zenodo.18688516</div>

          <a
            href="https://doi.org/10.5281/zenodo.18688516"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm text-white/80 hover:bg-white/[0.07] hover:text-white"
          >
            Open DOI landing page ↗
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-sm font-semibold">Source of record</div>
          <p className="mt-2 text-sm text-white/70">
            Public repositories, commit history, issues, and published artifacts.
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

          <a
            href={SITE.socials.github}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm text-white/80 hover:bg-white/[0.07] hover:text-white"
          >
            Open GitHub profile ↗
          </a>

          <div className="mt-3 text-xs text-white/50">
            If stats show “—”, GitHub API may be rate-limited for anonymous requests. Still verifiable via the link.
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
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
            <a
              href="https://paintracker.ca"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm text-white/80 hover:bg-white/[0.07] hover:text-white"
            >
              Open app ↗
            </a>
            <a
              href="https://github.com/CrisisCore-Systems/pain-tracker"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm text-white/80 hover:bg-white/[0.07] hover:text-white"
            >
              Open repo ↗
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
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

          <a
            href="https://github.com/CrisisCore-Systems/overton-framework"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm text-white/80 hover:bg-white/[0.07] hover:text-white"
          >
            Open repo ↗
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
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
        </div>
      </div>
    </div>
  );
}
