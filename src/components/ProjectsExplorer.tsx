import Link from "next/link";
import type { Project } from "@/types/content";
import { Badge } from "@/components/ui/Badge";

export function ProjectsExplorer({
  items,
  q,
  tag,
}: Readonly<{ items: Project[]; q: string; tag: string }>) {
  const tags = Array.from(
    items.reduce((acc, p) => {
      p.tags.forEach((t) => acc.add(t));
      return acc;
    }, new Set<string>())
  ).sort((a, b) => a.localeCompare(b));

  const needle = q.trim().toLowerCase();
  const filtered = items.filter((p) => {
    const hay = `${p.title} ${p.summary} ${p.description} ${p.tags.join(" ")}`.toLowerCase();
    const okQ = !needle || hay.includes(needle);
    const okT = !tag || p.tags.includes(tag);
    return okQ && okT;
  });

  return (
    <div className="space-y-4">
      <form method="get" className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          name="q"
          defaultValue={q}
          placeholder="Search projects…"
          className="cc-field"
        />
        <select
          name="tag"
          defaultValue={tag}
          className="cc-field text-white/80 sm:w-64"
        >
          <option value="">All tags</option>
          {tags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 transition hover:bg-white/[0.07] hover:text-white"
        >
          Apply
        </button>
      </form>

      <div className="grid gap-4">
        {filtered.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="cc-card group block p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-base font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-white/70">{p.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} className="normal-case tracking-[0.08em]">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-1 text-white/40 transition group-hover:text-white/80">
                ↗
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
