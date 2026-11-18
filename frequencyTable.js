function getFrequencyTable(data) {
  const frequencyTable = {};

  for (const datum of data) {
    if (datum in frequencyTable) {
      frequencyTable[datum] += 1;
    } else {
      frequencyTable[datum] = 1;
    }
  }
  return frequencyTable;
}

const fruits = ["apple", "banana", "apple", "apple", "orange", "banana"];
const nums = [1, 2, 3, 2, 1];
console.log(getFrequencyTable(fruits));
console.log(getFrequencyTable(nums));
