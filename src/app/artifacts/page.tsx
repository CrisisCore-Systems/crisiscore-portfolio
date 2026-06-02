import { ARTIFACTS } from "@/app/lib/artifacts";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";

export const metadata = {
  title: "Artifacts",
  description:
    "Redacted artifacts, diagram plates, and proof specimens buyers can inspect without leaving CrisisCore Systems.",
};

const SECTION_LABELS: Record<string, string> = {
  "pain-tracker": "PainTracker",
  "security-and-audits": "Security and Audits",
  "overton-framework": "Overton Framework",
};

export default function ArtifactsIndexPage() {
  const sections = Object.entries(
    ARTIFACTS.reduce<Record<string, typeof ARTIFACTS>>((acc, artifact) => {
      const section = artifact.slug.split("/")[0] ?? "artifacts";
      acc[section] ??= [];
      acc[section].push(artifact);
      return acc;
    }, {})
  );

  return (
    <div className="py-12">
      <div className="cc-kicker">Artifacts</div>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
        Inspectable proof artifacts, not just claims.
      </h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
        Use this page when you want the direct evidence layer: architecture sketches, redacted audit specimens, and diagram plates that support the surrounding case studies and proof route.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <Button href="/proof">Open proof route</Button>
        <Button href="/case-study" variant="ghost">
          Open case study route
        </Button>
        <Button href="/trust-risk-read" variant="ghost">
          Get a 3-point risk read
        </Button>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Panel className="p-7">
          <div className="text-sm font-semibold">How to use this page</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>• Open one artifact that matches the risk surface you care about.</li>
            <li>• Move back to the linked case-study or proof route for context.</li>
            <li>• Use the GitHub mirror when you want the raw file and public source path.</li>
          </ul>
        </Panel>
        <Panel className="p-7 lg:col-span-2">
          <div className="text-sm font-semibold">Visible boundary</div>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
            These are inspection surfaces, not promises of perfect security or guaranteed outcomes. The point is to make the work legible enough that a skeptical buyer can verify the shape of it.
          </p>
        </Panel>
      </div>

      <div className="mt-10 space-y-4">
        {sections.map(([section, artifacts]) => (
          <Panel key={section} className="p-7 sm:p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45">Artifact group</div>
            <h2 className="mt-2 text-2xl font-semibold">{SECTION_LABELS[section] ?? section}</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {artifacts.map((artifact) => (
                <div
                  key={artifact.slug}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="text-sm font-semibold text-white">{artifact.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{artifact.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button href={`/artifacts/${artifact.slug}`} variant="ghost">
                      Open artifact
                    </Button>
                    <Button href={artifact.githubMirror} variant="ghost">
                      GitHub mirror
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}
