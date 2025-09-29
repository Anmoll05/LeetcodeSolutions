/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    const pq = new PriorityQueue((a, b) => b - a);
    for (let p of piles) {
        pq.enqueue(p);
    }
    let i = 1;
    while (i <= k) {
        let el = null;
        if (!pq.isEmpty()) {
            el = pq.dequeue();
            pq.enqueue(Math.ceil(el/2));
        }
        i++;
    }
    let  s = 0;
    while(!pq.isEmpty()) {
        s += pq.dequeue();
    }
    return s;
};