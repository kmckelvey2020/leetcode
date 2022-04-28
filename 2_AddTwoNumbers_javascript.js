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
    
    const addAndCarry = function(l1,l2,carry=0){
        let currDigit = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        let sumList = new ListNode(currDigit%10);
        carry = Math.floor(currDigit/10);
        if(l1?.next || l2?.next || carry > 0){
            sumList.next = addAndCarry(l1?.next, l2?.next, carry);
        }
        return sumList;
    }
        return addAndCarry(l1,l2);

};