/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length && n; i++) {
        if (flowerbed[i] == 0) {
            if (!(flowerbed[i - 1]) &&  !(flowerbed[i + 1])) {
                flowerbed[i] = 1;
                n--;
            }
        }
    }
    return !n ? true : false;
};