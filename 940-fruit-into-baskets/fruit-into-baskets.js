var totalFruit = function (fruits) {
    let l = 0;
    let max = 0;
    let map = {};
    let distinct = 0;

    for (let r = 0; r < fruits.length; r++) {
        if (!map[fruits[r]]) distinct++;
        map[fruits[r]] = (map[fruits[r]] || 0) + 1;

        while (distinct > 2) {
            map[fruits[l]]--;
            if (map[fruits[l]] === 0) {
                delete map[fruits[l]];
                distinct--;
            }
            l++;
        }

        max = Math.max(max, r - l + 1);
    }

    return max;
};