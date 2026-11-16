function isValueEqual(value1, value2) {
    return value1 === value2
}

function compareEntries(entries1, entries2) {

    for (let i = 0; i < entries1.length; i++) {
        for (let j = 0; j < entries1[i].length; j++) {
            if (typeof entries1[i][j] === "number") {
                if (!(isValueEqual(entries1[i][j], entries2[i][j]))) return false
            }
            return hasSameType(entries1[i][j], entries2[i][j])
        }
    }
    return true
}

function checksLength(value1, value2) {
    const entries1 = Object.entries(value1);
    const entries2 = Object.entries(value2);
    return (entries1.length === entries2.length) ? compareEntries(entries1, entries2) : false
}

function classifyType(value1, value2) {
    if (typeof value1 === "object") {
        return checksLength(value1, value2)
    }
    return isValueEqual(value1, value2)
}

function hasSameType(value1, value2) {
    if (typeof value1 === typeof value2) {
        return classifyType(value1, value2)
    }
    return false;
}

function isEqual(value1, value2) {
    return hasSameType(value1, value2)
}


console.log(isEqual(1, 1)); // true
console.log(isEqual("a", "a")); // true
console.log(isEqual([], [])); // true
console.log(isEqual([1], [1])); // true
console.log(isEqual([1], [1, 2])); // false
console.log(isEqual(1, "1")); // false

console.log(isEqual({ a: 1 }, { a: 1 })); // true
console.log(isEqual({ a: 1 }, { b: 1 })); // false

console.log(isEqual({ a: [1] }, { a: [1] })); // true
console.log(isEqual({ a: { b: 1 } }, { a: { b: 1 } })); // true

