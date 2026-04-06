// Leetcode Problem:-78
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

// This Problem comes under pick/not pick because for every element, you have two choices: either take it or skip it.
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
// Solution:-
// Approach:-
// Create a function called dfs by passing parameters: index, which will traverse through each value of the array,
// and path array, which is initially empty and will store elements while exploring one path completely.

// Inside function dfs:-
// Base Case:- If index equals the length of the given array nums, it means we have explored one path completely,
// so add the values of that path to the result array.

// Recursive logic:- 
// (i) Add the current index element to the path array.
// (ii) Recursively explore the current path.
// (iii) Remove/undo the current element from the path array (backtracking).
// (iv) Recursively explore the new path without the current element.

// After exploring all values of the nums array, return result.

// Time Complexity: O(2^n), since at each level there are two recursive calls and the recursion goes n levels deep.
// Total number of subsets = 2^n.

// Explanation:-
// Level 0 -> 2^0 = 1 call
// Level 1 -> 2^1 = 2 calls
// Level 2 -> 2^2 = 4 calls
// ...
// Level n -> 2^n calls
// Total calls = 2^0 + 2^1 + 2^2 + ... + 2^n = 2^(n+1) - 1 ≈ O(2^n)

// Space Complexity:- O(n), since at any time the recursion stack stores at most n calls (depth of recursion).

// Why result.push([...path])?
// Because arrays in JavaScript are passed by reference. When we add path directly to result, it stores the reference.
// Since we reuse the same path array across all recursive calls, any change to path will also affect the stored results.
// To avoid this, we create a copy of path using the spread operator and store that copy in the result array.

// How recursion works:
// After the base case returns, control goes back to the previous function, which continues executing its remaining code.
// Once all statements are executed, the function automatically returns to its parent.

var subsets = function(nums) {
    let result = [];

    function dfs(index, path){
        // base case: all elements processed
        if(index === nums.length){
            result.push([...path]);
            return;
        }

        // pick current element
        path.push(nums[index]);

        // explore current path
        dfs(index + 1, path);

        // backtrack (undo choice/remove current element)
        path.pop();

        // not pick current element
        dfs(index + 1, path);
    }

    dfs(0, []);
    return result;
};

