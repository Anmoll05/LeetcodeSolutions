/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
   this.capacity = capacity;
   this.cache = new Map(); // stores key-value pairs in insertion order
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) {
      return -1; // key not found
    }

    // If key exists → make it most recently used:
    // 1. Get the value
    const value = this.cache.get(key);

    // 2. Delete it from its current position
    this.cache.delete(key);

    // 3. Re-insert it at the end (most recently used)
    this.cache.set(key, value);

    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
     if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    // Insert as most recently used (at the end)
    this.cache.set(key, value);

    // If size exceeds capacity → remove least recently used (first element)
    if (this.cache.size > this.capacity) {
      // cache.keys().next().value gives the first inserted key
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */