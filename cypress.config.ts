import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 390,
  viewportHeight: 844,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000'
  },

  component: {
    specPattern: ['app/**/*.cy.{js,jsx,ts,tsx}', 'components/**/*.cy.{js,jsx,ts,tsx}'],
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
