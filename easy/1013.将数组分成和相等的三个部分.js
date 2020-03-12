/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    if (A.length < 3) return false
    let total = A.reduce((a,b) => a+b);
    if (total % 3 != 0) return false
    let avarage = total / 3;
    let tmp = 0, count = 0;
    for (let index = 0; index < A.length; index++){
        tmp += A[index];
        if (tmp == avarage) {
            count++;
            tmp = 0
        }
    }
    return count >= 3
};
// @lc code=end
// console.log(canThreePartsEqualSum([1,2,3,6,0,6]))
console.log(canThreePartsEqualSum([1,-1,1,-1]))
