/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map = {};
    let obj = {};
    let splits = s.split(" ");
    if (pattern.length !== splits.length) return false;
    //console.log(splits)
    // [ 'dog', 'constructor', 'constructor', 'dog' ]
    //.     a.      b.              b.          a
    //.    0.        1.             2.          3
    for (let i = 0; i < pattern.length; i++) {
        if (!map[pattern[i]]) {
            map[pattern[i]] = splits[i];
        } else {
            if (map[pattern[i]] !== splits[i]) {
                return false;
            }
        }
        console.log('above', obj, splits[i], splits[i] in obj, obj)
        if (!(obj.hasOwnProperty(splits[i]))) {
            obj[splits[i]] = pattern[i];
        } else {
            if (obj[splits[i]] !== pattern[i]) {
                return false;
            }
        }
        console.log(map,obj)
    }
    return true;
};