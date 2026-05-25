import { SITE } from "@/app/lib/site";
import { getBuildCommitShort } from "@/app/lib/build";

export function Footer() {
  const commit = getBuildCommitShort();

  return (
    <footer className="border-t border-[color:var(--line)] bg-[rgba(8,13,20,0.96)]" data-build={commit}>
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-white/60">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {SITE.name}. Built on Next.js.
            <div className="mt-1 text-xs text-white/45">
              No ad-tech trackers; only minimal privacy-respecting analytics. This site remains readable without JavaScript because trust surfaces should degrade cleanly.
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a className="hover:text-white" href="/trust-hardening-review">
              Trust Review
            </a>
            <a className="hover:text-white" href="/about">
              About
            </a>
            <a className="hover:text-white" href="/case-study">
              Case Studies
            </a>
            <a className="hover:text-white" href="/proof">
              Proof
            </a>
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-[color:var(--line)] bg-[rgba(120,167,181,0.10)] px-5 py-4 shadow-[0_16px_38px_rgba(0,0,0,0.18)]">
          <div className="text-xs uppercase tracking-[0.18em] text-[rgba(180,207,219,0.72)]">Primary action</div>
          <div className="mt-2 text-sm text-white/78">Send the app URL, launch stage, and biggest concern. Get the first 3 defensibility gaps.</div>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <a className="rounded-full border border-[rgba(212,162,97,0.42)] bg-[rgba(212,162,97,0.22)] px-4 py-2 text-white transition hover:text-white" href="/trust-risk-read">
              Send URL for first 3 gaps
            </a>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/40">
          <span>Elsewhere:</span>
          <a className="hover:text-white/70" href={SITE.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-white/70" href={SITE.socials.devto} target="_blank" rel="noreferrer">
            dev.to
          </a>
          <a className="hover:text-white/70" href={SITE.bridges.protectiveComputing} target="_blank" rel="noreferrer">
            Protective Computing canon
          </a>
          <a className="hover:text-white/70" href={SITE.products.painTracker} target="_blank" rel="noreferrer">
            PainTracker
          </a>
          <a className="hover:text-white/70" href="/site-map">
            Site map
          </a>
          <a className="hover:text-white/70" href="/privacy">
            Privacy
          </a>
          <a className="hover:text-white/70" href="/sitemap.xml">
            XML sitemap
          </a>
          <a className="hover:text-white/70" href="/version.json">
            Version
          </a>
          <span>Canonical: crisiscore-systems.ca</span>
        </div>

        <div className="mt-3 text-xs text-white/45">
          Direct email: <span className="font-mono text-white/60">{SITE.email}</span>. Intellectual proof bridge: the Protective Computing canon and specifications live at the dedicated project site and route back to CrisisCore service work.
        </div>
      </div>
    </footer>
  );
}
