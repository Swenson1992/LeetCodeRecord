/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    function getSame (str, flag) {
        let arr = flag ? str.split(" ") : str.split("")
        let j = 1;
        let sameStr = ""
        let map = new Map()
        for (const item of arr) {
            let i = map.has(item) ? map.get(item) : j;
            sameStr = sameStr.toString() + i;
            map.set(item, j++)
        }
        console.error(map)
        console.log(sameStr)
        return sameStr
    }
    
    
    return getSame(pattern) === getSame(str,true)
};
// @lc code=end
console.log(wordPattern("abba","dog cat cat dog"))
