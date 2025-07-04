var MyCalendarTwo = function() {
    this.arr = [];
};

MyCalendarTwo.prototype.book = function(startTime, endTime) {
    let points = [];
    points.push(...this.arr, [startTime, +1], [endTime, -1]); // fix here
    points.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1]; // start before end on tie
    });

    let active = 0;
    for (let [time, delta] of points) {
        active += delta;
        if (active >= 3) return false; // triple booking
    }

    // If valid, store the new event
    this.arr.push([startTime, +1], [endTime, -1]);
    return true;
};