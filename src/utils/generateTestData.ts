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

  return testData;
}

export default generateTestData;
