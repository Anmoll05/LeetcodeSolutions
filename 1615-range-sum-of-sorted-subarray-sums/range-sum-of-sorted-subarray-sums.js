/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
    // const result = [];
    // const mod = 1000000007;
    // for (let i = 0; i < nums.length; i++) {
    //     let sum = 0; // running sum from i
    //     for (let j = i; j < nums.length; j++) {
    //         sum += nums[j];
    //         result.push(sum);
    //     }
    // }

    // result.sort((a, b) => a - b);
    // let res = 0;
    // for (let i = left - 1; i <= right - 1; i++) {
    //     res = (res + result[i]) % mod
    // }
    // return res
    const mod = 1000000007;
    let pq = new PriorityQueue((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0]; // min-heap by sum
    });

    // push all single-element subarrays
    for (let i = 0; i < n; i++) {
        pq.enqueue([nums[i], i]); // [currentSum, endIndex]
    }

    let s = 0;
    // pop 'right' smallest sums; add those in range [left, right]
    for (let cnt = 1; cnt <= right; cnt++) {
        const [curSum, endIdx] = pq.dequeue();

        if (cnt >= left) {
            s = (s + curSum) % mod;
        }

        const nextIdx = endIdx + 1;
        if (nextIdx < n) {
            pq.enqueue([curSum + nums[nextIdx], nextIdx]);
        }
    }

    return s;
};