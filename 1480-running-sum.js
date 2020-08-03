/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
  let answer = [];

  nums.reduce((prev, num) => {
    const value = prev + num;
    answer.push(value);
    return value;
  }, 0);

  return answer;
};

