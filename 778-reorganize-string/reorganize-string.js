/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (str) {
    let freq = {};
    let res = "";
    for (let s of str) {
        freq[s] = ++freq[s] || 1;
    };
    let maxHeap = [...Object.keys(freq)].sort((a, b) => freq[b] - freq[a]);
    while (maxHeap.length) {
        let i = 0;
        while (i < 2) {
            let node = maxHeap.shift();
            i++;
            res += node || "";
            freq[node] = --freq[node];
            if (freq[node] > 0) {
                maxHeap.push(node)
            }
        }
        maxHeap.sort((a, b) => freq[b] - freq[a]);
    }
    //console.log('res', res)
    for (let i = 0; i < res.length - 1; i++) {
        if (res[i] == res[i + 1]) {
            return "";
        }
    }
    return res;
};