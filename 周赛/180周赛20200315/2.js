/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.custorm = []
    this.custormLen = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.custormLen > this.custorm.length) this.custorm.push(x)
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.custorm.length == 0) return -1
    return this.custorm.pop();
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    if(this.custorm.length < k) {
        for(let i =0; i< this.custorm.length;i++) {
            this.custorm[i] += val
        }
    } else {
        for(let i =0; i< k;i++) {
            this.custorm[i] += val
        }
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */