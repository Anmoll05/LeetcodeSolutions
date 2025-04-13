/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// O(n), O(n)
var insert = function (intervals, newInterval) {
  let [newStart, newEnd] = newInterval;
  let left = []; let right = [];

  for (let i = 0 ; i < intervals.length; i++) {
    let currStart = intervals[i][0]; // 6
    let currEnd = intervals[i][1]; // 9
    if (currEnd < newStart) { // 1
        left.push(intervals[i]);
    } else if (newEnd < currStart) { // 5
        right.push(intervals[i]);
    }
    else {
        newStart = Math.min(newStart, currStart);
        newEnd = Math.max(newEnd, currEnd);
    }
  }
  return [...left, [newStart, newEnd], ...right];
};