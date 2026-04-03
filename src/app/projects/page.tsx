import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { loadProjects } from "@/content/load";

export const metadata = {
  title: "Projects",
  description: "Project dossiers and case-style evidence for CrisisCore Systems trust hardening, privacy architecture, and structural risk review work.",
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
  const sp = await Promise.resolve(searchParams);
  const q = (await getFirst(sp?.q)) ?? "";
  const tag = (await getFirst(sp?.tag)) ?? "";

  return (
    <div className="py-12">
      <div className="cc-kicker">Evidence dossiers</div>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
        Projects
      </h1>
      <p className="mt-3 cc-lede">
        Case-style evidence for the kind of trust, privacy, and structural risk work sold on this site. Each entry links to a dossier surface showing problem, constraints, method, proof, and outputs.
      </p>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
        Use this page when you want deeper evidence after the homepage or proof page, not as the first stop.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <Button href="/services">Services</Button>
        <Button href="/proof" variant="ghost">
          Proof
        </Button>
        <Button href="/contact" variant="ghost">
          Book a review
        </Button>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Browse</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Use search and tags to find work relevant to your product category, operating conditions, and trust boundary concerns.
            </p>
            <div className="mt-5">
              <ProjectsExplorer items={projects} q={q} tag={tag} />
            </div>
          </Panel>
        </div>

        <div className="lg:col-span-4">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">How to use this page</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Start with a dossier that matches your product or risk surface.",
                "Look for explicit constraints and trust boundaries.",
                "Prefer verifiable artifacts such as repos, deployments, and bounded outputs.",
                "If the work looks relevant, go to Services or send an inquiry.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-2">
              <Button href="/services" className="w-full justify-center">
                See services
              </Button>
              <Button href="/proof" variant="ghost" className="w-full justify-center">
                Open proof
              </Button>
              <Button href="/contact" variant="ghost" className="w-full justify-center">
                Send the app, stack, and concern
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

