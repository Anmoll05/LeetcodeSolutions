var numEquivDominoPairs = function(dominoes) {
    let map = new Map();
    let count = 0;
    for (let [a, b] of dominoes) {
        let key = a < b ? `${a},${b}` : `${b},${a}`;
        map.set(key, (map.get(key) || 0) + 1);
    }
    for (let val of map.values()) {
        count += val * (val - 1) / 2;
    }
    return count;
};