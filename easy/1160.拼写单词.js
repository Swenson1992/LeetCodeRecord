/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let result = ""
    for (let i = 0; i< words.length; i++) {
        let tmp = chars;
        let wordsArr = words[i].split("")
        let b = true
        let tmpArr = []
        wordsArr.map((v) => {
            let index = tmp.indexOf(v);
            if (index != -1) {
                tmpArr.push(v)
                tmp=tmp.replace(v,"");
            } else {
                b = false
            }
        })
        if (b) {
            result += words[i]
            console.log(words[i])
        }
    }
    return result.length
};
// @lc code=end

// console.log(countCharacters(["cat","bt","hat","tree"],"atach"))