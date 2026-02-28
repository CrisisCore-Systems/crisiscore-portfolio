import Link from "next/link";
import { getAllWriting } from "@/app/lib/mdx";
import { projects } from "@/app/lib/content";
import { Panel } from "@/components/ui/Panel";

export const metadata = {
  title: "Writing",
  description: "Protective computing, privacy-first systems, degraded-first design.",
};

export default function WritingIndexPage() {
  const posts = getAllWriting();
  const canon = projects.find((p) => p.slug === "overton-framework");

  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold">Writing</h1>
      <p className="mt-3 max-w-2xl text-sm text-white/70">
        Notes from the edge: protective architecture, trust boundaries, and
        systems that refuse surveillance by default.
      </p>

      {canon ? (
        <section className="mt-10">
          <div className="cc-kicker">Selected writing</div>
          <h2 className="mt-2 text-xl font-semibold">Protective Computing Canon</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/70">
            A layered discipline for systems built under instability: theory → operations → measurement.
          </p>

          <Panel className="mt-5 p-7">
            <div className="space-y-2">
              {canon.links.slice(0, 3).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm text-white/75 hover:text-white"
                >
                  › <span className="underline decoration-white/20 underline-offset-4">{l.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-4 text-xs text-white/55">
              Open access. DOI-backed. Designed to be independently testable.
            </div>

            <a
              href={canon.links[canon.links.length - 1]?.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm text-white/60 hover:text-white"
            >
              Read the canon →
            </a>
          </Panel>
        </section>
      ) : null}

      <div className="mt-8 grid gap-4">
        {posts.map((p) => (
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
    </div>
  );
}

