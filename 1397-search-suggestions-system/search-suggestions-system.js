/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    let res = [];
    for (let i = 0; i < searchWord.length; i++) {
        // filtering the product on each search so that we can compare one current char only 
        products = products.filter(p => p[i] === searchWord[i]);
        res.push(products.slice(0, 3));
    }
    return res;
};