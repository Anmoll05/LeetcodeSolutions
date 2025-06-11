var StockSpanner = function() {
    this.stack = []; // Each element is [price, span]
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;
    
    // Pop all elements with price <= current price and add their span
    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
        span += this.stack.pop()[1];
    }

    this.stack.push([price, span]);
    return span;
};
