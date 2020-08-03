import random

class Solution:
    def __init__(self, nums: List[int]):
        self.nums = nums
        self.origin = list(nums)

    def reset(self) -> List[int]:
        self.nums = self.origin
        self.origin = list(self.origin)
        return self.origin

    def shuffle(self) -> List[int]:
        for i in range(len(self.nums)):
            target_idx = random.randrange(i, len(self.nums))
            self.nums[i], self.nums[target_idx] = self.nums[target_idx], self.nums[i]
        return self.nums
