/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    if (nums.length === 0) return [];
    // 一次遍历
    let start = 0, curr = 0;
    let end = nums.length - 1;
    while (curr <= end) {
        if (nums[curr] == 0) {
            let tmp = nums[start];
            nums[start++] = nums[curr];
            nums[curr++] = tmp
        } else if(nums[curr] == 2){
            let tmp = nums[curr];
            nums[curr] = nums[end];
            nums[end--] = tmp
        } else {
            curr++
        }
    }
    // 选择排序

    // 插入排序
    // 冒泡排序
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] > nums[j]) {
    //             [nums[i], nums[j]] = [nums[j], nums[i]];
    //         }
    //     }
    // }
    // 归并排序
    // 快速排序
};
// @lc code=end

