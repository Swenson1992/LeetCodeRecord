/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if(grid.length == 0) return 0;
    let areaMax = 0;
    let x = grid.length, y = grid[0].length;
    for (let i = 0; i<x; i++) {
        for(let j = 0; j< y; j++) {
            if(grid[i][j] == 1)
                areaMax = Math.max(areaMax, CountArea(grid, i, j, x, y))
        }
    }
    return areaMax
};

var CountArea = function(grid, i, j, x, y) {
    if(i<0 || j<0 || i>=x || j>=y || grid[i][j] == 0) return 0
    let cnt = 1;
    grid[i][j] = 0;
    cnt += CountArea(grid, i-1,j,x,y);
    cnt += CountArea(grid, i+1,j,x,y);
    cnt += CountArea(grid, i,j-1,x,y);
    cnt += CountArea(grid, i,j+1,x,y);
    return cnt
}
// @lc code=end

