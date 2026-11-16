function isValid(value) {
    return (
        typeof value === "object" &&
        value != null &&
        !Array.isArray(value)
    )

}

function deepMerge(target, source) {
    const merged = { ...target }

    for (const sourceKey in source) {
        const isSourceObject = isValid(source[sourceKey]);
        const isTargetObject = isValid(merged[sourceKey]);

        if (isSourceObject && isTargetObject) {
            merged[sourceKey] = deepMerge(merged[sourceKey], source[sourceKey])
        }
        else {
            merged[sourceKey] = source[sourceKey]
        }

    }
    return merged
}

const target = { a: 1, b: { x: 10 } };
const source = { b: { y: 20 }, c: 3 };
console.log(deepMerge(target, source));
