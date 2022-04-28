/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let myOrderedList = pushSmaller(list1, list2);
    return myOrderedList
};

//Using recursion, O(n+m) time O(n+m) extra space
const pushSmaller = function(l1,l2){
    let orderedList = new ListNode();
    if(!l1 && !l2){
        orderedList = orderedList.next;
        return orderedList;
    }
    if(l1){
        if(l2){
            if(l1.val<=l2.val){
                orderedList.val = l1.val;
                orderedList.next = pushSmaller(l1.next, l2);
            }
            else{
                orderedList.val = l2.val;
                orderedList.next = pushSmaller(l1, l2.next);
            }
        }
        else{
            orderedList.val = l1.val;
            orderedList.next = pushSmaller(l1.next, l2);
        }
    }
    else{
        orderedList.val = l2.val;
        orderedList.next = pushSmaller(l1, l2.next);
     }
    return orderedList;
}