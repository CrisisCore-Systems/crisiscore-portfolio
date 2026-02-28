import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/app/lib/content";
import { DOSSIERS } from "@/app/lib/dossiers";
import { getRepo } from "@/app/lib/github";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";

type ParamsLike = { slug: string } | Promise<{ slug: string }>;

async function getSlug(params: ParamsLike) {
  const resolved = await Promise.resolve(params);
  return resolved.slug;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: ParamsLike }) {
  const slug = await getSlug(params);
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
  };
}

function fmt(n: number) {
  return new Intl.NumberFormat(undefined, { notation: "compact" }).format(n);
}

function date(d: string) {
  try {
    return new Date(d).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return d;
  }
}

export default async function ProjectPage({
  params,
}: {
  params: ParamsLike;
}) {
  const slug = await getSlug(params);
  const p = projects.find((x) => x.slug === slug);
  if (!p) return notFound();

  const dossier = DOSSIERS[slug];
  const gh = p.links.find((l) => l.href.includes("github.com/"));
  const repoMatch = gh?.href.match(/github\.com\/([^/]+)\/([^/]+)/i);
  const repo = repoMatch ? await getRepo(repoMatch[1], repoMatch[2]) : null;

  return (
    <div className="py-12">
      <Link href="/projects" className="text-sm text-white/60 hover:text-white">
        ← Back to projects
      </Link>

      <div className="mt-6">
        <div className="text-xs uppercase tracking-[0.2em] text-white/45">
          Project dossier
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          {p.title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
          {dossier?.tagline ?? p.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">
              {dossier?.problem.title ?? "Summary"}
            </div>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
              {(dossier?.problem.body ?? [p.summary]).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Panel>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Panel className="p-7">
              <div className="text-sm font-semibold">
                {dossier?.constraints.title ?? "Constraints"}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {(dossier?.constraints.items ?? [
                  "Local authority over defaults.",
                  "Degraded-first behavior.",
                  "Reversible actions.",
                ]).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[2px] text-white/40">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel className="p-7">
              <div className="text-sm font-semibold">Proof</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(dossier?.proof.links ?? p.links).map((l) => (
                  <Button key={l.href} href={l.href} variant="ghost">
                    {l.label} ↗
                  </Button>
                ))}
              </div>

              {repo ? (
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs text-white/55">Stars</div>
                    <div className="mt-1 text-lg font-semibold">
                      {fmt(repo.stargazers_count)}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs text-white/55">Issues</div>
                    <div className="mt-1 text-lg font-semibold">
                      {fmt(repo.open_issues_count)}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs text-white/55">Last push</div>
                    <div className="mt-1 text-sm font-semibold">
                      {date(repo.pushed_at)}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-4 text-xs text-white/50">
                  Live repo stats may be rate-limited for anonymous requests.
                </div>
              )}
            </Panel>
          </div>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">
              {dossier?.architecture.title ?? "Architecture"}
            </div>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
              {(dossier?.architecture.body ?? [
                "This dossier is being expanded. The architecture section will contain diagrams and explicit trust boundaries.",
              ]).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            {dossier?.architecture.diagram ? (
              <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
                <img
                  src={dossier.architecture.diagram.src}
                  alt={dossier.architecture.diagram.alt}
                  width={dossier.architecture.diagram.width}
                  height={dossier.architecture.diagram.height}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
              </div>
            ) : null}
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">
              {dossier?.outcomes.title ?? "Outcomes"}
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {(dossier?.outcomes.items ?? [
                "A structured, verifiable case-study surface (this dossier) replacing a link dump.",
              ]).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <div className="lg:col-span-4">
          <Panel className="p-7">
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
          </Panel>

          {dossier?.images ? (
            <Panel className="mt-4 p-7">
              <div className="text-sm font-semibold">{dossier.images.title}</div>
              <div className="mt-4 grid gap-3">
                {dossier.images.items.map((img) => (
                  <div
                    key={img.src}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-white/50">
                These are lightweight SVG sketches stored under <span className="font-mono text-white/70">/public/projects/{p.slug}</span>.
              </div>
            </Panel>
          ) : null}
        </div>
      </div>
    </div>
  );
}
