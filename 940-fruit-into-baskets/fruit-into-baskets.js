/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    if (fruits.length <= 2) return fruits.length;
    let max = -Infinity;
    let l = 0;
    let obj = {};
    for (let r = 0;r < fruits.length; r++) {
        obj[fruits[r]] = ++obj[fruits[r]] || 1;
        //console.log("obj", obj, Object.keys(obj).length)
        while (Object.keys(obj).length > 2) {
            obj[fruits[l]] = --obj[fruits[l]];
            if (obj[fruits[l]] < 1) delete obj[fruits[l]];
            l++;
        }
        max = Math.max(r - l + 1, max);
    }
    return max;
};