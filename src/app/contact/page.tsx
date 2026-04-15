import { SITE } from "@/app/lib/site";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { FitCheckCta } from "@/components/FitCheckCta";

export const metadata = {
  title: "Contact",
  description: "Get a quick fit check for a sensitive-data product. Send the product URL, launch stage, and one concrete concern.",
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="cc-kicker">Contact</div>
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
        Email-first. Send the product URL, launch stage, and one concrete concern. I&apos;ll reply with fit, recommended package, and next step.
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Panel className="p-7 sm:p-8">
            <div className="cc-kicker">Start here</div>
            <h2 className="mt-2 text-xl font-semibold">Get a quick fit check</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Fastest path: send product URL, launch stage, and the issue you want checked first. I&apos;ll reply with whether this looks like a fit for a 48-hour teardown, deeper review, or not a fit.
            </p>

            <FitCheckCta
              className="mt-6"
              title="Send the URL, launch stage, and one specific issue."
              description="No deck or long brief required. This is the fastest way to get a useful first answer."
            />

            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={`mailto:${SITE.email}`}>{SITE.email}</Button>
            </div>

            <div className="mt-6 text-xs text-white/55">
              Operational note: avoid sending sensitive personal data by email.
              If you need a safer channel, say so in the first message.
            </div>

            <div className="mt-5 text-xs text-white/55">
              Direct email: <span className="font-mono text-white/80">{SITE.email}</span>
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
              <Button href={`mailto:${SITE.email}`} className="w-full justify-center">
                Email directly
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
