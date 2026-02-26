/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.arr = w;
    let sum = this.arr.reduce((a, b) => {
        return a + b
    }, 0);
    this.probArr = new Array(w.length);
    for (let i = 0; i < w.length; i++) {
        this.probArr[i] = this.arr[i] / sum
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    const random = Math.random(); // 0 to 1
    let cumulative = 0;

    for (let i = 0; i < this.probArr.length; i++) {
        cumulative += this.probArr[i];
        if (random < cumulative) {
            return i;
        }
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */