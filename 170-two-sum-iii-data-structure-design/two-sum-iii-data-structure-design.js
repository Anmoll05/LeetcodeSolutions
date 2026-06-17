
var TwoSum = function() {
    this.obj = {};
    this.arr = [];
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.arr.push(number);
    this.obj[number] = ++this.obj[number] || 1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (let c of this.arr) {
        if ((value - c) in this.obj) { // 0 - -1
            if ((value - c) == c) {
                if (this.obj[c] > 1) return true;
                continue;
            }
            return true;
        }
    }
    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */