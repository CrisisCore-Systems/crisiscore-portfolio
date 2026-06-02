import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { loadCanon, loadWriting } from "@/content/load";

const WRITING_CLUSTERS = [
  {
    title: "Launch and Buyer Review",
    description:
      "Founder-facing checks for launch pressure, buyer scrutiny, procurement review, and the first trust questions that surface before a sensitive-data product ships.",
    slugs: [
      "what-founders-miss-before-launching-sensitive-data-products",
      "sensitive-data-product-launch-checklist",
      "how-to-prepare-for-buyer-privacy-review",
      "procurement-review-checklist-for-sensitive-apps",
      "what-to-show-buyers-during-sensitive-data-procurement",
    ],
  },
  {
    title: "Health and Wellness Reviews",
    description:
      "Health, wellness, and mental-health-focused review paths for teams trying to narrow trust boundaries before launch or wider exposure.",
    slugs: [
      "privacy-first-health-app-architecture",
      "health-app-privacy-review-before-launch",
      "mental-health-app-privacy-review",
      "pre-launch-privacy-review-checklist-health-wellness-apps",
      "privacy-first-pain-tracking",
      "paintracker-architecture",
    ],
  },
  {
    title: "Minimization and Product Boundaries",
    description:
      "Plain-English posts on over-collection, retention, export, and the product-boundary decisions that create trust debt when nobody narrows them early.",
    slugs: [
      "reduce-data-collection-risk-before-launch",
      "data-minimization-checklist-sensitive-apps",
      "ai-health-app-privacy-audit",
    ],
  },
  {
    title: "Method and Doctrine",
    description:
      "The deeper explanatory layer: trust cases, Protective Computing, Overton, DOI-backed canon, and the inspection vocabulary behind the service work.",
    slugs: [
      "proofvault-trust-case-v1-0-1",
      "protective-computing-doctrine",
      "the-overton-framework",
      "overton-doi",
    ],
  },
] as const;

export const metadata = {
  title: "Writing",
  description: "Founder-facing problem posts, technical writing, and doctrine supporting CrisisCore Systems trust hardening and privacy architecture work.",
};

export default function WritingIndexPage() {
  const posts = loadWriting();
  const canon = loadCanon();
  const postMap = new Map(posts.map((post) => [post.slug, post]));
  const clusteredPosts = WRITING_CLUSTERS.map((cluster) => ({
    ...cluster,
    posts: cluster.slugs
      .map((slug) => postMap.get(slug))
      .filter((post) => post !== undefined),
  })).filter((cluster) => cluster.posts.length > 0);
  const clusteredSlugs = new Set(clusteredPosts.flatMap((cluster) => cluster.posts.map((post) => post.slug)));
  const remainingPosts = posts.filter((post) => !clusteredSlugs.has(post.slug));

  return (
    <div className="py-12">
      <div className="cc-kicker">Technical writing</div>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
        Writing
      </h1>
      <p className="mt-3 cc-lede">
        Founder-facing problem posts, essays, and doctrine behind the service work on this site: trust boundaries, privacy architecture, minimization-first systems, and degraded-condition design.
      </p>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
        This section now does two jobs: plain-English demand capture for founders with an immediate problem, and deeper doctrine for buyers who want to inspect the reasoning. Most visitors should still start with the commercial case study or Proof.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          "Founder problems",
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
        <Button href="/services">Services</Button>
        <Button href="/case-study" variant="ghost">
          Case study
        </Button>
        <Button href="/trust-risk-read" variant="ghost">
          Get a 3-point risk read
        </Button>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">Writing clusters</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Start with the cluster that matches the pressure you are under now: launch, buyer review, health workflow trust, minimization, or deeper method inspection.
            </p>

            <div className="mt-6 space-y-6">
              {clusteredPosts.map((cluster) => (
                <section key={cluster.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/45">Cluster</div>
                  <h2 className="mt-2 text-xl font-semibold">{cluster.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{cluster.description}</p>

                  <div className="mt-5 grid gap-3">
                    {cluster.posts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/writing/${p.slug}`}
                        className="cc-card group p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
                      >
                        <div className="text-xs text-white/55">
                          {p.frontmatter.date}
                        </div>
                        <div className="mt-1 text-base font-semibold underline-offset-4 transition group-hover:underline">
                          {p.frontmatter.title}
                        </div>
                        <p className="mt-2 text-sm text-white/70">
                          {p.frontmatter.description}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/65 transition group-hover:text-white">
                          <span>Read</span>
                          <span className="transition group-hover:translate-x-0.5">→</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}

              {remainingPosts.length ? (
                <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/45">Additional posts</div>
                  <h2 className="mt-2 text-xl font-semibold">Everything else</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Supporting posts that do not need a top-level cluster but still extend the proof and writing surface.
                  </p>

                  <div className="mt-5 grid gap-3">
                    {remainingPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/writing/${p.slug}`}
                        className="cc-card group p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
                      >
                        <div className="text-xs text-white/55">{p.frontmatter.date}</div>
                        <div className="mt-1 text-base font-semibold underline-offset-4 transition group-hover:underline">
                          {p.frontmatter.title}
                        </div>
                        <p className="mt-2 text-sm text-white/70">{p.frontmatter.description}</p>
                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/65 transition group-hover:text-white">
                          <span>Read</span>
                          <span className="transition group-hover:translate-x-0.5">→</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>

            <div className="mt-6 text-xs text-white/50">
              Posts are short by design: clear boundaries, explicit assumptions,
              and actionable takeaways.
            </div>
          </Panel>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-5">
          {canon ? (
            <Panel className="p-7 sm:p-8">
              <div className="cc-kicker">Selected writing</div>
              <h2 className="mt-2 text-xl font-semibold">{canon.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {canon.blurb}
              </p>

              <div className="mt-5 grid gap-2">
                {canon.layers.slice(0, 3).map((layer) => {
                  const primaryLink = layer.links.find(
                    (link) => link.label === "DOI (Zenodo)" || link.label === "DOI"
                  );

                  if (!primaryLink) {
                    return null;
                  }

                  return (
                    <Button
                      key={primaryLink.href}
                      href={primaryLink.href}
                      variant="ghost"
                      className="justify-start"
                    >
                      {`DOI (${layer.title})`} ↗
                    </Button>
                  );
                })}
              </div>

              <div className="mt-5 text-xs text-white/55">
                Open access. DOI-backed. Designed to be independently testable.
              </div>

              {canon.layers.at(-1)?.links?.find(
                (l) => l.label.toLowerCase().includes("all") || l.label.toLowerCase().includes("records")
              ) ? (
                <div className="mt-5">
                  <Button
                    href={
                      canon.layers.at(-1)!.links.find(
                        (l) => l.label.toLowerCase().includes("all") || l.label.toLowerCase().includes("records")
                      )!.href
                    }
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
            <div className="text-sm font-semibold">How to use this section</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "If you are evaluating the service, start with Proof before going deep here.",
                "If you are close to launch or buyer review, start with the first writing cluster.",
                "Read the canon if you want the method and vocabulary behind the work.",
                "Use Projects for dossiers and implementation-facing evidence.",
                "If the thinking matches your product risk, go to Services or the trust risk read.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-2">
              <Button href="/services" className="w-full justify-center">
                See services
              </Button>
              <Button href="/case-study" variant="ghost" className="w-full justify-center">
                Open case study
              </Button>
              <Button href="/projects" variant="ghost" className="w-full justify-center">
                Open projects
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

