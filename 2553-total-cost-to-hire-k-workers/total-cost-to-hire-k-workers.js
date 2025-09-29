class MinHeaps {
    constructor(comparator = (a, b) => a - b) {
        this.data = [];
        this.comparator = comparator;
    }
    size() { return this.data.length; }
    isEmpty() { return this.data.length === 0; }
    peek() { return this.data[0]; }
    push(val) {
        this.data.push(val);
        this._bubbleUp(this.data.length - 1);
    }
    pop() {
        if (this.isEmpty()) return null;
        const top = this.data[0];
        const end = this.data.pop();
        if (!this.isEmpty()) {
            this.data[0] = end;
            this._bubbleDown(0);
        }
        return top;
    }
    _bubbleUp(idx) {
        const element = this.data[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.data[parentIdx];
            if (this.comparator(element, parent) >= 0) break;
            this.data[idx] = parent;
            idx = parentIdx;
        }
        this.data[idx] = element;
    }
    _bubbleDown(idx) {
        const length = this.data.length;
        const element = this.data[idx];
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let swap = null;
            if (leftIdx < length && this.comparator(this.data[leftIdx], element) < 0) {
                swap = leftIdx;
            }
            if (rightIdx < length &&
                this.comparator(this.data[rightIdx], swap === null ? element : this.data[leftIdx]) < 0) {
                swap = rightIdx;
            }
            if (swap === null) break;
            this.data[idx] = this.data[swap];
            idx = swap;
        }
        this.data[idx] = element;
    }
}

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let ans = 0;
    let l = 0;
    let r = costs.length - 1;

    const h1 = new MinHeaps((a, b) => a - b);
    const h2 = new MinHeaps((a, b) => a - b);

    for (let i = 0; i < candidates; i++) {
        if (l <= r) h1.push(costs[l++]);
    }
    for (let i = 0; i < candidates; i++) {
        if (l <= r) h2.push(costs[r--]);
    }

    for (let i = 0; i < k; i++) {
        if (h1.isEmpty() && h2.isEmpty()) break;

        let pick;
        if (h1.isEmpty()) {
            pick = h2.pop();
            if (l <= r) h2.push(costs[r--]);
        } else if (h2.isEmpty()) {
            pick = h1.pop();
            if (l <= r) h1.push(costs[l++]);
        } else {
            if (h1.peek() <= h2.peek()) {
                pick = h1.pop();
                if (l <= r) h1.push(costs[l++]);
            } else {
                pick = h2.pop();
                if (l <= r) h2.push(costs[r--]);
            }
        }
        ans += pick;
    }

    return ans;
};
