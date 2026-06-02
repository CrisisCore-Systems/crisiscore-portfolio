import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/artifacts",
  "/projects",
  "/proof",
  "/services",
  "/writing",
  "/start-here",
  "/small-business-trust-cleanup",
  "/trust-hardening-review",
  "/trust-risk-read",
  "/privacy",
  "/services/privacy-review-for-health-apps",
  "/services/privacy-first-health-app-architecture",
  "/services/pre-launch-privacy-audit",
  "/services/data-minimization-review-for-apps",
  "/services/local-first-health-app-architecture",
  "/security-tools",
  "/security-tools/trust-surface-audit",
  "/security-tools/privacy-risk-review",
  "/security-tools/failure-mode-analysis",
  "/security-tools/protective-computing-review",
  "/security-tools/local-first-security-audit",
] as const;
const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000";
const isLocalBaseUrl = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(baseUrl);

const homepageCtas = [
  { name: "Get a 3-point risk read", href: "/trust-risk-read" },
  { name: "Open small business cleanup", href: "/small-business-trust-cleanup" },
  { name: "View services", href: "/services" },
  { name: "Read method", href: "/writing" },
  { name: "See proof", href: "/proof" },
  { name: "View sample brief", href: "/artifacts/security-and-audits/sample-48-hour-teardown" },
  { name: "Open PainTracker case study", href: "/case-study/pain-tracker" },
] as const;

const globalNavLinks = [
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-study" },
  { name: "Proof", href: "/proof" },
  { name: "Writing", href: "/writing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/trust-risk-read" },
] as const;

const serviceComparisonLinks = [
  { name: "Health App Privacy Review", href: "/services/privacy-review-for-health-apps" },
  { name: "Privacy-First Health App Architecture", href: "/services/privacy-first-health-app-architecture" },
  { name: "Pre-Launch Privacy Audit", href: "/services/pre-launch-privacy-audit" },
  { name: "Data Minimization Review", href: "/services/data-minimization-review-for-apps" },
  { name: "Local-First Architecture Review", href: "/services/local-first-health-app-architecture" },
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

test("Homepage buyer-path CTAs resolve to live internal routes", async ({ page, request }) => {
  await page.goto("/");

  for (const cta of homepageCtas) {
    const link = page.getByRole("link", { name: cta.name }).first();
    await expect(link).toHaveAttribute("href", cta.href);

    const response = await request.get(cta.href, { maxRedirects: 0 });
    expect(response.status(), `${cta.name} should resolve`).toBe(200);
  }

  await expect(page.getByRole("link", { name: "Open PainTracker case study" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "See proof" }).first()).toBeVisible();
  await expect(page.locator('a[href="/contact"]')).toHaveCount(0);
});

test("Global nav uses one buyer-facing vocabulary", async ({ page, request }) => {
  await page.goto("/");
  const nav = page.locator("nav").first();

  for (const link of globalNavLinks) {
    await expect(nav.getByRole("link", { name: link.name })).toHaveAttribute("href", link.href);
    const response = await request.get(link.href, { maxRedirects: 0 });
    expect(response.status(), `${link.name} should resolve`).toBe(200);
  }

  await expect(nav.getByRole("link", { name: "Get a 3-point risk read" })).toHaveAttribute("href", "/trust-risk-read");
});

test("Services comparison routes buyers to distinct review pages", async ({ page, request }) => {
  await page.goto("/services");

  await expect(page.getByText("Which Review Do I Need?")).toBeVisible();
  for (const link of serviceComparisonLinks) {
    await expect(page.getByRole("link", { name: link.name })).toHaveAttribute("href", link.href);
    const response = await request.get(link.href, { maxRedirects: 0 });
    expect(response.status(), `${link.name} should resolve`).toBe(200);
  }
});

test("Projects source order keeps main content before footer", async ({ page }) => {
  await page.goto("/projects");

  const order = await page.evaluate(() => {
    const skip = document.querySelector('a[href="#content"]');
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const h1 = document.querySelector("main h1");
    const footer = document.querySelector("footer");
    const follows = (a: Element | null, b: Element | null) =>
      Boolean(a && b && (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING));

    return {
      skipBeforeHeader: follows(skip, header),
      headerBeforeMain: follows(header, main),
      h1BeforeFooter: follows(h1, footer),
      footerBeforeMain: follows(footer, main),
      h1Text: h1?.textContent?.trim() ?? "",
    };
  });

  expect(order.skipBeforeHeader).toBe(true);
  expect(order.headerBeforeMain).toBe(true);
  expect(order.h1Text).toBe("Projects");
  expect(order.h1BeforeFooter).toBe(true);
  expect(order.footerBeforeMain).toBe(false);
});

test("Footer version data matches /version.json on core routes", async ({ page, request }) => {
  const versionResponse = await request.get("/version.json");
  expect(versionResponse.status()).toBe(200);
  const versionPayload = await versionResponse.json();
  const expectedBuild = versionPayload.commit as string;
  expect(expectedBuild).toBeTruthy();
  expect(versionPayload.matchesFooterBuild).toBe(true);

  for (const route of ["/", "/services", "/proof", "/start-here", "/small-business-trust-cleanup", "/trust-hardening-review", "/trust-risk-read"] as const) {
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
