/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    /*
     * 自己的写法 
    let strTmp = str1.length < str2.length ? str1 : str2;
    let len = strTmp.length
    let str1Arr = [...new Set(str1.split(strTmp))]
    let str2Arr = [...new Set(str2.split(strTmp))]
    while(str1Arr.toString() != str2Arr.toString() || str1Arr.length != 1 || str2Arr.length !=1) {
        if (len == 0) {
            return ""
        }
        strTmp = strTmp.slice(0,--len);
        console.log(strTmp)
        str1Arr = [...new Set(str1.split(strTmp))]
        str2Arr = [...new Set(str2.split(strTmp))]
    }
    return strTmp 
    */
    if (str1 + str2 !== str2 + str1) return ''
    const gcd = (a, b) => (0 === b ? a : gcd(b, a % b))
    return str1.substring(0, gcd(str1.length, str2.length))
};
// @lc code=end
// console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX","TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"))
