import Link from "next/link";
import { projects } from "@/app/lib/content";
import { SITE } from "@/app/lib/site";
import { getAllWriting } from "@/app/lib/mdx";

export default function HomePage() {
  const featured = projects.filter((p) => p.highlight);
  const latest = getAllWriting().slice(0, 2);

  return (
    <div className="py-12">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-xs uppercase tracking-[0.2em] text-white/50">
          CrisisCore Systems
        </div>

        <h1 className="mt-3 text-3xl font-semibold leading-tight">
          Protective architecture for people living inside instability.
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
          {SITE.tagline} Built around local authority, degraded-first behavior,
          and reversibility.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-2 text-sm transition hover:bg-white/[0.10]"
          >
            View Projects
          </Link>
          <Link
            href="/proof"
            className="rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:bg-white/[0.06] hover:text-white"
          >
            Proof
          </Link>
          <a
            href={SITE.socials.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:bg-white/[0.06] hover:text-white"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <section className="py-10">
        <div className="mb-4">
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">
            Active work
          </div>
          <h2 className="mt-2 text-xl font-semibold">Featured</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-base font-semibold">{p.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {p.summary}
                  </p>
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
      </section>

      <section className="py-10">
        <div className="mb-4">
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">
            Doctrine
          </div>
          <h2 className="mt-2 text-xl font-semibold">Principles</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              h: "Local authority",
              p: "Default ownership lives on-device. Cloud is optional, not assumed.",
            },
            {
              h: "Degraded-first",
              p: "Designed for battery scarcity, stress, cognitive overload, and partial connectivity.",
            },
            {
              h: "Reversible by design",
              p: "Safe failure modes, undo paths, and minimal irreversible actions.",
            },
          ].map((x) => (
            <div
              key={x.h}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="font-semibold">{x.h}</div>
              <p className="mt-2 text-sm text-white/70">{x.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/50">
              Notes
            </div>
            <h2 className="mt-2 text-xl font-semibold">Latest writing</h2>
          </div>
          <Link href="/writing" className="text-sm text-white/60 hover:text-white">
            View all →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {latest.map((p) => (
            <Link
              key={p.slug}
              href={`/writing/${p.slug}`}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
            >
              <div className="text-xs text-white/50">{p.frontmatter.date}</div>
              <div className="mt-1 text-base font-semibold">
                {p.frontmatter.title}
              </div>
              <p className="mt-2 text-sm text-white/70">
                {p.frontmatter.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

