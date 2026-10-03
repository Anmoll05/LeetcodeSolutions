/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let q = [];
    q.push(["0000", 0]);
    let vis = {};
    let d = {
    };
    vis["0000"] = true;
    for (let de of deadends) d[de] = true;
    function getNextStates(str) {
    let result = [];
    for (let i = 0; i < 4; i++) {
        let digit = Number(str[i]);
        let inc = (digit + 1) % 10;
        result.push(str.slice(0, i) + inc + str.slice(i + 1));
        let dec = (digit + 9) % 10;
        result.push(str.slice(0, i) + dec + str.slice(i + 1));
    }

    return result;
}
    while(q.length) {
        let fnode  = q.shift();
        let node = fnode[0];
        let l = fnode[1];
        if (node in d) continue;
        if (node == target) return l;
        getNextStates(node)?.forEach((nei) => {
            if (!(nei in d) && !(nei in vis)) {
                q.push([nei, l + 1]);
                vis[nei] = true;
            }
        })
    }
    return -1;
};