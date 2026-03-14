import Link from "next/link";
import { getRepo } from "@/app/lib/github";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Panel } from "@/components/ui/Panel";
import { loadDossier, loadProject } from "@/content/load";

export const metadata = {
  title: "PainTracker Case Study",
  description: "How PainTracker reduced trust risk with local-first architecture, offline-capable flows, and explicit proof surfaces.",
};

export const revalidate = 21600;

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

export default async function PainTrackerCaseStudyPage() {
  const project = loadProject("pain-tracker");
  const dossier = loadDossier("pain-tracker");
  const repo = await getRepo("CrisisCore-Systems", "pain-tracker");

  return (
    <div className="py-12">
      <Link href="/proof" className="text-sm text-white/60 hover:text-white">
        ← Back to proof
      </Link>

      <div className="mt-6">
        <div className="cc-kicker">Flagship case study</div>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          PainTracker: reducing trust risk in a chronic-pain workflow without forcing users into accounts or always-on sync
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          {dossier?.tagline ?? project.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Badge className="normal-case tracking-[0.08em]">
          Local-first PWA built around protective UX.
        </Badge>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <Button href="https://paintracker.ca">Open live app ↗</Button>
        <Button href="https://github.com/CrisisCore-Systems/pain-tracker" variant="ghost">
          Open repo ↗
        </Button>
        <Button href="/artifacts/pain-tracker/architecture" variant="ghost">
          Architecture artifact
        </Button>
        <Button href="/contact" variant="ghost">
          Send fit-check inquiry
        </Button>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Starting condition</div>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
              <p>
                Most pain tracking tools assume stable connectivity, high attention, and willingness to centralize intimate health data. For people living with chronic pain, those assumptions fail precisely when continuity matters most.
              </p>
            </div>
          </Panel>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Panel className="p-7">
              <div className="text-sm font-semibold">Trust risks and failure surfaces</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>Centralized health data becomes unnecessary exhaust and expands blast radius.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>Always-on sync assumptions fail during low bandwidth, low battery, or interrupted sessions.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>High-friction interaction models break under cognitive overload and pain spikes.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>Sharing paths can become ambient leakage unless exports are explicit and reversible.</span>
                </li>
              </ul>
            </Panel>

            <Panel className="p-7">
              <div className="text-sm font-semibold">Architectural decisions</div>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
                {(dossier?.architecture.body ?? []).map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </Panel>
          </div>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Hardening moves</div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">Data posture</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Default ownership stays on-device. Core use does not require an account, and sharing is user-initiated rather than ambient.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">Degraded-mode behavior</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Logging remains available offline so the product continues working when connectivity is partial or absent.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">Interaction design</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Flows are simplified for low energy and cognitive overload, so users can keep going without needing ideal conditions.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">Proof surface</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  The system is backed by a live deployment, repository, dossier, and artifact viewers so claims can be independently checked.
                </p>
              </div>
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Resulting posture</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {(dossier?.outcomes.items ?? []).map((item) => (
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
            <div className="text-sm font-semibold">Evidence</div>
            <div className="mt-4 grid gap-2">
              <Button href="https://paintracker.ca" variant="ghost" className="justify-start">
                Live app ↗
              </Button>
              <Button href="https://github.com/CrisisCore-Systems/pain-tracker" variant="ghost" className="justify-start">
                Repository ↗
              </Button>
              <Button href="/projects/pain-tracker" variant="ghost" className="justify-start">
                Full dossier
              </Button>
              <Button href="/artifacts/pain-tracker/architecture" variant="ghost" className="justify-start">
                Architecture artifact
              </Button>
              <Button href="/artifacts/pain-tracker/ui-01-fastlog" variant="ghost" className="justify-start">
                Fast-log UI artifact
              </Button>
            </div>
          </Panel>

          <Panel className="mt-4 p-7">
            <div className="text-sm font-semibold">Public source signals</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-xs text-white/55">Stars</div>
                <div className="mt-1 text-xl font-semibold">
                  {repo ? fmt(repo.stargazers_count) : "—"}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-xs text-white/55">Last push</div>
                <div className="mt-1 text-sm font-semibold">
                  {repo ? date(repo.pushed_at) : "—"}
                </div>
              </div>
            </div>
            {repo ? null : (
              <div className="mt-4 text-xs text-white/50">
                Live repo stats may be rate-limited for anonymous requests.
              </div>
            )}
          </Panel>

          <Panel className="mt-4 p-7">
            <div className="text-sm font-semibold">Who this is for</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li className="flex gap-2">
                <span className="mt-[2px] text-white/40">•</span>
                <span>Teams handling sensitive user data where trust failure harms operations or users.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[2px] text-white/40">•</span>
                <span>Products that must keep working under low bandwidth, unstable conditions, or low trust.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[2px] text-white/40">•</span>
                <span>Founders or technical leads who need a practical model for reducing risk before a wider hardening engagement.</span>
              </li>
            </ul>

            <div className="mt-6">
              <Button href="/contact" className="w-full justify-center">
                Send repo + context for fit check
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}