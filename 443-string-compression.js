/**
 * start: 0820 17:20
 * end: 0820 18:00
 * 
 * @param {string[]} chars
 * @return {number}
 */
function compress(chars) {
  /** @type {{ char: string; count: number; } | null} */
  let cursor = null;

  chars.push(null);

  const totalLength = chars.length;

  for (let i = 0; i < totalLength; i++) {
    const char = chars[i];
    const lastElement = i > 0 ? chars[i - 1] : null;

    if (!lastElement) {
      chars.push(char);
      continue;
    }

    if (lastElement === char) {
      cursor = { char, count: cursor ? cursor.count + 1 : 1 };
      continue;
    } else {
      if (cursor) {
        const currentCursor = { ...cursor };
        cursor = null;

        chars.push(...(`${currentCursor.count + 1}`.split('')), char);
        continue;
      }
    }

    chars.push(char);
  }

  for (let i = 0; i < totalLength; i++) {
    chars.shift();
  }
  chars.pop();

  return chars.length;
};
