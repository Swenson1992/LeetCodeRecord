/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length == 0) return 0
    let total = 0, length = prices.length;
    for (let i = 0; i < length; i++) {
        for (let j = i+1; j < length; j++) {
            if( prices[j] - prices[i] > total) total = prices[j] - prices[i]
            // console.log(prices[i], prices[j], total)
        }
    }
    return total
};
// @lc code=end

maxProfit([7,6,4,3,1])