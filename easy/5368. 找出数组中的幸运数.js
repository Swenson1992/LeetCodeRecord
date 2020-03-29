/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let map = new Map()
    arr.map(v => {
        map.has(v) ? map.set(v, map.get(v) + 1) : map.set(v, 1)
    })
    let result = -1
    for(const [key, value] of map){
        if(key == value) result = Math.max(result, key)
    }
    return result
};