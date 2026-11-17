function checksLength(value1, value2) {
  return Object.keys(value1).length !== Object.keys(value2).length;
}

function areObjectsEqual(value1, value2) {
  if (checksLength(value1, value2)) return false;

  for (const key in value1) {
    if (!(key in value2)) return false;
    if (!isEqual(value1[key], value2[key])) return false;
  }

  return true;
}

function type(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

function areTypesEqual(value1, value2) {
  return type(value1) === type(value2);
}

function isValueType(value1) {
  return type(value1) !== "array" && type(value1) !== "object";
}

function isEqual(value1, value2) {
  if (!areTypesEqual(value1, value2)) return false;

  if (isValueType(value1)) return value1 === value2;

  return areObjectsEqual(value1, value2);
}

module.exports = {
  isEqual,
};
