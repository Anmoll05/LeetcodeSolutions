/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    function areMapsEqual(map1, map2) {
        if (map1.size !== map2.size) return false;

        for (let [key, value] of map1) {
            if (!map2.has(key) || map2.get(key) !== value) {
                return false;
            }
        }

        return true;
    }
    let l = 0;
    let r = 0;
    let map1 = new Map();
    for (let i = 0; i < s1.length; i++) {
        map1.set(s1[i], (map1.get(s1[i]) || 0) + 1);
    }
    let map2 = new Map();
    r = s1.length - 1;
    for (let i = 0; i <= r; i++) {
        map2.set(s2[i], (map2.get(s2[i]) || 0) + 1);
    }
   
    while (r < s2.length && l <= r) {
        if(areMapsEqual(map1,map2)) return true;
        let lfreq = map2.get(s2[l]);
        if( lfreq == 1) {
            map2.delete(s2[l])
        } else {
            map2.set(s2[l], lfreq - 1);
        }
        l++;
        r++;    
        map2.set(s2[r], (map2.get(s2[r]) ||  0) + 1);
    }
    return false;
};