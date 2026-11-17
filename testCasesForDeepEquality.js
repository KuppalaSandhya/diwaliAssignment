const deepEquality = require("./deepEquality");

function isTestPassed(title, expectedResult, value1, value2) {
  const actualResult = deepEquality.isEqual(value1, value2);
  const isPassed = actualResult === expectedResult;
  const symbol = isPassed ? "✅" : "❌";

  console.log(`${symbol} | ${title}`);
}

function testBooleans() {
  isTestPassed("both false should be equal", true, false, false);
  isTestPassed("both true should be equal", true, true, true);
  isTestPassed("false and true should not be equal", false, true, false);
  isTestPassed("true and false should not be equal", false, true, false);
}

function testNumbers() {
  isTestPassed("same positive numbers should be equal", true, 5, 5);
  isTestPassed("diff positive numbers should not be equal", false, 5, 10);
  isTestPassed("same negative numbers should be equal", true, -5, -5);
  isTestPassed("diff negative numbers should not be equal", false, -5, -10);
  isTestPassed("pos & neg numbers should not be equal", false, 5, -10);
}

function testStrings() {
  isTestPassed("same strings should be equal", true, "sandhya", "sandhya");
  isTestPassed("different strings should not be equal", false, "a", "b");
}

function testArrays() {
  isTestPassed("empty arrays should be equal", true, [], []);
  isTestPassed("diff lengths array should not be equal", false, [1], []);
  isTestPassed("sameLengths array should be equal", true, [2, 3], [2, 3]);
  isTestPassed("diff values should not be equal", false, [2, 4], [2, 3]);
  isTestPassed(
    "nested arrays should be equal",
    true,
    [2, [4, 5], 3],
    [2, [4, 5], 3],
  );
  isTestPassed(
    "nested arrays diff vales should not be equal",
    false,
    [2, [4, 5], 3],
    [2, [4, 6], 3],
  );
}

function testObjects() {
  isTestPassed("same keys and values should be equal", true, {a: 1}, {a: 1});
  isTestPassed("diff keys should be not equal", false, {a: 1}, {b: 1});
  isTestPassed("diff values should be equal", false, {a: 1}, {a: 2});
  isTestPassed(
    "diff keys and values should not be equal",
    false,
    {a: 1},
    {b: 2},
  );
  isTestPassed("same nestedObjects should be equal", true, {a: [1]}, {a: [1]});
  isTestPassed("diff nestedObjects should be equal", false, {a: [1]}, {a: [2]});
}

function testDiffTypes() {
  isTestPassed("string and num should not be equal", false, "1", 1);
  isTestPassed("string and boolean should not be equal", false, "1", true);
  isTestPassed("string and arrays should not be equal", false, "1", [1]);
  isTestPassed("string and objects should not be equal", false, "1", {0: 1});
  isTestPassed("num and booleans should not be equal", false, 1, false);
  isTestPassed("num and arrays should not be equal", false, 1, [1, 2]);
  isTestPassed("num and objects should not be equal", false, 1, {0: 1});
  isTestPassed("boolean and arrays should not be equal", false, true, [1]);
  isTestPassed("boolean and objects should not be equal", false, false, {a: 1});
  isTestPassed("arrays and objects should not be equal", false, [1], {0: 1});
}

function testEdgeCases() {
  isTestPassed("both NaN should be equal", true, NaN, NaN);
  isTestPassed("both undefined should be equal", true, undefined, undefined);
  isTestPassed("both null should be equal", true, null, null);
  isTestPassed("null and object should not be equal", false, null, {a: 1});
  isTestPassed("NaN and number", false, NaN, 5);
  isTestPassed("undefined and object", false, undefined, {a: undefined});
}

function testCases() {
  testBooleans();
  testNumbers();
  testStrings();
  testArrays();
  testObjects();
  testDiffTypes();
  testEdgeCases();
}

testCases();
