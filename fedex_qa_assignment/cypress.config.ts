import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(config, {
      typescript: require.resolve("typescript"),
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  videosFolder: 'cypress/videos',
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 5000,
  reporter: 'mochawesome',
  retries: {
    runMode: 2,
    openMode: 0,
  },
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixtures',
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});