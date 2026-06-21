/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b) => a - b);
    let res = 0;
    costs.forEach((e,i) => {
        if (coins) {
            if(e <= coins) {
                res++;
                coins -= e;
            }
        }
    });
    return res;
};