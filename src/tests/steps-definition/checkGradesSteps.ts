import {
  Given,
  When,
  Then,
  Before,
  After,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import { Page, expect } from "@playwright/test";
import { getPage } from "../../hooks/hooks";
import GradePage from "../../tests/pages/gradesPage";
import SiteNavigation from "../pages/siteNavigation";
import SiteAdministrationPage from "../pages/siteAdministrationPage";

Given("I am on the grades tab", async function () {
  this.attach(">>>>>>>:Clicking Grades Link Page>>>>>>");
  const siteNavigation = new SiteNavigation(getPage());
  (await siteNavigation.navigateToSiteAdministrationPage()).navigateToGrades();
  this.attach(
    ">>>>>>>:Clicked on Grades Link Page and navigated to Grades>>>>>>"
  );
});
When("I go to grades setting", async function () {
  const gradePage = new GradePage(getPage(), this.attach);
  this.attach(">>>>>>>:Clicking on Grades Tab>>>>>>");
  await gradePage.clickGradesTab();
  this.attach(
    ">>>>>>>:Clicked on Grades Tab and navigating letters link>>>>>>"
  );
  await gradePage.clickLettersLink();
  this.attach(">>>>>>>:Clicked on leter link>>>>>>");
  this.attach(">>>>>>>:Clicking  on Edit button>>>>>>");
  await gradePage.clickEditButton();
  this.attach(
    ">>>>>>>:Clicked on Edit button and navigating to save changes>>>>>>"
  );
});
Then("I should edit grades,save the changes", async function () {
  const gradePage = new GradePage(getPage(), this.attach);
  await gradePage.clickSaveChangesButton();
  this.attach(">>>>>>>:Clicked on save button>>>>>>");
  console.log(">>>>>>>>>", await gradePage.isAlertMessageDisplayed());
  const expectedText =
    "The default grade letters are currently overridden.\n×\nDismiss this notification";
  console.log(">>>>>>>>>>expected Text:", expectedText);
  const Actual = await gradePage.getAlertMessageText();
  console.log(">>>>>>>>>>Actual Text  :  ", Actual);
  expect(expectedText).toEqual(Actual);
});
//"The default grade letters are currently overridden. × Dismiss this notification";
