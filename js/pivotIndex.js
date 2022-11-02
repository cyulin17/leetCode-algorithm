function pivotIndex(nums) {
  const arrSum = nums.reduce((prev, next) => prev + next, 0);
  let left = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    const right = arrSum - left - nums[i];
    if (right === left) {
      return i;
    }
    left += nums[i];
  }
  return -1;
}
pivotIndex([1, 2, 3]);
