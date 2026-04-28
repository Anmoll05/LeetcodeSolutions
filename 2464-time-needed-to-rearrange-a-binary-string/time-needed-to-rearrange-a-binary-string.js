var secondsToRemoveOccurrences = function (s) {
    const isStringValid = (arr) => {
        let foundZero = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '0') {
                foundZero = true;
            }
            if (foundZero && arr[i] === '1') return false;
        }
        return true;
    };

    let cs = s.split(''); // ✅ array now
    let c = 0;

    while (!isStringValid(cs)) {
        // console.log(cs.join('')); // optional debug

        for (let i = 0; i < cs.length - 1; i++) {
            if (cs[i] === '0' && cs[i + 1] === '1') {
                // swap
                cs[i] = '1';
                cs[i + 1] = '0';
                i++; // skip next
            }
        }
        c++;
    }

    return c;
};