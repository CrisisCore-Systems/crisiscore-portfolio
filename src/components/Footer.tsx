import { SITE } from "@/app/lib/site";

export function Footer() {
  const commit = process.env.NEXT_PUBLIC_BUILD_COMMIT ?? "unknown";

  return (
    <footer className="border-t border-[color:var(--line)] bg-[rgba(14,11,10,0.72)]" data-build={commit}>
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-white/60">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {SITE.name}. Built on Next.js.
            <div className="mt-1 text-xs text-white/45">
              No ad-tech trackers; only minimal privacy-respecting analytics.
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-white" href="/services">
              Services
            </a>
            <a className="hover:text-white" href="/proof">
              Proof
            </a>
            <a className="hover:text-white" href="/about">
              About
            </a>
            <a className="hover:text-white" href="/contact">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-[color:var(--line)] bg-[rgba(255,245,233,0.025)] px-4 py-3">
          <div className="text-sm text-white/72">Need a starting point? Send the product URL, launch stage, and the main concern.</div>
          <div className="mt-2 flex flex-wrap gap-3 text-sm">
            <a className="text-white/78 hover:text-white" href="/contact">
              Open contact
            </a>
            <a className="text-white/62 hover:text-white" href="/services">
              Review services
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
