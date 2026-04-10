// Leetcode Problem:- 46
// problem:- 
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer 
// in any order.

// Permutation is an arrangement of elements in a unique order. In a permutation, order matters. 
// Every possible order counts as a unique permutation. No element is repeated unless duplicates are allowed.

// Example 1: Simple Numbers
// Array: [1, 2, 3]

// All permutations:
// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]

// Notice that [1, 2, 3] and [1, 3, 2] are different because the order of elements changes.

// Level-based Recursion Tree with Backtracking For array nums [0,1]:-

// Level 0 (root call) → dfs([])
// Path = []
// For-loop starts:
// i = 0 → 0 not in path → push → Path = [0] → dfs([0]) goes to Level 1
// i = 1 → will be explored after backtracking

// Level 1 → dfs([0])
// Path = [0]
// For-loop:
// i = 0 → 0 already in path → skip
// i = 1 → 1 not in path → push → Path = [0,1] → dfs([0,1]) goes to Level 2

// Level 2 → dfs([0,1])
// Path = [0,1]
// Base case: path.length === nums.length → push [0,1] to result
// Backtrack → path.pop() → Path = [0] (backtracking at this level)
// End of for-loop → backtrack → path.pop() → Path = [] (backtracking at Level 1 → return to Level 0)

// Level 0 (resume after backtracking)
// Path = []
// Continue for-loop: i = 1 → 1 not in path → push → Path = [1] → dfs([1]) goes to Level 1

// Level 1 → dfs([1])
// Path = [1]
// For-loop:
// i = 0 → 0 not in path → push → Path = [1,0] → dfs([1,0]) goes to Level 2
// i = 1 → 1 already in path → skip

// Level 2 → dfs([1,0])
// Path = [1,0]
// Base case → push [1,0] to result
// Backtrack → path.pop() → Path = [1] (backtracking at Level 2)
// End of for-loop → backtrack → path.pop() → Path = [] (backtracking at Level 1 → return to Level 0)

// Final result: [[0,1],[1,0]]

// Key Notes with Backtracking:-
// Each recursive call explores all possible orders (permutations).
// At the base case, the current path is added to the result array.
// Backtracking happens: remove the last element from the path and return to the previous level.
// The previous level’s for-loop continues, exploring the remaining elements.
// This process continues until all paths from the root are explored, generating all permutations.

// Why For-loop always starts from 0 in each recursive call?
// Because in permutations, order matters, so at each level of recursion, we need to try every element that hasn’t been
// used yet as the next candidate in the current path.

// Solution:
// Approach:
// Since we have to generate all possible permutations, we will call a function dfs with an empty path array 
// where we will build all permutations.

// Inside dfs function:
// Base Case:
// If the length of the path array equals the length of the given nums array, it means we have added all elements 
// of nums in some order. In this case, we add a copy of the path array to the result array and return to the previous recursive call.

// Recursive Logic:
// Run a for loop to traverse through each element of the nums array.
// Inside the loop:
// (i) Check if the currently traversed value already exists in the path array using has set. If yes, skip the current
//  element; otherwise, add current element to the path array as well as in hash set which will helps for further
//  recursive calls.
// (ii) Call dfs recursively with the current path to explore other permutations.
// (iii) After exploring all elements at the current recursive call, backtrack by removing the last added element from the
//  path array as well as from hash set since we are reusing same hash set and path array for all recursive calls.
// (iv) Continue backtracking until reaching the root recursive call, ensuring all permutations are explored.

// Time Complexity: O(N · N!).
// Explanation: 
// There are N! permutations in total.
// Each permutation requires O(N) time to construct (including traversal and copying of the path) to generate unique 
// permutation.
// Therefore, total time complexity is O(N · N!).

// Space Complexity: O(N)
// Explanation:
// -  O(N) used by stack to store N recursive calls at any time because depth of recursion/recursive call depends on
//    number of elements given in an array. 
// -  O(N) space is used by hash set stores up to N elements at any point in the recursion.
// -  So, Overall space complexity is O(N + N) = O(2N) = O(N).
var permute = function(nums) {
    let result = [], set = new Set();
    function dfs(path, set){
        if(path.length === nums.length){
            result.push([...path]);
            return;
        }

        for(let i = 0; i < nums.length; i++){
            if(set.has(nums[i])){
                continue;
            }
            
            set.add(nums[i]);
            path.push(nums[i]);
            dfs(path, set);
            path.pop();
            set.delete(nums[i]);
        }
    }
   dfs([], set);
   return result;
};