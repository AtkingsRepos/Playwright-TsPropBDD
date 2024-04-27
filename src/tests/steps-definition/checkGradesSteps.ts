import { createBdd } from "playwright-bdd";
import { getPage } from "../../hooks/hooks";
import { test } from "../fixtures/fixtures";
import { expect } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();
const { Given, When, Then,Before,After, BeforeAll } = createBdd(test);
const username = process.env["ADMIN_USER1"];
const password = process.env["ADMIN_USER1_PASSWORD"];
const URL = process.env["APP_URL"];


Given("I am on the grades tab", async ({siteNavigation,loginPage, page }) => {
  console.log(">>>>>>>:Clicking Grades Link Page>>>>>>");
  await siteNavigation.navigateToSiteAdministrationPage().navigateToGrades;
  console.log(
    ">>>>>>>:Clicked on Grades Link Page and navigated to Grades>>>>>>"
  );
   //await loginPage.adminLogin(username, password);
});
When("I go to grades setting", async ({ gradesPage, page }) => {
  await page.waitForLoadState();
  console.log(">>>>>>>:Clicking on Grades Tab>>>>>>");
  await gradesPage.clickGradesTab();
  console.log(
    ">>>>>>>:Clicked on Grades Tab and navigating letters link>>>>>>"
  );
  await gradesPage.clickLettersLink();
  console.log(">>>>>>>:Clicked on leter link>>>>>>");
  console.log(">>>>>>>:Clicking  on Edit button>>>>>>");
  await gradesPage.clickEditButton();
  console.log(
    ">>>>>>>:Clicked on Edit button and navigating to save changes>>>>>>"
  );
});
Then("I should edit grades,save the changes", async ({ gradesPage, page }) => {
  await page.waitForLoadState();
  await gradesPage.clickSaveChangesButton();
  console.log(">>>>>>>:Clicked on save button>>>>>>");
  console.log(">>>>>>>>>", await gradesPage.isAlertMessageDisplayed());
  const expectedText =
    "The default grade letters are currently overridden.\n×\nDismiss this notification";
  console.log(">>>>>>>>>>expected Text:", expectedText);
  const Actual = await gradesPage.getAlertMessageText();
  console.log(">>>>>>>>>>Actual Text  :  ", Actual);
  expect(expectedText).toEqual(Actual);
});
//"The default grade letters are currently overridden. × Dismiss this notification";
