
var WordDictionary = function () {
    this.trie = {

    };
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.trie;
    for (let w of word) {
        if (!node[w]) node[w] = {};
        node = node[w];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    const findMe = (node, i) => {
        if (i == word.length) return node.isEnd == true;
        if (word[i] == '.') {
            for (let k in node) {
                if (findMe(node[k], i + 1)) {
                    return true;
                }
            }
        }
        if (!node[word[i]]) return false;

        return findMe(node[word[i]], i + 1);

    }
    return (findMe(this.trie, 0));
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */