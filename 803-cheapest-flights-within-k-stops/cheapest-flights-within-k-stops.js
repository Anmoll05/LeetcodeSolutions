/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(item) {
            this.heap.push(item);
            this._heapifyUp();
        }

        pop() {
            if (this.heap.length === 0) return null;
            const top = this.heap[0];
            const end = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = end;
                this._heapifyDown();
            }
            return top;
        }

        _heapifyUp() {
            let idx = this.heap.length - 1;
            while (idx > 0) {
                let parent = Math.floor((idx - 1) / 2);
                if (this.heap[idx][0] >= this.heap[parent][0]) break;
                [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];
                idx = parent;
            }
        }

        _heapifyDown() {
            let idx = 0;
            const length = this.heap.length;
            while (true) {
                let left = 2 * idx + 1;
                let right = 2 * idx + 2;
                let smallest = idx;

                if (left < length && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
                if (right < length && this.heap[right][0] < this.heap[smallest][0]) smallest = right;

                if (smallest === idx) break;
                [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
                idx = smallest;
            }
        }

        isEmpty() {
            return this.heap.length === 0;
        }
    }
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    let adj = {};
    for (let [from, to, cost] of flights) {
        if (!adj[from]) adj[from] = [];
        adj[from].push([to, cost]);
    }
    const pq = new MinHeap();
    pq.push([0, src, 0]);
    while (!pq.isEmpty()) {
        const [l, edge, currCost] = pq.pop();
        if (l > k + 1) continue;
        //console.log("edge", edge, "cost", currCost, "l", l)

        adj[edge]?.forEach((nei) => {
            //console.log('cc', dist[nei[0]])
            const currCostToNei = dist[nei[0]];
            //const currStops = dist[nei[0]][1];
            //console.log('rectified', currCost + nei[1])
            if ((currCostToNei > currCost + nei[1])) {
                //console.log("true for", dist[nei[0]], 'rectified', currCost + nei[1])
                if (l + 1 <= k + 1) {
                    dist[nei[0]] = currCost + nei[1];
                    pq.push([l + 1, nei[0], currCost + nei[1]]);
                }
            }
        });
        //console.log("PQ", pq)
    }
    return dist[dst] == Infinity ? -1 : dist[dst];
};