var maxEvents = function(events) {
    events.sort((a, b) => a[0] - b[0]); // sort by start day
    let pq = new MinPriorityQueue(); // min-heap by end day
    let attended = 0;
    let i = 0;
    let n = events.length;
    let maxDay = Math.max(...events.map(e => e[1]));

    for (let day = 1; day <= maxDay; day++) {
        // add all events starting today
        while (i < n && events[i][0] === day) {
            pq.enqueue(events[i][1])
            i++;
        }

        // remove events that already ended
        while (!pq.isEmpty() && pq.front() < day) {
            pq.dequeue();
        }

        // attend event with earliest end
        if (!pq.isEmpty()) {
            pq.dequeue();
            attended++;
        }
    }

    return attended;
};
