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
 var deleteDuplicates = function(head) {
    if(!head){return null}
    let current = head;
    
    while(current.next!==null){
        if(current.val === current.next.val){
            current.next = current.next.next;
        }
        else{
            current = current.next;
        }
    }
    return head;
};

/*console.log(head);  
    if(!head){return null}
    let previous = head;
    let current = head.next;
    while(current!==null){
        if(previous.val === current.val){
            previous.next = current.next;
        }
        else{
            previous = previous.next;
        }
        current = current.next;
    }
    console.log(head);
    return head;
};*/