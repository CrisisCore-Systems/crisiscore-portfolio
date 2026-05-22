import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/artifacts",
  "/projects",
  "/proof",
  "/writing",
  "/start-here",
  "/trust-hardening-review",
  "/trust-risk-read",
  "/privacy",
] as const;
const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000";
const isLocalBaseUrl = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(baseUrl);

const homepageCtas = [
  { name: "Send a product URL. Get first 3 gaps.", href: "/trust-risk-read" },
  { name: "Open trust hardening review", href: "/trust-hardening-review" },
  { name: "Open start here", href: "/start-here" },
  { name: "See verifiable proof", href: "/proof" },
  { name: "Open PainTracker case study", href: "/case-study/pain-tracker" },
] as const;

for (const route of routes) {
  test(`Route ${route} loads successfully`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);

    const errorOverlay = page.locator("[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay");
    await expect(errorOverlay).toHaveCount(0);

    await expect(page).toHaveTitle(/CrisisCore/i);
  });
}

test("Homepage proof CTAs resolve to live internal routes", async ({ page, request }) => {
  await page.goto("/");

  for (const cta of homepageCtas) {
    const link = page.getByRole("link", { name: cta.name }).first();
    await expect(link).toHaveAttribute("href", cta.href);

    const response = await request.get(cta.href, { maxRedirects: 0 });
    expect(response.status(), `${cta.name} should resolve`).toBe(200);
  }

  await expect(page.getByRole("link", { name: "Open PainTracker case study" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "See verifiable proof" }).first()).toBeVisible();
});

test("Footer version data matches /version.json on core routes", async ({ page, request }) => {
  const versionResponse = await request.get("/version.json");
  expect(versionResponse.status()).toBe(200);
  const versionPayload = await versionResponse.json();
  const expectedBuild = versionPayload.commit as string;
  expect(expectedBuild).toBeTruthy();
  expect(versionPayload.matchesFooterBuild).toBe(true);

  for (const route of ["/", "/services", "/proof", "/start-here", "/trust-hardening-review", "/trust-risk-read"] as const) {
    await page.goto(route);
    await expect(page.locator("footer")).toHaveAttribute("data-build", expectedBuild);
    await expect(page.getByRole("link", { name: "Version" }).first()).toHaveAttribute("href", "/version.json");
    await expect(page.getByText(`Build: ${expectedBuild}`).first()).toHaveCount(0);
  }
});

test("Legacy contact route redirects into the trust risk read funnel", async ({ request }) => {
  const response = await request.get("/contact", { maxRedirects: 0 });

  expect(response.status()).toBe(308);
  expect(response.headers()["location"]).toContain("/trust-risk-read");
});

test("Duplicate and typo hostnames redirect to canonical domain", async ({ request }) => {
  test.skip(!isLocalBaseUrl, "Host-header redirect assertion is only valid against a local app server.");

  for (const host of ["crisiscore-portfolio.vercel.app", "crisiscore.systems.ca"] as const) {
    const response = await request.get("/proof", {
      headers: {
        host,
        "x-forwarded-host": host,
      },
      maxRedirects: 0,
    });

    expect(response.status()).toBe(301);
    expect(response.headers()["location"]).toBe("https://crisiscore-systems.ca/proof");
  }
});
