var reverseBetween = function(head, left, right) {
    if (!head || left === right) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    // Step 1: Move prev to the node before reversal starts
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    // Step 2: Reverse sublist from left to right
    let curr = prev.next;
    let next = null;
    let reversePrev = null;

    for (let i = left; i <= right; i++) {
        next = curr.next;
        curr.next = reversePrev;
        reversePrev = curr;
        curr = next;
    }

    // Step 3: Connect reversed part with the rest
    let tailOfReversedSublist = prev.next;
    prev.next = reversePrev;
    tailOfReversedSublist.next = curr;

    return dummy.next;
};
