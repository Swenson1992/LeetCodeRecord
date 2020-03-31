/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // nums.sort((a, b) => {return a-b})
    // return nums
    if (nums.length == 0) return []
    let pivort = nums[0];
    let left = [], right = [], center = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivort) {
            left.push(nums[i])
        } else if(nums[i] == pivort) {
            center.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return [...sortArray(left), ...center, ...sortArray(right)]
};
// @lc code=end

