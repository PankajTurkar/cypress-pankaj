const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      numTestsKeptInMemory = 50
    },
    specPattern: "cypress/integration/examples/*.js",
    //specPattern: "experimentalMemoryManagement : true"
    
  },
});
