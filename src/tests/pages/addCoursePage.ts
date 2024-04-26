import { Page, Locator } from "@playwright/test";
import BasePage from "../../tests/pages/basePage";
import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager/index.js";

export default class AddCoursePage {
  protected readonly addCourseTab: Locator;
  protected readonly addNewCourseLink: Locator;
  protected readonly courseFullNameField: Locator;
  protected readonly courseShortNameField: Locator;
  protected readonly courseIDField: Locator;
  protected readonly courseDescription: Locator;
  protected readonly saveAndDisplayButton: Locator;

  constructor(
    protected page: Page) {
    this.page = page;
    this.addCourseTab = page.getByRole("tab", { name: 'Courses Courses" / "' });
    this.addNewCourseLink = page.getByRole("link", {
      name: "Add a new course",
    });
    this.courseFullNameField = page.getByLabel("Course full name", {
      exact: true,
    });
    this.courseShortNameField = page.getByLabel("Course short name", {
      exact: true,
    });
    this.courseIDField = page.getByLabel("Course ID number", { exact: true });

    this.courseDescription = page
      .frameLocator('iframe[title="Rich text area"]')
      .getByLabel("Rich text area. Press ALT-0");
    this.saveAndDisplayButton = page.getByRole("button", {
      name: "Save and display",
    });
  }

  async clickAddCourseTab(): Promise<void> {
    await this.addCourseTab.click();
  }
  async clickAddNewCourseLink(): Promise<void> {
    await this.addNewCourseLink.click();
  }

  async fillCourseFullName(fullName: string): Promise<void> {
    await this.courseFullNameField.fill(fullName);
  }

  async fillCourseShortName(shortName: string): Promise<void> {
    await this.courseShortNameField.fill(shortName);
  }

  async fillCourseID(courseID: any) {
    await this.courseIDField.fill(courseID);
  }
  async fillCourseDescription(text: string): Promise<void> {
    await this.courseDescription.fill(text);
  }

  async clickSaveAndDisplayButton(): Promise<void> {
    await this.saveAndDisplayButton.click();
  }
  async fillAddNewCourseForm(
    courseName: any,
    shortname: any,
    courseID: any,
    courseDesciption: any
  ) {
    await this.clickAddNewCourseLink();
    await this.fillCourseFullName(courseName);
    await this.fillCourseShortName(shortname);
    await this.fillCourseID(courseID);
    await this.fillCourseDescription(courseDesciption);
    await this.clickSaveAndDisplayButton();
  }
}
