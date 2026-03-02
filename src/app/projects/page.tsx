import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { loadProjects } from "@/content/load";

export const metadata = {
  title: "Projects",
  description: "Case studies and active work from CrisisCore Systems.",
};

type SearchParamsLike =
  | { q?: string | string[]; tag?: string | string[] }
  | Promise<{ q?: string | string[]; tag?: string | string[] }>;

async function getFirst(v: string | string[] | undefined) {
  const resolved = await Promise.resolve(v);
  return Array.isArray(resolved) ? resolved[0] : resolved;
}

export default async function ProjectsPage({
  searchParams,
}: Readonly<{ searchParams?: SearchParamsLike }>) {
  const projects = loadProjects();
  const showFilterControls = projects.length >= 6;
  const sp = await Promise.resolve(searchParams);
  const q = (await getFirst(sp?.q)) ?? "";
  const tag = (await getFirst(sp?.tag)) ?? "";

  return (
    <div className="py-12">
      <div className="cc-kicker">Dossier index</div>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
        Projects
      </h1>
      <p className="mt-3 cc-lede">
        Each entry links to a dossier surface (problem → constraints → method →
        proof → outputs). Built for real conditions: instability, coercion risk,
        low trust, low bandwidth, and low energy.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          "Local-first",
          "Privacy-first",
          "Threat modeling",
          "Audit outputs",
          "Degraded-first",
        ].map((t) => (
          <Badge key={t} className="normal-case tracking-[0.08em]">
            {t}
          </Badge>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <Button href="/proof">Proof</Button>
        <Button href="/writing" variant="ghost">
          Writing
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Browse</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {showFilterControls
                ? "Use search + tags to find relevant operating conditions and threat boundaries."
                : "Current dossiers are shown directly; filtering appears as the catalog expands."}
            </p>
            <div className="mt-5">
              <ProjectsExplorer
                items={projects}
                q={q}
                tag={tag}
                showControls={showFilterControls}
              />
            </div>
            {projects.length < 6 ? (
              <div className="mt-5 text-xs text-white/50">
                More dossiers are being added. Contact for unlisted work.
              </div>
            ) : null}
          </Panel>
        </div>

        <div className="lg:col-span-4">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">How to evaluate</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Look for explicit constraints and trust boundaries.",
                "Prefer verifiable artifacts (DOI, repo, deployment).",
                "Treat outputs as deliverables, not marketing claims.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/proof" variant="ghost">
                Proof
              </Button>
              <Button href="/contact" variant="ghost">
                Inquiry
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

