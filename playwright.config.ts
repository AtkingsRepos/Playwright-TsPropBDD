import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig, cucumberReporter } from "playwright-bdd";
//import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
dotenv.config();

const testDir = defineBddConfig({
  paths: ["**/features/**.feature"],
  require: ["**/steps-definition/**.ts"],
  importTestFrom: "src/tests/fixtures/fixtures.ts",
});
const authFile = "src/playwright/auth/admin_auth.json";
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
    // Setup project
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

    {
      name: "Microsoft Edge",
      use: {
        ...devices["Desktop Edge"],
        storageState: authFile,
        channel: "msedge",
        bypassCSP: true,
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
        // Use prepared auth state.
      },
      // dependencies: ["setup"],
    },

    {
      name: "Google Chrome",
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
      //dependencies: ["setup"],
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        // Use prepared auth state.
        storageState: authFile,
        bypassCSP: true,
        testIdAttribute: "pw-test-id",
        contextOptions: {
          screen: {
            width: 1920,
            height: 1040,
          },
          viewport: {
            width: 1920,
            height: 1040,
          },
        },
        //     // dependencies: ["setup"],
      },
    },
    //// {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //     // Use prepared auth state.
    //     storageState: authFile,
    //   },
    //   //dependencies: ["setup"],
    // },
  ],
  // projects: [
  //   {
  //     name: "chromium",
  //     use: {
  //       ...devices["Desktop Chrome"],
  //       viewport: { width: 1280, height: 720 },
  //     },
  //   },
  //   // {
  //   //   name: "firefox",
  //   //   use: {
  //   //     ...devices["Desktop Firefox"],
  //   //     viewport: { width: 1280, height: 720 },
  //   //   },
  //   // },
  //   {
  //     name: "webkit",
  //     use: {
  //       ...devices["Desktop Safari"],
  //     },
  //   },
  //   {
  //     name: "Microsoft Edge",
  //     use: { ...devices["Desktop Edge"], channel: "msedge" },
  //   },
  //   {
  //     name: "Google Chrome",
  //     use: { ...devices["Desktop Chrome"], channel: "chrome" },
  //   },
  // ],

  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    //trace: "on-first-retry",
    headless: false,
    //viewport: null,//{ width: 1920, height: 1040 },
    actionTimeout: 90000,
    ignoreHTTPSErrors: true,
  },
});
