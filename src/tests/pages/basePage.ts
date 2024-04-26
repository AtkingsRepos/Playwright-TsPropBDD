import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager/index.js";
import { expect, Locator, Page } from "@playwright/test";

export default class BasePage {
  protected page: Page;
  protected log:ICreateLog;
  constructor(page: Page,log:ICreateLog) {
    this.page = page;
    this.log = log;
  }
  // Common method to navigate to a URL
  async navigateTo(url: any) {
    await this.page.goto(url);
  }
  // Common method to click an element
  async clickElement(element: Locator) {
    await element.click();
  }
  // Common method to fill out a form field
  async fillFormField(element: Locator, value: string) {
    await element.fill(value);
  }
  // Common method to retrieve text from an element
  async getElementText(element: Locator): Promise<string> {
    return element.innerText();
  }
  // Common method to wait for an element to be visible
  async waitForElementVisible(selector: string) {
    await this.page.waitForSelector(selector, { state: "visible" });
  }
  // Common method to wait for an element to be hidden
  async waitForElementHidden(selector: string) {
    await this.page.waitForSelector(selector, { state: "hidden" });
  }
  // Common method to take a screenshot
  async takeScreenshot(fileName: string) {
    await this.page.screenshot({ path: fileName });
  }
}

// import { Given, When, Then, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
// import { Browser, BrowserContext, Page, chromium,firefox } from "playwright";
// import{expect} from "@playwright/test"

// setDefaultTimeout (1000 * 10 * 2);

// let browser: Browser;
// let context: BrowserContext;
// let page: Page;

// // Before(async function () {
// //     browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] })
// //     context = await browser.newContext({ viewport: null, javaScriptEnabled: true });
// //     page = await context.newPage();

// // });

// // After(async function () {
// //     await page.close();
// //      await context.close();
// //      await browser.close();
// // })
// // // can add more re-usable functions here.
// // export function getPage(): Page{
// //     return page;
// // }
