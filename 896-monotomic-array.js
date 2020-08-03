/**
 * @param {number[]} array
 * @return {boolean}
 */
function isMonotonic(array) {
  const {
    isIncreasing,
    isDecreasing,
  } = array.reduce((prev, _, index) => {
    if (index > array.length - 2) {
      return prev;
    }
    return {
      ...prev,
      isIncreasing: prev.isIncreasing && array[index] <= array[index + 1],
      isDecreasing: prev.isDecreasing && array[index] >= array[index + 1],
    };
  }, {
    isIncreasing: true,
    isDecreasing: true,
  });

  return isIncreasing || isDecreasing;
}
