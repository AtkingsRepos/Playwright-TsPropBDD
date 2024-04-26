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

import SiteNavigation from "../pages/siteNavigation";
import SiteAdministrationPage from "../pages/siteAdministrationPage";
import AddUserPage from "../pages/addUserPage";

Given("I navigate to site administration page link", async function () {
  const siteNavigation = new SiteNavigation(getPage());
  (await siteNavigation.navigateToSiteAdministrationPage()).navigateToUsers();
  // const siteAdministrationPage = new SiteAdministrationPage(getPage());
  // await siteAdministrationPage.navigateToUsers();
});
When("I click on the Add New User link", async function(){
    const addusers = new AddUserPage(getPage(), this.log);
  await addusers.clickAddNewUserLink();
});
Then("I should be able to add a new user", async function () {
  const addusers = new AddUserPage(getPage(),this.log);
  await addusers.fillAddUserForm(
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
