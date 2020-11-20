/**
 * TODO:蛇形矩阵
 *
 *  题目描述
 *
 *  蛇形矩阵是由1开始的自然数依次排列成的一个矩阵上三角形。
 *  例如，当输入5时，应该输出的三角形为：
 *
 *  1 3 6 10 15
 *  2 5 9 14
 *  4 8 13
 *  7 12
 *  11
 *
 *  请注意本题含有多组样例输入。
 *
 *  输入描述:
 *  输入正整数N（N不大于100）
 *
 *  输出描述:
 *  输出一个N行的蛇形矩阵。
 *
 *  示例1
 *  输入
 *  4
 *  输出
 *  1 3 6 10
 *  2 5 9
 *  4 8
 *  7
 * */

const Matrix = (n) => {
    let result = []
    let last = 1

    for(let start = 0; start < n; start++) { // 有多少行
        let currentFloor = []
        last += start
        let distance = start + 1
        let needPush = last
        for (let y = 0; y < n - start; y++) { // 每行几个
            currentFloor.push(needPush)
            distance += 1
            needPush += distance
        }
        result.push(currentFloor)
    }
    return result
}

console.log(Matrix(5))
