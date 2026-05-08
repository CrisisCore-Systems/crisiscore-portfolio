"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/case-study", label: "Case Study" },
  { href: "/proof", label: "Proof" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 border-b border-[color:var(--line)] bg-[rgba(7,12,18,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="group flex items-center gap-3 rounded-2xl px-1 py-1 transition hover:bg-white/[0.03]">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(120,167,181,0.16),rgba(11,18,26,0.94))] text-[11px] font-mono tracking-[0.18em] text-[color:var(--text)] shadow-[0_8px_20px_rgba(0,0,0,0.16)]">
            CC
          </span>
          <span className="text-sm font-semibold tracking-[0.08em] text-[color:var(--text)]">
            CrisisCore<span className="text-[rgba(180,207,219,0.58)]"> Systems</span>
          </span>
          <span className="hidden rounded-full border border-[color:var(--line)] bg-[rgba(120,167,181,0.08)] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[rgba(220,230,240,0.62)] sm:inline">
            Sensitive Products
          </span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-[color:var(--line)] bg-[rgba(120,167,181,0.06)] px-2 py-1 text-sm text-white/75 shadow-[0_8px_24px_rgba(0,0,0,0.16)] md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 transition hover:bg-[rgba(120,167,181,0.12)] hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-1 rounded-full border border-[rgba(212,162,97,0.52)] bg-[linear-gradient(180deg,rgba(212,162,97,0.34),rgba(85,59,29,0.52))] px-3 py-2 text-white transition hover:bg-[linear-gradient(180deg,rgba(226,178,114,0.42),rgba(95,67,35,0.62))]"
          >
            Contact
          </Link>
        </nav>

        <details
          className="group md:hidden"
          onToggle={(event) => setMenuOpen(event.currentTarget.open)}
        >
          <summary
            className="cursor-pointer list-none rounded-2xl border border-[color:var(--line)] bg-[rgba(120,167,181,0.08)] p-2.5 text-white/80 hover:bg-[rgba(120,167,181,0.14)] [&::-webkit-details-marker]:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-4 w-4 group-open:hidden" />
            <X className="hidden h-4 w-4 group-open:block" />
          </summary>

          <div className="absolute left-0 right-0 top-full border-t border-[color:var(--line)] bg-[rgba(7,12,18,0.94)] backdrop-blur-xl">
            <div className="mx-auto grid max-w-6xl gap-2 px-4 py-3">
              <Link
                href="/contact"
                tabIndex={menuOpen ? 0 : -1}
                aria-hidden={menuOpen ? undefined : true}
                className="rounded-2xl border border-[rgba(212,162,97,0.52)] bg-[linear-gradient(180deg,rgba(212,162,97,0.34),rgba(85,59,29,0.52))] px-4 py-3 text-sm font-medium text-white hover:bg-[linear-gradient(180deg,rgba(226,178,114,0.42),rgba(95,67,35,0.62))]"
              >
                Contact
              </Link>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  tabIndex={menuOpen ? 0 : -1}
                  aria-hidden={menuOpen ? undefined : true}
                  className="rounded-2xl border border-[color:var(--line)] bg-[rgba(120,167,181,0.06)] px-4 py-3 text-sm text-white/80 hover:bg-[rgba(120,167,181,0.12)] hover:text-white"
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
