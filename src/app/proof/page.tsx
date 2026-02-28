export const metadata = {
  title: "Proof",
  description: "DOI-backed canon, live systems, and verifiable artifacts.",
};

export default function ProofPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold">Proof</h1>
      <p className="mt-3 max-w-3xl text-sm text-white/70">
        Claims are cheap. This page exists so the work can be verified without
        trusting marketing copy.
      </p>

      <div className="mt-10 grid gap-4">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-sm font-semibold">Canonical framework (DOI)</div>
          <p className="mt-2 text-sm text-white/70">
            The Overton Framework: Protective Computing in Conditions of Human
            Vulnerability (v1.3).
          </p>
          <a
            className="mt-4 inline-block rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 hover:bg-white/[0.07] hover:text-white"
            href="https://doi.org/10.5281/zenodo.18688516"
            target="_blank"
            rel="noreferrer"
          >
            Open DOI landing page ↗
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-sm font-semibold">Flagship system</div>
          <p className="mt-2 text-sm text-white/70">
            PainTracker.ca — privacy-first pain tracking PWA, local-first by
            default.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <a
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 hover:bg-white/[0.07] hover:text-white"
              href="https://paintracker.ca"
              target="_blank"
              rel="noreferrer"
            >
              Open app ↗
            </a>
            <a
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 hover:bg-white/[0.07] hover:text-white"
              href="https://github.com/CrisisCore-Systems/pain-tracker"
              target="_blank"
              rel="noreferrer"
            >
              Open repo ↗
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-sm font-semibold">Source of record</div>
          <p className="mt-2 text-sm text-white/70">
            GitHub profile with repos, commit history, issues, and published
            artifacts.
          </p>
          <a
            className="mt-4 inline-block rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 hover:bg-white/[0.07] hover:text-white"
            href="https://github.com/CrisisCore-Systems"
            target="_blank"
            rel="noreferrer"
          >
            Open GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}
