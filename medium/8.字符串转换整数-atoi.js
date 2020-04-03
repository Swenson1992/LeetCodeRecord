/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let result = 0
    str = str.trim()
    if (str == "" || str == null) return result
    let arr = str.split("");
    let resultArr = []
    
    console.log(arr)
    if (arr[0] == '+' || arr[0] == '-' || !isNaN(arr[0])) {
        resultArr.push(arr[0])
    } else {
        return result
    }
    for(let i = 1; i < arr.length;i++) {
        if (arr[i] == " ") {
            break
        }
        if (!isNaN(arr[i]) || (arr[i] == '.' && !resultArr.includes('.'))) {
            resultArr.push(arr[i])
        } else {
            break
        }
    }
    console.log(resultArr)
    if (resultArr.length == 0) {
        return result
    }
    if (resultArr.length == 1) {
        if (['+', '-'].includes(resultArr[0])) {
            return result
        } else {
            return parseFloat(resultArr[0])
        }
    }
    if (resultArr.length > 1) {
        if (resultArr[0] == '+') {
            resultArr.shift()
            result = parseFloat(resultArr.join(""))
            if (result > Math.pow(2,31) - 1) {
                return Math.pow(2,31) - 1
            }
            return result
        } else if (resultArr[0] == '-') {
            resultArr.shift()
            result = -1 * parseFloat(resultArr.join(""))
            if (result < Math.pow(-2,31)) {
                return Math.pow(-2,31)
            }
            return result
        } else {
            console.log(resultArr.join(""))
            result = parseFloat(resultArr.join(""))
            if (result > Math.pow(2,31) - 1) {
                return Math.pow(2,31) - 1
            }
            return result
        }
    }
};
// @lc code=end

console.log(myAtoi("-   234"))