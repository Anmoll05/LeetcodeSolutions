/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    let foundOne = false;
    let foundTwo = false;
    let foundThree = false;
    triplets?.forEach(([a,b,c]) => {
        if (a > target[0] || b > target[1] || c > target[2]) {}
        else {
        if(a == target[0]) {
            foundOne = true;
        }
        if(b == target[1]) {
            foundTwo = true;
        }
        if(c == target[2]) {
            foundThree = true;
        }
        }
    });
    return foundOne && foundTwo && foundThree;
};