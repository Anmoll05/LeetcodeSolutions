/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length===0) return 0;
    let parent = {};
    let size = {};
    const UnionFind = function(nums) {
        nums.forEach((e) => {
            parent[e] = e;
            size[e] = 1;
        });

        this.find = (n) => {
            if(parent[n] == n) return n;
            parent[n] = this.find(parent[n]);
            return parent[n];
        }

        this.union = (m,n) => {
            const rootM = this.find(m);
            const rootN = this.find(n);

            const rankM = size[rootM];
            const rankN = size[rootN];

            if (rootM == rootN) return;
            if (rankM < rankN) {
                size[rootN] += size[rootM];
                parent[rootM] = rootN;
            } else {
                size[rootM] += size[rootN];
                parent[rootN] = rootM;
            }
        }
    }

    const uf = new UnionFind(nums);

    for (let num of nums) {
        if ((num - 1) in parent) {
            uf.union(num - 1, num);
        }
    }

    let max = 0;
    for (let num of nums){
        max = Math.max(max, size[num]);
    }

    return max;
};