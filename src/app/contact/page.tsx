import { SITE } from "@/app/lib/site";

export const metadata = {
  title: "Contact",
  description: "Contact CrisisCore Systems.",
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 max-w-2xl text-sm text-white/70">
        Fastest path: email. If you want a serverless form endpoint later, we
        can add it.
      </p>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <div className="text-sm text-white/70">Email</div>
        <a
          className="mt-2 inline-block rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2 text-sm transition hover:bg-white/[0.10]"
          href={`mailto:${SITE.email}?subject=${encodeURIComponent(
            "CrisisCore Systems inquiry"
          )}`}
        >
          {SITE.email}
        </a>

        <div className="mt-6 text-sm text-white/70">GitHub</div>
        <a
          className="mt-2 inline-block rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:bg-white/[0.06] hover:text-white"
          href={SITE.socials.github}
          target="_blank"
          rel="noreferrer"
        >
          {SITE.socials.github} ↗
        </a>
      </div>
    </div>
  );
}
