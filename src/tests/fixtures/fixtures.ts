import { test as base } from "playwright-bdd";
import LandingPage from "../../tests/pages/LandingPage";
import AddCoursePage from "../../tests/pages/addCoursePage";
import GradesPage from "../../tests/pages/gradesPage";
import { getPage } from "src/hooks/hooks";
import AddUserPage from "../../tests/pages/addUserPage";
import LoginPage from "../../tests/pages/loginPage";
import SiteAdministrationPage from "../../tests/pages/siteAdministrationPage";
import SiteNavigation from "../../tests/pages/siteNavigation";
import fs from "fs";
import path from "path";

export * from "@playwright/test";
// const {
//   LandingPage,
//   AddCoursePage,
//   GradesPage,
//   LoginPage,
//   SiteAdministrationPage,
//   SiteNavigation,
// } = Pages;

// const createTestFunction = (PageClass) => async ({page}, use) => {
//   await use(new PageClass(page));
// }

export const test = base.extend({
  
  landingPage: async ({ page }, use) => {
    const landingpage = new LandingPage(page);
    await use(landingpage);
  },
  siteAdministrationPage: async ({ page }, use) => {
    const siteadministrationpage = new SiteAdministrationPage(page);
    await use(siteadministrationpage);
  },
  gradesPage: async ({ page }, use) => {
    const gradespage = new GradesPage(page);
    await use(gradespage);
  },
  siteNavigation: async ({ page }, use) => {
    const sitenavigation = new SiteNavigation(page);
    await use(sitenavigation);
  },
  addCoursePage: async ({ page }, use) => {
    const addcoursepage = new AddCoursePage(page);
    await use(addcoursepage);
  },
  loginPage: async ({ page }, use) => {
    const loginpage = new LoginPage(page);
    await use(loginpage);
  },
  addUserPage: async ({ page }, use) => {
    const adduserPage = new AddUserPage(page);
    await use(adduserPage);
  },
});
