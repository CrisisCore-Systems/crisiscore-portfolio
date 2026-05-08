import { SITE } from "@/app/lib/site";

export function Footer() {
  const commit = process.env.NEXT_PUBLIC_BUILD_COMMIT ?? "unknown";

  return (
    <footer className="border-t border-[color:var(--line)] bg-[rgba(8,13,20,0.96)]" data-build={commit}>
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-white/60">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {SITE.name}. Built on Next.js.
            <div className="mt-1 text-xs text-white/45">
              No ad-tech trackers; only minimal privacy-respecting analytics.
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a className="hover:text-white" href="/about">
              About
            </a>
            <a className="hover:text-white" href="/case-study">
              Case Study
            </a>
            <a className="hover:text-white" href="/proof">
              Proof
            </a>
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-[color:var(--line)] bg-[rgba(120,167,181,0.10)] px-5 py-4 shadow-[0_16px_38px_rgba(0,0,0,0.18)]">
          <div className="text-xs uppercase tracking-[0.18em] text-[rgba(180,207,219,0.72)]">Quick intake</div>
          <div className="mt-2 text-sm text-white/78">Need a starting point? Send URL + stage + one concern.</div>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <a className="rounded-full border border-[rgba(212,162,97,0.42)] bg-[rgba(212,162,97,0.22)] px-4 py-2 text-white transition hover:text-white" href="/contact">
              Start here
            </a>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/40">
          <span>Technical references:</span>
          <a className="hover:text-white/70" href={SITE.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-white/70" href="/site-map">
            Site map
          </a>
          <a className="hover:text-white/70" href="/sitemap.xml">
            XML sitemap
          </a>
          <a className="hover:text-white/70" href="/version.json">
            Version
          </a>
          <span>Build: {commit}</span>
        </div>
      </div>
    </footer>
  );
}
