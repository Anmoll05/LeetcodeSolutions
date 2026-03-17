
var HitCounter = function() {
    this.arr = [];
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.arr.push(timestamp);
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    let c = 0 ;
    //console.log(this.arr)
    for (let i = this.arr.length - 1; i >= 0 && (timestamp - 300) < this.arr[i]; i--) {
        c++;
    }
    return c;
};
// 1 1 1 300 300 301
// 0 1 2 3.   4.  5


/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */