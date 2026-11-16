function type(value1) {
  if (Array.isArray(value1)) return "array";
  if (value1 === null) return "null";
  return typeof value1;
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

  if (Object.keys(value1).length !== Object.keys(value2).length) return false;

  for (const key in value1) {
    if (!(key in value2)) return false;
    if (!isEqual(value1[key], value2[key])) return false;
  }

  return true;
}

module.exports = {
  isEqual,
};
