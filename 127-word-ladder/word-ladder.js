var ladderLength = function (beginWord, endWord, wordList) {
    let obj = {};
    for (let word of wordList) {
        obj[word] = true;
    }
    let vis = {};
    vis[beginWord] = true;
    if (!(endWord in obj)) return 0;
    let q = [];
    q.push([beginWord, 1]);
    let res = 0;
    while (q.length) {
        let [word, l] = q.shift();
        if (word == endWord) {
            res = l;
            break;
        }
        for (let i = 0; i < word.length; i++) {
            let temp = word.split('');
            for (let ch = 97; ch <= 122; ch++) {
                temp[i] = String.fromCharCode(ch);
                let newStr = temp.join('');
                if (newStr in obj) {
                    if (!(newStr in vis)) {
                        vis[newStr] = true;
                        q.push([newStr, l + 1]);
                    }
                }
            }
        }
    }
    return (res);
};