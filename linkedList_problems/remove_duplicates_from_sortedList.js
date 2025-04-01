// Leetcode Problem:- 83
// Optimal Approach  
// Approach:-  
// Base Case: If head is null or head.next is null, return head because the list is either empty or has only one node.  
// Otherwise, use a pointer 'temp' pointing to the head of the linked list.  
// Run a while loop until 'temp.next' is not null, and while running the loop:  
// - If temp.val === temp.next.val, update temp.next to temp.next.next to remove the duplicate node.  
// - Otherwise, move temp to temp.next.  
// After running the loop, return head, which now contains only unique nodes in the linked list.  

// Time Complexity: O(N), since we iterate through the linked list once.  
// Space Complexity: O(1), as no additional space is used.  
 
var deleteDuplicates = function(head) {
    if(head === null || head.next === null){
        return head;
    }
   
   let temp = head;
   while(temp.next !== null){
    if(temp.val === temp.next.val){
        temp.next = temp.next.next;
    }else{
        temp = temp.next;
    }
   } 

   return head;

};