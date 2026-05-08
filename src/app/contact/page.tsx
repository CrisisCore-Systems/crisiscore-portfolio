import { SITE } from "@/app/lib/site";
import { ContactFallbackForm } from "@/components/ContactFallbackForm";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { FitCheckCta } from "@/components/FitCheckCta";

export const metadata = {
  title: "Contact",
  description: "Get a quick fit check for a sensitive-data product. Send the product URL, launch stage, and one concrete concern.",
};

export default function ContactPage() {
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE.email)}`;

  return (
    <div className="py-12">
      <div className="cc-kicker">Contact</div>
      <h1 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Contact</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/72 sm:text-base">
        Email-first. Send the product URL, launch stage, and one concrete concern. I&apos;ll reply with fit, recommended package, and next step.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(120,167,181,0.08)] p-4">
          <div className="text-xs uppercase tracking-[0.18em] text-white/45">Fastest path</div>
          <p className="mt-2 text-sm leading-relaxed text-white/78">Use Gmail-first compose if you just need a draft open right now.</p>
        </div>
        <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(212,162,97,0.08)] p-4">
          <div className="text-xs uppercase tracking-[0.18em] text-white/45">Send only basics</div>
          <p className="mt-2 text-sm leading-relaxed text-white/78">A URL, launch stage, and one concern are enough for the first pass.</p>
        </div>
        <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-4">
          <div className="text-xs uppercase tracking-[0.18em] text-white/45">Fallback ready</div>
          <p className="mt-2 text-sm leading-relaxed text-white/78">If your email app is blocked, use the provider grid or copy the inquiry text.</p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Panel className="overflow-hidden p-7 sm:p-8">
            <div className="cc-kicker">Start here</div>
            <h2 className="mt-2 text-xl font-semibold">Get a quick fit check</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/72">
              Fastest path: send product URL, launch stage, and the issue you want checked first. I&apos;ll reply with whether this looks like a fit for a 48-hour teardown, deeper review, or not a fit.
            </p>

            <FitCheckCta
              className="mt-6"
              title="Send the URL, launch stage, and one specific issue."
              description="No deck or long brief required. This is the fastest way to get a useful first answer."
            />

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button href={gmailHref}>Open in Gmail</Button>
              <div className="cc-chip">Usually answered in 1-2 days</div>
            </div>

            <div className="mt-6 text-xs text-white/55">
              Operational note: avoid sending sensitive personal data by email.
              If you need a safer channel, say so in the first message.
            </div>

            <div className="mt-5 text-xs text-white/55">
              Direct email: <span className="font-mono text-white/80">{SITE.email}</span>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <div className="text-sm font-semibold">Need another path?</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Gmail is the primary path here. If you prefer another route, use the fallback composer below to copy the inquiry text or open a draft in Outlook, Yahoo, AOL, or Proton.
              </p>
              <div className="mt-4">
                <ContactFallbackForm to={SITE.email} />
              </div>
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">What to include</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Product URL.",
                "Launch stage or deadline.",
                "The main privacy, product, or launch concern.",
                "Optional: repo, stack, or constraints if they change the answer.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 text-xs text-white/55">
              Keep the first note short. If it looks like a fit, I&apos;ll ask for the next layer of detail.
            </div>
          </Panel>
        </div>

        <div className="lg:col-span-5">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Response expectations</div>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
              <p>
                I aim to respond within 1-3 days. If you&apos;re in an urgent window,
                put <span className="font-mono text-white/80">URGENT</span> in the
                subject line and include your deadline.
              </p>
              <p>
                I prefer verifiable artifacts over long calls: a short description,
                deadline, and link beat a meeting.
              </p>
            </div>

            <div className="mt-6 grid gap-2">
              <Button href={gmailHref} className="w-full justify-center">
                Open in Gmail
              </Button>
            </div>

            <div className="mt-6 rounded-2xl border border-[color:var(--line)] bg-[rgba(120,167,181,0.06)] p-4 text-sm text-white/74">
              Better first messages are short. Send the link, the deadline, and the one thing you are worried is wrong.
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
