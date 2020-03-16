/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length == 0) return 0;
    let n=0;
    while(n < nums.length) {
        if(nums[n] == val) {
            nums.splice(n, 1)
        } else {
            n++;
        }
    }
    return nums.length
};
// @lc code=end
console.log(removeElement([0,1,2,2,3,0,4,2], 2))
