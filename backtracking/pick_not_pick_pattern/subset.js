// Leetcode Problem:-78
// A subset is any selection of elements from a set, including the empty set, since we can choose to exclude all
// the elements.
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

// This Problem comes under pick/not pick pattern because for every element, you have two choices: either take it 
// or skip it.

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

// Approach:-
// Since, this problem is about generating all subsets, so it follows a pick/not-pick pattern.
// For each element, we either include it or exclude it, forming a decision tree.
// So I’ll use recursion with backtracking to explore all possible combinations and generate all subsets.

// Solution:-
// Inside function dfs:-
// Base Case:- If index equals the length of the given array nums, it means we have explored one path completely,
// so add the values of that path to the result array.

// Recursive logic:- 
// (i) Add the current index element to the path array.
// (ii) Recursively explore the current path.
// (iii) Remove/undo the current element from the path array (backtracking).
// (iv) Recursively explore the new path without the current element.

// After exploring all values of the nums array, return result.

// Time complexity is O(2ⁿ × n), because each element has two choices (pick or not pick), resulting in 2ⁿ subsets,
// and each subset elements are copied into a new array before storing it into the result array.

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
// But if we include result storage of all generated subsets, then it becomes O(2ⁿ × n), because for each subset, we
// copy all the elements of the path array into new array before storing it into result array . 
// Since, there are 2ⁿ subsets and each subset can take up to n space, the total space complexity becomes O(2ⁿ × n).

// Why result.push([...path])?
// Because arrays in JavaScript are passed by reference. When we add path directly to result, it stores the reference.
// Since we reuse the same path array across all recursive calls, any change to path will also affect the stored results.
// To avoid this, we create a copy of path using the spread operator and store that copy in the result array.

// How recursion works:
// After the base case returns, control goes back to the previous function, which continues executing its remaining code.
// Once all statements are executed, the function automatically returns to its parent.

// In each recursive call, a new execution context (lexical environment) is created.

// Memory Creation Phase:
// - A new variable 'index' is created in stack memory for this function call.
// - A new variable 'path' is also created in stack memory.

// Execution Phase:
// - 'index' gets the value passed (like index + 1).
// - 'path' gets a reference to the same array object stored in heap memory.

// Important:
// - 'index' is a primitive, so each call has its own independent copy.
// - 'path' is a reference type, so all recursive calls share the same underlying array,
//   but each call has its own reference variable in the stack.

// Nested loops only generate contiguous subarrays, whereas subsets require independent pick/not-pick decisions for each 
// element. So, we use recursion with backtracking to explore all possible combinations.

var subsets = function(nums) {
    let result = [], path = [];

    function dfs(index){
        // base case: all elements processed
        if(index === nums.length){
            result.push([...path]);
            return;
        }

        // pick current element
        path.push(nums[index]);
        dfs(index + 1);

        // backtrack (undo choice/remove current element)
        path.pop();

        // not pick current element
        dfs(index + 1);
    }

    dfs(0);
    return result;
};


