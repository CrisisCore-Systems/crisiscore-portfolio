import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { projects } from "@/app/lib/content";
import { SITE } from "@/app/lib/site";

export default function HomePage() {
  const featured = projects.filter((p) => p.highlight);

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
          {SITE.tagline} No surveillance. No performative trust. Just systems
          that keep functioning when conditions don’t.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2 text-sm transition hover:bg-white/[0.10]"
          >
            View Projects
          </Link>
          <a
            href={SITE.socials.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:bg-white/[0.06] hover:text-white"
          >
            GitHub ↗
          </a>
          <Link
            href="/contact"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:bg-white/[0.06] hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>

      <Section title="Featured" kicker="Active work">
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
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

      <Section title="Principles" kicker="How this is built">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="font-semibold">Local authority</div>
            <p className="mt-2 text-sm text-white/70">
              Default ownership lives on the user’s device. Cloud is optional,
              not assumed.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="font-semibold">Degraded-first</div>
            <p className="mt-2 text-sm text-white/70">
              Designed for battery scarcity, stress, cognitive overload, and
              partial connectivity.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="font-semibold">Reversible by design</div>
            <p className="mt-2 text-sm text-white/70">
              Safe failure modes, undo paths, and minimal irreversible actions.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
