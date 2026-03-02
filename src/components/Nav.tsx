import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/proof", label: "Proof" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const build = process.env.NEXT_PUBLIC_BUILD_COMMIT ?? "unknown";

  return (
    <header className="relative sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Link href="/" className="group">
            <span className="text-sm font-semibold tracking-wide">
              CrisisCore<span className="text-white/45"> Systems</span>
            </span>
          </Link>
          <Link
            href="/about"
            aria-label="Learn about protective computing"
            className="hidden rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-white/60 transition hover:bg-white/[0.08] hover:text-white sm:inline"
          >
            Protective Computing
          </Link>
        </div>

        <nav className="hidden items-center gap-2 text-sm text-white/75 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-2 transition hover:bg-white/[0.06] hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/version.json"
            className="rounded-xl px-3 py-2 text-xs text-white/55 transition hover:bg-white/[0.06] hover:text-white"
          >
            Build: {build}
          </Link>
        </nav>

        <details className="group md:hidden">
          <summary
            className="cursor-pointer list-none rounded-xl border border-white/10 bg-white/[0.04] p-2 text-white/80 hover:bg-white/[0.07] [&::-webkit-details-marker]:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-4 w-4 group-open:hidden" />
            <X className="hidden h-4 w-4 group-open:block" />
          </summary>

          <div className="absolute left-0 right-0 top-full border-t border-white/10 bg-black/70 backdrop-blur">
            <div className="mx-auto grid max-w-6xl gap-2 px-4 py-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80 hover:bg-white/[0.06] hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
