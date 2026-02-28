import { writing } from "@/app/lib/content";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Writing",
  description:
    "Notes on protective computing, privacy-first product architecture, and degraded-first design.",
};

export default function WritingPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold">Writing</h1>
      <p className="mt-3 max-w-2xl text-sm text-white/70">
        This is a placeholder hub. If you want, we’ll upgrade it to MDX posts
        with real permalinks and RSS.
      </p>

      <Section title="Recent">
        <div className="grid gap-3">
          {writing.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="text-xs text-white/50">{w.date}</div>
              <div className="mt-1 text-base font-semibold">{w.title}</div>
              <p className="mt-2 text-sm text-white/70">{w.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
