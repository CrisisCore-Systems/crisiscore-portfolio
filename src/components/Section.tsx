import type { ReactNode } from "react";

export function Section(props: {
  title: string;
  children: ReactNode;
  kicker?: string;
  id?: string;
}) {
  return (
    <section id={props.id} className="scroll-mt-28 py-10 sm:py-12">
      <div className="mb-6 max-w-2xl">
        {props.kicker ? (
          <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">
            {props.kicker}
          </div>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.01em] sm:text-3xl">{props.title}</h2>
      </div>
      {props.children}
    </section>
  );
}
