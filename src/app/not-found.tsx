import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20">
      <h1 className="text-2xl font-semibold">Not found</h1>
      <p className="mt-3 text-sm text-white/70">
        That route doesn’t exist. Go back to the surface.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2 text-sm transition hover:bg-white/[0.10]"
      >
        Home
      </Link>
    </div>
  );
}
