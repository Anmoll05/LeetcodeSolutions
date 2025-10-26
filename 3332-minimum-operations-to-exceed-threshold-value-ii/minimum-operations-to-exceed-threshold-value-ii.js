var minOperations = function(nums, k) {
    let pq = new PriorityQueue((a,b) => a - b);
    for (let num of nums) {
        if (num < k) pq.enqueue(num);
    }
    let ans = 0;
    while (!pq.isEmpty()) {
        let fir = pq.dequeue();
        ans++;
        if (pq.isEmpty()) break;
        let sec = pq.dequeue();
        let temp = 2 * fir + sec;
        if (temp < k) pq.enqueue(temp);
    }
    return ans;
};