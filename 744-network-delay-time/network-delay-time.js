/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let flights = times;
    let src = k;
     class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  //  this.length = this.values.length;
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
        if (leftChild.priority === element.priority) {
            if (leftChild.val < element.val) {
                swap = leftChildIdx;
            }
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
          if (rightChild.priority === element.priority) {
              if (
          (swap === null && rightChild.val < element.val) ||
          (swap !== null && rightChild.val < leftChild.val)
        ) {
          swap = rightChildIdx;
        }
          }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
 let adj = {};
 let prev = {};
 for (let i = 0 ; i < flights.length; i++) {
     if (!adj[flights[i][0]]) adj[flights[i][0]] = [];
     adj[flights[i][0]].push([flights[i][1], flights[i][2]]);
 }
 //   console.log(adj);
    let pq = new PriorityQueue();
    let dist = new Array(n + 1).fill(Number.MAX_VALUE);
    dist[src] = 0;
    pq.enqueue(src,0);
    while(pq.values.length) {
        let node = pq.dequeue();
       //  console.log('out map',pq,dist);
        adj[node.val.toString()]?.map((e) => {
            let n = e[0];
            let d = e[1];
            if (dist[n] > d + dist[node.val]) {
               // console.log('in map');
                dist[n] = d + dist[node.val];
                pq.enqueue(n, d + dist[node.val]);
            }
        });
    }
    dist.shift();
    let res = Math.max(...dist);
    return res === Number.MAX_VALUE ? -1 : res;
   
};