/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    const minHeap = [];
    trips.sort((a,b) => a[1] - b[1]);
    //console.log(trips)
    let c = capacity
    for (let i = 0; i < trips.length; i++) {
        //console.log(minHeap, c)
        while(minHeap.length && minHeap[0][0] <= trips[i][1]) {
            c = c + minHeap[0][1];
            minHeap.shift();
            //console.log('c after popped',c)
        }
        if(minHeap.length && minHeap[0][0] > trips[i][1]) {
            //console.log('in if');
            if(c < trips[i][0]) {
                return false;
            }
        }
        if (trips[i][0] > c) return false;
        minHeap.push([trips[i][2], trips[i][0]]);
        c = c - trips[i][0];
        minHeap.sort((a,b) => a[0] - b[0])
    }
    return true;
};