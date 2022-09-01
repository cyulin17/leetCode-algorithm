function searchInsert(nums, target) {

  const targetIndex = nums.indexOf(target);
  if (targetIndex !== -1) {
    return targetIndex;
  } else if (targetIndex === -1) {
    if (target < nums[0]) {
      return 0;
    } else if (target > nums[nums.length - 1]) {
      return nums.length;
    } else {
      for (var i = 0; i <= nums.length; i++) {
        if (nums[i] < target && nums[i + 1] > target) {
          return i + 1;
        }
      }
    }
  }
}
searchInsert();
