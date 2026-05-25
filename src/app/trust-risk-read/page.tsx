import { SITE } from "@/app/lib/site";
import { ContactFallbackForm } from "@/components/ContactFallbackForm";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Panel } from "@/components/ui/Panel";
import { Section } from "@/components/Section";
import CrisisCoreVisualStrip from "@/components/CrisisCoreVisualStrip";
import { FitCheckCta } from "@/components/FitCheckCta";

export const metadata = {
  title: "3-Point Trust Risk Read",
  description:
    "Send the app URL, launch stage, and biggest concern. I’ll reply with the top 3 trust risks I see and the right next lane.",
};

export default function TrustRiskReadPage() {
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE.email)}`;

  return (
    <div className="py-12">
      <div className="cc-kicker">3-point trust risk read</div>
      <h1 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">3-Point Trust Risk Read</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/72 sm:text-base">
        Free fit check, not an audit. Email-first. Send the app URL, launch stage, and biggest concern. I&apos;ll reply with the top 3 trust risks I see, whether this points to a 48-Hour Trust Risk Brief, full review, fix sprint, another specialist, or no engagement.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
          <Image src="/assets/crisiscore/08_intake_flow.png" alt="Intake flow diagram showing product URL submission leading to no-fit, 48-hour brief, full review, or fix sprint routing." width={900} height={520} sizes="(min-width:1024px) 33vw, 100vw" className="w-full h-auto block" />
          <div className="p-3 text-sm text-white/75">Intake flow — submit URL, get routing recommendation.</div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
          <Image src="/assets/crisiscore/06_risk_brief_mockup.png" alt="Mockup of a 48-hour Trust Risk Brief showing executive verdict, ranked risks, first fix order, and recommended next step." width={900} height={520} sizes="(min-width:1024px) 33vw, 100vw" className="w-full h-auto block" />
          <div className="p-3 text-sm text-white/75">48-hour brief mockup — what you receive.</div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
          <Image src="/assets/crisiscore/10_buyer_scrutiny_ladder.png" alt="Buyer scrutiny ladder showing escalating trust questions about collection, purpose, data flow, retention, user exit, and proof." width={900} height={520} sizes="(min-width:1024px) 33vw, 100vw" className="w-full h-auto block" />
          <div className="p-3 text-sm text-white/75">Buyer scrutiny ladder — questions buyers ask.</div>
        </div>
      </div>

      <Section id="small-business-trust-surface" title="Small Business Website Trust Cleanup" kicker="Local service site trust gaps">
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/72 sm:text-base">
          If your website is the first proof customers see, a hidden booking path, unclear phone invite, or templated page can make people stop before they call. I review the public site as a customer would and flag the first trust gaps that matter for motels, plumbers, contractors, salons, clinics, and other local service businesses.
        </p>

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

        <div className="mt-6">
          <CrisisCoreVisualStrip />
        </div>

        <div className="mt-6 rounded-3xl border border-[color:var(--line)] bg-[rgba(212,162,97,0.08)] p-6">
          <p className="text-base font-semibold text-white">Send me your website and I’ll identify the top 3 public trust issues.</p>
          <div className="mt-4">
            <Button href={gmailHref}>Open in Gmail</Button>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Email-first, fast first look. Send one website URL and one sentence about what you want to fix, and I’ll reply with the first public trust gaps and the simplest next move.
          </p>
        </div>
      </Section>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(120,167,181,0.08)] p-4">
          <div className="text-xs uppercase tracking-[0.18em] text-white/45">Free fit check</div>
          <p className="mt-2 text-sm leading-relaxed text-white/78">This is a presales fit read, not an audit report or certification.</p>
        </div>
        <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(212,162,97,0.08)] p-4">
          <div className="text-xs uppercase tracking-[0.18em] text-white/45">Send only basics</div>
          <p className="mt-2 text-sm leading-relaxed text-white/78">An app URL, launch stage, and biggest concern are enough if you are still figuring out which category of help you actually need.</p>
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
            <h2 className="mt-2 text-xl font-semibold">Get the shortest useful answer first</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/72">
              Fastest path: send the app URL, launch stage, and the issue you want checked first. I&apos;ll reply with the top 3 trust risks I see and whether this looks like a fit for a 48-hour teardown, deeper review, another specialist, or no engagement.
            </p>

              <FitCheckCta
              className="mt-6"
              title="Get a 3-point risk read."
              description="Free fit check, not an audit. Send the app URL, launch stage, one concern, and a reply email. I’ll reply with the first 3 risks and the smallest useful next move."
              includeReplyEmail
              splitStageAndConcern
              checklistItems={[
                "Send app URL, launch stage, one concern, and a reply email.",
                "I reply with whether this looks like a 48-Hour Trust Risk Brief, full review, fix sprint, or no-fit.",
                "Do not include sensitive personal data in the first note.",
                'If safer intake is needed, write "secure channel needed."',
              ]}
            />

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button href={gmailHref}>Open in Gmail</Button>
              <div className="cc-chip">Usually answered within 1-3 business days</div>
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
                "The biggest trust, privacy, product, or launch concern.",
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
            <div className="text-sm font-semibold">What you get back</div>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
              <p>
                The first reply is usually answered within 1-3 business days and is only fit guidance. Paid 48-Hour Trust Risk Brief delivery starts after scope is agreed. If you&apos;re in an urgent window,
                put <span className="font-mono text-white/80">URGENT</span> in the
                subject line and include your deadline.
              </p>
              <p>
                I prefer verifiable artifacts over long calls: a short description,
                deadline, and link beat a meeting.
              </p>
              <p>
                If you are unsure whether the risk points to compliance tooling, a lawyer, a pentest, or a product trust review, say that directly. The first reply can sort the lane.
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
