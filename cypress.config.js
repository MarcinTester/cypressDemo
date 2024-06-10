const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    video: true,
    specPattern: "cypress/integration/*.js",
  },
  retries: {
    runMode: 1,
    openMode: 1,
  },
});
