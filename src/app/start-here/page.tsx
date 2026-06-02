import { absoluteUrl, SITE } from "@/app/lib/site";
import { FitCheckCta } from "@/components/FitCheckCta";
import { Section } from "@/components/Section";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Start Here",
  description:
    "Start here to understand how PainTracker, ProofVault, Protective Computing, and CrisisCore fit together and to request a 3-point trust risk read.",
  openGraph: {
    images: [{ url: absoluteUrl("/assets/founder-banners/about_mission_plate.svg") }],
  },
  twitter: {
    images: [absoluteUrl("/assets/founder-banners/about_mission_plate.svg")],
  },
};

export default function StartHerePage() {
  return (
    <div className="py-12">
      <Panel className="p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <div className="cc-kicker">Start here</div>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              One route through the ecosystem.
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-semibold text-white sm:text-xl">
              CrisisCore helps sensitive-data products find trust-breaking defaults before launch.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/74 sm:text-base">
              PainTracker proves it. ProofVault proves it. Protective Computing explains it. GitHub verifies it. CrisisCore turns that work into a service path for founders who need a clear read before buyers, users, or reviewers start asking harder questions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/trust-risk-read">Get a 3-point risk read</Button>
              <Button href="/proof" variant="ghost">
                Inspect the proof path
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-3xl border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(120,167,181,0.14),rgba(10,17,24,0.92))] p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-[rgba(180,207,219,0.72)]">Default next step</div>
              <p className="mt-2 text-sm font-medium leading-relaxed text-white/84">
                Send the app URL, launch stage, and biggest concern. I&apos;ll send back the top 3 trust risks I see and whether the next move is CrisisCore, a lawyer, a pentest, compliance tooling, or nothing yet.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">What this page does</div>
                <p className="mt-2 text-sm leading-relaxed text-white/74">
                  Routes people who need empathy, proof, doctrine, verification, or commercial help to the right surface.
                </p>
              </div>
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(212,162,97,0.08)] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">What it avoids</div>
                <p className="mt-2 text-sm leading-relaxed text-white/74">
                  Sending cold buyers through doctrine first or making every artifact try to sell, explain, and prove everything at once.
                </p>
              </div>
            </div>
          </div>
        </div>

        <FitCheckCta
          className="mt-8"
          title="Get a 3-point risk read."
          description="Send the app URL, launch stage, and biggest concern. I&apos;ll reply with the top 3 trust risks I see and the right next lane."
          splitStageAndConcern
          checklistItems={[
            "Send app URL, launch stage, and biggest concern.",
            "Use this before buying a bigger engagement or a different category of help.",
            "Expect a short response with the top 3 risks and the next move.",
          ]}
        />
      </Panel>

      <Section title="Choose Your Route" kicker="One job per surface">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">I live with chronic pain</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Use PainTracker. It is the lived product surface built for pain, stress, low trust, and partial connectivity.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={SITE.products.painTracker} variant="ghost">
                Open PainTracker ↗
              </Button>
            </div>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">I build software</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Read the architecture and writing surfaces for concrete failure modes, trust boundaries, and review criteria.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/writing" variant="ghost">
                Read the writing path
              </Button>
            </div>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">I run a sensitive-data product</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Start with the trust risk read if the product works but collection, consent, recovery, export, deletion, or failure behavior may not be defensible.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/trust-risk-read">Get a 3-point risk read</Button>
            </div>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">I want proof</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Inspect GitHub, proof pages, redacted artifacts, reference packets, and DOI-backed records before deciding what to trust.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/proof" variant="ghost">
                Open proof
              </Button>
              <Button href={SITE.socials.github} variant="ghost">
                GitHub ↗
              </Button>
            </div>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">I want the doctrine</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Protective Computing is the explanatory layer: the method, canon, and vocabulary behind the service work.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={SITE.bridges.protectiveComputing} variant="ghost">
                Protective Computing ↗
              </Button>
            </div>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">I want the offer ladder</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• Free: 3-point trust risk read</li>
              <li>• Entry: 48-hour teardown from CA$250</li>
              <li>• Core: sensitive-data trust review from CA$1,200</li>
              <li>• Follow-up: fix sprint from CA$1,500</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/services" variant="ghost">
                Review the packages
              </Button>
            </div>
          </Panel>
        </div>
      </Section>
    </div>
  );
}