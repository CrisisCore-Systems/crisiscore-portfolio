import { absoluteUrl, SITE } from "@/app/lib/site";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";

export const metadata = {
  title: "About",
  description:
    "About K Overton: founder-led systems design for people who cannot afford to be failed by software.",
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
        I build systems for people who cannot afford to be failed by systems.
      </p>
      <p className="mt-2 text-sm text-white/70">
        Founder, CrisisCore Systems. Creator of PainTracker. Author of Protective Computing.
      </p>

      <div className="mt-6 max-w-3xl space-y-6 text-sm leading-relaxed text-white/75 sm:text-base">
        <p>
          My work began in collapse, not comfort. Before CrisisCore Systems, before Protective Computing, before PainTracker, there was a simple problem: most software assumes the user is stable, resourced, regulated, housed, calm, and supported.
        </p>
        <p>
          I was not.
        </p>
        <p>
          I came from a trade background as a Red Seal HVAC/R technician, where failure was physical, immediate, and expensive. A bad installation did not become a vague user inconvenience. It became heat loss, pressure failure, safety risk, downtime, and real-world consequence.
        </p>
        <p>
          That shaped how I see technology.
        </p>
        <p>
          Software should not just function when everything goes right. It should protect people when everything goes wrong.
        </p>
        <p>
          After years of injury, instability, legal pressure, housing collapse, chronic pain, and trying to rebuild under conditions most systems are not designed to understand, I started building tools from the failure edge inward. Not wellness apps for ideal users. Not productivity dashboards for people already in control. Tools for the moment where memory breaks, pressure spikes, trust collapses, and the user still needs something that does not betray them.
        </p>
        <p>
          That became PainTracker.
        </p>
        <p>
          PainTracker is a privacy-first, offline-capable chronic pain documentation tool designed to help people record symptoms, patterns, flares, medication effects, and reports without forcing their most vulnerable data into someone else’s cloud. It was built around a principle that now defines my work:
        </p>
        <p className="font-semibold text-white">
          The user should remain the authority over their own data, especially when they are under pressure.
        </p>
        <p>
          From there, I developed the broader framework I call Protective Computing.
        </p>
        <p>
          Protective Computing is the discipline of designing software that fails safely. It focuses on local authority, reduced exposure, reversible states, clear degradation modes, and trust surfaces that do not collapse the moment a user is stressed, poor, injured, offline, locked out, or dealing with institutional power.
        </p>
        <p>
          CrisisCore Systems is the studio built around that doctrine.
        </p>
        <p>
          The work is part engineering, part research, part survival architecture. I build privacy-first tools, audit trust surfaces, document failure modes, and design systems that treat vulnerable users as real users, not edge cases.
        </p>
        <p>
          I do not come from the clean side of technology. I come from the underside, where systems are tested by poverty, pain, bureaucracy, device loss, unstable housing, legal pressure, and the quiet violence of being told to “just use the app” when the app was never designed for your reality.
        </p>
        <p>
          That is the origin.
        </p>
        <p>
          Not a startup fantasy.
          <br />
          A field report.
        </p>
        <p>
          My goal is simple: build tools that preserve agency when people are already close to losing it.
        </p>
        <p>
          Because humane software is not software that looks kind.
          <br />
          It is software that does not abandon the user at the exact moment protection matters most.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Panel className="p-7 sm:p-8">
            <div className="cc-kicker">Why this exists</div>
            <h2 className="mt-2 text-xl font-semibold">Products can fail users before they fail technically</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/70">
              <p>
                Many products run fine but still fail people at the edges: hidden collection, unclear boundaries, weak recovery paths, or claims that do not hold up under pressure.
              </p>
              <p>
                I find those weaknesses early, explain them plainly, and turn them into fixes a team can ship.
              </p>
              <p className="text-white/60">
                This is service work first: pre-compliance trust review, correction, and implementation support.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/services">Services</Button>
              <Button href="/case-study" variant="ghost">
                Case study
              </Button>
              <Button href="/trust-risk-read" variant="ghost">
                Get a 3-point risk read
              </Button>
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Operating principles</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Privacy is architecture, not a policy page.",
                "Product boundaries need to be explicit, not implied.",
                "Critical flows should survive low attention, low bandwidth, and bad conditions.",
                "Evidence matters more than sales language.",
                "Find the highest-leverage fix first, then ship it.",
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
                    "Pre-launch and pre-procurement trust reviews for live or near-launch products.",
                    "Threat modeling and risk framing that matches real constraints.",
                    "Architecture review with explicit boundary and minimization decisions.",
                    "Implementation guidance and fix support when changes need to ship.",
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
                    "Sell compliance checklists as proof of product safety.",
                    "Act as a law firm, auditor, or certification authority.",
                    "Hide weak decisions behind vague language.",
                    "Treat a pentest, policy page, or marketing copy as a substitute for product behavior.",
                    "Take on work where nobody can act on the findings.",
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
            body="Independent practitioner focused on local authority, degraded-mode behavior, and evidence a buyer can inspect."
            mediaClassName="aspect-[15/5]"
            imageClassName="object-cover p-0"
          />

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Founder profile</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Founder of CrisisCore Systems. Independent consultant based in Vernon, BC. I review software systems for privacy and product risk, with a bias toward evidence a buyer can inspect without a sales call.
            </p>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Canonical profiles</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Use these to verify public identity across code and DOI-backed records.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={SITE.socials.github} variant="ghost">
                GitHub ↗
              </Button>
              <Button href={SITE.socials.zenodo} variant="ghost">
                Zenodo canon ↗
              </Button>
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Profile destination links</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              These are the tracked destination links I use in profile surfaces so GitHub, DEV, and Hashnode clicks land on the measured trust-review entry point instead of a generic homepage visit.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={CAMPAIGN_LINKS.profileDestinations.github} variant="ghost">
                GitHub destination
              </Button>
              <Button href={CAMPAIGN_LINKS.profileDestinations.devto} variant="ghost">
                DEV destination
              </Button>
              <Button href={CAMPAIGN_LINKS.profileDestinations.hashnode} variant="ghost">
                Hashnode destination
              </Button>
            </div>
          </Panel>

          <Link href="/case-study" className="group mt-4 block">
            <AssetFigure
              src="/assets/founder-banners/about_mission_plate.svg"
              alt="About mission plate graphic for CrisisCore Systems"
              title="Mission plate"
              body="Open the case-study route first, then continue into proof materials, source records, and operating claims."
              className="transition group-hover:border-white/20 group-hover:bg-white/[0.04]"
            />
            <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition group-hover:text-white">
              <span>Open case-study route</span>
              <span className="transition group-hover:translate-x-0.5">→</span>
            </div>
          </Link>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Engagement</div>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
              <p>
                I work best asynchronously and artifact-first. A short written context, a few constraints, and links beat a long call.
              </p>
              <p>
                If coercion risk, compromised devices, legal exposure, or health-adjacent data are in play, say so early. That changes the review from the start.
              </p>
              <p>
                If you are deciding between compliance automation, a lawyer, a pentest, or a product trust review, send the product URL and one concern first. I&apos;ll point to the right lane.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/trust-risk-read">Get a 3-point risk read</Button>
              <Button href={mailto} variant="ghost">
                {SITE.email}
              </Button>
              <Button href={SITE.socials.github} variant="ghost">
                GitHub ↗
              </Button>
            </div>

            <div className="mt-6 text-xs text-white/55">
              Operational note: avoid sending sensitive personal data by email.
              If you need a safer channel, say so in the first message.
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">If you’re evaluating</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Start with Services for package fit and starting prices.",
                "Go to the case-study route first, then Proof for artifacts, outcomes, and technical evidence.",
                "Use the 3-point trust risk read when you are ready to send the app, launch stage, and concern.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/services" variant="ghost">
                Services
              </Button>
              <Button href="/case-study" variant="ghost">
                Case studies
              </Button>
              <Button href="/trust-risk-read" variant="ghost">
                Get a 3-point risk read
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
