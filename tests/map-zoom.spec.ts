import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.navigator.ba/#/categories");
  await page.getByRole("link", { name: "+" }).click();
    await page.waitForTimeout(1000);
  await page.getByRole("link", { name: "-", exact: true }).click();
    await page.waitForTimeout(1000);
  await page.getByRole("link", { name: "+" }).click();
    await page.waitForTimeout(1000);
  await page.getByRole("link", { name: "+" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole("link", { name: "-", exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole("link", { name: "-", exact: true }).click();
  await page.pause();
});
