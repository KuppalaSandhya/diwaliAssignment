const deepEquality = require("./deepEquality");

const testCases = [
  {
    title: "numbers",
    value1: 1,
    value2: 1,
    expectedOutput: true,
  },
  {
    title: "strings",
    value1: "a",
    value2: "a",
    expectedOutput: true,
  },

  {
    title: "emptyArray",
    value1: [],
    value2: [],
    expectedOutput: true,
  },

  {
    title: "array with same length",
    value1: [1],
    value2: [1],
    expectedOutput: true,
  },
  {
    title: "array with different length",
    value1: [1],
    value2: [1, 2],
    expectedOutput: false,
  },
  {
    title: "same Object",
    value1: {a: 1},
    value2: {a: 1},
    expectedOutput: true,
  },
  {
    title: "array in obect",
    value1: {a: [1]},
    value2: {a: [1]},
    expectedOutput: true,
  },
  {
    title: "object in object",
    value1: {a: {b: 1}},
    value2: {a: {b: 1}},
    expectedOutput: true,
  },
  {
    title: "array and object",
    value1: {0: 1},
    value2: [1],
    expectedOutput: false,
  },
  {
    title: "undefined and value",
    value1: {a: undefined},
    value2: {b: 1},
    expectedOutput: false,
  },
  {
    title: "value and undefined",
    value1: {b: 1},
    value2: {a: undefined},
    expectedOutput: false,
  },
];

function printResult(title, expectedResult, actualResult) {
  const isPassed = actualResult === expectedResult;

  const symbol = isPassed ? "✅" : "❌";

  const message = isPassed ? " Passed" : "failed";

  console.log(`${symbol} ${message} : For the ${title}`);
}

for (const testCase of testCases) {
  const acutalResult = deepEquality.isEqual(testCase.value1, testCase.value2);

  printResult(testCase.title, testCase.expectedOutput, acutalResult);
}
