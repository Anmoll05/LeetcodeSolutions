/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let arr = [];
    let currCount = 0;

    for (let i = 0; i < words.length; i++) {

        // check before adding the word
        if (
            currCount +
            words[i].length +
            (currCount === 0 ? 0 : 1) >
            maxWidth
        ) {
            arr.push("|");
            currCount = 0;
        }

        arr.push(words[i]);
        currCount += words[i].length + (currCount === 0 ? 0 : 1);
    }

    let arrs = arr.join(" ").split("|");
    let res = [];

    for (let i = 0; i < arrs.length; i++) {
        let currLine = arrs[i].trim();

        if (!currLine) continue;

        let wordsInLine = currLine.split(/\s+/);

        // Last line
        if (i === arrs.length - 1) {
            let line = wordsInLine.join(" ");
            line += " ".repeat(maxWidth - line.length);
            res.push(line);
            continue;
        }

        // Single word
        if (wordsInLine.length === 1) {
            let line = wordsInLine[0];
            line += " ".repeat(maxWidth - line.length);
            res.push(line);
            continue;
        }

        let totalChars = 0;
        for (let word of wordsInLine) {
            totalChars += word.length;
        }

        let totalSpaces = maxWidth - totalChars;
        let gaps = wordsInLine.length - 1;

        let evenSpaces = Math.floor(totalSpaces / gaps);
        let extraSpaces = totalSpaces % gaps;

        let line = "";

        for (let j = 0; j < gaps; j++) {
            line += wordsInLine[j];
            line += " ".repeat(
                evenSpaces + (j < extraSpaces ? 1 : 0)
            );
        }

        line += wordsInLine[gaps];
        res.push(line);
    }

    return res;
};