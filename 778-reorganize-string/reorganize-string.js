/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (str) {
    let freq = {};
    for (let s of str) {
        freq[s] = ++freq[s] || 1;
    }
    let maxHeap = new PriorityQueue((a, b) => freq[b] - freq[a]);
    for (let k in freq) {
        maxHeap.enqueue(k);
    }
    let res = '';
    //console.log(maxHeap.front())
    while (!maxHeap.isEmpty()) {
        let q = [];
        let pop = maxHeap.dequeue();
        res += pop;
        let i = 0;
        while (i < 1) {
            i++;
            if (!maxHeap.isEmpty()) {
                let poppedSecond = maxHeap.dequeue();
                res += poppedSecond;
                freq[poppedSecond] = freq[poppedSecond] - 1;
                if (freq[poppedSecond] <= 0) {
                    delete freq[poppedSecond];
                }
                else {
                    q.push(poppedSecond);
                }
            }
        }
        freq[pop] = freq[pop] - 1;
        if (freq[pop] <= 0) {
            delete freq[pop];
        }
        else {
            q.push(pop);
        }
        while (q.length) {
            maxHeap.enqueue(q.pop());
        }
    }
    for (let i = 1; i < res.length; i++) {
        if(res[i] == res[i - 1]) {
            return "";
        }
    }
    return res;
};