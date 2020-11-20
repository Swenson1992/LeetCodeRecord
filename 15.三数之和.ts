/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    const res: number[][] = [], length = nums.length;
    nums.sort((a, b) => a - b);
    for (let first = 0; first < length; ++first) {
        if (first && nums[first] === nums[first - 1]) continue;
        let third = length - 1;
        const target = -nums[first];
        for (let second = first + 1; second < length; ++second) {
            if (second > first + 1 && nums[second] === nums[second - 1])
                continue;
            while (second < third && nums[second] + nums[third] > target)
                --third;
            if (second === third) break;
            if (nums[second] + nums[third] === target)
                res.push([nums[first], nums[second], nums[third]]);
        }
    }
    return res;
}
// @lc code=end
