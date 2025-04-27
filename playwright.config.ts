const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests", // Folder gde će se nalaziti tvoji testovi
  retries: 1, // Pokušaji ponovnog pokretanja za neuspele testove
  reporter: "html", // Opcionalno, postavljanje HTML izveštaja
  use: {
    headless: true, // Pokreće testove u headless modu
    viewport: { width: 1940, height: 1215 },
    ignoreHTTPSErrors: true,
  },
});
