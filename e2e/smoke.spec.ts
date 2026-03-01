import { test, expect } from "@playwright/test";

const routes = ["/", "/projects", "/proof", "/writing", "/contact"] as const;

for (const route of routes) {
  test(`Route ${route} loads successfully`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);

    const errorOverlay = page.locator("nextjs-portal");
    await expect(errorOverlay).toHaveCount(0);

    await expect(page).toHaveTitle(/CrisisCore/i);
  });
}
