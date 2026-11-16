function findRuns(numbers, runs) {

    if (numbers.length === 0) return;

    const run = [numbers[0]];
    const ascendingOrder = numbers[0] < numbers[1];
    const decendingOrder = numbers[0] > numbers[1];

    let i = 0;
    while (
        ascendingOrder && numbers[i] < numbers[i + 1] ||
        decendingOrder && numbers[i] > numbers[i + 1]
    ) {
        i++;
        run.push(numbers[i]);
    }

    runs.push(run)
    findRuns(numbers.slice(i + 1), runs);
    return runs;

}

const runs = [];
console.log(findRuns([1, 2, 3, 4, 6, 4, 2, 1, 2, 3], runs));