/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var findMaxSum = function (nums1, nums2, k) {
    let bindedArr = [];
    for (let i = 0; i < nums1.length; i++) {
        bindedArr[i] = [nums1[i], nums2[i], i];
    }
    bindedArr.sort((a, b) => a[0] - b[0]);
    let minHeap = new PriorityQueue((a, b) => a - b);
    let res = [];
    let s = 0;
    for (let i = 0; i < bindedArr.length; i++) {
        while (minHeap.size() > k) {
            s -= minHeap.dequeue();
        }
        if (i > 0 && bindedArr[i - 1][0] === bindedArr[i][0]) {
            res[bindedArr[i][2]] = res[bindedArr[i - 1][2]];
        }
        else res[bindedArr[i][2]] = s;
        minHeap.enqueue(bindedArr[i][1]);
        s += bindedArr[i][1];
        
    }
    return res;
};