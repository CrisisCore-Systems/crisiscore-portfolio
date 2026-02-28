"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="py-14">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-sm text-white/60">Something broke.</div>
        <h1 className="mt-2 text-2xl font-semibold">System error</h1>
        <p className="mt-3 text-sm text-white/70">
          {error?.message || "Unknown failure."}
        </p>
        <button
          onClick={reset}
          className="mt-6 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-2 text-sm hover:bg-white/[0.12]"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
