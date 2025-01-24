// Leetcode Problem:- 347
// Problem:- We are given an integer array nums and an integer k. We need to return the k most frequent elements (those k elements whose frequencies are the highest among all elements in the array) from the array nums.
// Brute Force Approach:
// Approach:
// I will use a hash map to store the frequency of each element in the 'nums' array.
// After that, I will add the map entries into an array and sort them in descending order so that I can easily get the most frequent elements from the array.
// Then, I will iterate from index 0 to less than k and add the k most frequent elements into the result array and return it.

// Time Complexity (TC): O(NLOGN)
// Explanation:
// O(N) to iterate through the 'nums' array and add their frequencies into the map.
// O(NLOGN) to sort the map entries after adding them to the array.
// O(K) to iterate through the sortedArr and collect the k most frequent elements.
// Overall TC: O(N) + O(NLOGN) + O(K) = O(NLOGN).

// Space Complexity (SC): O(N)
// O(N) to add all the map entries into the array.

// Note:
// let sortedArr = [...map.entries()].sort((a, b) => b[1] - a[1])
// Here, [...map.entries()] will add the key-value pairs of the map entries into sub-arrays and then store them in the main array. 
// After that, the array is sorted in descending order based on the frequency of the elements.
// For example, given the array [1, 1, 1, 2, 2, 3], the map entries will be stored as: [[1, 3], [2, 2], [3, 1]].

// var topKFrequent = function(nums, k) {
//     let map = new Map();
//     for(let i = 0; i < nums.length; i++){
//         if(map.has(nums[i])){
//             map.set(nums[i],map.get(nums[i])+1);
//         }else{
//             map.set(nums[i], 1);
//         }
//     }

//      // Step 2: Sort the map entries by frequency in descending order
//      let sortedArr = [...map.entries()].sort((a,b) => b[1] - a[1])

//       // Step 3: Extract the top k elements
//       let result = [];
//       for(let i = 0; i < k; i++){
//         result.push(sortedArr[i][0]);
//       }

//       return result;
// };

// Optimal Approach:
// Approach:
// first, I will create a hash map to store the frequency of each element in the nums array.
// then, I will use of a min heap using minPriorityQueue to keep track of the k most frequent elements. The heap will store pairs of [element, frequency], where the frequency is the primary key(priority used by heap) for comparison.
// while adding the elements to the heap, if the heap size exceeds k, I will remove the element with the least frequency. This ensures that only the top k most frequent elements remain in the heap.
// Once the heap is built, I will extract the top k frequent elements from the heap and store their corresponding elements in the result array.
// Finally, I will return the result array containing the k most frequent elements.
// Time Complexity:
// O(N): To iterate through the array and store the frequency of elements in the hash map.
// O(N * log k): To iterate over the hash map entries and maintain a heap of size k (each operation in the heap takes O(log k) as we are only storing the k most frequent element).
// O(k * log k): To extract k elements from the heap (each removal operation takes O(log k)).
// Overall Time Complexity: O(N) + O(N * log k) + O(k * log k) ≈ O(N * log k).

// Space Complexity:
// O(N): For the hash map to store frequencies of up to N distinct elements.
// O(k): For the min heap to store at most k elements.
// O(k): For the result array to store k elements.
// Overall Space Complexity: O(N) + O(k) + O(k) ≈ O(N).

// Example:
// Given the array: nums = [1, 1, 1, 2, 2, 3] and k = 2:
// Frequency map: {1: 3, 2: 2, 3: 1}
// Max heap (after insertion): [[3, 1], [2, 2], [1, 3]]
// Extract top k elements: [1, 2]

var topKFrequent = function(nums, k) {
    let map = new Map();
        for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }else{
            map.set(nums[i], 1);
        }
    } 

    let minHeap = new MinPriorityQueue({priority : (x) => x[1]});
    for(let [key, val] of map.entries()){
        minHeap.enqueue([key, val]);
        if(minHeap.size() > k){
            minHeap.dequeue();
        }
    }

    // Step 3: Extract the top k frequent elements
    let result = [];
    while(minHeap.size() > 0){
        result.push(minHeap.dequeue().element[0]);
    }
    return result;
}; 