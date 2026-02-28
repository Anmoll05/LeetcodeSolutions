var maxLength = function (arr) {

    const dp = (ind, set) => {
        if (ind >= arr.length) return 0;

        let currWord = arr[ind];

        // 🔥 Check if word itself has duplicates
        let wordSet = new Set(currWord);
        if (wordSet.size !== currWord.length) {
            return dp(ind + 1, set);  // skip directly
        }

        let canTake = true;

        // 🔥 Check conflict with existing set
        for (let c of currWord) {
            if (set[c]) {
                canTake = false;
                break;
            }
        }

        let take = 0;

        if (canTake) {
            for (let c of currWord) {
                set[c] = 1;
            }

            take = currWord.length + dp(ind + 1, set);

            // backtrack
            for (let c of currWord) {
                delete set[c];
            }
        }

        let notTake = dp(ind + 1, set);

        return Math.max(take, notTake);
    };

    return dp(0, {});
};