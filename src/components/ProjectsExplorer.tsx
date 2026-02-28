"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Project } from "@/app/lib/content";

export function ProjectsExplorer({ items }: { items: Project[] }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string>("");

  const tags = useMemo(() => {
    const s = new Set<string>();
    items.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return items.filter((p) => {
      const hay = `${p.title} ${p.summary} ${p.description} ${p.tags.join(" ")}`.toLowerCase();
      const okQ = !needle || hay.includes(needle);
      const okT = !tag || p.tags.includes(tag);
      return okQ && okT;
    });
  }, [items, q, tag]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search projects…"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/90 placeholder:text-white/40"
        />
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 sm:w-64"
        >
          <option value="">All tags</option>
          {tags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4">
        {filtered.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-base font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-white/70">{p.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
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
