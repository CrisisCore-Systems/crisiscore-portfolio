import Link from "next/link";
import type { ReactNode } from "react";

export function Card(props: {
  title: string;
  description: string;
  href: string;
  tags?: string[];
  right?: ReactNode;
}) {
  return (
    <Link
      href={props.href}
      className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-base font-semibold">{props.title}</div>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {props.description}
          </p>

          {props.tags?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {props.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-1 text-white/40 transition group-hover:text-white/80">
          ↗
        </div>
      </div>
    </Link>
  );
}
