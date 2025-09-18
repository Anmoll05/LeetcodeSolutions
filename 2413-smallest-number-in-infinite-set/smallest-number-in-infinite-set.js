
var SmallestInfiniteSet = function() {
    this.lastRemoved = 1;
    this.addedAgain = {};
    this.removed = {};
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    //console.log('pop', this.lastRemoved, this.removed, this.addedAgain)
    let smallest = Infinity;
    for (let k in this.addedAgain) {
        smallest = Math.min(smallest, parseInt(k))
    }
    if (smallest < this.lastRemoved) {
        delete this.addedAgain[smallest];
        this.removed[smallest] = true;
        return smallest;
    }
    this.lastRemoved = this.lastRemoved + 1;
    this.removed[this.lastRemoved - 1] = true;
    return this.lastRemoved - 1;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if((num in this.removed)) {
        this.addedAgain[num] = true;
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */