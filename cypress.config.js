const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: "cypress-mochawesome-reporter",
  // reporterOptions: {
  //   reportDir: "cypress/reports", // Directory where reports are generated
  //   overwrite: false, // Whether to overwrite existing reports
  //   html: true, // Generate HTML report (true/false)
  //   json: true, // Generate JSON report (true/false)
  // },
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    video: true,
    specPattern: "cypress/integration/*.js",
  },
});
