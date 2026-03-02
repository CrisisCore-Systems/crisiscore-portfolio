import { SITE } from "@/app/lib/site";

export const revalidate = 300;

export async function GET() {
  const checks = [
    {
      url: `${SITE.url}/site-map`,
      expectedStatus: 200,
      expectedContentType: "text/html",
      role: "primary",
    },
    {
      url: `${SITE.url}/artifacts/pain-tracker/architecture`,
      expectedStatus: 200,
      expectedContentType: "text/html",
      role: "primary",
    },
    {
      url: `${SITE.url}/artifacts/pain-tracker/ui-01-fastlog`,
      expectedStatus: 200,
      expectedContentType: "text/html",
      role: "primary",
    },
    {
      url: `${SITE.url}/artifacts/security-and-audits/redacted-threat-model-excerpt`,
      expectedStatus: 200,
      expectedContentType: "text/html",
      role: "primary",
    },
    {
      url: `${SITE.url}/sitemap.xml`,
      expectedStatus: 200,
      expectedContentType: "application/xml",
      role: "mirror",
      note: "May be selectively blocked for some crawler networks.",
    },
    {
      url: `${SITE.url}/projects/pain-tracker/architecture.svg`,
      expectedStatus: 200,
      expectedContentType: "image/svg+xml",
      role: "mirror",
      note: "May be selectively blocked for some crawler networks.",
    },
    {
      url: `${SITE.url}/projects/pain-tracker/ui-01.svg`,
      expectedStatus: 200,
      expectedContentType: "image/svg+xml",
      role: "mirror",
      note: "May be selectively blocked for some crawler networks.",
    },
    {
      url: `${SITE.url}/projects/security-and-audits/redacted-threat-model-excerpt.md`,
      expectedStatus: 200,
      expectedContentType: "text/markdown",
      role: "mirror",
      note: "May be selectively blocked for some crawler networks.",
    },
  ];

  return Response.json(
    {
      generatedAt: new Date().toISOString(),
      note: "Expected fetchability targets for non-browser verification.",
      checks,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=600",
      },
    }
  );
}
