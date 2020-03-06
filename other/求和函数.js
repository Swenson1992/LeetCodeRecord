/**
 * 实现一个sum求和方案，满足sum(1)(2)() 为3，sum(1)(2)(3)(4)(5)() 为15
 */

function add () {
    let _args = Array.prototype.slice.call(arguments)
    let _adder = function() {
        if (arguments.length === 0) {
            return _adder.toString()
        }
        _args.push(...arguments)
        return _adder;
    };
    _adder.toString = function() {
        return _args.reduce(function (a, b) {
            return a+b
        });
    }
    return _adder;
}

console.log(add(1)(2)(3)(4)(5)());