// // navigation.ts (Main entry point for navigation)
import { Page } from "playwright";
import  HomePage  from "../pages/LandingPage";
import SiteAdministrationPage  from "../pages/siteAdministrationPage";

export default class SiteNavigation {
  constructor(protected page: Page) {
    
  }

  // async navigateToUserHomePage(): Promise<HomePage> {
  //   await this.page.goto("http://localhost/login/index.php");
  //   // Implement login if necessary
  //     await this.page.waitForTimeout(1000);
  //   return new HomePage(this.page);
  // }

  async navigateToHomePage(): Promise<HomePage> {
    // Implement logic to navigate to the home page
    await this.page.goto("http://localhost/login/index.php");
      await this.page.waitForTimeout(1000);
    return new HomePage(this.page);
  }

  async navigateToSiteAdministrationPage(): Promise<SiteAdministrationPage> {
    // Implement logic to navigate to the site administration page
    await this.page.goto("http://localhost/admin/search.php#linkusers");
    await this.page.waitForTimeout(1000);
    return new SiteAdministrationPage(this.page);
  }
}

//In your test scripts, you can then use these methods to navigate between pages easily. For example:

// import { chromium } from "playwright";
// import  Navigation  from "../../tests/pages/";

// (async () => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   const navigation = new Navigation(page);

//   const userHomePage = await navigation.navigateToUserHomePage();
//   await userHomePage.navigateToDashboard();

//   const homePage = await navigation.navigateToHomePage();
//   await homePage.navigateToSettings();

//   const siteAdministrationPage =
//     await navigation.navigateToSiteAdministrationPage();
//   await siteAdministrationPage.navigateToSearch();

//   await browser.close();
// })();