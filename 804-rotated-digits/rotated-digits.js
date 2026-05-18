/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    const myMirror = {
        '0': '0',
        '1': '1',
        '2': '5',
        '5': '2',
        '6': '9',
        '8': '8',
        '9': '6'
    };

    let res = 0;

    for (let i = 1; i <= n; i++) {
        let temp = '';
        let str = i.toString();

        for (let j = 0; j < str.length; j++) {
            if (!(str[j] in myMirror)) {
                temp = '';
                break;
            }

            temp += myMirror[str[j]];
        }

        if (temp && temp !== str) {
            res++;
        }
    }

    return res;
};