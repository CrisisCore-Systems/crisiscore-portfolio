import React from "react";
import Image from "next/image";

const assets = [
  ["Trust Failure Radar", "/assets/crisiscore/trust-failure-radar.svg"],
  ["3 Point Risk Read", "/assets/crisiscore/three-point-risk-read.svg"],
  ["Small Business Trust Cleanup", "/assets/crisiscore/small-business-trust-cleanup.svg"],
  ["Buyer Proof Ladder", "/assets/crisiscore/buyer-proof-ladder.svg"],
];

export default function CrisisCoreVisualStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-300">CrisisCore Systems</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-50">Trust failures made visible.</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Visual proof surfaces for product trust review, small business cleanup, and defensibility packets.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {assets.map(([title, src]) => (
          <figure key={title} className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl">
            <div className="relative h-52 w-full">
              <Image src={src} alt={title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain" />
            </div>
            <figcaption className="border-t border-slate-800 px-4 py-3 text-sm font-semibold text-slate-300">{title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
