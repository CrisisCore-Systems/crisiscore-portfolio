export default function Loading() {
  return (
    <div className="py-14">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <div className="h-4 w-40 rounded bg-white/[0.08]" />
        <div className="mt-6 space-y-3">
          <div className="h-6 w-3/4 rounded bg-white/[0.08]" />
          <div className="h-6 w-2/3 rounded bg-white/[0.08]" />
          <div className="h-6 w-1/2 rounded bg-white/[0.08]" />
        </div>
      </div>
    </div>
  );
}
