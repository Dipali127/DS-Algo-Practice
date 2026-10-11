// Leetcode Problem:- 128
// Brute force approach:
// Approach:
// Since the given array is unsorted, one straightforward approach is to
// first sort the array in ascending order. After sorting, all consecutive
// numbers will appear next to each other, making it easier to find the
// longest consecutive sequence.
//
// While traversing the sorted array:
// 1. If the current element is equal to the previous element,
//    it is a duplicate, so skip it.
// 2. If the current element is exactly 1 greater than the previous element,
//    then the consecutive sequence is continuing, so increment count.
// 3. Otherwise, the consecutive sequence is broken,
//    so reset count to 1 because the current element itself forms
//    a new sequence of length 1.
// During traversal, keep updating longSeq with the maximum sequence length found so far.
// Finally, return longSeq.
//
// Time Complexity: O(n log n), Explanation:-
// Sorting the array takes O(n log n).
// Traversing the array takes O(n).
// Therefore, the overall time complexity is O(n log n).
//
// Space Complexity: O(1) auxiliary space (ignoring the space used by the sorting algorithm).

var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;

    let longSeq = 1;
    nums.sort((a,b) => a-b);
    
    let count = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i-1]){
            continue;
        }else if(nums[i] === nums[i-1] + 1){
            count++;
        }else{
            count = 1;
        }

        longSeq = Math.max(longSeq, count);
    }

    return longSeq;
};

// Optimal Approach:
// Approach:
//
// Since the problem requires an O(n) solution, sorting cannot be used.
// Instead, store all elements in a HashSet.
// A HashSet provides O(1) average-time lookup, allowing us to quickly check whether a number exists.
// Traverse each unique number in the Set.
// For every number, first check whether its previous number (currentNum - 1) exists in the Set.
// If currentNum - 1 exists,then the current number cannot be the starting point of a consecutive sequence,
// so skip it.
// If currentNum - 1 does not exist, then the current number is the starting point of a new consecutive sequence.
// From that starting number, keep checking whether currentNum + 1 exists in the Set.
// If it exists, extend the sequence by:
//                                   - incrementing currentNum
//                                   - incrementing count
// Continue until the next consecutive number is not found.
// After finding the length of the current sequence, update longSeq with the maximum sequence length found so 
// far.
// Finally, return longSeq.
//
// Example:
// nums = [100, 4, 200, 1, 3, 2]
//
// Set = {100, 4, 200, 1, 3, 2}
//
// 100 -> 99 does not exist -> start sequence -> length = 1
// 4   -> 3 exists          -> skip
// 200 -> 199 does not exist -> start sequence -> length = 1
// 1   -> 0 does not exist -> start sequence
//        2 exists
//        3 exists
//        4 exists
//        length = 4
//
// Therefore, the answer is 4.
//
// Time Complexity: O(n), Explanation:
// Building the Set takes O(n).
// Traversing the Set takes O(n).
// Each number is expanded at most once while forming a sequence.
// Therefore, the overall time complexity is O(n).
//
// Space Complexity:
// O(n), because the HashSet stores all unique elements.

var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    let set = new Set(nums);
    let longSeq = 0;

    for (let num of set) {

        let currentNum = num;
        let count = 1;

        if (!set.has(currentNum - 1)) {

            while (set.has(currentNum + 1)) {
                currentNum++;
                count++;
            }

            longSeq = Math.max(longSeq, count);
        }
    }

    return longSeq;
};
