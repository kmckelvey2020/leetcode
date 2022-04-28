/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let target = head;
    let curr = head;
    //O(n) time and O(1) extra space
    //move curr n nodes along the list
    for(let i=0; i<n; i++){
        if(curr.next){
            curr = curr.next;
        }
        else{//list is not n units long, eliminate first node
            head = head.next;
            return head;
        }
    }
    
    //after target and curr are n units apart, move them together
    //until curr hits null and target will be n units from end
    while(curr.next){
        target = target.next;
        curr = curr.next;
    }
    
    target.next = target.next.next;
    return head;
};