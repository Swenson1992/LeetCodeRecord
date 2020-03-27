/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let map = new Map()
    deck.forEach(v => map.has(v) ? map.set(v, map.get(v) + 1) : map.set(v, 1))
    let arr = [...map.values()]
    let res = arr[0]
    let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
    return arr.every(i => (res = gcd(res, i)) > 1)
};
// @lc code=end
console.log(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]))
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]))
