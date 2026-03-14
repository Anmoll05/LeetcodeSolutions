var getHappyString = function(n, k) {

    let res = [];
    let set = ['a','b','c'];

    const generate = (s) => {

        if (s.length === n) {
            res.push(s);
            return;
        }

        for (let ch of set) {

            if (s.length > 0 && s[s.length-1] === ch)
                continue;

            generate(s + ch);
        }
    }

    generate("");

    return res[k-1] || "";
};