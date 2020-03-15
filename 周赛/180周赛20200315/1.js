/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let result = [];
    let small_map = new Map();
    let big_map = new Map();
    let m = matrix.length;
    for(let i = 0; i < m; i++) {
        let small = matrix[i][0];
        for(let j = 0; j< matrix[i].length; j++) {
            if (small > matrix[i][j]) {
                small = matrix[i][j]
            }
        }
        small_map.set(i,small)
        
    }
    for(let j = 0; j < matrix[0].length; j++) {
        let big = matrix[0][j];
        for(let i = 0; i< m; i++) {
            if (big < matrix[i][j]) {
                big = matrix[i][j]
            }
        }
        big_map.set(j, big)
        
    }
    console.log(small_map, big_map)
    for (let [key, value] of small_map) {
        for (let [key2, value2] of big_map) {
            if(value2 == value) return [value]
        }
    }
    return []
};