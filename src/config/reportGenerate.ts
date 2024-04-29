const multipleCucumberHtmlReporter = require("multiple-cucumber-html-reporter");

const executionStartTime: any = new Date(); // Get the current date and time
const executionEndTime: any = new Date();

multipleCucumberHtmlReporter.generate({
  jsonDir: "cucumber-report/report.json",
  reportPath: "cucumber-report/",
  reportName: "Playwright Automation Test Report",
  displayDuration: true,
  displayReportTime: true,
  openReportInBrowser: false,
  useCDN: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "CHROME: 123.0 (64-bit)",
    },

    device: "Virtual Machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },

  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      {
        label: "Execution Start Date: ",
        value: executionStartTime.toDateString(),
      }, // Convert the Date object to a string
      {
        label: "Execution End Date:",
        value: executionEndTime.toDateString(),
      }, // Convert the Date object to a string
      // Display total execution time duration
    ],
  },
});
