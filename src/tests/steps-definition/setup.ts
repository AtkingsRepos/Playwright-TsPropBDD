// import { createBdd } from "playwright-bdd";
// import { test } from "src/tests/fixtures/fixtures";
// import { expect } from "@playwright/test";
// import { allure } from "allure-playwright";
// import { Severity } from "allure-js-commons";
// import dotenv from "dotenv";
// dotenv.config();
// const { Given, When, Then } = createBdd(test);

// const username = process.env["ADMIN_USER1"];
// const password = process.env["ADMIN_USER1_PASSWORD"];
// const URL = process.env["APP_URL"];

// const authFile = "src/playwright/auth/admin_auth.json";

// Given(
//   "As a User, I navigate to the moodle login webpage",
//   async ({ loginPage, page }) => {
//     await loginPage.navigateToLoginPage(URL); //Going to the BASE URL has now been moved to the before Hooks
//     //this.log(">>>>> Test Started")
//     console.log(
//       `>>>>Test Execution Started at:  ${new Date().toLocaleString()}`
//     );
//   }
// );

// //When("I enter my credentials", async ({ loginPage, page }) => {
//   //await page.getByRole("button", { name: "Log out" }).click();
//   await loginPage.adminLogin(username, password);
//   await page.context().storageState({ path: authFile });
// });
// // When("I enter my credentials", async function () {

// //   const loginPage = new LoginPage(getPage(), this.log);
// //   await loginPage.adminLogin(username, password);
// //   await getPage()
// //     .context()
// //     .storageState({ path: "src/helper/auth/admin_auth.json" });
// //  }
// // );

// Then("I should be logged in", async ({ loginPage, page }) => {
//   await loginPage.loggInUserVerification(username);
//   const pagetitle = await loginPage.getPageTitle();
//   await expect(pagetitle).toEqual("Dashboard | Taribo-Elixir");
//   await allure.severity(Severity.CRITICAL);
//   console.log(`>>>>>>>>>page title is :",${pagetitle} `);
//   console.log(">>>>>>>> Thanks !!!!!");

//   // const text = node.textContent;
// });
// // Then("I can log out successfully", async function () {
// //   const loginPage = new LoginPage(getPage(), this.log);
// //   await loginPage.logout();
// //   //this.log(">>>>> Test Ended");
// //   this.log(`>>>>Test Execution Ended at:  ${new Date().toLocaleString()}`);
// //   await getPage().close();
// //   //await getPage().close();
// // });
