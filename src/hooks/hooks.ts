import {
  Browser,
  chromium,
  webkit,
  firefox,
  Page,
  BrowserContext,
} from "@playwright/test";
import { createBdd } from "playwright-bdd";
import {
  Before,
  After,
  AfterStep,
  BeforeStep,
  Status,
  AfterAll,
  BeforeAll,
} from "@cucumber/cucumber";

dotenv.config();
import dotenv from "dotenv";

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async () => {
  // This hook will be executed before all scenarios
  dotenv.config();

  let browserType = process.env["browser"];
  //let browserType = "chrome";
  switch (browserType) {
    case "chrome":
    case "gc":
      browser = await chromium.launch({
        headless: false,
        channel: "chrome",
        args: ["--start-maximized"],
      });
      console.log(`>>>>>BROWSER RUNNING: = CHROME [CHROMIUM]`);
      break;

    case "firefox":
    case "ff":
      browser = await firefox.launch({
        headless: false,
        channel: "firefox",
        args: ["--start-maximized"],
      });
      console.log(`>>>>>BROWSER RUNNING: = FIREFOX [FF]`);
      break;

    case "edge":
    case "msedge":
      browser = await chromium.launch({
        headless: false,
        channel: "msedge",
        args: ["--start-maximized"],
      });
      console.log(`>>>>>BROWSER RUNNING: = EDGE [EDGE]`);
      break;

    case "webkit":
    case "webkit":
      browser = await chromium.launch({
        headless: false,
        channel: "webkit",
        args: ["--start-maximized"],
      });
      console.log(`>>>>>BROWSER RUNNING: = WEBKIT [WEBKIT]`);
      break;

    case "chromium":
    case "chromium":
      browser = await chromium.launch({
        headless: false,
        channel: "chromium",
        args: ["--start-maximized"],
      });
      console.log(`>>>>>BROWSER RUNNING: =CHROMIUM[CHROMIUM]`);
      break;

    default:
      throw new Error(
        `invalid browser type${browserType} is passed ..! please, correct it`
      );
  }
});
Before(async (scenario) => {
  // This hook will be executed before all scenarios
  context = await browser.newContext({
    storageState: "src/helper/auth/admin_auth.json",
    viewport: null,
    javaScriptEnabled: true,
    //recordVideo: { dir: "test-results/videos" },
  });
  const page = await context.newPage();
  console.log(
    `Scenario started at:${
      scenario.pickle.name
    }, ${new Date().toLocaleString()}`
  );

  console.log(`>>>>>${scenario.pickle.name} Test has started....!`);

  //console.log(`>>>>>Launching APP url,${process.env["APP_URL"]!}`);
  console.log(`>>>>>Launching APP url,${scenario.pickle.uri}.....`);
});
BeforeStep(async (scenario) => {
  console.log(`>>>>>${scenario.pickleStep.text} Step has Started....!`);
});
AfterStep(async ({ result }: { result: any }) => {
  const page = await context.newPage();
  // This hook will be executed after all steps, and take a screenshot on step failure
  if (result.status === Status.FAILED) {
    const buffer = await page.screenshot();
    await page.screenshot({
      path: `test-results/report/screenshots/screenshot1.png`,
    });
    console.log(buffer.toString("base64"), "base64:image/png");
    console.log("Screenshot logged");
  }
});

After(async function (scenario) {
  const page = await context.newPage();
  await page.close();
  await context.close();
  console.log(`>>>>>${scenario.pickle.name} has Ended....!`);
  console.log(`>>>>> Scenario has..${scenario.result?.status}....!`);
  console.log(
    `Scenario ended at:${scenario.pickle.name}, ${new Date().toLocaleString()}`
  );
});
AfterAll(async () => {
  await browser.close();
});

export function getPage(): Page {
  return page;
}

export { Before, BeforeAll, After };
