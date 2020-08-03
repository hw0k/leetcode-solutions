class Solution {
  /**
   * @param {number[]} nums 
   */
  constructor(nums) {
    this.nums = nums;
    this.origin = Array.from(this.nums);
  }

  /**
   * @returns {number[]}
   */
  reset() {
    this.nums = this.origin;
    this.origin = Array.from(this.origin);
    return this.origin;
  }

  /**
   * @returns {number[]}
   */
  shuffle() {
    for (let i = 0; i < this.nums.length; i++) {
      const target = randomRange(i, this.nums.length);
      this._swap(i, target);
    }
    return this.nums;
  }
  
  /**
   * @private
   */
  _swap(leftIdx, rightIdx) {
    const temp = this.nums[leftIdx];
    this.nums[leftIdx] = this.nums[rightIdx];
    this.nums[rightIdx] = temp;
  }
}

function randomRange(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}