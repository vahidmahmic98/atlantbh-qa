import { test, expect } from "@playwright/test";

test("search non-existent location", async ({ page }) => {
  await page.goto("https://www.navigator.ba/#/categories");
  await page.waitForTimeout(1000);

  const searchInput = page.getByRole("textbox", {
    name: "Traži ulicu ili objekat",
  });
  await searchInput.click();
  await searchInput.fill("testtesttest");
  await searchInput.press("Enter");

  await page.pause();
});
