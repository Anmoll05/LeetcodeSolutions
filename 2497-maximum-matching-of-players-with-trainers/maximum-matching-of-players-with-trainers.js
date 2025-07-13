/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(g, s) {
    g.sort((a,b) => b - a);
    s.sort((a,b) => b - a);
    let i = 0;
    let j = 0;
    let res = 0;
    // g = 
    while (i < g.length && j < s.length) {
        if(g[i] <= s[j]) {
            res++;
            i++
            j++;
        } else {
            i++;
        }
    }
    return res;
};