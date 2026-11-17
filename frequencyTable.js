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
console.log(getFrequencyTable(fruits));
