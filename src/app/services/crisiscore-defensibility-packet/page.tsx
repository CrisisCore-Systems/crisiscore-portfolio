import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { absoluteUrl, SITE } from "@/app/lib/site";
import { getBuyerIntentPage, getMergedBuyerIntentPages, PRIMARY_BUYER_INTENT_PAGES } from "@/app/lib/buyer-intent";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { FitCheckCta } from "@/components/FitCheckCta";
import { Section } from "@/components/Section";
import Image from "next/image";

export function generateStaticParams() {
  return [{ slug: "crisiscore-defensibility-packet" }];
}

export async function generateMetadata(): Promise<Metadata> {
  const page = getBuyerIntentPage("crisiscore-defensibility-packet");

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    robots: {
      index: page.primaryIndexTarget,
      follow: true,
    },
    alternates: {
      canonical: `/services/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: absoluteUrl(`/services/${page.slug}`),
    },
    twitter: {
      title: page.title,
      description: page.description,
    },
  };
}

export default async function DefensibilityPacketPage() {
  const page = getBuyerIntentPage("crisiscore-defensibility-packet");

  if (!page) {
    return notFound();
  }

  const mergedPages = getMergedBuyerIntentPages(page.slug);
  const relatedPaths = PRIMARY_BUYER_INTENT_PAGES.filter(
    (p) => p.slug !== "crisiscore-defensibility-packet"
  );

  const deliverables = page.deliverables ?? [
    "Ranked findings focused on the few issues most worth fixing first.",
    "A practical next-step recommendation sized to the current product stage.",
    "Written notes the team can keep using after the first call.",
  ];

  return (
    <div className="py-12">
      <Panel className="p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <div className="cc-kicker">Trust-surface review</div>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              {page.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-semibold text-white sm:text-xl">
              {page.summary}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/74 sm:text-base">
              {page.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/trust-risk-read?source=defensibility-packet">Get a 3-point risk read</Button>
              <Button href="/proof" variant="ghost">
                See proof
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-3xl border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(120,167,181,0.14),rgba(10,17,24,0.92))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <div className="text-xs uppercase tracking-[0.2em] text-[rgba(180,207,219,0.72)]">What this is for</div>
              <p className="mt-2 text-sm font-medium leading-relaxed text-white/84">
                Products that work, but whose public story, data boundaries, and failure states may not survive buyer, user, or regulator scrutiny.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">What changes</div>
                <p className="mt-2 text-sm leading-relaxed text-white/74">
                  You leave with ranked risks, a fix order, safer language, and a clearer sense of what is safe to claim, ship, or delay.
                </p>
              </div>
              <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(212,162,97,0.08)] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">What this is not</div>
                <p className="mt-2 text-sm leading-relaxed text-white/74">
                  Not a pentest, not compliance theatre, and not a paperwork-first exercise that ignores product behavior.
                </p>
              </div>
            </div>
          </div>
        </div>

        <FitCheckCta
          className="mt-8"
          title={`Send the product URL and ${page.fitCheckPrompt}.`}
          description="That is enough for a first pass. I'll tell you whether this exact review path is right, whether a broader review is smarter, or whether the issue stays small."
          checklistItems={[
            "Send URL + product URL + launch stage + one concern.",
            "Get the first 3 defensibility gaps and the recommended next step.",
            "Use this before buying a larger review path or compliance machinery.",
          ]}
        />
      </Panel>

      <Section title="What Gets Reviewed" kicker="Trust surface">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Six review surfaces</div>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>• Public claims audit: homepage, docs, privacy language, security statements, onboarding copy, pricing, and release notes.</li>
              <li>• Data boundary review: local storage, databases, cloud services, analytics, logs, crash reports, third-party APIs, AI providers, payment processors, email tools, support tools, admin dashboards.</li>
              <li>• AI and automation risk: prompt injection surfaces, hidden data disclosure paths, unreviewed automated actions, unsafe agent permissions, vague AI claims, missing human review boundaries, unclear retention or training language.</li>
              <li>• Degradation and failure modes: offline behavior, sync breaks, payment failures, export failures, storage full, auth expiry, AI output errors, incomplete user data, third-party outages, user stress states.</li>
              <li>• Documentation and proof gaps: architecture notes, data flow diagrams, security boundaries, test evidence, release notes, changelogs, export documentation, privacy policy alignment, known limitations, risk registers, incident handling language.</li>
              <li>• User expectation mismatches: where users may misunderstand risk because claims are broad, unsupported, or missing boundaries.</li>
            </ul>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">What you receive</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {deliverables.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <div className="mt-8 text-sm font-semibold">Why this matters</div>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Trust fractures at the seams: a vague claim, an unclear boundary, a missing warning, a silent third-party dependency, an export that changes risk, an AI feature with no review point, a privacy policy that does not match the product, a failure state nobody documented. Most teams only discover these seams after pressure arrives.
            </p>

            <div className="mt-8 text-sm font-semibold">Built on Protective Computing</div>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              The Defensibility Packet is informed by the Protective Computing doctrine: Local Authority, Exposure Surface Minimization, Reversible State, and Explicit Degradation Modes.
            </p>
          </Panel>
        </div>
      </Section>

      <Section title="Deliverables" kicker="What you get back">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Panel className="p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">1</div>
            <h3 className="mt-2 text-base font-semibold">Trust Surface Map</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/72">Plain-language map of where users, reviewers, partners, or regulators form trust judgments — visible trust points and the hidden technical surfaces behind them.</p>
          </Panel>
          <Panel className="p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">2</div>
            <h3 className="mt-2 text-base font-semibold">Public Claims Audit</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/72">Current claim, issue, why it matters, safer replacement language, evidence needed, and recommended boundary statement — flagged by risk level.</p>
          </Panel>
          <Panel className="p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">3</div>
            <h3 className="mt-2 text-base font-semibold">Data Boundary Review</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/72">Practical map of what data enters the system, where it lives, where it moves, who can access it, and where the user may not realize exposure exists.</p>
          </Panel>
          <Panel className="p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">4</div>
            <h3 className="mt-2 text-base font-semibold">Failure Mode Register</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/72">Structured list of product states where the system may fail, confuse the user, expose data, lose trust, or create unsafe assumptions — with severity and mitigation.</p>
          </Panel>
          <Panel className="p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">5</div>
            <h3 className="mt-2 text-base font-semibold">Evidence Gap Report</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/72">Claims, workflows, or trust assumptions that need stronger proof — architecture notes, test evidence, release notes, changelogs, known limitations, risk registers.</p>
          </Panel>
          <Panel className="p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">6</div>
            <h3 className="mt-2 text-base font-semibold">Prioritized Fix Path</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/72">Action list split into immediate copy fixes, documentation fixes, product/UX fixes, architecture questions, legal/compliance escalation points, and future audit needs.</p>
          </Panel>
        </div>
      </Section>

      <Section title="Sample Findings" kicker="What this catches">
        <div className="grid gap-4 md:grid-cols-2">
          <Panel className="p-7 sm:p-8">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">Finding</div>
            <h3 className="mt-2 text-base font-semibold">&ldquo;Privacy-first&rdquo; is undefined</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/72">The product uses privacy-first language but does not explain what that means in operationally. Users may assume no third-party processing, no analytics, no logs, no admin access, or no cloud storage.</p>
            <p className="mt-3 text-sm leading-relaxed text-white/72">Recommended fix: Define privacy-first through specific boundaries. Example: &ldquo;We use privacy-first to mean we minimize unnecessary data collection, explain where data is stored, avoid selling personal data, and document third-party processing where it exists.&rdquo;</p>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">Finding</div>
            <h3 className="mt-2 text-base font-semibold">AI workflow lacks review boundary</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/72">The product uses AI to generate user-facing material, but the interface does not clearly state whether output is reviewed, editable, stored, or automatically acted upon. Users may treat AI-generated material as verified, final, or authoritative.</p>
            <p className="mt-3 text-sm leading-relaxed text-white/72">Recommended fix: Add a human-review boundary. Example: &ldquo;AI-generated drafts must be reviewed before use. The system does not independently verify factual, legal, medical, or financial accuracy.&rdquo;</p>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">Finding</div>
            <h3 className="mt-2 text-base font-semibold">Export feature creates new exposure surface</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/72">The product emphasizes local/private storage but allows users to export sensitive records into unencrypted files. The trust boundary changes the moment data leaves the app.</p>
            <p className="mt-3 text-sm leading-relaxed text-white/72">Recommended fix: Add export warning, optional encryption, and clear documentation. Example: &ldquo;Exports are created on your device. Once exported, files are outside the app&apos;s protection boundary and should be stored or shared carefully.&rdquo;</p>
          </Panel>

          <Panel className="p-7 sm:p-8">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">Finding</div>
            <h3 className="mt-2 text-base font-semibold">Offline claim lacks failure-state detail</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/72">The product says it works offline but does not explain which features remain available without a connection. Users may rely on unavailable features during degraded conditions.</p>
            <p className="mt-3 text-sm leading-relaxed text-white/72">Recommended fix: Split offline behavior by feature. Example: &ldquo;Core note-taking and saved record access work offline. Account sync, payment updates, cloud backup, and AI-assisted features require a connection.&rdquo;</p>
          </Panel>
        </div>
      </Section>

      <Section title="Who This Is For" kicker="Best fit">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Pre-launch products</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">Teams preparing for launch who need claims and data boundaries reviewed before buyers, users, or regulators see the product.</p>
          </Panel>
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">AI-assisted workflows</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">Products using AI where prompts, outputs, retention, or permissions create hidden trust debt.</p>
          </Panel>
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Health and wellness apps</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">Sensitive-data products where collection, consent, export, and recovery defaults are hard to defend.</p>
          </Panel>
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Legal and documentation tools</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">Products handling evidence, case management, or legal workflows where trust and boundary failures have high consequence.</p>
          </Panel>
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Investor and partner readiness</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">Teams preparing for funding, pilots, or partnerships where trust claims will be inspected under pressure.</p>
          </Panel>
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Post-MVP hardening</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">Teams past MVP who need to close trust debt before it calcifies into expensive architecture.</p>
          </Panel>
        </div>
      </Section>

      <Section title="What This Is Not" kicker="Clear boundaries">
        <div className="grid gap-4 md:grid-cols-2">
          <Panel className="p-7 sm:p-8">
            <ul className="space-y-2 text-sm text-white/75">
              <li>• Not a penetration test.</li>
              <li>• Not compliance theatre.</li>
              <li>• Not a generic UX audit.</li>
              <li>• Not a rubber stamp.</li>
              <li>• Not legal certification, regulatory approval, or guaranteed compliance.</li>
              <li>• Not a replacement for legal counsel, formal compliance review, security penetration testing, clinical validation, or insurance assessment.</li>
            </ul>
          </Panel>
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">The standard</div>
            <p className="mt-3 text-sm leading-relaxed text-white/72">
              A defensible system should not only work for ideal users in ideal conditions. It should preserve clarity when conditions degrade: fewer hidden assumptions, clearer trust boundaries, safer claims, reversible actions, explicit failure states, evidence-backed documentation.
            </p>
          </Panel>
        </div>
      </Section>

      <Section title="Related proof surfaces" kicker="Backing material">
        <p className="mb-3 text-sm leading-relaxed text-white/75">Use these proof surfaces to inspect how CrisisCore turns abstract trust claims into reviewable evidence before a buyer, funder, partner, or security reviewer asks for it.</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Button href="/artifacts/security-and-audits/defensibility-packet-flow" variant="ghost" className="justify-start">Defensibility packet flow</Button>
          <Button href="/artifacts/security-and-audits/threat-boundary-map" variant="ghost" className="justify-start">Threat boundary map</Button>
          <Button href="/artifacts/security-and-audits/audit-pipeline" variant="ghost" className="justify-start">Audit pipeline</Button>
          <Button href="/case-study/pain-tracker" variant="ghost" className="justify-start">PainTracker dossier</Button>
        </div>
      </Section>

      <Section title="Related Review Paths" kicker="Service fit">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {relatedPaths.map((relatedPage) => (
            <Panel key={relatedPage.slug} className="p-7 sm:p-8">
              <div className="text-xs uppercase tracking-[0.18em] text-white/45">Review path</div>
              <h2 className="mt-2 text-xl font-semibold">{relatedPage.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{relatedPage.summary}</p>
              <div className="mt-6 grid gap-2">
                <Button href={`/services/${relatedPage.slug}`} variant="ghost" className="w-full justify-center">
                  Open review path
                </Button>
                <Button href={relatedPage.proofHref} variant="ghost" className="w-full justify-center">
                  See matching proof
                </Button>
              </div>
            </Panel>
          ))}
        </div>
      </Section>

      <div className="mt-10">
        <Panel className="p-8 sm:p-10">
          <div className="text-xs uppercase tracking-[0.2em] text-white/45">Get started</div>
          <h2 className="mt-2 text-2xl font-semibold">
            Get your 3-point risk read.
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Free fit check, not an audit. I&apos;ll tell you whether the Defensibility Packet, a 48-hour teardown, a full review, a fix sprint, or no engagement makes sense.
          </p>
          <div className="mt-6">
            <Button href="/trust-risk-read">Get a 3-point risk read</Button>
          </div>
        </Panel>
      </div>
    </div>
  );
}
