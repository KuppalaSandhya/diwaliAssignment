function compareEntries(entries1, entries2) {
  for (let i = 0; i < entries1.length; i++) {
    if (
      typeof entries1[i][1] === "object" ||
      typeof entries2[i][1] === "object"
    ) {
      return convertsIntoEntries(entries1[i][1], entries2[i][1]);
    }
    if (
      !(entries1[i][0] === entries2[i][0] && entries1[i][1] === entries2[i][1])
    )
      return false;
  }
  return true;
}

function checksLength(entries1, entries2) {
  return entries1.length === entries2.length
    ? compareEntries(entries1, entries2)
    : false;
}

function convertsIntoEntries(value1, value2) {
  const entries1 = Object.entries(value1);
  const entries2 = Object.entries(value2);
  return checksLength(entries1, entries2);
}

function isValueEqual(value1, value2) {
  return value1 === value2;
}

function classifyType(value1, value2) {
  if (typeof value1 === "object" || value2 === "object") {
    return convertsIntoEntries(value1, value2);
  }
  return isValueEqual(value1, value2);
}

function isEqual(value1, value2) {
  return classifyType(value1, value2);
}

console.log(isEqual(1, 1)); // true
console.log(isEqual("a", "a")); // true
console.log(isEqual([], [])); // true
console.log(isEqual([1], [1])); // true
console.log(isEqual([1], [1, 2])); // false
console.log(isEqual(1, "1")); // false

console.log(isEqual({a: 1}, {a: 1})); // true
console.log(isEqual({a: 1}, {b: 1})); // false

console.log(isEqual({a: [1]}, {a: [1]})); // true
console.log(isEqual({a: {b: 1}}, {a: {b: 1}})); // true
