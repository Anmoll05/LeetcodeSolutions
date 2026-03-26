/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.arr = nums;
    this.map = {};
    for (let i = 0; i < nums.length; i++) {
        this.map[nums[i]] = ++this.map[nums[i]] || 1;
    }
    this.i = 0
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    while(this.i < this.arr.length) {
        if(this.map[this.arr[this.i]] == 1) return this.arr[this.i]
        this.i = this.i + 1;
    }
    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
   this.map[value] = ++this.map[value] || 1;
   this.arr.push(value)
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */