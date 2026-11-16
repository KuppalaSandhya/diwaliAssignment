function isEqual(value1, value2) {
  if (typeof value1 !== typeof value2) return false;
  if (typeof value1 !== "object" && value1 !== value2) return false;

  if (typeof value1 === "object") {
    if (Object.keys(value1).length !== Object.keys(value2).length) return false;
    if (Array.isArray(value1) !== Array.isArray(value2)) return false;
  }

  for (const key in value1) {
    if (typeof value1 === "object" && !isEqual(value1[key], value2[key]))
      return false;
  }

  return true;
}
module.exports = {
  isEqual,
};
