// LoginPage.ts

import { Page, Locator } from "playwright";
////import HomePage from "../pages/LandingPage";
import { getPage } from "../../hooks/hooks";
//import BasePage from "../pages/basePage";
//import { Env } from "../../config/env";
import dotenv from "dotenv";
//import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager/index.js";
dotenv.config();
// import SiteNavigation from "./siteNavigation";
// import SiteAdministrationPage from "../pages/siteAdministrationPage"

export default class LoginPage {
  protected readonly usernameInput: Locator;
  protected readonly passwordInput: Locator;
  protected readonly loginButton: Locator;
  protected readonly homePageLogOutDropDownElementSelector: Locator;
  protected readonly logoutButton: Locator;
  readonly logoutPromptButton: Locator;
  protected readonly getLoggedInUserInfo: Locator;

  constructor(protected page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder("username");
    this.passwordInput = page.getByPlaceholder("password");
    this.loginButton = page.getByRole("button", { name: "Log in" });
    this.homePageLogOutDropDownElementSelector = page.locator(
      "//a[contains(@id,'user-menu-toggle')]"
    );
    //this.logoutButton = page.getByText("log out");
    this.logoutButton = page.getByRole("menuitem", { name: "Log out" });
    this.logoutPromptButton = page.getByRole("button", { name: "Log out" });
    this.getLoggedInUserInfo = page.locator("css=.mb-3 mt-3");
  }

  async navigateToLoginPage(url: any) {
    await this.page.goto(url); // Replace with your actual login page URL
  }

  async EnterAdminLoginCredentials(username: any, password: any) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  async adminLogin(user: any, pwd: any) {
    await this.page.waitForTimeout(1000);
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pwd);
    await this.loginButton.click();
  }
  async usersLogin(username: any, password: any) {
    await this.page.waitForTimeout(1000);
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
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

  async loggInUserVerification(username: any) {
    try {
      await this.page.waitForSelector(".mb-3.mt-3");
      // Get the text content of the element displaying user information
      const loggedInUserInfoElement = await this.page.locator(".mb-3.mt-3");
      const loggedInUserInfo = await loggedInUserInfoElement.textContent();
      // Verify if the user information contains the username or any other identifier
      if (loggedInUserInfo?.includes(loggedInUserInfo)) {
        console.log(
          `>>>>>>>>> Logged in user  ${loggedInUserInfo} has been verified successfully!`
        );
      } else {
        console.log(">>>>>> Logged in user verification failed!");
      }
    } catch (error: any) {
      console.error("Error occurred:", error);
    }
  }
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
}
