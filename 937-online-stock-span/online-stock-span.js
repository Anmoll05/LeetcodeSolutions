
var StockSpanner = function() {
    this.st = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.st.push(price);
    let res = 0;
    for (let i = this.st.length - 1; i >= 0 && this.st[i] <= price; i--) {
        if(this.st[i] <= price) {
            res++;
        }
    }
    return res;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */