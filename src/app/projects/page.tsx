import { projects } from "@/app/lib/content";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Projects",
  description:
    "CrisisCore Systems projects: protective computing, privacy-first tools, and security work.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="mt-3 max-w-2xl text-sm text-white/70">
        Work designed to survive real conditions: instability, coercion risk,
        low trust, low bandwidth, low energy.
      </p>

      <Section title="Selected work">
        <div className="grid gap-4">
          {projects.map((p) => (
            <Card
              key={p.title}
              title={p.title}
              description={p.description}
              href={p.href}
              tags={p.tags}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
