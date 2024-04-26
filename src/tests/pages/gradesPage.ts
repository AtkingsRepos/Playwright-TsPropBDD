import { Page, Locator } from "@playwright/test";
//import BasePage from "../../tests/pages/basePage";
//import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager/index.js";

export default class GradesPage {
  protected readonly tabGrades: Locator;
  protected readonly linkLetters: Locator;
  protected readonly buttonEdit: Locator;
  protected readonly buttonSaveChanges: Locator;
  protected readonly alertMessage: Locator;

  constructor(protected page: Page) {
    this.page = page;

    this.tabGrades = page.getByRole("tab", { name: 'Grades Grades" / "' });
    this.linkLetters = page.getByRole("link", { name: "Letters" });
    this.buttonEdit = page.getByRole("button", { name: "Edit" });
    this.buttonSaveChanges = page.getByRole("button", { name: "Save changes" });
    this.alertMessage = page.locator("role=alert");
  }

  async goToAdminSearchPage(): Promise<void> {
    await this.page.goto("http://localhost/admin/search.php");
  }

  async clickGradesTab(): Promise<void> {
    console.log(">>> Iam on Grades Tab");
    await this.tabGrades.click();
  }

  async clickLettersLink(): Promise<void> {
    await this.linkLetters.click();
  }

  async clickEditButton(): Promise<void> {
    await this.buttonEdit.click();
  }

  async clickSaveChangesButton(): Promise<void> {
    await this.buttonSaveChanges.click();
  }

  async getAlertMessageText(): Promise<string> {
    const alert = await this.alertMessage.innerText();
    return alert.trim();
  }

  async isAlertMessageDisplayed(): Promise<boolean> {
    return await this.alertMessage.isVisible();
  }
}
