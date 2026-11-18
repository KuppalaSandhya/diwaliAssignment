function findCurrentOrder(num1, num2, order = "equal") {
  if (num1 < num2) return "ascendingOrder";
  if (num1 > num2) return "descendingOrder";
  return order;
}

function findRuns(nums) {
  if (nums.length === 0) return [];

  const runs = [];
  let currentRun = [nums[0]];
  let order = findCurrentOrder(nums[0], nums[1]);

  for (let i = 1; i < nums.length; i++) {
    let currentOrder = findCurrentOrder(nums[i - 1], nums[i], order);

    if (order === currentOrder || order === "equal") {
      currentRun.push(nums[i]);
      order = currentOrder;
    } else {
      runs.push(currentRun);
      currentRun = [nums[i]];
      order = findCurrentOrder(nums[i], nums[i + 1]);
    }
  }

  runs.push(currentRun);
  return runs;
}

const numbers = [1, 2, 3, 4, 6, 7, 5, 4, 4, 7, 8];
console.log(findRuns(numbers));
