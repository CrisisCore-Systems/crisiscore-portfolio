import { projects } from "@/app/lib/content";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";

export const metadata = {
  title: "Projects",
  description: "Case studies and active work from CrisisCore Systems.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="mt-3 max-w-2xl text-sm text-white/70">
        Built to survive real conditions: instability, coercion risk, low trust,
        low bandwidth, low energy.
      </p>

      <div className="mt-8">
        <ProjectsExplorer items={projects} />
      </div>
    </div>
  );
}

