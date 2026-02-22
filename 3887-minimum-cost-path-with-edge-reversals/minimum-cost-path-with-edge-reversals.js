/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minCost = function (n, edges) {
    const src = 0;
    let adj = {};
    for (let edge of edges) {
        let u = edge[0];
        let v = edge[1];
        let w = edge[2];
        if (!adj[u]) adj[u] = [];
        adj[u].push([v, w]);
        if (!adj[v]) adj[v] = [];
        adj[v].push([u, 2 * w]);
    }
    // code here
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    let pq = new MinPriorityQueues();
    pq.enqueue(src, 0);
    while (pq.values.length) {
        let node = pq.dequeue();
        let currNode = node.val;
        let currDist = node.priority;
        adj[currNode?.toString()]?.forEach((nei) => {
            let neiNode = nei[0];
            let neiDist = nei[1];
            if (currDist + neiDist < dist[neiNode]) {
                dist[neiNode] = currDist + neiDist;
                pq.enqueue(neiNode, currDist + neiDist)
            }
        });
    }
    return dist[n-1] == Infinity ? -1 : dist[n-1];
};
class MinPriorityQueues {
    constructor() {
        this.values = []; // Min-Heap to store elements
    }

    // Enqueue: Add a new value and bubble it up to maintain heap property
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.bubbleUp();
    }

    // Dequeue: Remove the smallest priority element (root of the heap)
    dequeue() {
        if (this.values.length === 1) return this.values.pop(); // Only one element
        const min = this.values[0];
        this.values[0] = this.values.pop(); // Replace root with the last element
        this.bubbleDown();
        return min;
    }

    // Bubble up the last inserted element to its correct position
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.values[parentIdx];

            if (element.priority >= parent.priority) break; // Heap property satisfied
            this.values[idx] = parent; // Swap with parent
            idx = parentIdx;
        }
        this.values[idx] = element; // Place the element in its correct position
    }

    // Bubble down the root element to its correct position
    bubbleDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[idx];

        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let smallest = idx;

            if (leftChildIdx < length && this.values[leftChildIdx].priority < this.values[smallest].priority) {
                smallest = leftChildIdx;
            }

            if (rightChildIdx < length && this.values[rightChildIdx].priority < this.values[smallest].priority) {
                smallest = rightChildIdx;
            }

            if (smallest === idx) break; // Heap property satisfied
            this.values[idx] = this.values[smallest]; // Swap with the smaller child
            idx = smallest;
        }
        this.values[idx] = element; // Place the element in its correct position
    }
}