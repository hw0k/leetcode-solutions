/**
 * start: 0824 14:47
 * end: 0824 14:57
 * 
 * @param {string} s
 * @return {string}
 */
function sortString(s) {
  const map = s.split('').reduce(
    (prev, character) => ({
      ...prev,
      [character]: prev[character] ? prev[character] + 1 : 1,
    }),
    {},
  );

  const order = Object.keys(map).sort().reverse();

  let result = '';

  while (s.length !== result.length) {
    order.reverse().forEach((element) => {
      if (map[element] === 0) {
        return;
      }
      map[element] -= 1;
      result += element;
    });
  }

  return result;
}
