export const metadata = {
  title: "About",
  description: "About CrisisCore Systems.",
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold">About</h1>

      <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-white/70">
        <p>
          CrisisCore Systems builds privacy-first tools and protective
          frameworks for people operating under real-world instability: illness,
          displacement, coercion risk, and low-trust environments.
        </p>
        <p>
          The work prioritizes local authority, degraded-first behavior, and
          reversibility—because reliability under stress is not a feature; it’s
          the baseline.
        </p>
        <p className="text-white/60">
          If you want an “enterprise growth story,” this isn’t it. If you want
          systems that keep functioning when the world doesn’t, you’re in the
          right place.
        </p>
      </div>
    </div>
  );
}
