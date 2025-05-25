/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(nums, k) {
    if (nums.length % k !== 0) return false;
    const heap = new MinPriorityQueue();
    nums.forEach((e) => {
        heap.enqueue(e);
    });
    while (heap.size()) {
        let i = 0;
        let q = [];
        let lastScanned = null;
        while (i < k) {
            if (heap.size()) {
                let n = heap.dequeue();
                if (n == lastScanned) {
                    q.push(n);
                } else if (lastScanned !== null && n !== lastScanned + 1) {
                    return false;
                }
                else {
                    lastScanned = n;
                    i++;
                    //console.log('ls', lastScanned)
                }
            } else {
                return false;
            }
        };
        //console.log(q)
        while (q.length) {
            heap.enqueue(q.pop());
        };
    }
    return true;
};