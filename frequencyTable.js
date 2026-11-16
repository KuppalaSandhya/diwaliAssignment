function getFrequencyTable(data) {
    const frequencyTable = {}

    for (const datum of data) {
        if (frequencyTable[datum] === undefined) {
            frequencyTable[datum] = 1;
        }
        else {
            frequencyTable[datum] += 1;
        }
    }

    return frequencyTable

}

const fruits = ["apple", "banana", "apple", "apple", "orange", "banana"];
console.log(getFrequencyTable(fruits));


