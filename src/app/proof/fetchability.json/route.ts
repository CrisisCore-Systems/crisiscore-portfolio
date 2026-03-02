import { SITE } from "@/app/lib/site";

export const revalidate = 300;

export async function GET() {
  const checks = [
    {
      url: `${SITE.url}/sitemap.xml`,
      expectedStatus: 200,
      expectedContentType: "application/xml",
    },
    {
      url: `${SITE.url}/projects/pain-tracker/architecture.svg`,
      expectedStatus: 200,
      expectedContentType: "image/svg+xml",
    },
    {
      url: `${SITE.url}/projects/pain-tracker/ui-01.svg`,
      expectedStatus: 200,
      expectedContentType: "image/svg+xml",
    },
    {
      url: `${SITE.url}/projects/security-and-audits/redacted-threat-model-excerpt.md`,
      expectedStatus: 200,
      expectedContentType: "text/markdown",
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
