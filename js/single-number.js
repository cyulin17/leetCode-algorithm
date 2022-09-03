function singleNumber(nums) {

  const result = [];
  nums.forEach(element => {
    if (nums.indexOf(element) === nums.lastIndexOf(element)) {
      result.push(element);
    }
  });
  return result;
}
singleNumber([2, 2, 1]);
