function twoSum(nums, target) {
  const result = [];
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (target - nums[i] === nums[j]) {
        result.push(i, j);
        return result;
      }
    }
  }

}
twoSum([3, 3], 6);
