/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let obj = {};
    for (let w of words) {
        obj[w] = ++obj[w] || 1;
    }
    return (Object.keys(obj).sort((a,b) => {
        if(obj[a] == obj[b]) {
            return a.localeCompare(b);
        } return obj[b] - obj[a];
    }).slice(0,k));
};