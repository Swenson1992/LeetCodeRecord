/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let index = nums.length / 2;
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1)
    }
    for (let [key, value] of map) {
        // console.log(key, value, index)
        if (value > index) return key
    }
};
// @lc code=end
console.log(majorityElement([3,2,3]))
