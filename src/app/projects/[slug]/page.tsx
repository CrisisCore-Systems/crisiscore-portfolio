import { notFound } from "next/navigation";
import Link from "next/link";
import { getRepo } from "@/app/lib/github";
import { absoluteUrl } from "@/app/lib/site";
import { AssetFigure } from "@/components/AssetFigure";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { loadDossier, loadProject, loadProjects } from "@/content/load";
import { getArtifactByRawPath } from "@/app/lib/artifacts";

export const revalidate = 21600;

const caseStudyPathBySlug: Record<string, string> = {
  "pain-tracker": "/case-study/pain-tracker",
  proofvault: "/case-study/proofvault",
};

const bridgeContentBySlug: Record<string, {
  eyebrow: string;
  title: string;
  body: string[];
  links: Array<{ href: string; label: string }>;
}> = {
  "pain-tracker": {
    eyebrow: "Commercial bridge",
    title: "Use PainTracker as the reference path for health product review",
    body: [
      "Building a health, wellness, or symptom-tracking app? PainTracker is the reference implementation behind CrisisCore's privacy review method for sensitive health products.",
      "If your app collects symptoms, mood, disability, medication, location, notes, exports, or clinician-ready summaries, this is the same inspection lens used to review the product boundary before launch.",
    ],
    links: [
      { href: "https://paintracker.ca", label: "Open PainTracker" },
      {
        href: "https://www.paintracker.ca/resources/daily-pain-tracker-printable",
        label: "Daily pain tracker printable",
      },
      { href: "/case-study/pain-tracker", label: "PainTracker case study" },
      { href: "/proof", label: "CrisisCore proof hub" },
      { href: "/services/privacy-review-for-health-apps", label: "Privacy Review for Health Apps" },
      {
        href: "/services/privacy-first-health-app-architecture",
        label: "Privacy-First Health App Architecture",
      },
      { href: "/services/pre-launch-privacy-audit", label: "Pre-Launch Privacy Audit for Sensitive Data Apps" },
      { href: "/services/data-minimization-review-for-apps", label: "Data Minimization Review for Apps" },
      { href: "/services/local-first-health-app-architecture", label: "Local-First Health App Architecture Review" },
      { href: "/writing/the-overton-framework", label: "Overton Framework writing" },
    ],
  },
  proofvault: {
    eyebrow: "Commercial bridge",
    title: "Use ProofVault as the release-evidence bridge into service work",
    body: [
      "ProofVault shows how CrisisCore narrows trust claims until the release can actually defend them through specimens, verifier paths, hosted CI, and drift checks.",
      "If your product has launch claims, procurement pressure, or release evidence that feels too loose, this is the same review lens used for pre-launch audit and trust hardening work.",
    ],
    links: [
      { href: "/services/pre-launch-privacy-audit", label: "Pre-Launch Privacy Audit for Sensitive Data Apps" },
      { href: "/services/data-minimization-review-for-apps", label: "Data Minimization Review for Apps" },
      { href: "/services/privacy-review-for-health-apps", label: "Privacy Review for Health Apps" },
      { href: "/trust-risk-read", label: "Get a 3-point risk read" },
    ],
  },
};

const intentIntroBySlug: Record<string, string> = {
  "pain-tracker":
    "PainTracker is a privacy-first chronic pain tracking app built by CrisisCore Systems. It works offline, stores data locally, and gives users exportable records without forcing health data into a cloud account.",
};

const metadataBySlug: Record<string, { title: string; description: string }> = {
  "pain-tracker": {
    title: "PainTracker Case Project | Offline Private Pain Tracking App",
    description:
      "PainTracker is a privacy-first chronic pain tracking app with offline logging, local-first storage, explicit export, and no forced cloud account for core use.",
  },
};

type ParamsLike = { slug: string } | Promise<{ slug: string }>;

async function getSlug(params: ParamsLike) {
  const resolved = await Promise.resolve(params);
  return resolved.slug;
}

export function generateStaticParams() {
  return loadProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: ParamsLike }) {
  const slug = await getSlug(params);
  try {
    const p = loadProject(slug);
    const dossier = loadDossier(slug);
    const metadataOverride = metadataBySlug[slug];
    const socialImage =
      slug === "proofvault"
        ? "/assets/proof-cards/trust_case_excerpt_wide_16x9.svg"
        : dossier?.architecture.diagram?.src ?? dossier?.images?.items?.[0]?.src;

    return {
      title: metadataOverride ? { absolute: metadataOverride.title } : p.title,
      description: metadataOverride?.description ?? p.summary,
      openGraph: socialImage ? { images: [{ url: absoluteUrl(socialImage) }] } : undefined,
      twitter: socialImage ? { images: [absoluteUrl(socialImage)] } : undefined,
    };
  } catch {
    return {};
  }
}

function fmt(n: number) {
  return new Intl.NumberFormat(undefined, { notation: "compact" }).format(n);
}

function date(d: string) {
  try {
    return new Date(d).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return d;
  }
}

function isInternalHref(href: string) {
  return href.startsWith("/");
}

export default async function ProjectPage({
  params,
}: Readonly<{
  params: ParamsLike;
}>) {
  const slug = await getSlug(params);
  let p: ReturnType<typeof loadProject>;
  try {
    p = loadProject(slug);
  } catch {
    return notFound();
  }

  const dossier = loadDossier(slug);
  const bridgeContent = bridgeContentBySlug[slug];
  const intentIntro = intentIntroBySlug[slug];
  const gh = p.links.find((l) => l.href.includes("github.com/"));
  const repoMatch = gh?.href.match(/github\.com\/([^/]+)\/([^/]+)/i);
  const repo = repoMatch ? await getRepo(repoMatch[1], repoMatch[2]) : null;

  return (
    <div className="py-12">
      <Link href="/projects" className="text-sm text-white/60 hover:text-white">
        ← Back to projects
      </Link>

      <div className="mt-6">
        <div className="text-xs uppercase tracking-[0.2em] text-white/45">
          Evidence dossier
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          {p.title}
        </h1>
        {p.subtitle ? (
          <p className="mt-2 text-sm text-white/65">{p.subtitle}</p>
        ) : null}
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
          {dossier?.tagline ?? p.description}
        </p>
        {intentIntro ? (
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/76">
            {intentIntro}
          </p>
        ) : null}
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
          Use this dossier as supporting evidence for the service work on this site: problem, constraints, proof surface, and outputs.
        </p>
        {p.slug === "overton-framework" ? (
          <p className="mt-2 max-w-3xl text-xs text-white/55">
            Disambiguation: this is a protective computing framework, not the political science Overton Window concept.
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      {caseStudyPathBySlug[p.slug] ? (
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={caseStudyPathBySlug[p.slug]}>Read the case study</Button>
          <Button href="/services" variant="ghost">See services</Button>
          <Button href="/trust-risk-read" variant="ghost">Get a 3-point risk read</Button>
        </div>
      ) : null}

      {bridgeContent ? (
        <Panel className="mt-6 p-7 sm:p-8">
          <div className="text-xs uppercase tracking-[0.2em] text-white/45">{bridgeContent.eyebrow}</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em]">{bridgeContent.title}</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/72">
            {bridgeContent.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {bridgeContent.links.map((link) => (
              <Button key={link.href} href={link.href} variant="ghost">
                {link.label}
              </Button>
            ))}
          </div>
        </Panel>
      ) : null}

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Panel className="p-7 sm:p-8">
            <div className="text-sm font-semibold">
              {dossier?.problem.title ?? "Summary"}
            </div>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
              {(dossier?.problem.body ?? [p.summary]).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Panel>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Panel className="p-7">
              <div className="text-sm font-semibold">
                {dossier?.constraints.title ?? "Constraints"}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {(dossier?.constraints.items ?? [
                  "Local authority over defaults.",
                  "Degraded-first behavior.",
                  "Reversible actions.",
                ]).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[2px] text-white/40">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel className="p-7">
              <div className="text-sm font-semibold">Proof</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(dossier?.proof.links ?? p.links).map((l) => (
                  <Button key={l.href} href={l.href} variant="ghost">
                    {l.label}
                    {isInternalHref(l.href) ? null : " ↗"}
                  </Button>
                ))}
              </div>

              {repo ? (
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs text-white/55">Stars</div>
                    <div className="mt-1 text-lg font-semibold">
                      {fmt(repo.stargazers_count)}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs text-white/55">Open items</div>
                    <div className="mt-1 text-lg font-semibold">
                      {fmt(repo.open_issues_count)}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs text-white/55">Last push</div>
                    <div className="mt-1 text-sm font-semibold">
                      {date(repo.pushed_at)}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-4 text-xs text-white/50">
                  Live repo stats may be rate-limited for anonymous requests.
                </div>
              )}
            </Panel>
          </div>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">
              {dossier?.architecture.title ?? "Architecture"}
            </div>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
              {(dossier?.architecture.body ?? [
                "This dossier is being expanded. The architecture section will contain diagrams and explicit trust boundaries.",
              ]).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            {dossier?.architecture.diagram ? (
              <div className="mt-6 space-y-4">
                <AssetFigure
                  src={dossier.architecture.diagram.src}
                  alt={dossier.architecture.diagram.alt}
                  title="Architecture diagram"
                />

                {getArtifactByRawPath(dossier.architecture.diagram.src) ? (
                  <Button
                    href={`/artifacts/${getArtifactByRawPath(dossier.architecture.diagram.src)!.slug}`}
                    variant="ghost"
                    className="w-full justify-center"
                  >
                    View architecture artifact
                  </Button>
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/65">
                    Diagram is rendered inline here; dedicated artifact page is not configured for this asset.
                  </div>
                )}
              </div>
            ) : null}
          </Panel>

          <Panel className="mt-4 p-7 sm:p-8">
            <div className="text-sm font-semibold">
              {dossier?.outcomes.title ?? "Outcomes"}
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {(dossier?.outcomes.items ?? [
                "A structured, verifiable case-study surface (this dossier) replacing a link dump.",
              ]).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[2px] text-white/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <div className="lg:col-span-4">
          <Panel className="p-7">
            <div className="text-sm font-semibold">Links</div>
            <div className="mt-4 flex flex-col gap-2">
              {p.links.map((l) => (
                isInternalHref(l.href) ? (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 transition hover:bg-white/[0.07] hover:text-white"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 transition hover:bg-white/[0.07] hover:text-white"
                  >
                    {l.label} ↗
                  </a>
                )
              ))}
            </div>

            <div className="mt-6 grid gap-2">
              <Button href="/services" className="w-full justify-center">
                See services
              </Button>
              <Button href="/trust-risk-read" variant="ghost" className="w-full justify-center">
                Get a 3-point risk read
              </Button>
            </div>
          </Panel>

          {dossier?.images ? (
            <Panel className="mt-4 p-7">
              <div className="text-sm font-semibold">{dossier.images.title}</div>
              <div className="mt-4 grid gap-2">
                {dossier.images.items.map((img) => {
                  const artifact = getArtifactByRawPath(img.src);
                  return artifact ? (
                    <Button
                      key={img.src}
                      href={`/artifacts/${artifact.slug}`}
                      variant="ghost"
                      className="justify-start"
                    >
                      {artifact.title}
                    </Button>
                  ) : (
                    <div key={img.src} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/65">
                      {img.alt}
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 text-xs text-white/50">
                Viewer-first links are primary; raw files are available as mirrors from each artifact page.
              </div>
            </Panel>
          ) : null}
        </div>
      </div>
    </div>
  );
}
