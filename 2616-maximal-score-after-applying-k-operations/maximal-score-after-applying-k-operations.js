/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    let pq = new PriorityQueue((a,b) => {
        return b[0] - a[0];
    });
    for (let i = 0; i < nums.length; i++) {
        pq.enqueue([nums[i], i]);
    }
    let res = 0
    while(k) {
        k--;
        const [amt, idx] = pq.dequeue();
        res += amt;
        nums[idx] = Math.ceil(amt / 3);
        pq.enqueue([nums[idx], idx])
    }
    return res;
};