import Link from "next/link";
import { absoluteUrl, SITE } from "@/app/lib/site";
import { AssetFigure } from "@/components/AssetFigure";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";

export const metadata = {
  title: "About",
  description:
    "Protective computing: privacy-first systems built for low-trust and unstable conditions.",
  openGraph: {
    images: [{ url: absoluteUrl("/assets/founder-banners/about_mission_plate.svg") }],
  },
  twitter: {
    images: [absoluteUrl("/assets/founder-banners/about_mission_plate.svg")],
  },
};

export default function AboutPage() {
  const mailto = `mailto:${SITE.email}`;

  return (
    <div className="py-12">
      <div className="cc-kicker">CrisisCore Systems</div>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
        About
      </h1>
      <p className="mt-3 cc-lede">
        I build privacy-first tools and protective frameworks for people
        operating under real instability: illness, displacement, coercion risk,
        partial connectivity, and low-trust environments.
      </p>
      <p className="mt-2 text-sm text-white/70">
        Independent systems designer. Based in Vernon, BC.
      </p>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
        I work across local-first architecture, threat modeling, security review, degraded-mode UX, and operational reliability.
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Panel className="p-7 sm:p-8">
            <div className="cc-kicker">Why this exists</div>
            <h2 className="mt-2 text-xl font-semibold">Protective computing</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/70">
              <p>
                Most systems are designed for a world where trust holds and
                conditions are stable. My work assumes the opposite.
              </p>
              <p>
                The goal is not “perfect security.” The goal is a system that
                remains usable, safe, and legible when users are under stress and
                the environment is adversarial.
              </p>
              <p className="text-white/60">
                I’m not here to sell growth theater. I build systems that stay
                legible and usable when conditions turn hostile.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/projects">Projects</Button>
              <Button href="/proof" variant="ghost">
                Proof
              </Button>
              <Button href="/writing" variant="ghost">
                Writing
              </Button>
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Operating principles</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Local authority over defaults (users own their data and failure modes are explicit).",
                "Degraded-first behavior (it should still work when the network and attention don’t).",
                "Reversibility (users can undo; operators can roll back).",
                "Explicit trust boundaries (who/what is assumed safe—and what is not).",
                "Evidence over claims (repro steps, tests, and verifiable artifacts).",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">What I do (and don’t)</div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Do
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {[
                    "Threat modeling and risk framing that matches adversarial reality.",
                    "Audits that produce actionable outputs (not theater).",
                    "Local-first / privacy-first product architecture.",
                    "Operator-ready docs: checklists, runbooks, verification steps.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[2px] text-white/40">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Don’t
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {[
                    "Sell compliance badges as security outcomes.",
                    "Make unverifiable claims about guarantees.",
                    "Build systems that require constant connectivity to be safe.",
                    "Optimize for vanity metrics over operator safety.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[2px] text-white/40">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Panel>
        </div>

        <div className="lg:col-span-5">
          <AssetFigure
            src="/assets/founder-banners/dev_profile_header.svg"
            alt="Founder identity banner for CrisisCore Systems"
            title="Founder profile"
            body="Independent protective-computing practitioner focused on local authority, degraded-mode behavior, and evidence a buyer can actually inspect."
            mediaClassName="aspect-[15/5]"
            imageClassName="object-cover p-0"
          />

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Founder profile</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Independent consultant, based in Vernon, BC. The work centers on trust-sensitive software, low-connectivity conditions, explicit failure boundaries, and evidence a buyer can inspect without a sales call.
            </p>
          </Panel>

          <Link href="/proof" className="group mt-4 block">
            <AssetFigure
              src="/assets/founder-banners/about_mission_plate.svg"
              alt="About mission plate graphic for CrisisCore Systems"
              title="Mission plate"
              body="Open the proof surface to inspect the artifacts, source records, and operating claims behind this practice."
              className="transition group-hover:border-white/20 group-hover:bg-white/[0.04]"
            />
            <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition group-hover:text-white">
              <span>Open proof surface</span>
              <span className="transition group-hover:translate-x-0.5">→</span>
            </div>
          </Link>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Engagement</div>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
              <p>
                I work best asynchronously and artifact-first. A short written
                context + constraints + links beats a meeting.
              </p>
              <p>
                If coercion risk, compromised devices, or legal exposure are in
                play, say so early. Those conditions change the trust boundary
                from the start.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Contact</Button>
              <Button href={mailto} variant="ghost">
                {SITE.email}
              </Button>
              <Button href={SITE.socials.github} variant="ghost">
                GitHub ↗
              </Button>
            </div>

            <div className="mt-6 text-xs text-white/55">
              Operational note: avoid sending sensitive personal data by email.
              If you need a higher-safety channel, say so in the first message.
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">If you’re evaluating</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Start with Proof for artifacts and validation surface.",
                "Browse Projects for dossiers (problem → method → outputs).",
                "Read Writing for the canon + operating philosophy.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/proof" variant="ghost">
                Proof
              </Button>
              <Button href="/projects" variant="ghost">
                Projects
              </Button>
              <Button href="/writing" variant="ghost">
                Writing
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
