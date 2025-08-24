/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let loosers = {};
    let winners = {};
    for (let [winner,looser] of matches) {
        winners[winner] = true;
        loosers[looser] = ++loosers[looser] || 1;
    }
    let res = [[], []];
    for (let k in winners) {
        if (!(k in loosers)) {
            res[0].push(parseInt(k))
        }
    };
    for (let k in loosers) {
        if (loosers[k] == 1) {
            res[1].push(parseInt(k))
        }
    }
    return res;
};