import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 30000,
  screenshotOnRunFailure: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    "reportDir": "cypress/reports/mochawesome-report",
    "overwrite": false,
    "html": false,
    "json": true,
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