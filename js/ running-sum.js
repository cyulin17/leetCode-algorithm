function runningSum(nums) {
  const newArr = [];
  let prevNum = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    prevNum += nums[i];
    newArr.push(prevNum);
  }
  return newArr;
}
runningSum([1, 2, 3, 4]);
