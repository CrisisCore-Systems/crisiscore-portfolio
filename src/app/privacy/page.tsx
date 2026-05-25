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
      <p className="mt-3 text-xs text-white/55">Last reviewed: May 21, 2026.</p>

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

      <Panel className="mt-8 p-7 sm:p-8">
        <div className="text-sm font-semibold">Analytics details</div>
        <div className="mt-4 grid gap-4 text-sm leading-relaxed text-white/72 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Plausible</div>
            <p className="mt-2">
              Plausible is used for aggregate page analytics. It is configured as cookieless analytics; raw IP addresses and raw user-agent data are not stored by Plausible.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Vercel Analytics</div>
            <p className="mt-2">
              Vercel Analytics is used for anonymous page-level traffic signals. It does not use third-party cookies, and the dashboard is not used to identify individual visitors.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Cookies and intake</div>
            <p className="mt-2">
              CrisisCore does not add ad-tech cookies. Analytics run only in production. Contact and intake copy is intentionally minimal so sensitive product or personal data is not collected by default.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Retention and vendors</div>
            <p className="mt-2">
              Analytics retention follows the vendor account settings and vendor policies. The operational boundary is simple: use aggregate site signals, avoid individual visitor scoring, and keep first-contact details out of analytics.
            </p>
          </div>
        </div>
      </Panel>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/trust-risk-read">Get a 3-point risk read</Button>
        <Button href="/proof" variant="ghost">
          See proof
        </Button>
      </div>
    </div>
  );
}
