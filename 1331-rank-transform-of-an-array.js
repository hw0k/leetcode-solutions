/**
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayRankTransform(arr) {
  const rank = [...new Set(arr)].sort((a, b) => a - b);
  return arr.map(value => rank.indexOf(value) + 1);
};
