/**
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
 * 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    if (target < 3) return []
    let arr = [], startIndex = 1, endIndex = 2;
    let tmpSum = startIndex;
    while (startIndex < target - 1) {
        tmpSum += endIndex;
        if (tmpSum > target) {
            startIndex++;
            endIndex = startIndex + 1;
            tmpSum = startIndex;
        } else if (tmpSum == target) {
            arr.push(makeArray(startIndex, endIndex))
            startIndex++;
            endIndex = startIndex + 1;
            tmpSum = startIndex;
        } else {
            endIndex++;
        }
    }

    function makeArray(start, end) {
        let arr = []
        for(let i = start; i<=end; i++) {
            arr.push(i)
        }
        return arr
    }
    return arr
};
console.log(findContinuousSequence(15))