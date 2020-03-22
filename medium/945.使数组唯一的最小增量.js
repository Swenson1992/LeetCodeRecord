/*
 * @lc app=leetcode.cn id=945 lang=javascript
 *
 * [945] 使数组唯一的最小增量
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    A.sort((a,b)=>a-b)
    let result = 0
    for (let i = 1; i < A.length; i++) {
        if (A[i] <= A[i-1]) {
            let n = A[i-1] -A[i] + 1
            A[i] +=n;
            result+=n
        }
    }
    return result
};
// @lc code=end

