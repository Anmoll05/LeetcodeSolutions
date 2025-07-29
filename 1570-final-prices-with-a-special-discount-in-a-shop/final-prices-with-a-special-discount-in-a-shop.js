/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let st = [];
    let nse = [];
    for (let i = prices.length - 1; i >= 0; i--) {
        while (st.length && st[st.length - 1] > prices[i]) {
            st.pop();
        }
        if (!st.length) {
            nse[i] = 0;
        } else {
            nse[i] = st[st.length - 1];
        }
        st.push(prices[i]);
    }
    for (let i = 0; i < prices.length; i++) {
        prices[i] = prices[i] - nse[i];
    }
    return prices;
};