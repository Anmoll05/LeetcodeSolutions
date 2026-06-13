/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;
    let len = 0;
    let temp = head;
    while (temp) {
            temp = temp.next;
            len++;
        }
    k = k % len;
    while (k) {
    temp = head;
    let prev = null;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        temp.next = head;
        prev.next = null;
        head = temp;
        k--;
    }
    return head;
};