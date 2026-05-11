import { test, expect } from "@playwright/test";

const routes = ["/", "/artifacts", "/projects", "/proof", "/writing", "/contact"] as const;
const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000";
const isLocalBaseUrl = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(baseUrl);

const homepageCtas = [
  { name: "Get a 3-point risk read", href: "/contact" },
  { name: "Inspect the proof path", href: "/proof" },
  { name: "Open PainTracker case study", href: "/case-study/pain-tracker" },
] as const;

for (const route of routes) {
  test(`Route ${route} loads successfully`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);

    const errorOverlay = page.locator("nextjs-portal");
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
  await expect(page.getByRole("link", { name: "Inspect the proof path" }).first()).toBeVisible();
});

test("Footer build marker matches /version.json on core routes", async ({ page, request }) => {
  const versionResponse = await request.get("/version.json");
  expect(versionResponse.status()).toBe(200);
  const versionPayload = await versionResponse.json();
  const expectedBuild = versionPayload.footerBuild as string;
  expect(expectedBuild).toBeTruthy();

  if (versionPayload.reportedCommit || versionPayload.footerBuildFull !== "unknown") {
    expect(expectedBuild).not.toBe("unknown");
  }

  for (const route of ["/", "/services", "/proof", "/contact"] as const) {
    await page.goto(route);
    await expect(page.getByText(`Build: ${expectedBuild}`).first()).toBeVisible();
  }
});

test("Duplicate Vercel hostname redirects to canonical domain", async ({ request }) => {
  test.skip(!isLocalBaseUrl, "Host-header redirect assertion is only valid against a local app server.");

  const response = await request.get("/proof", {
    headers: {
      host: "crisiscore-portfolio.vercel.app",
      "x-forwarded-host": "crisiscore-portfolio.vercel.app",
    },
    maxRedirects: 0,
  });

  expect(response.status()).toBe(301);
  expect(response.headers()["location"]).toBe("https://crisiscore-systems.ca/proof");
});
