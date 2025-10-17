/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
// var findMaximizedCapital = function(k, w, profits, capital) {
//     let maxHeap = new PriorityQueue((a,b) => {
//         if (a[0] == b[0]) {
//             return capital[b[1]] - capital[a[1]];
//         }
//         return b[0] - a[0];
//     });
//     for (let i = 0; i < profits.length; i++) {
//         maxHeap.enqueue([profits[i], i])
//     }
//     while (k) {
//         let temp = [];
//         while (!maxHeap.isEmpty() && capital[maxHeap.front()[1]] > w) {
//             temp.push(maxHeap.dequeue())
//         }
//         if (!maxHeap.isEmpty() && capital[maxHeap.front()[1]] <= w) {
//             w = w + maxHeap.dequeue()[0];
            
//         }
//         k--;
//         while(temp.length) {
//             maxHeap.enqueue(temp.pop())
//         }
//     }
//     return w;
// };

var findMaximizedCapital = function(k, w, profits, capital) {
    const projects = [];
    for (let i = 0; i < profits.length; i++) {
        projects.push([capital[i], profits[i]]);
    }

    // Step 1: Sort by capital
    projects.sort((a, b) => a[0] - b[0]);

    // Step 2: Use max-heap for profits
    const maxHeap = new PriorityQueue((a,b) => b - a); // from 'datastructures-js/priority-queue' or LeetCode's built-in

    let i = 0;
    while (k > 0) {
        // Add all projects we can afford to the heap
        while (i < projects.length && projects[i][0] <= w) {
            maxHeap.enqueue(projects[i][1]); // store profit only
            i++;
        }

        // If we can’t do any project, break
        if (maxHeap.isEmpty()) break;

        // Pick the most profitable project
        w += maxHeap.dequeue();
        k--;
    }

    return w;
};
