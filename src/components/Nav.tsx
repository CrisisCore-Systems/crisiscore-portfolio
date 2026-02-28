"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/proof", label: "Proof" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const active = useMemo(() => {
    if (!pathname) return "";
    return (
      links.find((l) => pathname === l.href || pathname.startsWith(l.href + "/"))
        ?.href ?? ""
    );
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-sm font-semibold tracking-wide">
            CrisisCore<span className="text-white/45"> Systems</span>
          </span>
          <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-white/60 sm:inline">
            Protective Computing
          </span>
        </Link>

        <nav className="hidden items-center gap-2 text-sm text-white/75 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-xl px-3 py-2 transition hover:bg-white/[0.06] hover:text-white",
                active === l.href && "bg-white/[0.08] text-white"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-xl border border-white/10 bg-white/[0.04] p-2 text-white/80 hover:bg-white/[0.07]"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto grid max-w-6xl gap-2 px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80 hover:bg-white/[0.06] hover:text-white",
                  active === l.href && "bg-white/[0.08] text-white"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
