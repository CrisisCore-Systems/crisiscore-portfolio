import { SITE } from "@/app/lib/site";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Panel } from "@/components/ui/Panel";
import { ContactFallbackForm } from "@/components/ContactFallbackForm";
import { CopyInquiryTemplateButton } from "@/components/CopyInquiryTemplateButton";

export const metadata = {
  title: "Contact",
  description: "Email-first inquiries for protective computing work.",
};

export default function ContactPage() {
  const subject = "CrisisCore Systems inquiry";
  const body =
    "Context:\n\n" +
    "What you need:\n\n" +
    "Constraints (time/budget/security):\n\n" +
    "Links / artifacts (optional):\n\n";

  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const inquiryTemplate =
    "Context:\n- What you are building and who it serves\n\n" +
    "Need:\n- Trust Hardening Review / Hardening Sprint / Fractional Trust Architect\n\n" +
    "Constraints:\n- Timeline\n- Budget range\n- Security or compliance boundaries\n\n" +
    "Artifacts:\n- Repo / docs / deployment links\n\n" +
    "Decision target date:\n-";

  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
        Email-first. Engagements typically map to: Trust Hardening Review,
        Hardening Sprint, or Fractional Trust Architect support.
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Panel className="p-7 sm:p-8">
            <div className="cc-kicker">Start here</div>
            <h2 className="mt-2 text-xl font-semibold">Send an inquiry</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Fastest path: email. Include context + constraints; I’ll reply with
              next steps.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={mailto}>{SITE.email}</Button>
              <Button href={SITE.socials.github} variant="ghost">
                GitHub ↗
              </Button>
              <Button href="/proof" variant="ghost">
                Proof
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="normal-case tracking-[0.08em]">Trust Hardening Review</Badge>
              <Badge className="normal-case tracking-[0.08em]">Hardening Sprint</Badge>
              <Badge className="normal-case tracking-[0.08em]">Fractional Trust Architect</Badge>
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
                "What you’re building (or auditing) and for whom.",
                "Your operating reality: instability factors, threat model, and constraints.",
                "Timeline + decision point (what would ‘done’ look like).",
                "Links to artifacts: repo, docs, screenshots, DOI, or deployment.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 text-xs text-white/55">
              Tip: the email button above pre-fills a short template.
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
                I aim to respond within 1–3 days. If you’re in an urgent window,
                put <span className="font-mono text-white/80">URGENT</span> in the
                subject line and include your deadline.
              </p>
              <p>
                I prefer verifiable artifacts over long calls: a short description,
                constraints, and links beat a meeting.
              </p>
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">For operators</div>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
              <p>
                If your environment includes coercion risk, compromised devices,
                or legal exposure, say so early. We’ll treat threat boundaries as
                first-class.
              </p>
              <p>
                Protective computing is constraint-led. “Normal” assumptions are
                optional.
              </p>
            </div>
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">Web form fallback</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              If the email button doesn’t open a client on your device, use this form to generate and send your inquiry via webmail.
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
