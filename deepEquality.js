function checksLength(value1, value2) {
  return value1.length !== value2.length;
}

function areObjectsEqual(value1, value2) {
  if (checksLength(Object.keys(value1), Object.keys(value2))) return false;

  for (const key in value1) {
    if (!(key in value2)) return false;
    if (!isEqual(value1[key], value2[key])) return false;
  }

  return true;
}

function areArraysEqual(value1, value2) {
  if (checksLength(value1, value2)) return false;

  for (let index = 0; index < value1.length; index++) {
    if (!isEqual(value1[index], value2[index])) return false;
  }

  return true;
}

function classifyType(value) {
  if (value === null) return "null";
  if (Number.isNaN(value)) return "NaN";
  return Array.isArray(value) ? "array" : typeof value;
}

function areTypesEqual(value1, value2) {
  return classifyType(value1) === classifyType(value2);
}

function isValueEqual(value1, value2) {
  return value1 === value2;
}

function isEqual(value1, value2) {
  if (!areTypesEqual(value1, value2)) return false;

  switch (classifyType(value1)) {
    case "number":
      return isValueEqual(value1, value2);

    case "string":
      return isValueEqual(value1, value2);

    case "boolean":
      return isValueEqual(value1, value2);

    case "object":
      return areObjectsEqual(value1, value2);

    case "array":
      return areArraysEqual(value1, value2);

    case "null":
      return true;

    case "NaN":
      return true;

    case "undefined":
      return true;
  }
}

module.exports = {
  isEqual,
};
