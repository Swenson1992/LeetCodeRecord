/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let result = 0;
    for(const n of nums) {
        let t = [];
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                t.push(i);
                if (i * i !== n) {
                    t.push(n / i);
                }
            }
            if (t.length > 2) {
                break;
            }
        }
        if (t.length === 2) {
            result += t[0] + t[1] + 1 + n;
        }
    }
    return result;
};