const left = (n) => n * 2 + 1
const right = (n) => n * 2 + 2
const parent = (n) => Math.floor((n - 1) / 2)

class Heaps {
    // the heap size will be always equal k
    constructor(arr) {
        this.arr = [...arr]
        this.heapSum = arr.reduce((a, b) => a + b, 0)
        this.buildHeap()
    }

    // building heap with first k numbers
    buildHeap() {
        const lst = Math.floor(this.arr.length / 2) - 1
        for (let i = lst; i >= 0; i--) {
            const tmp = this.arr[i]
            if (right(i) < this.arr.length && this.arr[right(i)] < this.arr[left(i)]
                && this.arr[right(i)] < tmp) {
                this.swap(i, right(i))
                this.heapify(right(i))
            } else if (left(i) < this.arr.length && this.arr[left(i)] < tmp) {
                this.swap(i, left(i))
                this.heapify(left(i))
            }
        }
    }

    swap(i, j) {
        const tmp = this.arr[i]
        this.arr[i] = this.arr[j]
        this.arr[j] = tmp
    }

    heapify(i) {
        let minVal = this.arr[i]
        let minInd = i
        if (left(i) < this.arr.length && this.arr[left(i)] < minVal) {
            minVal = this.arr[left(i)]
            minInd = left(i)
        }
        if (right(i) < this.arr.length && this.arr[right(i)] < minVal) {
            minVal = this.arr[right(i)]
            minInd = right(i)
        }
        if (minInd !== i) {
            this.swap(i, minInd)
            this.heapify(minInd)
        }
    }

    getMin() {
        return this.arr[0]
    }

    getSum() {
        return this.heapSum
    }

    // instead of adding a new item, replace the minimal with the new value
    replaceMin(newVal) {
        this.heapSum -= this.arr[0]
        this.heapSum += newVal
        this.arr[0] = newVal
        this.heapify(0)
    }
}

var maxScore = function (nums1, nums2, k) {
    // merge two arrays nums1 and nums2
    // sort descending by values from nums2
    const sorted = []
    for (let i = 0; i < nums1.length; i++) {
        sorted.push([nums1[i], nums2[i]])
    }
    sorted.sort((a, b) => b[1] - a[1])

    // build a heap with first k elements of sorted nums1
    const heap = new Heaps(sorted.slice(0, k).map(el => el[0]))

    // heap.getSum() - total sum of all elements in the heap
    let maxScore = heap.getSum() * sorted[k - 1][1]

    // because sorted array sorted in descending order by second value (numbers from nums2)
    // each value sorted[i][1] will be the minimal in the range 0 .. i
    for (let i = k; i < sorted.length; i++) {
        const coef = sorted[i][1]

        // maximum possible sum of numbers from nums1 will be 
        // total heap sum minus the minimal plus the current element
        const sum = heap.getSum() - heap.getMin() + sorted[i][0]

        // if the current number is greater than minimal in the heap => replace it with the new value
        // heap will keep it size of k elements
        maxScore = Math.max(maxScore, coef * sum)
        if (sorted[i][0] > heap.getMin()) {
            heap.replaceMin(sorted[i][0])
        }
    }

    return maxScore
};