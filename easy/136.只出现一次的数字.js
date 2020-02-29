/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 排序算法找到只出现一次的数字
    // nums.sort()
    // if (nums[0]!=nums[1]) return nums[0]
    // if (nums[nums.length - 1]!=nums[nums.length - 2]) return nums[nums.length - 1]
    // for (let index = 1; index < nums.length - 1; index++) {
    //     if(nums[index] != nums[index + 1] && nums[index] != nums[index - 1]) return nums[index]
    // }
    // 异或方法
    // 概念
    // 如果我们对 0 和二进制位做 XOR 运算，得到的仍然是这个二进制位
    // a ⊕ 0 = aa⊕0=a
    // 如果我们对相同的二进制位做 XOR 运算，返回的结果是 0
    // a ⊕ a = 0a⊕a=0
    // XOR 满足交换律和结合律
    // a ⊕ b ⊕ a = (a ⊕ a) ⊕ b = 0 ⊕ b = ba⊕b⊕a=(a⊕a)⊕b=0⊕b=b
    // 所以我们只需要将所有的数进行 XOR 操作，得到那个唯一的数字。
    let a = 0
    for (let index = 0; index < nums.length; index++) {
        a = a^nums[index];
    }
    return a
};
// @lc code=end

