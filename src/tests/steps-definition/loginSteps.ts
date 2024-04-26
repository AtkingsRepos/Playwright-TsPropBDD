// // // @ts-check

// // // @ts-check

// import {
//   Given,
//   When,
//   Then,
//   Before,
//   After,
//   setDefaultTimeout,
// } from "@cucumber/cucumber";
// import { expect } from "@playwright/test";
// import { getPage } from "../../hooks/hooks";
// import LoginPage from "../pages/loginPage"; // Import your page object
// import AddUserPage from "../pages/addUserPage";
// import { Env } from "../../config/env";
// import SiteNavigation from "../pages/siteNavigation";
// import { faker } from "@faker-js/faker";
// import dotenv from "dotenv";
// dotenv.config();

// const username = process.env["ADMIN_USER1"];
// const password = process.env["ADMIN_USER1_PASSWORD"];

// const URL = process.env["APP_URL"];
// const ENV = process.env;

// let loginPage: LoginPage;

// Given("As a User, I navigate to the moodle login webpage", async function () {
//   const loginPage = new LoginPage(getPage());
//   await loginPage.navigateToLoginPage(URL);  //Going to the BASE URL has now been moved to the before Hooks
//   //this.log(">>>>> Test Started")

//   this.log(`>>>>Test Execution Started at:  ${new Date().toLocaleString()}`);
// });

// When("I enter my credentials", async function () {
//   const loginPage = new LoginPage(getPage());
//     await loginPage.adminLogin();
// //     EnterAdminLoginCredentials(
// //     Env.ADMIN_USER1,
// //     Env.ADMIN_USER1_PASSWORD
// //   );
//   await getPage().context().storageState({ path: "authFile.json" });
// });

// Then("I should be logged in", async function () {
//   const loginPage = new LoginPage(getPage());
//   await loginPage.loggInUserVerification(Env.ADMIN_USER1);
//   const pagetitle = await loginPage.getPageTitle();
//   await expect(pagetitle).toEqual("Dashboard | Taribo-Elixir");
//   this.log(`>>>>>>>>>page title is :",${pagetitle} `);

//   // const text = node.textContent;
// });
// Then("I can log out successfully", async function () {
//   const loginPage = new LoginPage(getPage());
//   await loginPage.logout();
//   //this.log(">>>>> Test Ended");
//     this.log(`>>>>Test Execution Ended at:  ${new Date().toLocaleString()}`);
//     await getPage().close();
//     await getPage().close();
//  });
