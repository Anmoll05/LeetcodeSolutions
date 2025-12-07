/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// O(n), O(n)
var insert = function (intervals, newInterval) {
  let newStart = newInterval[0]; // 1
  let newEnd =  newInterval[1]; // 5
  let left = []; //
  let right = []; //
  for (let i = 0; i < intervals.length; i++) { // 1
    let currStart = intervals[i][0]; // 6
    let currEnd = intervals[i][1]; // 9
   if (newStart > currEnd) {
        left.push(intervals[i]);
    } else if (newEnd < currStart) {
        right.push(intervals[i]);
    } else {
        newStart = Math.min(newStart, currStart); // 1
        newEnd = Math.max(newEnd, currEnd); // 5
    }
  }
  return [...left,[newStart, newEnd], ...right];
};