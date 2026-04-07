// Leetcode Problem:-90
// A subset is any selection of elements from a set, including the empty set, since we can choose to exclude all elements.
// Example: for [1,2,3] 
// Subsets are:-
// []
// [1]
// [2]
// [3]
// [1,2]
// [1,3]
// [2,3]
// [1,2,3]

// This Problem comes under pick/not pick pattern because for every element, you have two choices: either take it or skip it.
// Example: [1,2]
//            []
//          /    \
//      pick 1   skip 1
//       /          \
//    [1]           []
//    /  \         /   \
// pick2 skip2  pick2 skip2
//  [1,2] [1]    [2]   []

// This generates:

// []
// [1]
// [2]
// [1,2]

// Another Example:- [1,2,3]
// dfs(0, [])
// │
// ├── pick 1 → dfs(1, [1])
// │   │
// │   ├── pick 2 → dfs(2, [1,2])
// │   │   │
// │   │   ├── pick 3 → dfs(3, [1,2,3]) → ✅ [1,2,3]
// │   │   │
// │   │   └── not pick 3 → dfs(3, [1,2]) → ✅ [1,2]
// │   │
// │   └── not pick 2 → dfs(2, [1])
// │       │
// │       ├── pick 3 → dfs(3, [1,3]) → ✅ [1,3]
// │       │
// │       └── not pick 3 → dfs(3, [1]) → ✅ [1]
// │
// └── not pick 1 → dfs(1, [])
//     │
//     ├── pick 2 → dfs(2, [2])
//     │   │
//     │   ├── pick 3 → dfs(3, [2,3]) → ✅ [2,3]
//     │   │
//     │   └── not pick 3 → dfs(3, [2]) → ✅ [2]
//     │
//     └── not pick 2 → dfs(2, [])
//         │
//         ├── pick 3 → dfs(3, [3]) → ✅ [3]
//         │
//         └── not pick 3 → dfs(3, []) → ✅ []

// Hint:- always use tree diagram which will help to find base case, space complexity and what options we have?
// Solution:
// Approach:
// Since this problem is about generating all subsets, it follows a pick/not-pick pattern.
// For each element, we either include it or exclude it, forming a decision tree.
// So, I will use recursion with backtracking to explore all possible combinations and generate all subsets.

// Additionally, the given array may contain duplicate values, which can generate duplicate subsets.
// To avoid duplicate subsets, I will sort the array so that duplicate elements become adjacent,
// making it easier to skip them.

// Inside function dfs:
// Base Case:
// If index equals the length of the array nums, it means we have explored one path completely,
// so we add the current path to the result array.

// Recursive logic:
// (i) Add the current element to the path array.
// (ii) Recursively explore the current path.
// (iii) Remove/undo the current element from the path array (backtracking).
// (iv) Before exploring the not-pick path, skip all duplicate elements using a temporary variable.
// (v) Recursively explore the new path without the current element.
// Time Complexity: O(2^n), since at each level there are two recursive calls and the recursion goes n levels deep.
// Total number of subsets = 2^n.
// The while loop is used to skip duplicates, and although it may skip multiple elements in a single call, each element 
// is skipped only a limited number of times across the entire recursion calls. Therefore, it does not increase the overall
// time complexity.

// Explanation:-
// Level 0 -> 2^0 = 1 call
// Level 1 -> 2^1 = 2 calls
// Level 2 -> 2^2 = 4 calls
// ...
// Level n -> 2^n calls
// Total calls = 2^0 + 2^1 + 2^2 + ... + 2^n = 2^(n+1) - 1 ≈ O(2^n)

// Space Complexity:- O(n), since at any time the recursion stack stores at most n calls (depth of recursion).

// Why result.push([...path])?
// Arrays in JavaScript are passed by reference. If we push path directly,
// future modifications will affect stored results.
// So we store a copy using the spread operator.

// Note:
// i) Nested loops only generate contiguous subarrays, whereas subsets require
// independent pick/not-pick decisions for each element.
// So, we use recursion with backtracking to explore all possible combinations.

// ii) If we modify index, it can create problems because we are changing the same variable that is 
// reused in recursive calls.

var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a - b);
    let result = [];
    dfs(0, [])
    function dfs(index, path){
        if(index === nums.length){
            result.push([...path]);
            return;
        }

        // add current level index value in path array.
        path.push(nums[index]);
        // explore all possibilities on the current path.
        dfs(index+1, path);
        // remove current level index value from path to try next possibility
        path.pop();
        // check for duplicate value in the array before trying out new path
        let nextIndex = index;
        while(nextIndex + 1 < nums.length && nums[nextIndex] === nums[nextIndex+1]){
            nextIndex++;
        }
        // expore new path
        dfs(nextIndex+1, path);
    }

    return result;
};