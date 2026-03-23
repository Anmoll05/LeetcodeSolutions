/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function(access_times) {
    let res = [];
    let obj = {};
    for (let [p,at] of access_times) {
        if (!(obj[p])) {
            obj[p] = [];
        }
        obj[p].push(parseInt(at));
    }
    for (let k in obj) {
        obj[k] = obj[k].sort((a,b) => a - b)
    }
    for (let k in obj) {
        for(let i = 0 ; i < obj[k].length; i++) {
            let curr = 1;
            for (let j = i + 1; j < obj[k].length; j++) {
                if (obj[k][j] - obj[k][i] < 100) {
                    curr++;
                }
            }
            if (curr  >= 3) {
                res.push(k);
                break;
            }
        }
    }
    return res;
};