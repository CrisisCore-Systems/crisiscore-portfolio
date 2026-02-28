import { SITE } from "@/app/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-10 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} {SITE.name}. Built on Next.js.
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
          <a className="hover:text-white" href="/sitemap.xml">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
