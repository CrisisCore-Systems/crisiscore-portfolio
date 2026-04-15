import type { ReactNode } from "react";

export function Section(props: {
  title: string;
  children: ReactNode;
  kicker?: string;
  id?: string;
}) {
  return (
    <section id={props.id} className="scroll-mt-28 py-9 sm:py-11">
      <div className="mb-6 max-w-2xl">
        {props.kicker ? (
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">
            {props.kicker}
          </div>
        ) : null}
        <h2 className="mt-2 text-xl font-semibold leading-tight sm:text-2xl">{props.title}</h2>
      </div>
      {props.children}
    </section>
  );
}
