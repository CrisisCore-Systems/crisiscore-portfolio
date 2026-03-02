import { SITE } from "@/app/lib/site";

export function Footer() {
  const commit = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "unknown";

  return (
    <footer className="border-t border-white/10" data-build={commit}>
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-10 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} {SITE.name}. Built on Next.js.
          <div className="mt-1 text-xs text-white/45">
            No ad-tech trackers; only minimal privacy-respecting analytics.
          </div>
          <div className="mt-1 text-xs text-white/45">
            Build: {commit}
          </div>
        </div>
        <div className="flex gap-4">
          <a
            className="hover:text-white"
            href={SITE.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="hover:text-white" href="/site-map">
            Sitemap
          </a>
          <a className="hover:text-white" href="/sitemap.xml">
            XML sitemap
          </a>
          <a className="hover:text-white" href="/version.json">
            Version
          </a>
        </div>
      </div>
    </footer>
  );
}
