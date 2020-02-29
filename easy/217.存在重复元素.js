/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     if (nums.length == 0) {
//         return false
//     }
//     for (let index = 0; index < nums.length; index++) {
//         const num = nums[index];
//         let arr = nums.filter(v => v == num)
//         if (arr.length > 1) return true
//     }
//     return false
// };
var containsDuplicate = function(nums) {
    nums.sort()
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] == nums[index + 1]) return true
    }
    return false
};
// @lc code=end

