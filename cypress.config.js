const { defineConfig } = require("cypress");
module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    videoOnFailOnly: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    video: true,
    specPattern: "cypress/integration/ui/*.js",
    baseUrl: "https://www.saucedemo.com/",
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
  },
  retries: {
    runMode: 1,
  },
});
