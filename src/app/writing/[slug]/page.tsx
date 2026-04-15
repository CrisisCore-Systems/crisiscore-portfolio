import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { absoluteUrl, SITE } from "@/app/lib/site";
import { loadWriting, loadWritingPost } from "@/content/load";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";

const DEFAULT_CTA = {
  prompt:
    "If this article is close to your product, the next move is not more theory. It is a scoped review, one inspectable proof path, and a short first note.",
  serviceHref: "/services",
  serviceLabel: "See the review options for sensitive-data products",
  proofHref: "/artifacts/security-and-audits/redacted-threat-model-excerpt",
  proofLabel: "Inspect a redacted review artifact",
  contactHref: "/contact",
  contactLabel: "Send your product URL, stage, and concern",
};

const CTA_BY_SLUG: Record<string, typeof DEFAULT_CTA> = {
  "privacy-first-pain-tracking": {
    prompt:
      "This is the health-app version of the problem: too much collection, too much centralization, and too little user control in the default path.",
    serviceHref: "/services/privacy-review-for-health-apps",
    serviceLabel: "See the health app privacy review path",
    proofHref: "/case-study/pain-tracker",
    proofLabel: "Inspect the PainTracker case study",
    contactHref: "/contact",
    contactLabel: "Send your health product URL, stage, and concern",
  },
  "paintracker-architecture": {
    prompt:
      "If your product has a similar local-first or sensitive-data boundary problem, move from architecture language to a concrete review and shipping plan.",
    serviceHref: "/services/privacy-review-for-health-apps",
    serviceLabel: "See the health app privacy review path",
    proofHref: "/artifacts/pain-tracker/architecture",
    proofLabel: "Open the PainTracker architecture artifact",
    contactHref: "/contact",
    contactLabel: "Send your product URL, stage, and concern",
  },
  "proofvault-trust-case-v1-0-1": {
    prompt:
      "If your team is making security, privacy, or AI trust claims that are broader than the release evidence, start by narrowing the guarantee surface.",
    serviceHref: "/services/ai-trust-review-sensitive-data-products",
    serviceLabel: "See the trust review path for sensitive-data AI products",
    proofHref: "/case-study/proofvault",
    proofLabel: "Inspect the ProofVault trust case",
    contactHref: "/contact",
    contactLabel: "Send your product URL, stage, and concern",
  },
  "reduce-data-collection-risk-before-launch": {
    prompt:
      "If your product is collecting more than it needs, the fastest useful next move is a minimization review and a smaller default boundary before launch hardens the mistake.",
    serviceHref: "/services/reduce-data-collection-risk-before-launch",
    serviceLabel: "See the pre-launch data-risk reduction review",
    proofHref: "/artifacts/security-and-audits/redacted-threat-model-excerpt",
    proofLabel: "Inspect a redacted review artifact",
    contactHref: "/contact",
    contactLabel: "Send your product URL, stage, and concern",
  },
  "pre-launch-privacy-review-checklist-health-wellness-apps": {
    prompt:
      "If your health or wellness product is close to launch and nobody has forced the privacy boundary into plain language yet, start with the pre-launch review path.",
    serviceHref: "/services/pre-launch-privacy-audit",
    serviceLabel: "See the pre-launch privacy audit path",
    proofHref: "/case-study/pain-tracker",
    proofLabel: "Inspect the PainTracker case study",
    contactHref: "/contact",
    contactLabel: "Send your product URL, stage, and concern",
  },
  "what-founders-miss-before-launching-sensitive-data-products": {
    prompt:
      "If launch is close and the concern is still vague, use a launch-readiness review to force the trust, privacy, and failure-state risks into a ranked list before users do it for you.",
    serviceHref: "/services/launch-readiness-review-for-sensitive-data-products",
    serviceLabel: "See the launch-readiness review path",
    proofHref: "/artifacts/security-and-audits/redacted-threat-model-excerpt",
    proofLabel: "Inspect a redacted trust artifact",
    contactHref: "/contact",
    contactLabel: "Send your product URL, stage, and concern",
  },
  "data-minimization-checklist-sensitive-apps": {
    prompt:
      "If the product needs a smaller default collection boundary before launch, a minimization review is the fastest way to separate required data from inherited convenience.",
    serviceHref: "/services/data-minimization-review-for-apps",
    serviceLabel: "See the data minimization review path",
    proofHref: "/writing/reduce-data-collection-risk-before-launch",
    proofLabel: "Read the collection-risk article",
    contactHref: "/contact",
    contactLabel: "Send your product URL, stage, and concern",
  },
};

type ParamsLike = { slug: string } | Promise<{ slug: string }>;

async function getSlug(params: ParamsLike) {
  const resolved = await Promise.resolve(params);
  return resolved.slug;
}

export function generateStaticParams() {
  return loadWriting().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: ParamsLike }) {
  try {
    const slug = await getSlug(params);
    const p = loadWritingPost(slug);
    const socialImageBySlug: Record<string, string> = {
      "proofvault-trust-case-v1-0-1": "/assets/proof-cards/release_bound_artifact_hash_wide_16x9.svg",
      "protective-computing-doctrine": "/assets/diagram_plates/diagram_04_local_authority_vs_cloud_dependence.svg",
      "overton-doi": "/assets/diagram_plates/diagram_02_protective_computing_lifecycle.svg",
    };
    const socialImage = socialImageBySlug[slug];

    return {
      title: p.frontmatter.title,
      description: p.frontmatter.description,
      openGraph: socialImage ? { images: [{ url: absoluteUrl(socialImage) }] } : undefined,
      twitter: socialImage ? { images: [absoluteUrl(socialImage)] } : undefined,
    };
  } catch {
    return {};
  }
}

export default async function WritingPostPage({
  params,
}: Readonly<{
  params: ParamsLike;
}>) {
  let post;
  try {
    const slug = await getSlug(params);
    post = loadWritingPost(slug);
  } catch {
    return notFound();
  }

  const cta = CTA_BY_SLUG[post.slug] ?? DEFAULT_CTA;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    mainEntityOfPage: absoluteUrl(`/writing/${post.slug}`),
    author: {
      "@id": `${SITE.url}#organization`,
    },
    publisher: {
      "@id": `${SITE.url}#organization`,
    },
  };

  return (
    <div className="py-12">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Link href="/writing" className="text-sm text-white/60 hover:text-white">
        ← Back to writing
      </Link>

      <div className="mt-6 text-xs uppercase tracking-[0.2em] text-white/45">
        Writing / Article
      </div>
      <div className="text-xs text-white/50">{post.frontmatter.date}</div>
      <h1 className="mt-2 text-3xl font-semibold">{post.frontmatter.title}</h1>
      <p className="mt-3 max-w-3xl text-sm text-white/70">
        {post.frontmatter.description}
      </p>

      <article className="prose prose-invert mt-10 max-w-3xl">
        <MDXRemote
          source={post.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </article>

      <Panel className="mt-10 max-w-3xl p-6 sm:p-7">
        <div className="text-sm font-semibold">If this maps to your product</div>
        <p className="mt-3 text-sm leading-relaxed text-white/70">{cta.prompt}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button href={cta.serviceHref} variant="ghost">
            {cta.serviceLabel}
          </Button>
          <Button href={cta.proofHref} variant="ghost">
            {cta.proofLabel}
          </Button>
          <Button href={cta.contactHref}>
            {cta.contactLabel}
          </Button>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/68">
          Start with the shortest useful note: product URL, launch stage, and the main concern.
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/writing" variant="ghost">
            Writing index
          </Button>
          <Button href="/projects" variant="ghost">
            Projects
          </Button>
        </div>
      </Panel>
    </div>
  );
}
