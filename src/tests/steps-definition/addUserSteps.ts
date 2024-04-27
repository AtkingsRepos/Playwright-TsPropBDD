import { createBdd } from "playwright-bdd";
import { test } from "src/tests/fixtures/fixtures";
import { expect } from "@playwright/test";
const { Given, When, Then } = createBdd(test);


Given(
  "I navigate to site administration page link",
  async ({ siteNavigation, page }) => {
    await page.waitForLoadState();
    (await siteNavigation.navigateToSiteAdministrationPage()).navigateToUsers;
  }
);
When("I click on the Add New User link", async ({ addUserPage, page }) => {
  await page.waitForLoadState();
  await addUserPage.clickAddNewUserLink();
});
Then("I should be able to add a new user", async ({ addUserPage, page }) => {
  await page.waitForLoadState();
  await addUserPage.fillAddUserForm(
    "waneson22",
    "Wary@poay09",
    "Wane",
    "Wakuson",
    "wenny_baku@email.com",
    "ASJo34",
    "Oscarsond",
    "Chad",
    "Elegant pixture for the futures"
  );
});
