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
var middleNode = function(head) {
    let temp = head;
    let length = 0;
    while(head){
        length++;
        head = head.next;
    }
    length = Math.floor(length/2);
    for(let i=0; i<length; i++){
        temp = temp.next;
    }
    return temp;
};