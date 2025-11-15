/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let arr = [];
    points.forEach((e) => {
        arr.push(e[0])
    });
    arr.sort((a,b) => a - b);
    let max = 0;
    for (let i = 1 ; i < arr.length; i++) {
        max = Math.max(max, arr[i] - arr[i-1])
    }
    return max;
};