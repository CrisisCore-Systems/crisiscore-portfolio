import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/app/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <div className="py-12">
      <Link href="/projects" className="text-sm text-white/60 hover:text-white">
        ← Back to projects
      </Link>

      <h1 className="mt-4 text-3xl font-semibold">{p.title}</h1>
      <p className="mt-3 max-w-3xl text-sm text-white/70">{p.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <div className="text-sm font-semibold">Links</div>
        <div className="mt-4 flex flex-col gap-2">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 transition hover:bg-white/[0.07] hover:text-white"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
