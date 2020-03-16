/*
 * @lc app=leetcode.cn id=1351 lang=javascript
 *
 * [1351] 统计有序矩阵中的负数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    let m = grid.length, n = grid[0].length
    for(let i = 0; i< m; i++) {
        for (let j = 0; j<n; j++) {
            if(grid[i][j] < 0) count++
        }
    }
    return count
};
// @lc code=end

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
console.log(countNegatives([[3,2],[1,0]]))
console.log(countNegatives([[1,-1],[-1,-1]]))