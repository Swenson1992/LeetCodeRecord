/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let version1Arr = version1.split('.');
    let version2Arr = version2.split('.');
    let maxArrLength = Math.max(version1Arr.length, version2Arr.length);
    for (let i = 0; i < maxArrLength; i++) {
        let v1 = Number(version1Arr[i]) || 0;
        let v2 = Number(version2Arr[i]) || 0;

        if (v1 < v2) {
            return -1
        } else if (v1 > v2) {
            return 1
        } else {
            continue
        }
    }
    return 0
};
// @lc code=end

