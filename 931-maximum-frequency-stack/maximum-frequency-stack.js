var FreqStack = function () {
    this.freq = new Map();      // value -> frequency
    this.group = new Map();     // frequency -> stack of values
    this.maxFreq = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
    let f = (this.freq.get(val) || 0) + 1;
    this.freq.set(val, f);

    if (!this.group.has(f)) this.group.set(f, []);
    this.group.get(f).push(val);

    this.maxFreq = Math.max(this.maxFreq, f);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    let stack = this.group.get(this.maxFreq);
    let val = stack.pop();

    this.freq.set(val, this.freq.get(val) - 1);

    if (stack.length === 0) {
        this.group.delete(this.maxFreq);
        this.maxFreq--;
    }

    return val;
};
