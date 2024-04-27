import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig, cucumberReporter } from "playwright-bdd";
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
  retries: 1,
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
    // {
    //   name: "webkit",
    //   use: {
    //     ...devices["Desktop Safari"],
    //     // Use prepared auth state.
    //     storageState: authFile,
    //     bypassCSP: true,
    //     testIdAttribute: "pw-test-id",
    //     contextOptions: {
    //       screen: {
    //         width: 1280,
    //         height: 720,
    //       },
    //       viewport: {
    //         width: 1280,
    //         height: 720,
    //       },
    //     },
    //     //     // dependencies: ["setup"],
    //   },
    // },
  ],
});
