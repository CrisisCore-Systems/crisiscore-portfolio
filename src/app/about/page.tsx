import Link from "next/link";
import { absoluteUrl, SITE } from "@/app/lib/site";
import { AssetFigure } from "@/components/AssetFigure";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";

export const metadata = {
  title: "About",
  description:
    "About CrisisCore Systems: founder-led trust hardening and privacy architecture for sensitive-data products.",
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
        Founder-led trust hardening, privacy architecture, and structural risk review for products handling sensitive user reality.
      </p>
      <p className="mt-2 text-sm text-white/70">
        Independent systems designer. Based in Vernon, BC.
      </p>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
        I work with founders and technical owners who need sharp review on where trust breaks in the product itself: architecture, defaults, privacy posture, degraded-mode behavior, and operational risk.
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Panel className="p-7 sm:p-8">
            <div className="cc-kicker">Why this exists</div>
            <h2 className="mt-2 text-xl font-semibold">Products fail trust before they fail code</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/70">
              <p>
                Many products are technically functional but structurally weak at the edges: hidden collection, vague boundaries, misleading recovery paths, or privacy claims that do not hold under pressure.
              </p>
              <p>
                My work is to find those weaknesses early, explain them plainly, and turn them into fixes a product team can actually ship.
              </p>
              <p className="text-white/60">
                This is service work first: audit, hardening review, and implementation support for fragile systems.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/services">Services</Button>
              <Button href="/proof" variant="ghost">
                Proof
              </Button>
              <Button href="/contact" variant="ghost">
                Contact
              </Button>
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Operating principles</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Privacy is architecture, not a policy page.",
                "Trust boundaries need to be explicit, not implied.",
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
                    "Trust and privacy reviews for live or near-launch products.",
                    "Threat modeling and risk framing that matches operational reality.",
                    "Architectural analysis with explicit boundary and minimization decisions.",
                    "Implementation guidance and fix support when the work needs to ship.",
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
                    "Sell compliance posture as if it proves product trust.",
                    "Hide behind abstract innovation language.",
                    "Treat privacy copy as a substitute for architectural reality.",
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
            body="Independent protective-computing practitioner focused on local authority, degraded-mode behavior, and evidence a buyer can actually inspect."
            mediaClassName="aspect-[15/5]"
            imageClassName="object-cover p-0"
          />

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Founder profile</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Founder of CrisisCore Systems. Independent consultant based in Vernon, BC. I review fragile software systems for trust, privacy, and structural risk, with a bias toward evidence a buyer can inspect without a sales call.
            </p>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Canonical profiles</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Use these when verifying the public identity surface for CrisisCore Systems across code and DOI-backed records.
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
                I work best asynchronously and artifact-first. A short written context, constraints, and links beats a long call.
              </p>
              <p>
                If coercion risk, compromised devices, legal exposure, or health-adjacent data are in play, say so early. Those conditions change the trust boundary from the start.
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
                "Start with Services for the package fit and starting prices.",
                "Go to Proof for artifacts, outcomes, and technical evidence.",
                "Use Contact when you are ready to send the app, stack, and concern.",
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
              <Button href="/proof" variant="ghost">
                Proof
              </Button>
              <Button href="/contact" variant="ghost">
                Contact
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
