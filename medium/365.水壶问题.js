/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    if (x + y < z) {
        return false
    }
    if (x == 0 || y == 0) return z == 0 || x + y == z;
    return z % gcd(x, y) == 0
    function gcd(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number'))  return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
            var t = y;
            y = x % y;
            x = t;
        }
        return x;
    }
};
// @lc code=end

