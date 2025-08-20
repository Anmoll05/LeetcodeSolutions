/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
   points.sort((a,b) => a[1] - b[1]);
   let currEnd = points[0][1];
   let teer = 0;
   for (let i = 1; i < points.length; i++) {
     const ele = points[i];
     if(ele[0] <= currEnd) {
        continue;
     } else {
        teer++;
        currEnd = points[i][1]
     }
   }
   return teer + 1;
};
