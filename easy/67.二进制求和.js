/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, '0');
    b = b.padStart(maxLen, '0');
    let flag = false;
    let result = Array.from({length: maxLen}, x=>0)
    for (let i = b.length - 1; i >= 0; i--) {
        let tmpA = parseInt(a[i]) || 0, tmpB = parseInt(b[i]) || 0;
        let sum = tmpA + tmpB + (flag ? 1 : 0);
        flag = sum >= 2;
        result[i] = sum % 2;
    }
    resultStr = (flag ? '1' : '') + result.join('')

    return resultStr
};
// @lc code=end
