/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 * @test n = 5, m = 3 => 3
 * @test n = 10, m = 17 => 2
 */
var lastRemaining = function(n, m) {
    // let array = []
    // for (let index = 0; index < n; index++) {
    //     array.push(index)
    // }
    // let head = 0
    // while(array.length > 1) {
    //     head = (head + m - 1) % array.length;
    //     array.splice(head, 1);
    // }
    // return array[0]
    let result = 0;
    for (let index = 2; index <= n; index++) {
        result = (result + m) % index
    }
    return result
};

// lastRemaining(5,3)
console.log(lastRemaining(70866,116922))