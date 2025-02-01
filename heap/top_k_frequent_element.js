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
// here, the above line extract the individual entries from hash map using spread operator and add them into the array and each entries are stored in array which i will then add in the main array.
// After that, the array is sorted in descending order based on the frequency of the elements.
// For example, given the array [1, 1, 1, 2, 2, 3], the map entries will be stored as: [[1, 3], [2, 2], [3, 1]].

var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }else{
            map.set(nums[i], 1);
        }
    }

     // Step 2: Sort the map entries by frequency in descending order
     //let sortedArr = [...map.entries()].sort((a,b) => b[1] - a[1])
     // you can do the step 2 like this below format also
     let newArr = [];
     for(let entry of map.entries()){
        newArr.push(entry);
     }

     newArr.sort((a,b) => b[1] - a[1]);

      // Step 3: Extract the top k elements
      let result = [];
      for(let i = 0; i < k; i++){
        result.push(newArr[i][0]);
      }

      return result;
};

// Optimal Approach:
// Approach:
// First, I will create a hash map to store the frequency of each element of the nums array.
// Then, I will use of a min-heap (using MinPriorityQueue) to keep track of the k most frequent elements. 
// The heap will store each map entry (key and value), where the frequency is the priority used by the heap for comparisons.
// While adding the elements to the heap, if the heap size exceeds k, I will remove the element with the least frequency,  as the heap is ordered by frequency. This ensures that only the top k most frequent elements remain in the heap.
// Once the k most frequent elements are added to the heap, I will extract them and store them in the result array.
// Finally, I will return the result array containing the k most frequent elements.

// Time Complexity: O(N * log K)
// Explanation:
// - O(N): To iterate through the array and store the frequency of elements in the hash map.
// - O(N * log K): To iterate over the hash map entries and store the k most frequent elements in the heap.
//   (Note: The heap stores only the k most frequent elements, and heap operations (insertion/removal) take O(log K) time.)
// - O(k * log K): To extract k elements from the heap (each removal operation takes O(log K)).
// Overall Time Complexity: O(N) + O(N * log K) + O(k * log K) ≈ O(N * log K).

// Space Complexity:
// - O(N): For the hash map to store frequencies of up to N distinct elements.
// - O(k): For the min heap to store at most k elements.
// - O(k): For the result array to store k elements.
// Overall Space Complexity: O(N) + O(k) + O(k) ≈ O(N).

// Example:
// Given the array: nums = [1, 1, 1, 2, 2, 3] and k = 2:
// Frequency map: {1: 3, 2: 2, 3: 1}
// Min heap (after insertion): [[3, 1], [2, 2], [1, 3]]
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
    for(let entry of map.entries()){
        minHeap.enqueue(entry);
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
