let arr = [1, 2, 3]
// arr = [1]
let count = arr.reduce((a, b) => {
    if (b == 0) a += 1
    return a
}, 0)

let arr2 = arr.reduce((t, item) => t.concat(t.map(v => v.concat(item))), [[]])
console.log(arr2)