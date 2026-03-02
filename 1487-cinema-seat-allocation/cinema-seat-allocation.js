var maxNumberOfFamilies = function(n, reservedSeats) {
    
    let map = new Map();
    
    // Group reserved seats by row
    for (let [row, col] of reservedSeats) {
        if (!map.has(row)) {
            map.set(row, new Set());
        }
        map.get(row).add(col);
    }
    
    let res = (n - map.size) * 2; // rows without reservations
    
    for (let [row, seats] of map) {
        
        let left = !seats.has(2) && !seats.has(3) && 
                   !seats.has(4) && !seats.has(5);
        
        let right = !seats.has(6) && !seats.has(7) && 
                    !seats.has(8) && !seats.has(9);
        
        let middle = !seats.has(4) && !seats.has(5) && 
                     !seats.has(6) && !seats.has(7);
        
        if (left && right) {
            res += 2;
        } else if (left || right || middle) {
            res += 1;
        }
    }
    
    return res;
};