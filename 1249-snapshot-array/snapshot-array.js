class SnapshotArray {
  constructor(length) {
    this.snapshot = Array.from({ length }, _ => [0])
    this.snap_id = 0
  }
}

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  this.snapshot[index][this.snap_id] = val
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  return this.snap_id++
}

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
*/

SnapshotArray.prototype.get = function(index, snap_id) {
  const arr = this.snapshot[index]
  if(snap_id >= arr.length) return arr[arr.length - 1] || 0

  for(let i = snap_id; i >= 0; i--) {
    if(arr[i] != null) return arr[i]
  }

  return 0
}