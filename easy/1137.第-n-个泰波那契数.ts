/*
 * @lc app=leetcode.cn id=1137 lang=typescript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
function tribonacci(n: number, map = [0, 1, 1]): number {
    if (map[n] !== undefined) return map[n];

    map[n] =
        tribonacci(n - 1, map) +
        tribonacci(n - 2, map) +
        tribonacci(n - 3, map);
    return map[n];
}
// @lc code=end
