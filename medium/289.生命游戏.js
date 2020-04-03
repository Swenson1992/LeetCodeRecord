/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    // 八个方向的偏移量
    const idx = [0, 1, 0, -1, -1, -1, 1, 1];
    const jdx = [1, 0, -1, 0, 1, -1, 1, -1];

    // 制作副本集
    const CopyBoard = board.map(arr => { return [...arr] })

    for (let i = 0; i < CopyBoard.length; i++) {
        for (let j = 0; j < CopyBoard[i].length; j++) {
            
            let liveAmount = 0;
            for (let z = 0; z < 8; z++) {
                let x = i + idx[z];
                let y = j + jdx[z]

                if (x >= CopyBoard.length || y >= CopyBoard[0].length || x < 0 || y < 0) {
                    continue
                }

                liveAmount += CopyBoard[x][y] ? 1 : 0
            }
            
            if (liveAmount < 2 || liveAmount > 3) {
                board[i][j] = 0
            } else if(liveAmount <= 3 && CopyBoard[i][j]) {
                board[i][j] = 1
            } else if(liveAmount === 3 && !CopyBoard[i][j]) {
                board[i][j] = 1
            }
        }
        
    }
}
// @lc code=end

