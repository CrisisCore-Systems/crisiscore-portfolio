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
            <h2 className="mt-2 text-xl font-semibold">
              Products can fail people even when they look fine.
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/70">
              <p>
                Many products run technically, but they still betray users when the context collapses: memory breaks, trust breaks, devices fail, or the system is no longer safe for the person using it.
              </p>
              <p>
                I find those failure edges early, explain them plainly, and turn them into fixes the team can ship without creating more brittle defaults.
              </p>
              <p className="text-white/60">
                This is service work first: trust review, correction, and implementation support rooted in real conditions, not ideal assumptions.
              </p>
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">What I do</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Trust review before launch or buyer inspection.",
                "Failure-mode and boundary review for local-first, offline-capable systems.",
                "Privacy and evidence design that holds up under pressure.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <div className="lg:col-span-5">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Founder profile</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Founder of CrisisCore Systems. Independent systems designer with a trade background in Red Seal HVAC/R and lived experience building for people who are already under pressure.
            </p>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Engagement</div>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
              <p>
                I work best asynchronously and artifact-first. A short written context, a few constraints, and links beat a long call.
              </p>
              <p>
                If coercion risk, compromised devices, legal exposure, or health-adjacent data are in play, say so early. That changes the review from the start.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/trust-risk-read">Get a 3-point risk read</Button>
              <Button href={mailto} variant="ghost">
                {SITE.email}
              </Button>
            </div>

            <div className="mt-6 text-xs text-white/55">
              Operational note: avoid sending sensitive personal data by email. If you need a safer channel, say so in the first message.
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Next step</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Open the case-study route when you want proof and operational detail. Use the trust read when you need the simplest, fastest answer about risk and fit.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/case-study" variant="ghost">
                Case study
              </Button>
              <Button href="/services" variant="ghost">
                Services
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
