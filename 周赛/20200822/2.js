const { max } = require("lodash");

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles = piles.sort((a,b) => b - a);
    console.log(piles)
    let n = piles.length / 3
    let a = piles[1]
    for (let i = 1; i < n; i++) {
        a += piles[2*i +1]
    }
    console.log(a)
};

maxCoins([9,8,7,6,5,1,2,3,4])
maxCoins([2,4,5])
maxCoins([2,4,1,2,7,8])