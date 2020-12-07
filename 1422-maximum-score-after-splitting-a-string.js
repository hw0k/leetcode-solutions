/**
 * @param {string} str 
 */
function maxScore(str) {
  const length = str.length;
  let max = 0;
  
  for (let i = 1; i < length; i++) {
    const left = findCharacterCount(str.substr(0, i), '0');
    const right = findCharacterCount(str.substr(i), '1');
    const sum = left + right;
    
    max = Math.max(sum, max);
  }
  
  return max;
}

/**
 * @param {string} str 
 * @param {string} char 
 */
function findCharacterCount(str, char) {
  return str.split('').reduce((acc, cur) => {
    return cur === char ? acc + 1 : acc;
  }, 0);
}
