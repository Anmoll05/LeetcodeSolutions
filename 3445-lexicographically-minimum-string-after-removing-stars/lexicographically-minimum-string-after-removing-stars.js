/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
    let pq = new PriorityQueue((a, b) => {
        if (a[0] === b[0]) {
            // same alphabet → higher index first
            return b[1] - a[1];
        }
        // smaller alphabet first
        return a[0].localeCompare(b[0]);
    });
    let deletedInd = {};
    for (let i = 0; i < s.length; i++) {
        //console.log(pq.front())
        if (s[i] !== '*') {
            pq.enqueue([s[i], i]);
        } else {
            if (!pq.isEmpty()) {
                const popped = pq.dequeue();
                deletedInd[popped[1]] = true;
            }
        }
    }
    let res = '';
    for (let i = 0 ; i < s.length; i++) {
        if(s[i] !== '*' && !(i in deletedInd)) {
            res += s[i];
        }
    }
    return (res)
};