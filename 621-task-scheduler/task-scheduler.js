class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    add(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    extract() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return max;
    }

    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent] >= this.heap[idx]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }

    _heapifyDown() {
        let idx = 0;
        const length = this.heap.length;
        while (true) {
            let largest = idx;
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;

            if (left < length && this.heap[left] > this.heap[largest]) largest = left;
            if (right < length && this.heap[right] > this.heap[largest]) largest = right;

            if (largest === idx) break;
            [this.heap[largest], this.heap[idx]] = [this.heap[idx], this.heap[largest]];
            idx = largest;
        }
    }
}

var leastInterval = function(tasks, n) {
    const map = {};
    for (let task of tasks) {
        map[task] = (map[task] || 0) + 1;
    }

    const heap = new MaxHeap();
    Object.values(map).forEach(freq => heap.add(freq));

    let time = 0;

    while (heap.size() > 0) {
        const temp = [];
        let i = 0;

        while (i <= n) {
            if (heap.size()) {
                const count = heap.extract();
                if (count - 1 > 0) temp.push(count - 1);
            }
            time++;
            i++;

            if (heap.size() === 0 && temp.length === 0) break;
        }

        temp.forEach(freq => heap.add(freq));
    }

    return time;
};
