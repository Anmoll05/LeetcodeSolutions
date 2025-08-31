/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let l = 0;
    let q = [];
    let dict = {};
    for (let w of wordList) {
        dict[w] = true;
    }
    let vis = {};
    if (!(endWord in dict)) return 0;
    q.push(beginWord);
    vis[beginWord] = true;
    while (q.length) {
        let s = q.length;
        for (let i = 0; i < s; i++) {
            let cur = q.shift();
            if (cur == endWord) {
                return l + 1;
            }
            const curArr = cur.split("");
            for (let j = 0; j < curArr.length; j++) {
                const curChar = curArr[j];
                for (let k = 0; k < 26; k++) {
                    const replChar = String.fromCharCode(97 + k);
                    if (replChar !== curChar) {
                        curArr[j] = replChar;
                        const key = curArr.join("");
                        //console.log(key)
                        if (key in dict && !(key in vis)) {
                            q.push(key);
                            vis[key] = true;
                        }

                    }
                }
                //console.log('j', j)
                curArr[j] = cur[j];
            }
        }
        //console.log('q', q)
        l++;
    }
    return 0;
};