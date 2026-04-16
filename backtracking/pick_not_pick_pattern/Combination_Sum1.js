// Leetcode Problem:- 39
// Given an array of distinct integers candidates and a integer target, return a list of all unique combinations of
// candidates where the chosen numbers sum to target. You may return the combinations in any order.
// The same number may be chosen from candidates an unlimited number of times.

// Full Binary Recursion Tree:
// nums = [2,3,5], target = 8
// (0,8,[])
// ├── PICK → (0,6,[2])
// │   ├── PICK → (0,4,[2,2])
// │   │   ├── PICK → (0,2,[2,2,2])
// │   │   │   ├── PICK → (0,0,[2,2,2,2]) ✅
// │   │   │   └── SKIP → (1,2,[2,2,2])
// │   │   │       ├── PICK → (1,-1,[2,2,2,3]) ❌
// │   │   │       └── SKIP → (2,2,[2,2,2])
// │   │   │           ├── PICK → (2,-3,[2,2,2,5]) ❌
// │   │   │           └── SKIP → (3,2,[2,2,2]) ❌
// │   │   │
// │   │   └── SKIP → (1,4,[2,2])
// │   │       ├── PICK → (1,1,[2,2,3]) ❌
// │   │       └── SKIP → (2,4,[2,2])
// │   │           ├── PICK → (2,-1,[2,2,5]) ❌
// │   │           └── SKIP → (3,4,[2,2]) ❌
// │   │
// │   └── SKIP → (1,6,[2])
// │       ├── PICK → (1,3,[2,3])
// │       │   ├── PICK → (1,0,[2,3,3]) ✅
// │       │   └── SKIP → (2,3,[2,3])
// │       │       ├── PICK → (2,-2,[2,3,5]) ❌
// │       │       └── SKIP → (3,3,[2,3]) ❌
// │       │
// │       └── SKIP → (2,6,[2])
// │           ├── PICK → (2,1,[2,5]) ❌
// │           └── SKIP → (3,6,[2]) ❌
// │
// └── SKIP → (1,8,[])
//     ├── PICK → (1,5,[3])
//     │   ├── PICK → (1,2,[3,3]) ❌
//     │   └── SKIP → (2,5,[3])
//     │       ├── PICK → (2,0,[3,5]) ✅
//     │       └── SKIP → (3,5,[3]) ❌
//     │
//     └── SKIP → (2,8,[])
//         ├── PICK → (2,3,[5]) ❌
//         └── SKIP → (3,8,[]) ❌

// Binary Recursion Tree (Pick / Not Pick) But Not Complete:
//                          (0,8,[])
//                        /           \
//               PICK 2 /               \ NOT PICK
//                    /                 \
//             (0,6,[2])              (1,8,[])
//             /       \              /       \
//       PICK 2        SKIP      PICK 3       SKIP
//        /              \         /             \
// (0,4,[2,2])      (1,6,[2])  (1,5,[3])     (2,8,[])
//    /     \          /   \      /   \         /   \
// PICK   SKIP     PICK  SKIP  PICK  SKIP   PICK  SKIP
//  /        \       /     \    /     \       /     \
// (0,2,   (1,4,  (1,3,  (2,6, (1,2, (2,5, (2,3,  end
// [2,2,2]) [2,2]) [2,3]) [2]) [3,3]) [3])  [5])

//  /   \
// PICK SKIP
//  /      \
// (0,0,  (1,2,
// [2,2,2,2]) [2,2,2])

// ✅        /   \
//         PICK SKIP
//          |     |
//        ❌     (2,2,[2,2,2])
//               /      \
//            PICK     SKIP
//             ❌        ❌

// Approach:-
// Since, this problem is about generating all possible combinations where sum is equal to target, so it follows a
// pick/not-pick pattern.
// For each element, we either include it or exclude it, forming a decision tree.
// So I’ll use recursion with backtracking to explore all possible combinations and use the sum that equals to target.

// Inside function dfs:-
// Base Case:- 
// i) if target becomes 0, it means we have found valid combination/path where sum equals to target, if this would be the 
// case add all values store in path array into result array.
// ii) if target becomes negative or index goes beyond given array.length, return immediately, since it is not valid path.

// Recursive logic:- 
// (i) Add the current index element to the path array.
// (ii) Recursively explore the current path by subtracting current level index value.
// (iii) Remove/undo the current level element from the path array (backtracking).
// (iv) Recursively explore the new path without the current level element.

// After exploring all values of the nums array, return result which contains all possible combinations where sum equals 
// target.

// Time Complexity: O(2^(T / M)), where
// 2 = branching factor (number of recursive calls at each level).
//     In this problem, we have two choices at each step: pick or skip.
// T = target
// M = minimum candidate value

// Explanation:
// At each recursive call, we have two choices: pick or skip.
// In the worst case, we keep picking the smallest element multiple times until the target becomes negative. 
// So, the recursion depth depends on how many times we can subtract the minimum value from the target.

// We do not use "target = 0" to determine the depth of recursion because it is possible to reach target = 0 earlier
// through a shorter path.
// Instead, we consider the maximum depth (longest path), which occurs when we repeatedly pick the smallest element.

// Space Complexity: O(T / M)
// Explanation:
// At any time, the recursion stack can go as deep as T/M calls, since we keep subtracting the smallest element from the
// target  until it becomes 0 or negative.

// Key Point:-
// we only add value in path array or remove from target when we are deciding to pick it.
// Why result.push([...path])?
// Because arrays in JavaScript are passed by reference. When we add path directly to result, it stores the reference.
// Since we reuse the same path array across all recursive calls, any change to path will also affect the stored results.
// To avoid this, we create a copy of path using the spread operator and store that copy in the result array.

var combinationSum = function(nums, target) {
    let result = [];
    dfs(0, target, []);
    function dfs(index, target, path){
        // if target is equal to 0, it means found valid combination
        if(target === 0){
            result.push([...path]);
            return;
        }
        
        // invalid combination, move back from that path 
        if(target < 0 || index === nums.length){
            return;
        }
        
        // add current element in nums array to pick it.
        path.push(nums[index]);
        // explore all possible combinations on the current path
        dfs(index, target-nums[index], path);
        // backtrack/undo/remove current element of current level
        path.pop()
        // explore new path without current element
        dfs(index+1, target, path);
    }

    return result;
};