import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.navigator.ba/#/categories");
    await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "Traži ulicu ili objekat" }).click();
  await page
    .getByRole("textbox", { name: "Traži ulicu ili objekat" })
    .fill("Konzum");
  await page
    .getByRole("textbox", { name: "Traži ulicu ili objekat" })
    .press("Enter");
  await page
    .getByRole("link", { name: "Konzum Grbavička 46, Sarajevo" })
    .click();
    await page.pause();

});
