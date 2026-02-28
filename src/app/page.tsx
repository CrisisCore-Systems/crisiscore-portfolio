import { ArrowUpRight, ShieldCheck, Zap, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/app/lib/site";
import { projects } from "@/app/lib/content";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function HomePage() {
  const featured = projects.filter((p) => p.highlight).slice(0, 2);

  return (
    <div className="py-12">
      <Panel className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-28 right-6 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Local-first</Badge>
            <Badge>Degraded-first</Badge>
            <Badge>Reversible</Badge>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
            Protective architecture for people living inside instability.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            {SITE.tagline} Built for low energy, low trust, partial connectivity,
            and coercion-risk environments.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">
              View Projects <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/proof" variant="ghost">
              Proof
            </Button>
            <Button href={SITE.socials.github} variant="ghost">
              GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <ShieldCheck className="h-4 w-4 text-white/80" />
                Local authority
              </div>
              <p className="mt-2 text-sm text-white/70">
                Default ownership lives on-device. Cloud is optional, not assumed.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Zap className="h-4 w-4 text-white/80" />
                Degraded-first
              </div>
              <p className="mt-2 text-sm text-white/70">
                Designed for battery scarcity, stress, cognitive overload, and
                partial connectivity.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <RefreshCcw className="h-4 w-4 text-white/80" />
                Reversible by design
              </div>
              <p className="mt-2 text-sm text-white/70">
                Safe failure modes, undo paths, minimal irreversible actions.
              </p>
            </div>
          </div>
        </div>
      </Panel>

      <section className="py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="cc-kicker">Active work</div>
            <h2 className="mt-2 text-xl font-semibold">Featured</h2>
          </div>
          <Link href="/projects" className="text-sm text-white/60 hover:text-white">
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {featured.map((p) => {
            if (p.slug === "overton-framework") {
              return (
                <div key={p.slug} className="cc-card p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        href={`/projects/${p.slug}`}
                        className="group inline-flex items-center gap-2 text-lg font-semibold"
                      >
                        {p.title}
                        <span className="text-white/40 transition group-hover:text-white/80">
                          ↗
                        </span>
                      </Link>

                      <p className="mt-3 text-sm text-white/70">{p.summary}</p>

                      <div className="mt-4 space-y-2">
                        {p.links.slice(0, 3).map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block text-sm text-white/70 hover:text-white"
                          >
                            › <span className="underline decoration-white/20 underline-offset-4">{l.label}</span>
                          </a>
                        ))}
                      </div>

                      <div className="mt-4 text-xs text-white/55">
                        Open access. DOI-backed. Designed to be independently testable.
                      </div>
                    </div>

                    <a
                      href={p.links[p.links.length - 1]?.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 text-sm text-white/60 hover:text-white"
                    >
                      Read →
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="cc-card group block p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{p.title}</div>
                    <p className="mt-3 text-sm text-white/70">{p.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.slice(0, 4).map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-1 text-white/40 transition group-hover:text-white/80">
                    ↗
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Panel className="p-8 sm:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">
              Collaboration
            </div>
            <h3 className="mt-2 text-xl font-semibold">
              If you need systems that don’t collapse under pressure
            </h3>
            <p className="mt-2 text-sm text-white/70">
              I build protective software, threat models, and verifiable artifacts.
            </p>
          </div>
          <div className="flex gap-3">
            <Button href="/contact">Contact</Button>
            <Button href="/proof" variant="ghost">
              View proof
            </Button>
          </div>
        </div>
      </Panel>
    </div>
  );
}

