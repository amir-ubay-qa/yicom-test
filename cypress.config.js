const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://dev.app.yicom.xyz',
    watchForFileChanges: false,
    reporter: "mochawesome",
    reporterOptions : {
      "overwrite": false,
      "html": false,
      "json": true
    }
  },
});
