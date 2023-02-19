const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "viewportWidth": 1280,
  "viewportHeight": 1000,
  "pageLoadTimeout": 120000,
});
