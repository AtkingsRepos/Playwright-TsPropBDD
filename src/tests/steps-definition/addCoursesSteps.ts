import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";
import { expect } from "@playwright/test";
const { Given, When, Then } = createBdd(test);

Given("I am on the Site Administration page", async ({ siteNavigation, page }) => {
    await siteNavigation.navigateToSiteAdministrationPage();
    await page.waitForLoadState();
  }
);
When("I navigate to Course link", async ({siteAdministrationPage, page }) => {
  await siteAdministrationPage.navigateToCoursesTab();
});
Then("I should be able to add a course", async ({ addCoursePage, page }) => {
  await page.waitForLoadState();
  await addCoursePage.fillAddNewCourseForm(
    "Geometry",
    "Geo",
    "Geo07",
    "Advanced Level Geoetry course"
  );
  await page.waitForTimeout(2000);
});
