/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length == 0) return 0
    let total = 0, length = prices.length;
    for (let index = 0; index < length; index++) {
        let _total = prices[index + 1] - prices[index]
        if( _total > 0) total += _total
    }
    return total
};
// @lc code=end

