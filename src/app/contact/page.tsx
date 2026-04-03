import { SITE } from "@/app/lib/site";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { ContactFallbackForm } from "@/components/ContactFallbackForm";
import { CopyInquiryTemplateButton } from "@/components/CopyInquiryTemplateButton";

export const metadata = {
  title: "Contact",
  description: "Get a 3-point risk read for a health or sensitive-data product. Send the link, concern, and deadline.",
};

export default function ContactPage() {
  const subject = "CrisisCore Systems risk read inquiry";
  const body =
    "Product link:\n\n" +
    "Primary concern:\n\n" +
    "Deadline:\n\n" +
    "Optional context:\n\n";

  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const inquiryTemplate =
    "Product link:\n- \n\n" +
    "Primary concern:\n- \n\n" +
    "Deadline:\n- \n\n" +
    "Optional context:\n- Stack / repo / constraints if helpful";

  return (
    <div className="py-12">
      <div className="cc-kicker">Contact</div>
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
        Email-first. Send the product link, your concern, and your deadline. I&apos;ll reply with fit, recommended package, and next step.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="text-xs uppercase tracking-[0.2em] text-white/45">Best first message</div>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Short and direct. A product link and a real concern beat a polished pitch.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="text-xs uppercase tracking-[0.2em] text-white/45">What happens next</div>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            I&apos;ll tell you if the fit looks like a fast teardown, full review, fix sprint, or not a fit.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="text-xs uppercase tracking-[0.2em] text-white/45">Do not send</div>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Sensitive personal data, production secrets, or anything you would not normally put in email.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Panel className="p-7 sm:p-8">
            <div className="cc-kicker">Start here</div>
            <h2 className="mt-2 text-xl font-semibold">Get a 3-point risk read</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Fastest path: email. Send the product link, your main concern, and your deadline. I&apos;ll reply with whether this looks like a fit for the 48-hour teardown, a deeper review, or not a fit.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={mailto}>{SITE.email}</Button>
              <Button href="/services" variant="ghost">
                Services
              </Button>
              <Button href={SITE.socials.github} variant="ghost">
                GitHub ↗
              </Button>
              <Button href="/proof" variant="ghost">
                Proof
              </Button>
            </div>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">Typical engagement types</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "48-hour Trust Teardown",
                  "Full Trust Review",
                  "Fix Sprint",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-white/[0.03] px-3 py-1.5 text-xs font-mono tracking-[0.08em] text-white/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 text-xs text-white/55">
              Operational note: avoid sending sensitive personal data by email.
              If you need a higher-safety channel, say so in the first message.
            </div>

            <div className="mt-5 text-xs text-white/55">
              Direct email: <span className="font-mono text-white/80">{SITE.email}</span>
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">What to include</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Product link.",
                "The main privacy, trust, or launch concern.",
                "Your deadline.",
                "Optional: repo, stack, or constraints if useful.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 text-xs text-white/55">
              Tip: the email button above pre-fills a short template. Keep it short.
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">Inquiry template</div>
              <pre className="mt-3 whitespace-pre-wrap text-xs leading-relaxed text-white/70">
                {inquiryTemplate}
              </pre>
              <div className="mt-3">
                <CopyInquiryTemplateButton template={inquiryTemplate} />
              </div>
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
              <Button href={mailto} className="w-full justify-center">
                Email the inquiry template
              </Button>
              <Button href="/proof" variant="ghost" className="w-full justify-center">
                Review proof first
              </Button>
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">For operators</div>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
              <p>
                If your environment includes coercion risk, compromised devices, legal exposure, or sensitive health-adjacent data, say so early. We&apos;ll treat threat boundaries as first-class.
              </p>
              <p>
                Trust review is constraint-led. "Normal" assumptions are optional.
              </p>
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Web form fallback</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              The most reliable path across devices is: generate the message, copy the inquiry text, and paste it into whatever mail client or secure channel you actually use. Gmail and Outlook shortcuts are optional convenience paths.
            </p>
            <div className="mt-4">
              <ContactFallbackForm to={SITE.email} />
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
