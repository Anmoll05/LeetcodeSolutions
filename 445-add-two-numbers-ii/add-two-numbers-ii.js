/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let s1 = [];
    let s2 = [];
    let temp1 = l1;
    let temp2 = l2;
    while(temp1) {
        s1.push(temp1);
        temp1 = temp1.next;
    }
     while(temp2) {
        s2.push(temp2);
        temp2 = temp2.next;
    }
    let carry = 0;
    let s3 = [];
    let prev = null;
    while (s1.length || s2.length) {
        let s = (s1?.pop()?.val || 0) + (s2?.pop()?.val || 0) + carry;
        if (s > 9) {
            carry = 1;
            s = parseInt(s.toString()[1]);
        } else {
            carry = 0;
        }
        let newNode = new ListNode(s, prev);
        prev = newNode;
    }
    if(carry) {
        let newNode = new ListNode(1, prev);
        return newNode;
    }
    return prev;
};