/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 车的可用捕获量
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    
    let rookArr = []
    let result = 0
    //先找到车的位置
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if(board[i][j]=='R') rookArr.push([i,j]) 
        }
    }
    if (rookArr.length == 0) return 0
    console.log(`车的位置坐标为 ${rookArr[0][0]}, ${rookArr[0][1]}`)
    //行和列开始查找，找到第一个不为空空方块的值，如果是卒，统计结果+1
    for(let i = rookArr[0][0]; i > 0; i--) {
        if (board[i][rookArr[0][1]] != 'B') {
            if(board[i][rookArr[0][1]] == 'p') {
                result++;
                break;
            }
        } else {
            break
        }
    }
    for(let i = rookArr[0][0]; i < 8; i++) {
        if (board[i][rookArr[0][1]] != 'B') {
            if(board[i][rookArr[0][1]] == 'p'){
                result++;
                break;
            }
        } else {
            break
        }
    }
    for(let i = rookArr[0][1]; i > 0; i--) {
        if (board[rookArr[0][0]][i] != 'B') {
            if(board[rookArr[0][0]][i] == 'p') {
                result++;
                break;
            }
        } else {
            break
        }
    }
    for(let i = rookArr[0][1]; i < 8; i++) {
        if (board[rookArr[0][0]][i] != 'B') {
            if(board[rookArr[0][0]][i] == 'p') {
                result++;
                break;
            }
        } else {
            break
        }
    }
    return result
};
// @lc code=end