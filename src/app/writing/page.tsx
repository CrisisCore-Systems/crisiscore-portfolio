import Link from "next/link";
import { getAllWriting } from "@/app/lib/mdx";
import { projects } from "@/app/lib/content";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Writing",
  description: "Protective computing, privacy-first systems, degraded-first design.",
};

export default function WritingIndexPage() {
  const posts = getAllWriting();
  const canon = projects.find((p) => p.slug === "overton-framework");

  return (
    <div className="py-12">
      <div className="cc-kicker">Reading room</div>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
        Writing
      </h1>
      <p className="mt-3 cc-lede">
        Protective computing, privacy-first systems, and degraded-first design.
        Notes written for low-trust reality: where incentives are misaligned and
        “normal conditions” are optional.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          "Protective computing",
          "Trust boundaries",
          "Local-first",
          "Audit / measurement",
        ].map((t) => (
          <Badge key={t} className="normal-case tracking-[0.08em]">
            {t}
          </Badge>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <Button href="/proof">Proof</Button>
        <Button href="/projects" variant="ghost">
          Projects
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Posts</div>
            <div className="mt-5 grid gap-3">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/writing/${p.slug}`}
                  className="cc-card p-6"
                >
                  <div className="text-xs text-white/55">
                    {p.frontmatter.date}
                  </div>
                  <div className="mt-1 text-base font-semibold">
                    {p.frontmatter.title}
                  </div>
                  <p className="mt-2 text-sm text-white/70">
                    {p.frontmatter.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-6 text-xs text-white/50">
              Posts are short by design: clear boundaries, explicit assumptions,
              and actionable takeaways.
            </div>
          </Panel>
        </div>

        <div className="lg:col-span-5">
          {canon ? (
            <Panel className="p-7 sm:p-8">
              <div className="cc-kicker">Selected writing</div>
              <h2 className="mt-2 text-xl font-semibold">{canon.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                A layered discipline for systems built under instability:
                theory → operations → measurement.
              </p>

              <div className="mt-5 grid gap-2">
                {canon.links.slice(0, 3).map((l) => (
                  <Button
                    key={l.href}
                    href={l.href}
                    variant="ghost"
                    className="justify-start"
                  >
                    {l.label} ↗
                  </Button>
                ))}
              </div>

              <div className="mt-5 text-xs text-white/55">
                Open access. DOI-backed. Designed to be independently testable.
              </div>

              {canon.links[canon.links.length - 1] ? (
                <div className="mt-5">
                  <Button
                    href={canon.links[canon.links.length - 1].href}
                    variant="ghost"
                    className="w-full justify-center"
                  >
                    Read the canon → ↗
                  </Button>
                </div>
              ) : null}
            </Panel>
          ) : null}

          <Panel className={canon ? "mt-4 p-7 sm:p-8" : "p-7 sm:p-8"}>
            <div className="text-sm font-semibold">How to read</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "If you’re new: start with the canon (Layer 1 → Layer 3).",
                "If you’re evaluating: use Proof to validate sources of record.",
                "If you’re building: scan Projects for dossiers and outputs.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/proof" variant="ghost">
                Proof
              </Button>
              <Button href="/projects" variant="ghost">
                Projects
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

