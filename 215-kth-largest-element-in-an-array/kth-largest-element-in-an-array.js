/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let minHeap = new PriorityQueue((a,b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        minHeap.enqueue(nums[i])
        if(minHeap.size() > k) {
            minHeap.dequeue();
        }
       
    }
    return minHeap.dequeue()
};