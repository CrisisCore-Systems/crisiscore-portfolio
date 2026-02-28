import type { ReactNode } from "react";

export function Section(props: {
  title: string;
  children: ReactNode;
  kicker?: string;
}) {
  return (
    <section className="py-10">
      <div className="mb-4">
        {props.kicker ? (
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">
            {props.kicker}
          </div>
        ) : null}
        <h2 className="mt-2 text-xl font-semibold">{props.title}</h2>
      </div>
      {props.children}
    </section>
  );
}
