/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(costs) {
    costs.sort((a,b) => b - a);
    let cost = 0;
    let temp = 0;
    for (let i = 0 ; i < costs.length; i++) {
        if((i+1)%3 == 0) {
            cost += temp;
            temp = 0;
        } else {
            temp += costs[i];
        }
    }
    return cost + temp;
};