/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let num_map = new Map()
    for (let num of nums) {
        if(!num_map.has(num)) num_map.set(num,num)
    }
    let longestStreak = 0;
    for(let [key, num] of num_map) {
        if (!num_map.has(num-1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (num_map.has(currentNum+1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak
};
// @lc code=end

// longestConsecutive([100, 4, 200, 1, 3, 2])