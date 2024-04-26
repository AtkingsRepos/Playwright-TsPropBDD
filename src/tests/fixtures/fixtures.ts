import { test as base } from "playwright-bdd";
import LandingPage from "../pages/LandingPage";
import AddCoursePage from "../pages/addCoursePage";
import GradesPage from "../pages/gradesPage";
import LoginPage from "../pages/loginPage";
import SiteAdministrationPage from "../pages/siteAdministrationPage";
import SiteNavigation from "../pages/siteNavigation";

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
  siteadministrationpage: async ({ page }, use) => {
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
});
