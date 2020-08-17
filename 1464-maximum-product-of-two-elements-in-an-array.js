/**
 * start: 0817 14:20
 * end: 0817 14:27
 * 
 * @param {number[]} nums 
 * @return {number}
 */

function maxProduct(nums) {
  const highestNumbers = nums.reduce((prev, currentNumber) => {
    if (currentNumber > prev[1]) {
      if (currentNumber > prev[0]) {
        return [currentNumber, prev[0]];
      }
      return [prev[0], currentNumber];
    }
    return prev;
  }, [-1, -1]);

  return (highestNumbers[0] - 1) * (highestNumbers[1] - 1);
}
