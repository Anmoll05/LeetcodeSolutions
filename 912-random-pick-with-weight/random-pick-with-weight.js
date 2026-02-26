var Solution = function(w) {
    this.prefix = [];
    this.total = 0;
    
    for (let weight of w) {
        this.total += weight;
        this.prefix.push(this.total);
    }
};

Solution.prototype.pickIndex = function() {
    const target = Math.random() * this.total;
    
    let left = 0;
    let right = this.prefix.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (target >= this.prefix[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
};