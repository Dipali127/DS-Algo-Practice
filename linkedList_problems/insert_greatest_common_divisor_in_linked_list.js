// Asked by Amazon
// Leetcode Problem:- 2807
// Optimal Approach:
// Approach:-
// Base Case:- If head is null or head.next is null, return head because there is either no list or only one node.
// otherwise, use a pointer 'current' which will point to the head of the linked list.
// run a 'while loop' until 'current' is not null and 'current.next' is not null. 
// for each pair of adjacent nodes ('current' and 'current.next'), calculate the 'GCD' of their values by calling the function 'GCD'.
// create a new node with the calculated GCD value and insert this new node between 'current' and 'current.next'.
// after inserting, move the 'current' pointer to the node after the newly inserted GCD node.
// TC:- O(N * log(min(a, b))), Explanation:-
// O(N):- to traverse each node of the linked list.
// O(LOG(min(a,b))):- to compute the GCD of each pair of nodes..
// SO, overall TC:- O(N) * O(LOG(min(a,b))), as for each node of linked list, we call the 'GCD function'.
// SC:- O(min(a,b)), due to the recursion stack used by the GCD function.

var insertGreatestCommonDivisors = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    let current = head;

    // Traverse the list until the second-last node
    while (current !== null && current.next !== null) {
        let v1 = current.val;
        let v2 = current.next.val;

        // Calculate GCD of current node value and next node value
        let gcd = GCD(v1, v2);

        // Create a new node with the GCD value
        let gcdNode = new ListNode(gcd);

        // Insert the GCD node between current and current.next
        gcdNode.next = current.next;
        current.next = gcdNode;

        // Move current to the node after the inserted GCD node
        current = gcdNode.next;
    }

    return head;

    // Helper function to calculate GCD using Euclidean algorithm
    function GCD(a, b) {
        if(a === b){
            return a;
        }

        if(a > b){
            return GCD(a - b, b);
        }else{
            return GCD(a, b - a);
        }
    }
};
