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
    let dist = new Array(n).fill().map(() => [Infinity, Infinity]);
    dist[src] = [0,0];
    let adj = {};
    for (let [from,to,cost] of flights) {
        if (!adj[from]) adj[from] = [];
        adj[from].push([to, cost]);
    }
    const pq = new MinHeap();
    pq.push([0, src, 0]);
   // console.log(dist)
    while (!pq.isEmpty()) {
        const [stops, node, nodeCost] = pq.pop();
        if (stops > k) continue;

        adj[node]?.forEach((nei) => {
            //console.log(dist , 'adj', adj, 'node', node, 'nei', nei, 'dist[3')
            const currDist = dist[nei[0]][0];
            if (nodeCost + nei[1] < currDist) {
                dist[nei[0]] = [nodeCost + nei[1], stops + 1];
                pq.push([stops + 1, nei[0], nodeCost + nei[1]]);
            }
        })

    }
    return dist[dst][0] == Infinity ? -1 : dist[dst][0];
};