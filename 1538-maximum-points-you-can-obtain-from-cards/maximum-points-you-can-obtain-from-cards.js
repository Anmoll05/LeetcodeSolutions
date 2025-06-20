/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const total = cardPoints.reduce((a,b) => {
        return a + b;
    }, 0); // 22
    let i = 0;
    let j = 0;
    let max = 1;
    // let currSum = 0;
    // for (let k = 0; k <= j; k++) {
    //     currSum += cardPoints[k];
    // }
    let s = 0;
    if ( k == cardPoints.length) return total;
    while (j < cardPoints.length) {
        s += cardPoints[j]; // 10
        if (j - i + 1 == cardPoints.length - k) {
            max = Math.max(max, total - s);
            s = s - cardPoints[i];
            i++;
        }
        j++; // 3
    }
    return max;
};