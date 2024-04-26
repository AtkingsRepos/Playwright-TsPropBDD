// userHomePage.ts
import { Page, Locator } from "@playwright/test";

export default class HomePage {
  protected readonly dashboardPageLink: Locator;
  protected readonly myCoursesPageLink: Locator;
  protected readonly siteAdministrationPagelink: Locator;
  protected readonly homePageLink: Locator;
  protected readonly settingsLink: Locator;
  protected readonly ParticipantsPageLink: Locator;
  protected readonly reportspageLink: Locator;
  protected readonly questionBankPageLink: Locator;
  protected readonly messagePanelblob: Locator;
  protected readonly setEditMode: Locator;
  protected readonly userProfileMenu: Locator;
  protected readonly showNotificationBar: Locator;
  protected readonly loginButton: Locator;
  protected readonly homePageLogOutDropDownElementSelector: Locator;
  protected readonly logoutButton: Locator;

  constructor(protected page: Page) {
    this.settingsLink = page.getByRole("menuitem", { name: "Settings" });
    this.ParticipantsPageLink = page.getByRole("menuitem", {
      name: "Participants",
    });
    this.reportspageLink = page.getByRole("menuitem", { name: "Reports" });
    this.questionBankPageLink = page.getByRole("menuitem", {
      name: "Question bank",
    });
    this.showNotificationBar = page.getByLabel("Show notification window with");
    this.messagePanelblob = page.getByRole("button", {
      name: "Toggle messaging drawer",
    });
    this.userProfileMenu = page.getByLabel("User menu");
    this.setEditMode = page.getByLabel("Edit mode");
    this.homePageLink = page.getByRole("menuitem", { name: "Home" });
    this.dashboardPageLink = page.getByRole("menuitem", { name: "Dashboard" });
    this.myCoursesPageLink = page.getByRole("menuitem", { name: "My courses" });
    this.siteAdministrationPagelink = page.getByRole("menuitem", {
      name: "Site administration",
    });
    this.loginButton = page.getByRole("button", { name: "Log in" });
    this.homePageLogOutDropDownElementSelector = page.locator(
      "//a[contains(@id,'user-menu-toggle')]"
    );
    this.logoutButton = page.getByRole("menuitem", { name: "Log out" });
  }

  async navigateToDashboard(): Promise<void> {
    await this.dashboardPageLink.click();
  }
  async navigateToMyCourses(): Promise<void> {
    await this.myCoursesPageLink.click();
  }
  async navigateToSiteAdministration(): Promise<void> {
    await this.siteAdministrationPagelink.click();
  }
  async navigateToSettings(): Promise<void> {
    await this.settingsLink.click();
  }
  async navigateToParticipants(): Promise<void> {
    await this.ParticipantsPageLink.click();
  }
  async navigateToReports(): Promise<void> {
    await this.reportspageLink.click();
  }
  async navigateToQuestionBank(): Promise<void> {
    await this.questionBankPageLink.click();
  }
  async checkEditModeToON(): Promise<void> {
    await this.setEditMode.click();
  }

  async LogIN(): Promise<void> {
    await this.loginButton.click();
  }
  async navigateToUserProfile(): Promise<void> {
    await this.userProfileMenu.click();
  }
  async logout() {
    await this.page.waitForTimeout(1000);
    await this.homePageLogOutDropDownElementSelector.click();
    await this.page.waitForTimeout(500);
    console.log(`>>>>>>>>>> clicking ${this.logoutButton} web element`);
    await this.logoutButton.click();
    //await this.page.click(`text=${this.loginButton}`);
    console.log(
      `>>>>>>>>> the correct web element " ${this.logoutButton} " has been clicked succesfully`
    );
  }
}
