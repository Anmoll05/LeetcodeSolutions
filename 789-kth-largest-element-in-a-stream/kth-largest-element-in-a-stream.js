/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.heap = new MinPriorityQueue();
    this.k = k;
    nums.forEach((e) => {
        this.heap.enqueue(e);
    });
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) { // 4 5 8 2 , 2 3 4 5 8 - > 4, 5 5 8 -> 5, 5 8 10 -> 5, 8 9 10 -> 8, 
    this.heap.enqueue(val);
    //console.log(this.heap)
    while(this.heap.size() > this.k) {
        this.heap.dequeue();
    }
    if(this.heap.size() == this.k) {
        return this.heap.front();
    }
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */