/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
    let max = -Infinity;
    let vis = {};
    const dfs = (ind) => {
        if (ind >= energy.length) return 0;
        if (ind in vis) return vis[ind];
        let take = energy[ind] + dfs(ind + k);
        vis[ind] = take;
        return take;
    };
    for (let i = 0; i < energy.length; i++) {
        max = Math.max(dfs(i), max);
    }
    return max;
};