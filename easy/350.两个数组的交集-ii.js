/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let arr = [];
    let map = new Map()
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1)
    }
    nums1.forEach(v => {
        !map.has(v) ? map.set(v,1) : map.set(v,map.get(v)+1)
    });
    for (let index = 0; index < nums2.length; index++) {
        const num2 = nums2[index];
        if(map.has(num2) && map.get(num2) > 0) {
            arr.push(num2)
            map.set(num2, map.get(num2) - 1)
        }
    }
    return arr
};
// @lc code=end