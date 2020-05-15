const fs = require("fs");
const moment = require("moment");
const { camelCase, kebabCase, startCase } = require("lodash");

const website = process.argv[2];
const camelCaseSolutionName = camelCase(process.argv[3]);
const kebabCaseSolutionName = kebabCase(process.argv[3]);
const startCaseSolutionName = startCase(process.argv[3]);

const helpMessage = `Example usage:

npm run new-solution leetcode problem-name
`;

if (!website) {
  console.error("Missing required website name\n");
  console.log(helpMessage);
  process.exit(1);
}

if (!["hackerrank", "leetcode"].includes(website)) {
  console.error("Invalid website name\n");
  console.log(helpMessage);
  process.exit(1);
}

if (!camelCaseSolutionName || !kebabCaseSolutionName || !startCaseSolutionName) {
  console.error("Missing required solution name\n");
  console.log(helpMessage);
  process.exit(1);
}

const solutionFile = `
// ${moment().format("MMMM D, YYYY")}
// TODO replace with link

const ${camelCaseSolutionName} = () => {};

module.exports = { ${camelCaseSolutionName} };
`.trim();

const testFile = `
const { ${camelCaseSolutionName} } = require("./${kebabCaseSolutionName}");

describe("${camelCaseSolutionName}", () => {
  test("Example test case 1", () => {});
});
`.trim();

const readmeFile = `
## Problem

[${startCaseSolutionName}]()

## Solution
`.trim();

const dirName = `./${website}-solutions/${kebabCaseSolutionName}`;

if (fs.existsSync(dirName)) {
  console.error("A solution with that name already exists\n");
  process.env(1);
}

fs.mkdirSync(dirName);
fs.writeFileSync(`${dirName}/${kebabCaseSolutionName}.js`, solutionFile);
fs.writeFileSync(`${dirName}/${kebabCaseSolutionName}.test.js`, testFile);
fs.writeFileSync(`${dirName}/README.md`, readmeFile);

console.log(`Successfully created a new solution directory for ${kebabCaseSolutionName}!`);
