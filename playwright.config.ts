import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig, cucumberReporter } from "playwright-bdd";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
dotenv.config();

const testDir = defineBddConfig({
  paths: ["**/features/**.feature"],
  require: ["**/steps-definition/**.ts"],
  importTestFrom: "src/tests/fixtures/fixtures.ts",
});

export default defineConfig({
  testDir,
  reporter: [
    cucumberReporter("html", {
      outputFile: "cucumber-report/report.html",
    }),
  ],
  fullyParallel: false,
  retries: 0,
  workers: 1,

  projects: [
    // {
    //   name: "chromium",
    //   use: {
    //     ...devices["Desktop Chrome"],
    //     viewport: { width: 1280, height: 720 },
    //   },
    // },
    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //     viewport: { width: 1280, height: 720 },
    //   },
    // },
    // {
    //   name: "webkit",
    //   use: {
    //     ...devices["Desktop Safari"],
    //   },
    // },
    // {
    //   name: "Microsoft Edge",
    //   use: { ...devices["Desktop Edge"], channel: "msedge" },
    // },
    {
      name: "Google Chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],

  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    //trace: "on-first-retry",
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    
  },
});
