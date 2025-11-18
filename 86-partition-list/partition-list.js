/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let s = new ListNode(0,null);
    let g = new ListNode(0,null);
    let temp = head;
    let s1 = s;
    let s2 = g;
    while (temp) {
        if(temp.val < x) {
            s.next = new ListNode(temp.val,null);
            s=s.next;
        } else {
            g.next = new ListNode(temp.val,null);
            g = g.next;
        }
        temp = temp.next
    }
    s.next = s2.next;
    return s1.next;
};