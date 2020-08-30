from typing import List

# start: 15:54
# end: 16:27

class Solution:
    def compress(self, chars: List[str]) -> int:
        count = 1
        cursor = 0

        for index in range(len(chars) + 1):
            if (index == 0):
                continue

            if (index < len(chars) and chars[index] == chars[index - 1]):
                count += 1
                continue

            chars[cursor] = chars[index - 1]
            cursor += 1

            if (count > 1):
                for char in list(str(count)):
                    chars[cursor] = char
                    cursor += 1

                count = 1

        while (len(chars) > cursor):
            chars.pop()

        return len(chars)
