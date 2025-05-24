 
 class MinHeap {
    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    enqueue(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    dequeue() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) return { element: this.heap.pop() };

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return { element: min };
    }

    _bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];

            if (element[0] >= parent[0]) break;
            this.heap[idx] = parent;
            this.heap[parentIdx] = element;
            idx = parentIdx;
        }
    }

    _bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let smallest = idx;

            if (
                leftIdx < length &&
                this.heap[leftIdx][0] < this.heap[smallest][0]
            ) {
                smallest = leftIdx;
            }

            if (
                rightIdx < length &&
                this.heap[rightIdx][0] < this.heap[smallest][0]
            ) {
                smallest = rightIdx;
            }

            if (smallest === idx) break;

            this.heap[idx] = this.heap[smallest];
            this.heap[smallest] = element;
            idx = smallest;
        }
    }
}

  var kSmallestPairs = function(nums1, nums2, k) {
    if (!nums1.length || !nums2.length) return [];
    const minHeap = new MinHeap({ priority: x => x[0] });
    const visited = new Set();
    const res = [];

    minHeap.enqueue([nums1[0] + nums2[0], 0, 0]);
    visited.add(`0,0`);

    while (res.length < k && !minHeap.isEmpty()) {
        const [sum, i, j] = minHeap.dequeue().element;
        res.push([nums1[i], nums2[j]]);

        if (j + 1 < nums2.length && !visited.has(`${i},${j + 1}`)) {
            minHeap.enqueue([nums1[i] + nums2[j + 1], i, j + 1]);
            visited.add(`${i},${j + 1}`);
        }

        if (i + 1 < nums1.length && !visited.has(`${i + 1},${j}`)) {
            minHeap.enqueue([nums1[i + 1] + nums2[j], i + 1, j]);
            visited.add(`${i + 1},${j}`);
        }
    }

    return res;
};