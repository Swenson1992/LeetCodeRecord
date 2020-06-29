/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let _array = s.split(" ");
    for (let i = _array.length - 1; i >= 0; i--) {
        const word = _array[i];
        if (word != '') return word.length
    }

    return 0
};
// @lc code=end