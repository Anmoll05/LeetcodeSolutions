/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    let pq = new PriorityQueue((a, b) => b[1] - a[1]);
    a && pq.enqueue(['a', a]);
    b && pq.enqueue(['b', b]);
    c && pq.enqueue(['c', c]);
    let res = "";
    while (!pq.isEmpty()) {
        let temp = [];
        while (res.length >= 2 && !pq.isEmpty() && res[res.length - 2] == pq.front()[0] && res[res.length - 1] == pq.front()[0]) {
            const [ele, freq] = pq.dequeue();
            temp.push([ele, freq]);
        }
        if (pq.isEmpty()) break;
        if (!pq.isEmpty()) {
            const [ele, freq] = pq.dequeue();
            res += ele;
            if (freq - 1 > 0) {
                pq.enqueue([ele, freq - 1]);
            }
        }
        while (temp.length) {
            pq.enqueue(temp.pop())
        }
    }
    return res;
};