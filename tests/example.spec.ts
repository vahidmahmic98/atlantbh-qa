import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.navigator.ba/#/categories");
  await page.waitForTimeout(1000);
  await page.getByRole("link", { name: " SMJEŠTAJ Hotel, Hostel," }).click();
  await page.waitForTimeout(1000);
  await page.getByRole("link", { name: 'Hotel "Bristol" Fra Filipa' }).click();
  await page.pause();

});
