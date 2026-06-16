import type { Metadata } from "next";
import { absoluteUrl, SITE } from "@/app/lib/site";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import CrisisCoreVisualStrip from "@/components/CrisisCoreVisualStrip";

export const metadata: Metadata = {
  title: "Small Business Website Trust Cleanup",
  description:
    "Fast first look for local service websites: booking clarity, contact reassurance, and credibility cleanup before customers hesitate.",
  openGraph: {
    images: [{ url: absoluteUrl("/assets/crisiscore/small-business-trust-cleanup.svg") }],
  },
  twitter: {
    images: [absoluteUrl("/assets/crisiscore/small-business-trust-cleanup.svg")],
  },
};

export default function SmallBusinessCleanup() {
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE.email)}`;

  return (
    <div className="py-12">
      <Panel className="p-8 sm:p-10">
        <div className="cc-kicker">Local service site trust gaps</div>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Small Business Website Trust Cleanup
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/72 sm:text-base">
          A fast first look for motels, plumbers, contractors, clinics, salons, and other local services. I review the public site as a customer would and flag the first trust gaps that keep people from calling, booking, or converting.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={gmailHref}>Open in Gmail</Button>
          <Button href="/trust-risk-read" variant="ghost">
            See the full intake path
          </Button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">Booking + contact clarity</div>
            <p className="mt-3 text-sm leading-relaxed text-white/72">
              I check whether customers can tell how to book, request service, or call without guessing. Hidden or weak contact cues are the fastest way to lose local leads.
            </p>
          </div>
          <div className="rounded-3xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">Privacy + contact reassurance</div>
            <p className="mt-3 text-sm leading-relaxed text-white/72">
              Customers need to feel safe sharing their details. I flag contact signals, trust cues, and simple reassurance language that reduces hesitation and keeps visitors on the page.
            </p>
          </div>
          <div className="rounded-3xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">Credibility cleanup</div>
            <p className="mt-3 text-sm leading-relaxed text-white/72">
              Outdated, templated, or generic pages make your business feel weaker than it is. I call out the must-fix trust issues that make your site look more professional and real.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-[color:var(--line)] bg-[rgba(212,162,97,0.08)] p-6">
          <p className="text-base font-semibold text-white">Send me your website and I&apos;ll identify the top 3 public trust issues.</p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Email-first, fast first look. Send one website URL and one sentence about what you want to fix, and I&apos;ll reply with the first public trust gaps and the simplest next move.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href={gmailHref}>Open in Gmail</Button>
            <Button href="/services" variant="ghost">
              See services
            </Button>
          </div>
        </div>

        <div className="mt-6">
          <CrisisCoreVisualStrip />
        </div>
      </Panel>
    </div>
  );
}
