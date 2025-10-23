/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    let pq = new PriorityQueue((a,b) => {
        if(a[0] == b[0]) {
            return a[1] - b[1]
        }
        return a[0] - b[0];
    });
    for (let i = 0; i < nums.length; i++) {
        pq.enqueue([nums[i], i]);
    }
    let mark = {};
    let s = 0;
    while (!pq.isEmpty()) {
        const [ele, idx] = pq.dequeue();
        if (!(idx in mark)) {
            s += ele;
            mark[idx] = true;
            mark[idx - 1] = true;
            mark[idx + 1] = true;
        }
    }
    return s;
};