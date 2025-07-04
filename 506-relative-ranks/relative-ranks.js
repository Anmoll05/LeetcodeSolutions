/**
 * @param {number[]} score
 * @return {string[]}
 */
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let n = score.length;
    let maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);

    for (let i = 0; i < score.length; i++) {
        maxHeap.enqueue([score[i], i]); // [score, original index]
    }
    let res = [];
    let i = 1;
    while (!maxHeap.isEmpty()) {
        const [a,b] = maxHeap.dequeue();
        switch (i) {
            case 1:
                res[b] = "Gold Medal";
                break;
            case 2:
                res[b] = "Silver Medal";
                break;
            case 3:
                res[b] = "Bronze Medal";
                break;
            default:
                res[b] = i.toString();
                break;
        }
        i = i + 1;       
    }
    return res;
}
