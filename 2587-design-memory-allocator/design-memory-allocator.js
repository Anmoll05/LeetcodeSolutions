/**
 * @param {number} n
 */
var Allocator = function(n) {
    this.memory = Array.from({length: n}).fill(-1)
};

/** 
 * @param {number} size 
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function(size, mID) {
    // console.log(this.memory)
    for (let i = 0; i < this.memory.length; i++) {
        
        let j = i
        let tempSize = 0
        while (j < this.memory.length && this.memory[i] === -1 && this.memory[j] === this.memory[i] && tempSize < size) {
            j++
            tempSize++
        }

        if (tempSize === size) {
            for (let k = i; k < j; k++) {
                this.memory[k] = mID
            }
            return i
        }
    }
    return -1 
};

/** 
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.freeMemory = function(mID) {
    let freedMemory = 0
    for (let i = 0; i < this.memory.length; i++) {
        if (this.memory[i] === mID) {
            this.memory[i] = -1
            freedMemory++
        }
    }
    return freedMemory
};

/** 
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.freeMemory(mID)
 */