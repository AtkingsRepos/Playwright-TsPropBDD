import { test as base } from "playwright-bdd";
import LoginPage from "../../tests/pages/loginPage";
import AddCoursePage from "../../tests/pages/addCoursePage";
import AddUserPage from "../../tests/pages/addUserPage";
import SiteNavigation from "../../tests/pages/siteNavigation";
import SiteAdministrationPage from "../../tests/pages/siteAdministrationPage";
import GradesPage from "../../tests/pages/gradesPage";
import LandingPage from "../../tests/pages/LandingPage";
type pages = {
  loginPage: LoginPage;
  gradesPage: GradesPage;
  //homePage: HomePage;
  landingPage: LandingPage;
  addUserPage: AddUserPage;
  addCoursePage: AddCoursePage;
  siteAdministrationPage: SiteAdministrationPage;
  siteNavigation: SiteNavigation;
};

const testPages = base.extend<pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  addCoursePage: async ({ page }, use) => {
    await use(new AddCoursePage(page));
  },
  addUserPage: async ({ page }, use) => {
    await use(new AddUserPage(page));
  },
  siteNavigation: async ({ page }, use) => {
    await use(new SiteNavigation(page));
  },
  siteAdministrationPage: async ({ page }, use) => {
    await use(new SiteAdministrationPage(page));
  },
  gradesPage: async ({ page }, use) => {
    await use(new GradesPage(page));
  },
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
});
export const test = testPages;
export const expect = testPages.expect;
