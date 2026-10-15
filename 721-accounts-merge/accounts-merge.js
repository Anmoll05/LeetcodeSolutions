
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    let parent = [];
    let rank = [];
    let emailToId = new Map();
    let emailToName = new Map();

    let id = 0;

    // Assign an ID to every unique email
    for (let account of accounts) {
        let name = account[0];

        for (let i = 1; i < account.length; i++) {
            let email = account[i];

            if (!emailToId.has(email)) {
                emailToId.set(email, id);
                emailToName.set(email, name);

                parent[id] = id;
                rank[id] = 0;
                id++;
            }
        }
    }

    function find(x) {
        if (parent[x] === x) return x;

        parent[x] = find(parent[x]);
        return parent[x];
    }

    function union(a, b) {
        let rootA = find(a);
        let rootB = find(b);

        if (rootA === rootB) return false;

        if (rank[rootA] < rank[rootB]) {
            parent[rootA] = rootB;
        } else if (rank[rootA] > rank[rootB]) {
            parent[rootB] = rootA;
        } else {
            parent[rootB] = rootA;
            rank[rootA]++;
        }

        return true;
    }

    // Connect all emails belonging to the same account
    for (let account of accounts) {
        let firstEmailId = emailToId.get(account[1]);

        for (let i = 2; i < account.length; i++) {
            let currentEmailId = emailToId.get(account[i]);
            union(firstEmailId, currentEmailId);
        }
    }
    console.log(emailToId)

    // Group emails by their final DSU root
    let groups = new Map();

    for (let [email, emailId] of emailToId) {
        let root = find(emailId);

        if (!groups.has(root)) {
            groups.set(root, []);
        }

        groups.get(root).push(email);
    }
    //console.log(groups)
    // Sort emails and prepend the account name
    let result = [];

    for (let [root, emails] of groups) {
        emails.sort();

        let name = emailToName.get(emails[0]);
        result.push([name, ...emails]);
    }

    return result;
};
