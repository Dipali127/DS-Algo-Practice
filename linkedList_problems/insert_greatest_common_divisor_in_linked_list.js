// Asked by Amazon and google
// Leetcode Problem:- 2807
// Approach:
// - Base Case: If head is null or head.next is null, return head because the list is either empty or has only one node.
// - Otherwise, use two pointers: 'prev' pointing to the head and 'temp' pointing to the next node.
// - Run a while loop until 'temp' is not null.
// - For each pair of adjacent nodes ('prev' and 'temp'), calculate the GCD of their values using the function 'gcd'.
// - Create a new node with the calculated GCD value and insert it between 'prev' and 'temp'.
// - After inserting the GCD node, move 'prev' to 'temp' and 'temp' to the next node.
// Time Complexity: O(N * log(min(a, b)))
// - O(N): Traversing each node of the linked list.
// - O(log(min(a, b))): Computing the GCD of each pair of adjacent nodes.
// - Thus, the overall time complexity is O(N * log(min(a, b))).
// Space Complexity: O(1)
// - The iterative GCD function does not use extra space beyond a few variables.
// - If the GCD function were implemented recursively, the space complexity would be O(log(min(a, b))) due to recursion stack usage.


var insertGreatestCommonDivisors = function(head) {
    if(head === null || head.next === null){
        return head;
    }

    let prev = head;
    let temp = head.next;
    while(temp !== null){
        let gcdVal = gcd(prev.val, temp.val);
        let gcdNode = new ListNode(gcdVal);
        prev.next = gcdNode;
        gcdNode.next = temp;
        prev = temp;
        temp = temp.next;
    }

    return head;
};

function gcd(a,b){
    while(b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}