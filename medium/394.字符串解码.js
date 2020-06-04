/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let str = "", strStack = [], repeat = "", repeatsStack = [];
    for (const c of s) {
        if(c >= '0' && c <= '9') {
            repeat += c;
        } else if (c === '[') {
            repeatsStack.push(repeat);
            strStack.push(str);
            repeat = "";
            str = "";
        } else if (c === ']') {
            let repeats = repeatsStack.pop();
            str = str.repeat(repeats);

            let lastStr = strStack.pop()
            str = lastStr + str;
        } else {
            str += c
        }
    }
    return str
};
var decodeString_reg = function (s) {
    const reg = /(\d+)\[(\w+)]/g;
    const res = s.replace(reg, (match, p1, p2) => p2.repeat(p1))
    return reg.test(res) ? decodeString(res) : res
}
// @lc code=end
