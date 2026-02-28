import { SITE } from "@/app/lib/site";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";

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

      <Panel className="mt-8 p-7">
        <div className="text-sm text-white/70">Email</div>
        <div className="mt-2">
          <Button
            href={`mailto:${SITE.email}?subject=${encodeURIComponent(
              "CrisisCore Systems inquiry"
            )}`}
          >
            {SITE.email}
          </Button>
        </div>

        <div className="mt-6 text-sm text-white/70">GitHub</div>
        <div className="mt-2">
          <Button href={SITE.socials.github} variant="ghost">
            {SITE.socials.github} ↗
          </Button>
        </div>
      </Panel>
    </div>
  );
}
