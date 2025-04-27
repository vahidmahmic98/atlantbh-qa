import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.navigator.ba/#/categories");
  await page.getByText("EN", { exact: true }).click();
  await page.getByText("BS").click();
  await page.getByText("EN", { exact: true }).click();
  await page.pause();
});
