// // siteAdministrationPage.ts
import { Page, Locator } from "@playwright/test";
import { getPage } from "../../hooks/hooks";

export default class SiteAdministrationPage {
  protected readonly siteAdminPageLink: Locator;
  protected readonly usersPageLink: Locator;
  protected readonly addCourseTab: Locator;
  protected readonly apearancePageLink: Locator;
  protected readonly gradesPageLink: Locator;
  protected readonly generalPageLink: Locator;
  protected readonly pluginsPageLink: Locator;
  protected readonly serverPageLink: Locator;
  protected readonly reportsPageLink: Locator;
  protected readonly developmPageLink: Locator;
  protected readonly searchPageLink: Locator;

  constructor(private page: Page) {
    this.addCourseTab = page.getByRole("tab", {
      name: 'Courses Courses" / "',
    });
    this.siteAdminPageLink = page.getByRole("menuitem", {
      name: "Site administration",
    });
    this.usersPageLink = page.getByRole("tab", { name: 'Users Users" / "' });
    this.generalPageLink = page.getByRole("tab", {
      name: 'General General" / "',
    });
    this.gradesPageLink = page.getByRole("tab", { name: 'Grades Grades" / "' });
    this.pluginsPageLink = page.getByRole("tab", {
      name: 'Plugins Plugins" / "',
    });
    this.apearancePageLink = page.getByRole("tab", {
      name: 'Appearance Appearance" / "',
    });

    this.serverPageLink = page.getByRole("tab", { name: 'Server Server" / "' });
    this.reportsPageLink = page.getByRole("tab", {
      name: 'Reports Reports" / "',
    });
    this.developmPageLink = page.getByRole("tab", {
      name: 'Development Development" / "',
    });
    this.searchPageLink = page.getByRole("textbox", { name: "Search" });
  }

  async navigateToCoursesTab(): Promise<void> {
    await this.addCourseTab.click();
  }
  async navigateToSearch(text: string) {
    await this.searchPageLink.fill(text);
  }
  async navigateToGeneral(): Promise<void> {
    await this.generalPageLink.click();
  }
  async navigateToUsers(): Promise<void> {
    await this.usersPageLink.click();
  }
  async navigateToGrades() {
    await this.gradesPageLink.click();
  }
  async navigateToPlugins() {
    await this.pluginsPageLink.click();
  }
  async navigateToApearance() {
    await this.apearancePageLink.click();
  }
  async navigateToServer() {
    await this.serverPageLink.click();
  }
  async navigateToReports() {
    await this.reportsPageLink.click();
  }

  // Add methods for other sublinks similarly...
}
