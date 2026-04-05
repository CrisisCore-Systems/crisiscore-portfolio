import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { absoluteUrl, SITE } from "@/app/lib/site";
import { BUYER_INTENT_PAGES, getBuyerIntentPage } from "@/app/lib/buyer-intent";
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
    alternates: {
      canonical: `/services/${page.slug}`,
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
          name: page.query,
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
        serviceType: page.query,
        areaServed: "CA",
      },
    ],
  };

  return (
    <div className="py-12">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Panel className="p-8 sm:p-10">
        <div className="cc-kicker">Buyer-intent service page</div>
        <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white/45">Query: {page.query}</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{page.title}</h1>
        <p className="mt-4 cc-lede">{page.summary}</p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">{page.description}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button href="/contact">Get a 3-point risk read</Button>
          <Button href="/services" variant="ghost">
            See service packages
          </Button>
          <Button href={page.proofHref} variant="ghost">
            {page.proofLabel}
          </Button>
        </div>

        <FitCheckCta
          className="mt-8"
          title="Paste the product URL and the one thing that feels risky."
          description="That is enough for a first pass. I will tell you whether this looks like a teardown, a full review, or not a fit."
        />
      </Panel>

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Panel className="p-7 sm:p-8">
          <div className="text-sm font-semibold">What usually triggers this review</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {page.painPoints.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="mt-8 text-sm font-semibold">What the review includes</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {page.reviewIncludes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-7 sm:p-8">
          <div className="text-sm font-semibold">Best fit</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {page.bestFit.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="mt-8 text-sm font-semibold">Inspection path</div>
          <div className="mt-4 grid gap-2">
            <Button href={page.proofHref} variant="ghost" className="justify-center">
              {page.proofLabel}
            </Button>
            <Button href={page.artifactHref} variant="ghost" className="justify-center">
              {page.artifactLabel}
            </Button>
            <Button href="/contact" className="justify-center">
              Send your product URL for a fit check
            </Button>
          </div>

          <div className="mt-6 text-xs text-white/55">
            This is a search-entry page. If the problem feels close to your product, the fastest next move is still the smallest useful first message.
          </div>
        </Panel>
      </div>
    </div>
  );
}