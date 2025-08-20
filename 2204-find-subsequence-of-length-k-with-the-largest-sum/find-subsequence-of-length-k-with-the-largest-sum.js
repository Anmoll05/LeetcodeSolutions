/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let heap = [];

    for (let i = 0; i < nums.length; i++) {
        // Push (value, index) into heap
        heap.push([nums[i], i]);
        // Sort heap to keep only top k by value
        heap.sort((a, b) => a[0] - b[0]);  // min-heap by value
        if (heap.length > k) {
            heap.shift();  // remove smallest
        }
    }

    // Sort selected elements by index to preserve subsequence order
    heap.sort((a, b) => a[1] - b[1]);

    return heap.map(x => x[0]);
};
