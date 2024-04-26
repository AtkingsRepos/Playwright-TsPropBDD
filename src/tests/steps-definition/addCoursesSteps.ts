// import {
//   Given,
//   When,
//   Then,
//   Before,
//   After,
//   setDefaultTimeout,
// } from "@cucumber/cucumber";
// import { expect } from "@playwright/test";
// import { getPage } from "../../hooks/hooks";
// //import { Env } from "../../config/env";
// import SiteAdministrationPage from "../../tests/pages/siteAdministrationPage";
// import SiteNavigation from "../pages/siteNavigation";
// import AddCoursePage from "../pages/addCoursePage";

import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";
import { expect } from "@playwright/test";
import dotenv from "dotenv";
import addCoursePage from "../pages/addCoursePage";
dotenv.config();
const { Given, When, Then } = createBdd(test);

Given(
  "I am on the Site Adminstration page",
  async function ({ siteNavigation, page }) {
    await siteNavigation.navigateToSiteAdministrationPage();

    // await getPage().waitForTimeout(1000);
  }
);
When("I navigate to Course link", async ({ siteAdministrationPage, page }) => {
  await siteAdministrationPage.navigateToCoursesTab();
});
Then("I should be able to add a course", async ({ addCoursePage, page }) => {
  await addCoursePage.fillAddNewCourseForm(
    "Geometry",
    "Geo",
    "Geo07",
    "Advanced Level Geoetry course"
  );
  await page.waitForTimeout(1000);
});
