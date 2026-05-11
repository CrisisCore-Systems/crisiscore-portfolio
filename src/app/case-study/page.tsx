import { Button } from "@/components/ui/Button";
import { FitCheckCta } from "@/components/FitCheckCta";
import { Panel } from "@/components/ui/Panel";

export const metadata = {
  title: "Case Study",
  description:
    "Commercial trust route for CrisisCore Systems: a composite-example case study backed by the live PainTracker proof surface, with clear disclaimers and inspection paths.",
};

export default function CaseStudyPage() {
  return (
    <div className="py-12">
      <Panel className="p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <div className="cc-kicker">Case study</div>
            <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Composite example: reducing paperwork burden, memory fragmentation, and documentation inconsistency in a trust-sensitive workflow.
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
              This commercial route explains the kind of product correction CrisisCore Systems sells. Start with the two internal case-study surfaces below, then inspect the matching proof and source records without leaving CrisisCore first.
            </p>
            <p className="mt-4 max-w-3xl rounded-2xl border border-[rgba(212,162,97,0.32)] bg-[rgba(212,162,97,0.08)] px-4 py-3 text-sm leading-relaxed text-white/80">
              Composite-example disclaimer: this page is commercial framing for a representative workflow, not a promise of legal success, claim acceptance, medical efficacy, or any guaranteed outcome.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/case-study/pain-tracker">Open PainTracker case study</Button>
              <Button href="/case-study/proofvault" variant="ghost">
                Open ProofVault case study
              </Button>
              <Button href="/proof" variant="ghost">
                Inspect proof materials
              </Button>
              <Button href="/contact" variant="ghost">
                Contact CrisisCore
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-3xl border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(120,167,181,0.14),rgba(10,17,24,0.92))] p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-[rgba(180,207,219,0.72)]">What this route does</div>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                It converts and proves: commercial framing first, then direct links into internal case studies and proof materials for inspection.
              </p>
            </div>
            <div className="rounded-2xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.03)] p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">Visible boundary</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Local-first by default, review before sharing, and no outcome promises.
              </p>
            </div>
          </div>
        </div>

        <FitCheckCta
          className="mt-8"
          title="If your product has a similar trust burden, send the URL, launch stage, and one failure you want inspected."
          description="I&apos;ll tell you whether the closest path is a fast teardown, a deeper review, or no engagement."
        />
      </Panel>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Panel className="p-7">
          <div className="text-sm font-semibold">Problem statement</div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            The workflow burden is not only technical. It combines paperwork overhead, memory fragmentation across appointments and incidents, and inconsistent documentation that becomes harder to trust over time.
          </p>
        </Panel>
        <Panel className="p-7">
          <div className="text-sm font-semibold">Before</div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Records scatter across notes, screenshots, and half-finished forms. Important details are reconstructed from memory, then copied into inconsistent documentation under stress.
          </p>
        </Panel>
        <Panel className="p-7">
          <div className="text-sm font-semibold">After</div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Day-to-day capture stays local-first, the working record stays coherent, and sharing is reviewed before export so the user can inspect what leaves the device.
          </p>
        </Panel>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Panel className="p-7 sm:p-8">
          <div className="text-sm font-semibold">Before vs after workflow summary</div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">Before</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>• Manual paperwork and duplicate entry</li>
                <li>• Memory-dependent reconstruction after the fact</li>
                <li>• Documentation drift between contexts and recipients</li>
                <li>• Sharing pressure before the record is reviewed</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">After</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>• Local-first working record for day-to-day use</li>
                <li>• Structured capture that reduces recall burden</li>
                <li>• Cleaner, more consistent exportable documentation</li>
                <li>• Review before sharing, instead of ambient sync</li>
              </ul>
            </div>
          </div>
        </Panel>

        <Panel className="p-7 sm:p-8">
          <div className="text-sm font-semibold">Privacy boundary summary</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>• Local-first by default for the primary working record</li>
            <li>• Review before sharing so disclosure is deliberate</li>
            <li>• No outcome promises about legal, medical, or administrative results</li>
          </ul>

          <div className="mt-6 rounded-2xl border border-[rgba(212,162,97,0.32)] bg-[rgba(212,162,97,0.08)] p-5 text-sm leading-relaxed text-white/80">
            Trust disclaimer: not affiliated with or endorsed by WorkSafeBC. This page is not medical advice or legal advice.
          </div>
        </Panel>
      </div>

      <Panel className="mt-4 p-7 sm:p-8">
        <div className="text-sm font-semibold">Where to inspect the real proof surface</div>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
          This route exists so discovery traffic lands on the commercial site first. The next step is to inspect the internal case-study and proof surfaces here, then open the live product only after the buyer understands the trust boundary.
        </p>

        <div className="mt-6 grid gap-2 md:grid-cols-3">
          <Button href="/case-study/pain-tracker" variant="ghost" className="w-full justify-center">
            Open PainTracker case study
          </Button>
          <Button href="/case-study/proofvault" variant="ghost" className="w-full justify-center">
            Open ProofVault case study
          </Button>
          <Button href="/proof" variant="ghost" className="w-full justify-center">
            Inspect proof materials
          </Button>
        </div>
      </Panel>
    </div>
  );
}