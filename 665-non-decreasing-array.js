/**
 * @param {number[]} nums
 * @return {boolean}
 */
function checkPossibility(nums) {
  if (nums.length <= 2) {
    return true;
  }
  
  let count = nums[0] > nums[1] ? 1 : 0;
  
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (nums[i - 1] > nums[i + 1]) {
        nums[i + 1] = nums[i];
      }
      if (count === 1) {
        return false;
      }
      count += 1;
    }
  }
  
  return true;
}
