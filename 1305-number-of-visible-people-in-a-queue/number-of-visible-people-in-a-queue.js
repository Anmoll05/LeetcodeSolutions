var canSeePersonsCount = function(heights) {
    let st = [];
    let res = new Array(heights.length).fill(0);

    for (let i = heights.length - 1; i >= 0; i--) {

        // Every shorter person popped is visible
        while (
            st.length &&
            heights[st[st.length - 1]] < heights[i]
        ) {
            st.pop();
            res[i]++;
        }

        // First taller/equal person is also visible
        if (st.length) {
            res[i]++;
        }

        st.push(i);
    }

    return res;
};