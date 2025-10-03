var getOrder = function(tasks) {
    // Add index
    tasks = tasks.map((t, i) => [t[0], t[1], i]);
    // Sort by enqueue time
    tasks.sort((a, b) => a[0] - b[0]);

    let minHeap = new PriorityQueue((a, b) => {
        if (a[1] === b[1]) return a[2] - b[2]; // tie-break by index
        return a[1] - b[1]; // processing time
    });

    let res = [];
    let time = 0;
    let i = 0;

    while (res.length < tasks.length) {
        // Add all tasks available by current time
        while (i < tasks.length && tasks[i][0] <= time) {
            minHeap.enqueue(tasks[i]);
            i++;
        }

        if (!minHeap.isEmpty()) {
            const [enq, proc, idx] = minHeap.dequeue();
            time += proc; // advance time
            res.push(idx);
        } else {
            // If heap empty, jump to next task's enqueue time
            time = tasks[i][0];
        }
    }

    return res;
};
