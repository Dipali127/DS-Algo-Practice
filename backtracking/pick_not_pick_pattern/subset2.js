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
// To avoid generating duplicate subsets, I will sort the array so that duplicate elements become adjacent,
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

// Levels are defined by how many recursive calls are made until the base case is reached.
// In this problem, the index increases by 1 at each recursive call, so the recursion depth (levels) is n.
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

// Space Complexity: O(n), since at any time the recursion stack stores at most n recursive calls.
// The number of recursive calls in the stack depends on the depth of recursion,
// and the depth of recursion is equal to n because there are n levels in this problem.


// Why result.push([...path])?
// Because arrays in JavaScript are passed by reference. When we add path directly to result, it stores the reference.
// Since we reuse the same path array across all recursive calls, any change to path will also affect the stored results.
// To avoid this, we create a copy of path using the spread operator and store that copy in the result array.


// Note:
// i) Nested loops only generate contiguous subarrays, whereas subsets require
// independent pick/not-pick decisions for each element.
// So, we use recursion with backtracking to explore all possible combinations.

// ii) Why use nextIndex variable and why not reusing index? 
// We use nextIndex to skip consecutive duplicate elements in the "not pick" case
// to avoid generating duplicate subsets. Duplicate subsets can be generated from
// any path (pick or not pick).

// Since the array is sorted, duplicate elements are adjacent.
// If we directly call dfs(index + 1), we may explore multiple paths
// that lead to the same subset, which we already have in the result array.

// So, we move nextIndex forward until we reach a different element,
// and then call dfs(nextIndex + 1).

// Important:
// - We only skip duplicates in the "not pick" case.
// - In the "pick" case, we allow duplicates if they exist in the input,
//   because subsets can include repeated elements as given in the array.

// We don’t modify index so that we don’t miss any valid subsets in the current recursive call.

// Duplicate means duplicate subsets, not reusing the same element multiple times.
// Each element can be used the number of times it appears in the array.


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