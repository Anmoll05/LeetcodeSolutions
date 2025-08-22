
var SummaryRanges = function() {
    this.arr = [];
    //this.uni = {};
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
    this.arr.push(value);
    let uniqueArr = [...new Set(this.arr)];
    this.arr = [...uniqueArr];
    this.arr.sort((a,b) => a - b);
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    let res = [];
    if (!this.arr.length) return [];
    res.push([this.arr[0], this.arr[0]])
    for(let i = 1 ; i < this.arr.length; i++) {
        let curr = res[res.length - 1];
        if(curr[1] == this.arr[i] - 1) {
            curr[1] = this.arr[i];
        } else {
            res.push([this.arr[i], this.arr[i]])
        }
    }
    return res;
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */