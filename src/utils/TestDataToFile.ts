import fs from "fs";

// Function to write test data to file
function writeTestDataToFile(testData: any) {
  fs.writeFileSync(
    "tests/testdata/formdata.json",
    JSON.stringify(testData, null, 2)
  );
}

export default writeTestDataToFile;
