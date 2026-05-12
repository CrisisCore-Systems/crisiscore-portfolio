import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { absoluteUrl, SITE } from "@/app/lib/site";
import { BUYER_INTENT_PAGES, getBuyerIntentPage, getMergedBuyerIntentPages } from "@/app/lib/buyer-intent";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { FitCheckCta } from "@/components/FitCheckCta";

type ParamsLike = { slug: string } | Promise<{ slug: string }>;

async function getSlug(params: ParamsLike) {
  const resolved = await Promise.resolve(params);
  return resolved.slug;
}

export function generateStaticParams() {
  return BUYER_INTENT_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: ParamsLike }): Promise<Metadata> {
  const slug = await getSlug(params);
  const page = getBuyerIntentPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    robots: {
      index: page.primaryIndexTarget,
      follow: true,
    },
    alternates: {
      canonical: page.primaryIndexTarget ? `/services/${page.slug}` : page.parentHref ?? `/services/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: absoluteUrl(`/services/${page.slug}`),
    },
    twitter: {
      title: page.title,
      description: page.description,
    },
  };
}

export default async function BuyerIntentServicePage({
  params,
}: Readonly<{
  params: ParamsLike;
}>) {
  const slug = await getSlug(params);
  const page = getBuyerIntentPage(slug);

  if (!page) {
    return notFound();
  }

  if (!page.primaryIndexTarget && page.parentHref) {
    redirect(page.parentHref);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/services/${page.slug}#webpage`,
        url: `${SITE.url}/services/${page.slug}`,
        name: page.title,
        description: page.description,
        isPartOf: {
          "@id": `${SITE.url}#service`,
        },
        about: {
          "@type": "Thing",
          name: page.title,
        },
      },
      {
        "@type": "Service",
        "@id": `${SITE.url}/services/${page.slug}#service`,
        name: page.title,
        description: page.description,
        url: `${SITE.url}/services/${page.slug}`,
        provider: {
          "@id": `${SITE.url}#organization`,
        },
        serviceType: page.title,
        areaServed: "CA",
      },
    ],
  };

  const audience = page.audience ?? page.bestFit;
  const useThisWhen = page.useThisWhen ?? audience.slice(0, 3);
  const exampleFailures = page.exampleFailures ?? page.painPoints;
  const deliverables =
    page.deliverables ?? [
      "Ranked findings focused on the few issues most worth fixing first.",
      "A practical next-step recommendation sized to the current product stage.",
      "Written notes the team can keep using after the first call.",
    ];
  const mergedPages = getMergedBuyerIntentPages(page.slug);
  const fitCheckPrompt = page.fitCheckPrompt ?? "the one problem that makes this review path feel relevant";

  return (
    <div className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Panel className="p-8 sm:p-10">
        <div className="cc-kicker">Service review</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{page.title}</h1>
        <p className="mt-4 cc-lede">{page.summary}</p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">{page.description}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button href="/contact">Check fit for this review path</Button>
          <Button href="/services" variant="ghost">
            See service packages
          </Button>
          <Button href={page.proofHref} variant="ghost">
            {page.proofLabel}
          </Button>
        </div>

        <FitCheckCta
          className="mt-8"
          title={`Send the product URL and ${fitCheckPrompt}.`}
          description="That is enough for a first pass. I&apos;ll tell you whether this exact review path is right, whether a broader review is smarter, or whether the issue stays small."
          checklistItems={[
            `Send URL + ${fitCheckPrompt}.`,
            "Use contact if you want the shortest path to a recommendation.",
            "Skip decks and long docs for the first pass.",
          ]}
        />
      </Panel>

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Panel className="p-7 sm:p-8">
          <div className="text-sm font-semibold">Use this review when</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {useThisWhen.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="text-sm font-semibold">Who this is for</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {audience.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="mt-8 text-sm font-semibold">The launch risk this catches</div>
          <p className="mt-4 text-sm leading-relaxed text-white/75">{page.riskProfile ?? page.description}</p>

          <div className="mt-8 text-sm font-semibold">What I inspect</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {page.reviewIncludes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="mt-8 text-sm font-semibold">Example failure patterns</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {exampleFailures.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/72">
            The output is designed to be useful fast: what is wrong, what matters first, and the smallest reasonable next step.
          </div>

          {mergedPages.length ? (
            <>
              <div className="mt-8 text-sm font-semibold">Merged review paths now covered here</div>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                This page is the primary entry point for adjacent review requests that were previously split into near-duplicate service pages. The subtopics below now live under this stronger review path.
              </p>
              <div className="mt-4 grid gap-3">
                {mergedPages.map((mergedPage) => (
                  <div key={mergedPage.slug} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-sm font-semibold text-white">{mergedPage.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-white/72">{mergedPage.summary}</p>
                    <ul className="mt-3 space-y-2 text-sm text-white/70">
                      {mergedPage.painPoints.slice(0, 2).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </Panel>

        <Panel className="p-7 sm:p-8">
          <div className="text-sm font-semibold">What you receive</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {deliverables.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="mt-8 text-sm font-semibold">Proof path</div>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {page.proofIntro ?? "This review path is tied to concrete proof, artifacts, and field-tested product work rather than generic consulting language."}
          </p>
          {page.proofItems?.length ? (
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {page.proofItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          ) : null}

          <div className="mt-8 text-sm font-semibold">Inspection path</div>
          <div className="mt-4 grid gap-2">
            <Button href={page.proofHref} variant="ghost" className="justify-center">
              {page.proofLabel}
            </Button>
            <Button href={page.artifactHref} variant="ghost" className="justify-center">
              {page.artifactLabel}
            </Button>
            <Button href="/artifacts/security-and-audits/sample-48-hour-teardown" variant="ghost" className="justify-center">
              View sample teardown
            </Button>
            <Button href="/contact" className="justify-center">
              Ask whether this path fits
            </Button>
          </div>

          {page.notFit?.length ? (
            <>
              <div className="mt-8 text-sm font-semibold">When this is not a fit</div>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {page.notFit.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </>
          ) : null}

          {mergedPages.length ? (
            <>
              <div className="mt-8 text-sm font-semibold">What this merged scope adds</div>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {mergedPages.flatMap((mergedPage) => mergedPage.reviewIncludes.slice(0, 1)).map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </>
          ) : null}
        </Panel>
      </div>
    </div>
  );
}