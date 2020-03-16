/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length == 1) return nums[0];
    let start = 0;
    let step = 1;
    let total = nums[start];
    let tmp = nums[start];
    while (start<nums.length - 1) {
        tmp = tmp + nums[step];
        total = Math.max(total, tmp)
        if (step >= nums.length - 1){
            start = start + 1;
            if (start == nums.length - 1) {
                step = start
            } else {
                step = start + 1
                tmp = nums[start]
            }
            total = Math.max(total, nums[start])
        } else {
            step++
        }
    }
    return total
};
// @lc code=end

