
var MyCalendar = function() {
    this.list = [];
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(startTime, endTime) {
    //console.log(this.list)
    for (let i = 0; i < this.list.length; i++) {
        const [st, end] = this.list[i];
        if ((startTime < end && endTime > st) || (startTime >= st && endTime < end) || 
        (startTime <= st && endTime > st)) {
            return false;
        }
    }
    this.list.push([startTime, endTime]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */