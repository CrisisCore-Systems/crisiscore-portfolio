import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { absoluteUrl, SITE } from "@/app/lib/site";
import { getSecurityToolPage, SECURITY_TOOL_PAGES } from "@/app/security-tools/data";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/Section";

type Params = { slug: string };

export function generateStaticParams() {
  return SECURITY_TOOL_PAGES.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const page = getSecurityToolPage(params.slug);
  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/security-tools/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: absoluteUrl(`/security-tools/${page.slug}`),
    },
    twitter: {
      title: page.title,
      description: page.description,
    },
  };
}

export default function SecurityToolProductPage({ params }: { params: Params }) {
  const page = getSecurityToolPage(params.slug);
  if (!page) {
    return notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/security-tools/${page.slug}#webpage`,
        url: `${SITE.url}/security-tools/${page.slug}`,
        name: page.title,
        description: page.description,
        isPartOf: {
          "@id": `${SITE.url}#service`,
        },
      },
      {
        "@type": "Service",
        "@id": `${SITE.url}/security-tools/${page.slug}#service`,
        name: page.title,
        description: page.description,
        url: `${SITE.url}/security-tools/${page.slug}`,
        provider: {
          "@id": `${SITE.url}#organization`,
        },
        serviceType: page.title,
        areaServed: "CA",
      },
    ],
  };

  return (
    <div className="py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Panel className="p-8 sm:p-10">
        <div className="cc-kicker">Security tool</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{page.title}</h1>
        <p className="mt-4 cc-lede">{page.summary}</p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">{page.description}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href={page.ctaHref}>{page.ctaLabel}</Button>
          <Button href="/security-tools" variant="ghost">
            Return to security tools
          </Button>
          {page.proofHref ? (
            <Button href={page.proofHref} variant="ghost">
              {page.proofLabel ?? "See proof"}
            </Button>
          ) : null}
        </div>
      </Panel>

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Panel className="p-7 sm:p-8">
          <div className="text-sm font-semibold">Problem</div>
          <p className="mt-4 text-sm leading-relaxed text-white/75">{page.problem}</p>

          <div className="mt-8 text-sm font-semibold">Who it is for</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {page.who.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="mt-8 text-sm font-semibold">What I review</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {page.reviewIncludes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-7 sm:p-8">
          <div className="text-sm font-semibold">What you receive</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {page.deliverables.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="mt-8 text-sm font-semibold">Example findings</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {page.exampleFindings.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/70">
            Pricing or starting range: {page.pricing}
          </div>
        </Panel>
      </div>

      <Section title="Next step" kicker="Make it purchasable">
        <Panel className="p-7 sm:p-8">
          <p className="text-sm leading-relaxed text-white/75">
            This page is meant to be an explicit sales path for a security product offering. The next step is a fit check, not another broad philosophy conversation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={page.ctaHref}>{page.ctaLabel}</Button>
            <Button href="/trust-risk-read" variant="ghost">
              Request a quick fit check
            </Button>
          </div>
        </Panel>
      </Section>

      {page.faqs ? (
        <Section title="Frequently asked questions" kicker="Clarify buyer concerns">
          <Panel className="p-7 sm:p-8">
            <div className="space-y-6 text-sm text-white/75">
              {page.faqs.map((faq) => (
                <div key={faq.question}>
                  <div className="font-semibold text-white">{faq.question}</div>
                  <p className="mt-2 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Panel>
        </Section>
      ) : null}
    </div>
  );
}
