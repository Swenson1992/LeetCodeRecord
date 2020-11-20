const { round } = require("lodash");

/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
    let start = rounds[0];
    let counts = new Array(n+1).fill(0)
    counts[start]++;
    for(let i = 1;i < rounds.length; i++){
        // console.log(start)
        if(rounds[i] < rounds[i-1]) {
            for(let j = 0; j < n - rounds[i - 1] + rounds[i]; j++) {
                if (start+1 > n) start = 0;
                counts[++start]++
            }
            start = rounds[i]
        } else {
            for(let j = 0; j < rounds[i] - rounds[i-1];j++) {
                // if (start+1+j > n) start = 0;
                counts[++start]++
                if(start > n) start = 0
            }
            start = rounds[i]
        }
        // console.log(start);
        console.log(rounds[i-1], rounds[i],counts)
    }
    n == 4 ? console.log(counts) : null;
    let maxCount = Math.max(...counts)
    let mostVisitedIndex = []
    counts.map((v,index) => {
        if(v == maxCount) mostVisitedIndex.push(index)
    })
    // console.log(mostVisitedIndex)
    return mostVisitedIndex
};

// console.log(mostVisited(3,[3,2,1,2,1,3,2,1,2,1,3,2,3,1]))

// console.log(mostVisited(2,[2,1,2,1,2,1,2,1,2]))

// console.log(mostVisited(7,[1,3,5,7]))

console.log(mostVisited(4,[1,4,1,2,1,3,4,2,3,2,3,4,3,1,2,4,1,2,1,3,4,1,4,2,3,1,4,2,3,2,4,2,4,1,3,1,3,4,1,3,2,1,2,1,4,2,4,3,1,2,4,3,1,2,3,2,3,2,3,2,3,4,3,2,1,2,3,4,3,1,2,4,2,1,2,4,2,4,1,2,3,1,4]))