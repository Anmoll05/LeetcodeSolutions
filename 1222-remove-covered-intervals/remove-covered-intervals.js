/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    let res = [];
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return b[1] - a[1]; // start before end on tie
    });
    let prev = intervals[0];
    let remove = 0;
    for (let i = 1; i < intervals.length; i++) {
        const [a,b] = intervals[i];
        if (a >= prev[0] && b <= prev[1]) {
            remove++;
        } else {
            prev = [a,b];
        }
    }
    return (intervals.length - remove)
};

// ----------
//   ----

// --------
//     --------
//       -

// --------
//           -------


// --
// ----
//   --