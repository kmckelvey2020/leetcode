/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    //O(n) time and O(1) space
    if(!head){return head};
    let curr = head;
    let temp;
    let reverseHead = new ListNode(curr.val, null);
    curr = curr.next;
    
    while(curr!==null){
        temp = curr.next;
        curr.next = reverseHead;
        reverseHead = curr;
        curr = temp;
    }
    return reverseHead;
};
/*
//slower solution, uses more memory (more new ListNodes)
 if(!head){return head};
    let curr = head;
    let reverseHead = new ListNode(curr.val, null);
    
    while(curr.next!==null){
        curr = curr.next;
        reverseHead = new ListNode(curr.val, reverseHead);
    }
    return reverseHead;
};*/