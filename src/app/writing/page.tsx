import Link from "next/link";
import { getAllWriting } from "@/app/lib/mdx";

export const metadata = {
  title: "Writing",
  description: "Protective computing, privacy-first systems, degraded-first design.",
};

export default function WritingIndexPage() {
  const posts = getAllWriting();

  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold">Writing</h1>
      <p className="mt-3 max-w-2xl text-sm text-white/70">
        Notes from the edge: protective architecture, trust boundaries, and
        systems that refuse surveillance by default.
      </p>

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

