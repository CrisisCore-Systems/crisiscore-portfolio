import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { ARTIFACTS, getArtifact } from "@/app/lib/artifacts";

type ParamsLike = { slug: string[] } | Promise<{ slug: string[] }>;

export const dynamic = "force-dynamic";

async function getSlug(params: ParamsLike) {
  const resolved = await Promise.resolve(params);
  return resolved.slug.join("/");
}

export function generateStaticParams() {
  return ARTIFACTS.map((x) => ({ slug: x.slug.split("/") }));
}

export async function generateMetadata({ params }: { params: ParamsLike }) {
  const slug = await getSlug(params);
  const artifact = getArtifact(slug);
  if (!artifact) return {};

  return {
    title: artifact.title,
    description: artifact.summary,
  };
}

export default async function ArtifactPage({
  params,
}: Readonly<{ params: ParamsLike }>) {
  const slug = await getSlug(params);
  if (slug === "pain-tracker/ui-01") {
    permanentRedirect("/artifacts/pain-tracker/ui-01-fastlog");
  }
  const projectSlug = slug.split("/")[0];
  const artifact = getArtifact(slug);
  if (!artifact) return notFound();
  const relatedArtifacts = ARTIFACTS.filter(
    (entry) => entry.slug !== artifact.slug && entry.slug.startsWith(`${projectSlug}/`)
  ).slice(0, 4);

  let markdownSource = "";
  let svgSource = "";
  const diskPath = path.join(process.cwd(), "public", artifact.rawPath.replace(/^\//, ""));

  if (artifact.kind === "markdown") {
    markdownSource = fs.readFileSync(diskPath, "utf8");
  }

  if (artifact.kind === "svg") {
    svgSource = fs.readFileSync(diskPath, "utf8");
  }

  return (
    <div className="py-12">
      <div className="flex flex-wrap gap-4 text-sm text-white/60">
        <Link href={`/projects/${projectSlug}`} className="hover:text-white">
          ← Back to dossier
        </Link>
        <Link href="/proof" className="hover:text-white">
          Back to proof
        </Link>
      </div>

      <div className="mt-6 text-xs uppercase tracking-[0.2em] text-white/45">Artifact viewer</div>
      <h1 className="mt-2 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{artifact.title}</h1>
      <p className="mt-3 max-w-3xl text-sm text-white/70">{artifact.summary}</p>

      <Panel className="mt-8 p-6 sm:p-8">
        {artifact.kind === "svg" ? (
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <div
              className="h-auto w-full"
              aria-label={artifact.title}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: svgSource }}
            />
          </div>
        ) : (
          <pre className="overflow-x-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-white/75">
            {markdownSource}
          </pre>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          <Button href={artifact.rawPath} variant="ghost">
            Raw file
          </Button>
          <Button href={artifact.githubMirror} variant="ghost">
            GitHub mirror ↗
          </Button>
        </div>
      </Panel>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Panel className="p-6 sm:p-8">
          <div className="text-sm font-semibold">Continue inspection</div>
          <p className="mt-2 text-sm text-white/70">
            Move from the single artifact back to the surrounding proof surface, dossier, and writing trail.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={`/projects/${projectSlug}`} variant="ghost">
              Open dossier
            </Button>
            <Button href="/proof" variant="ghost">
              Open proof
            </Button>
            <Button href="/site-map" variant="ghost">
              Open sitemap
            </Button>
          </div>
        </Panel>

        {relatedArtifacts.length > 0 ? (
          <Panel className="p-6 sm:p-8">
            <div className="text-sm font-semibold">Related artifacts</div>
            <div className="mt-4 grid gap-2">
              {relatedArtifacts.map((entry) => (
                <Button
                  key={entry.slug}
                  href={`/artifacts/${entry.slug}`}
                  variant="ghost"
                  className="justify-start"
                >
                  {entry.title}
                </Button>
              ))}
            </div>
          </Panel>
        ) : null}
      </div>
    </div>
  );
}
