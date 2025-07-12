var mostBooked = function (n, meetings) {
    // Min-heap: [endTime, roomNumber]
    const minHeap = new PriorityQueue((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });

    // Room usage count
    const roomUsage = new Array(n).fill(0);

    // Sort meetings by start time
    meetings.sort((a, b) => a[0] - b[0]);

    // Available rooms (as min-heap by room number)
    const availableRooms = new PriorityQueue((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        availableRooms.enqueue(i);
    }

    for (let i = 0; i < meetings.length; i++) {
        const [start, end] = meetings[i];

        // Free up rooms that have ended before the current meeting starts
        while (!minHeap.isEmpty() && minHeap.front()[0] <= start) {
            const [_, roomNum] = minHeap.dequeue();
            availableRooms.enqueue(roomNum);
        }

        if (!availableRooms.isEmpty()) {
            // Use the smallest available room
            const room = availableRooms.dequeue();
            minHeap.enqueue([end, room]);
            roomUsage[room]++;
        } else {
            // Wait for the earliest room to free up
            const [nextFreeTime, room] = minHeap.dequeue();
            minHeap.enqueue([nextFreeTime + (end - start), room]);
            roomUsage[room]++;
        }
    }

    // Find the room with the most usage
    let maxUsage = -1;
    let result = -1;
    for (let i = 0; i < n; i++) {
        if (roomUsage[i] > maxUsage) {
            maxUsage = roomUsage[i];
            result = i;
        }
    }

    return result;
};
