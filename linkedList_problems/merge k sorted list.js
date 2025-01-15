// Leetcode Problem:-23
// Brute force approach:
// i will take an array to store all the node of the k linked list node and the i will iterate through each node of the k linked list then sort the array in ascening order to get the sorted linked list.
// after then i will take a dummyNode to merge the k linked list then iterate through the array of nodes and
// store them in dummyNode.
// finally, after processing throguh each node and storing them in the dummyNode, I will return dummyNode.next, which contains the sorted singly linked list.
// Time Complexity: O(NLOGN)
// Explanation:
// - O(N): to iterate through all the nodes of the k linked lists to store them in an array.
// - O(NLOGN): to sort the array of nodes based on their values.
// - O(N): to iterate through the sorted array to merge the nodes into a single linked list.
// - Overall: O(N) + O(NLOGN) + O(N) = O(NLOGN)
// Space Complexity: O(N) to use an array to store all the nodes of the k linked lists.

var mergeKLists = function(lists) {
    let arr = [];
    for(let i = 0; i < lists.length; i++){
        let temp = lists[i];
        while(temp !== null){
            arr.push(temp);
            temp = temp.next;
        }
    }

    arr.sort((a,b) => a.val - b.val);
    let dummyNode = new ListNode(0);
    let temp = dummyNode;
    for(let node of arr){
        temp.next = node;
        temp = temp.next;
    }

    return dummyNode.next;
};

// Optimal Approach:
// I will use a MinPriorityQueue to maintain a priority queue and store the first node of each linked list into the heap.
// Then, I will create a dummy node to merge the linked lists into one by iterating through the heap.
// while iterating through the heap:
// I will extract the top node (smallest value) from the min-heap and add it to the dummyNode list because the top of the heap always contains the node with the minimum value.
// I will then check if the current node has a next node. If it exists, I will add that next node to the heap and the heap will automatically reorder itself to maintain the min-heap property, ensuring that the node with the smallest value is always at the top.
// After processing through all the nodes in the heap, I will return the dummyNode.next, which will point to the head of the merged linked list.
// Time Complexity: O(N * log K)
// Explanation:
// - Each of the N nodes is added to and removed from the heap once.
// - Each operation (add or remove) takes O(log K) time, where K is the number of linked lists.
// - Therefore, the total time complexity is O(N * log K), where N is the total number of nodes.
// Space Complexity: O(k) , to store the 'k' nodes in the heap.


var mergeKLists = function(lists){
    let heap = new MinPriorityQueue({priority: (x) => x.val});
    for(let i = 0; i < lists.length; i++){
        if(lists[i] !== null){
            heap.enqueue(lists[i]);
        }
    }

    let dummyNode = new ListNode(0);
    let temp = dummyNode;
    while(heap.size() > 0){
        let smallest = heap.dequeue().element;
        temp.next = smallest;
        temp = temp.next;
        if(smallest.next){
            heap.enqueue(smallest.next)
        }
    }

    return dummyNode.next;
}