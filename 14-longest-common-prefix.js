/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (!strs.length) {
    return '';
  }
  
  let prefix = '';
  const minLength = strs.reduce((acc, str) => Math.min(acc, str.length), Number.MAX_VALUE);
  for (let i = 0; i < minLength; i++) {
    const standard = strs[0][i];
    const isMatchedAll = strs.every(str => str[i] === standard);
    if (!isMatchedAll) {
      break;
    }
    prefix += standard;
  }
  return prefix;
}
