/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length == 0) {
        return 0
    }

    for (let j = 0; j < nums.length; j++) {
        const num = nums[j];
        if(target != num) {
            if (target < num) {
                return j
            } else if(target > num && target < nums[j+1]) {
                return j+1
            } else if(target > num && j == nums.length - 1) {
                return nums.length
            }
        } else {
            return j
        }
    }
    // let index = parseInt(nums.length / 2);
    // let pre = true;
    // let last = true;
    // while (true) {
    //     console.log(index, nums[index], target)
    //     if (target == nums[index]) {
    //         return index
    //     } else if (target > nums[index] && last){
    //         last = true
    //         pre = false
    //         index++;
    //     } else if (target < nums[index] && pre){
    //         last = false
    //         pre = true
    //         index--
    //     } else {
    //         return pre ? index + 1: index
    //     }
    // }
};
// @lc code=end

console.log(searchInsert([1,3,5,6],7))