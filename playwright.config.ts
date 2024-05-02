import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig, cucumberReporter } from "playwright-bdd";
import { testPlanFilter } from "allure-playwright/dist/testplan";
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import dotenv from "dotenv";
import { outputFile } from "fs-extra";
dotenv.config();

const authFile = "src/playwright/auth/admin_auth.json";

const testDir = defineBddConfig({
  paths: ["**/features/**.feature"],
  require: ["**/steps-definition/**.ts"],
  importTestFrom: "src/tests/fixtures/fixtures.ts",
});

export default defineConfig({
  testDir,
   grep: testPlanFilter(),
  reporter: [
      ["line"], ["allure-playwright"],
      ["json", {outputFile: "cucumber-report/report"}],
      ["allure-playwright", { outputFolder: "allure-results" }],
  ],

  fullyParallel: false,
  retries: 0,
  workers: 1,
  use: {
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    //trace: "on-first-retry",
    headless: false,
    //viewport: null,//{ width: 1920, height: 1040 },
    actionTimeout: 10 * 1000,
    ignoreHTTPSErrors: true,
  },
  projects: [
    //Setup project
    //{ name: "setup", testDir: "./", testMatch: /.*\.setup\.ts/ },

    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],

        storageState: authFile,
        bypassCSP: true,
        channel: "chrome",
        testIdAttribute: "pw-test-id",
        contextOptions: {
          screen: {
            width: 1920,
            height: 1040,
          },
        },
        viewport: {
          width: 1920,
          height: 1040,
        },
      },

      // Use prepared auth state.

      //dependencies: ["setup"],
    },
  ],
});
