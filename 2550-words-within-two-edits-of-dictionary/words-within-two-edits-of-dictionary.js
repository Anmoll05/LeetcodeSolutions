/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    let obj = {};
    if (queries[0].length <= 2) return queries;
    for (let w of dictionary) {
        obj[w] = true;
    }
    let res = [];
    for (let j = 0; j < queries.length; j++) {
        const w = queries[j];
        const wlen = w.length;
        for (let k in obj) {
            let diff = 0;
            let key = k;
            for (let i = 0 ; i < wlen; i++) {
                //console.log(key[i],k, w[i])
                if (key[i] !== w[i]) diff++;
                if (diff > 2) break;
            }
            if (diff < 3) { 
                res.push(w);
                break;
            }
        }
    }
    return res;
};