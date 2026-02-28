import { SITE } from "@/app/lib/site";
import { getGitHubUser, getRepo } from "@/app/lib/github";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/app/lib/content";

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
  const canon = projects.find((p) => p.slug === "overton-framework");

  const [ghUser, pain, overtonRepo] = await Promise.all([
    getGitHubUser("CrisisCore-Systems"),
    getRepo("CrisisCore-Systems", "pain-tracker"),
    getRepo("CrisisCore-Systems", "overton-framework"),
  ]);

  return (
    <div className="py-12">
      <Panel className="p-7 sm:p-8">
        <div className="cc-kicker">Proof</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Verifiable artifacts. Minimal trust required.
        </h1>
        <p className="mt-4 cc-lede">
          This page exists so claims can be checked. Links go to sources of
          record: DOI entries, repositories, and live deployments.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge className="normal-case tracking-[0.08em]">DOI-backed</Badge>
          <Badge className="normal-case tracking-[0.08em]">Repo-visible</Badge>
          <Badge className="normal-case tracking-[0.08em]">Live systems</Badge>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button
            href={canon?.links?.[0]?.href ?? "https://doi.org/10.5281/zenodo.18688516"}
          >
            Canon (DOI)
            {" ↗"}
          </Button>
          <Button href={SITE.socials.github} variant="ghost">
            GitHub ↗
          </Button>
          <Button href="https://paintracker.ca" variant="ghost">
            PainTracker live ↗
          </Button>
          <Button href="/contact" variant="ghost">
            Contact
          </Button>
        </div>
      </Panel>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Panel className="p-7">
          <div className="text-sm font-semibold">Canonical reference</div>
          <p className="mt-2 text-sm text-white/70">
            A layered canon with sources of record (DOIs): foundational theory →
            operational translation → measurement &amp; audit.
          </p>

          <div className="mt-4 grid gap-2">
            {(canon?.links ?? []).slice(0, 3).map((l) => (
              <Button key={l.href} href={l.href} variant="ghost" className="justify-start">
                {l.label} ↗
              </Button>
            ))}
            {canon?.links?.[3] ? (
              <Button href={canon.links[3].href} variant="ghost" className="justify-start">
                {canon.links[3].label} ↗
              </Button>
            ) : null}
          </div>

          <div className="mt-5 text-xs text-white/55">
            If you need a single anchor, start at Layer 1 (Overton Framework).
          </div>
        </Panel>

        <Panel className="p-7">
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

          <div className="mt-5">
            <Button href={SITE.socials.github} variant="ghost" className="w-full justify-center">
              Open GitHub profile ↗
            </Button>
          </div>

          <div className="mt-3 text-xs text-white/50">
            If stats show “—”, GitHub API may be rate-limited for anonymous requests. Still verifiable via the link.
          </div>
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
        </Panel>
      </div>
    </div>
  );
}
