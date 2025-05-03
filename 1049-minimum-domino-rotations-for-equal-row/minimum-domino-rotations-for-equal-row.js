/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
    function findMaxOccurredValue(arr) {
        const freqMap = new Map();

        // Count frequency of each element
        for (const num of arr) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        // Find element with maximum frequency
        let maxCount = 0;
        let maxValue = null;

        for (const [num, count] of freqMap.entries()) {
            if (count > maxCount) {
                maxCount = count;
                maxValue = num;
            }
        }

        return maxValue;
    }
    let maxTop = findMaxOccurredValue(tops);
    let maxBottom = findMaxOccurredValue(bottoms);
    let dummyTops = [];
    let dummyBottom = [];
    tops.forEach((n, id) => {
        if (n !== maxTop) {
            dummyTops[id] = 0;
        } else {
            dummyTops[id] = 1;
        }
    });
    bottoms.forEach((n, id) => {
        if (n !== maxBottom) {
            dummyBottom[id] = 0;
        } else {
            dummyBottom[id] = 1;
        }
    });
    let min = Infinity;
    let ts = 0;
    let bs = 0;
    //console.log(dummyTops, maxTop, dummyBottom, maxBottom)
    dummyTops.forEach((n, id) => {
        if (n !== 1) {
            if (bottoms[id] == maxTop) {
                dummyTops[id] = 1;
                ts++;
            }
        }
    });
    dummyBottom.forEach((n, id) => {
        if (n !== 1) {
            if (tops[id] == maxBottom) {
                dummyBottom[id] = 1;
                bs++;
            }
        }
    });
    if (dummyTops.every((e) => e == 1)) {
        min = Math.min(min, ts)
    }
    if (dummyBottom.every((e) => e == 1)) {
        min = Math.min(min, bs)
    }
    return min !== Infinity ? min : -1;
};