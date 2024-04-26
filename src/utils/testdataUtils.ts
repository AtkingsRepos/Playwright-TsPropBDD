
import fs from "fs";
import Chance from "chance";

// Create a new Chance instance
const chance = new Chance();

// Function to generate test data
function generateTestData() {
  const testData = {
    day: chance.integer({ min: 1, max: 28 }).toString(),
    month: chance.integer({ min: 1, max: 12 }).toString(),
    year: chance.year({ min: 1900, max: 2000 }).toString(),
    firstname: chance.first(),
    lastname: chance.last(),
    email: chance.email(),
    password: chance.string({ length: 10 }),
    companyname: chance.company(),
  };

  // Write the generated test data to a JSON file
  fs.writeFileSync(
    "tests/testdata/formdata.json",
    JSON.stringify(testData, null, 2)
  );

  // Return the generated test data
  return testData;
}

export default generateTestData;















// import fs from "fs";
// import Chance from "chance";

// // Create a new Chance instance
// const chance = new Chance();

// // Generate random data
// const testData = {
//   day: chance.integer({ min: 1, max: 28 }).toString(),
//   month: chance.integer({ min: 1, max: 12 }).toString(),
//   year: chance.year({ min: 1900, max: 2000 }).toString(),
//   firstname: chance.first(),
//   lastname: chance.last(),
//   email: chance.email(),
//   password: chance.string({ length: 10 }),
//   companyname: chance.company(),
// };

// // Write the generated test data to a JSON file
// //fs.writeFileSync("./formdata.json", JSON.stringify(testData, null, 2));
// fs.writeFileSync("tests/testdata/formdata.json", JSON.stringify(testData, null, 2));

// //console.log("Test data generated and saved to testdata.json file.", testData);
// export default testData;
