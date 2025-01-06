import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 30000,
  screenshotOnRunFailure: true,
  reporter: 'cypress-multi-reporters',
  "reporterOptions": {
    // disable overwrite to generate many JSON reports
    "overwrite": false,
    // do not generate intermediate HTML reports
    "html": false,
    // generate intermediate JSON reports
    "json": true
  },
  env: {
    allure: true,
    video: false,
  },
  
  e2e: {
    baseUrl: "https://api.trello.com/",
    chromeWebSecurity: false,
    includeShadowDom: true,
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
    // Para setar o caminho dos testes.
    specPattern: [
      "cypress/e2e/features/**/*.cy.ts",
      "*_tests.cy.ts"
   ],
  },
});