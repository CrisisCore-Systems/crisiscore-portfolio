import { projects } from "@/app/lib/content";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";

export const metadata = {
  title: "Projects",
  description: "Case studies and active work from CrisisCore Systems.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <div className="cc-kicker">Dossier index</div>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
        Projects
      </h1>
      <p className="mt-3 cc-lede">
        Case studies and active work designed for real conditions: instability,
        coercion risk, low trust, low bandwidth, low energy. Each entry links to
        a dossier surface (problem → constraints → method → proof → outputs).
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
              Use search + tags to find relevant operating conditions and threat
              boundaries.
            </p>
            <div className="mt-5">
              <ProjectsExplorer items={projects} />
            </div>
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

