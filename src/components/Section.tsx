import type { ReactNode } from "react";

export function Section(props: Readonly<{
  title: string;
  children: ReactNode;
  kicker?: string;
  id?: string;
}>) {
  return (
    <section id={props.id} className="scroll-mt-28 py-10 sm:py-12">
      <div className="mb-8 grid gap-4 lg:grid-cols-[170px_minmax(0,1fr)] lg:items-end">
        <div className="flex items-center gap-3 lg:pb-1">
          <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(120,167,181,0.45),transparent)] lg:hidden" />
          {props.kicker ? (
            <div className="text-[11px] uppercase tracking-[0.24em] text-[rgba(180,207,219,0.72)]">
              {props.kicker}
            </div>
          ) : null}
        </div>

        <div className="max-w-3xl border-l border-[color:var(--line)] pl-4 sm:pl-6">
          <h2 className="text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl">
            {props.title}
          </h2>
          <div className="mt-3 h-px w-28 bg-[linear-gradient(90deg,var(--acc),rgba(120,167,181,0.12))]" />
        </div>
      </div>
      {props.children}
    </section>
  );
}
