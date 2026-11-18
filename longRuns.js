function findRuns(nums) {
  const runs = [];
  let currentRun = [nums[0]];
  let direction = 0;

  for (let i = 1; i < nums.length; i++) {
    let currentDirection = Math.sign(nums[i] - nums[i - 1]);
    if (
      direction === currentDirection ||
      direction === 0 ||
      currentDirection === 0
    ) {
      currentRun.push(nums[i]);
      if (currentDirection !== 0) {
        direction = currentDirection;
      }
    } else {
      runs.push(currentRun);
      currentRun = [nums[i]];
      direction = Math.sign(nums[i + 1] - nums[i]);
    }
  }
  runs.push(currentRun);
  return runs;
}

const numbers = [1, 2, 3, 4, 6, 7, 5, 4];
console.log(findRuns(numbers));
