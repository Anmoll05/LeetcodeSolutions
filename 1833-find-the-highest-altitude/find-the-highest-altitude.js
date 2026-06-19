/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let alt = 0; let max = 0;
    for (let i = 0; i < gain.length; i++) {
       alt += gain[i];
       max = Math.max(alt, max)
    }
    return max;
};