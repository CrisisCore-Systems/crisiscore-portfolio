import { SITE } from "@/app/lib/site";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Privacy and Analytics",
  description:
    "How CrisisCore Systems handles site analytics, JavaScript resilience, and first-contact intake boundaries.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12">
      <div className="cc-kicker">Privacy and analytics</div>
      <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
        No ad-tech trackers. No sensitive-data intake by default.
      </h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
        CrisisCore uses analytics only to understand whether public pages are working and which proof or service surfaces are being inspected. The site is not configured for ad retargeting, behavioral advertising, or selling visitor profiles.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Panel className="p-5">
          <div className="text-sm font-semibold">Analytics boundary</div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Production pages may load Plausible and Vercel Analytics for aggregate page-level signals. Those signals are used to improve the site, not to score visitors.
          </p>
        </Panel>
        <Panel className="p-5">
          <div className="text-sm font-semibold">First-contact boundary</div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Do not send sensitive personal data, health records, legal facts, credentials, or private user exports in the first note. Send only a product URL, launch stage, and concern.
          </p>
        </Panel>
        <Panel className="p-5">
          <div className="text-sm font-semibold">No-JS resilience</div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            This site remains readable and navigable without JavaScript because trust surfaces should degrade cleanly.
          </p>
        </Panel>
      </div>

      <div className="mt-8 rounded-2xl border border-[rgba(212,162,97,0.28)] bg-[rgba(212,162,97,0.08)] p-5">
        <div className="text-sm font-semibold">Secure channel needed?</div>
        <p className="mt-3 text-sm leading-relaxed text-white/76">
          If your product details require a safer intake path, write &quot;secure channel needed&quot; in the first email and keep the initial message minimal.
        </p>
        <p className="mt-4 text-sm text-white/70">
          Direct email: <span className="font-mono text-white/85">{SITE.email}</span>
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/trust-risk-read">Send product URL for first 3 gaps</Button>
        <Button href="/proof" variant="ghost">
          Inspect proof
        </Button>
      </div>
    </div>
  );
}
