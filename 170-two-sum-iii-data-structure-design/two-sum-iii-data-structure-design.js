
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
    this.obj[number] = this.arr.length - 1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (let i = 0; i < this.arr.length; i++) {
        let e = this.arr[i];

        if ((value - e) in this.obj &&
            i !== this.obj[value - e]) {
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