// Leetcode Problem:- 40
// Problem:- 
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in
// candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.

// Approach:-
// Since, this problem is about generating all possible unique combinations where sum is equal to target, so it follows a
// pick/not-pick pattern.
// For each element, we either include it or exclude it, forming a decision tree.
// So I’ll use recursion with backtracking to explore all possible combinations and use the sum that equals to target.

// Additionally, the given array may contain duplicate values, which can generate duplicate combinations.
// To avoid duplicate combinations, I will sort the array so that duplicate elements become adjacent, 
// making it easier to skip them.

// Inside function dfs:-
// Base Case:- 
// i) if target becomes 0, it means we have found valid combination/path where sum equals to target, if this would be the 
// case add all values store in path array into result array.
// ii) if target becomes negative or index goes beyond given array.length, return immediately, since it is not valid path.

// Recursive logic:- 
// (i) Add the current index element to the path array.
// (ii) Recursively explore the current path by subtracting current level index value.
// (iii) Remove/undo the current level element from the path array (backtracking).
// (iv) Before exploring the not-pick path, skip all duplicate elements using a temporary variable.
// (v) Recursively explore the new path without the current level element.

// After exploring all values of the nums array, return result which contains all possible combinations where sum equals 
// target.

// Time Complexity: O(2^n), since at each recursive call we have two choices: either pick or skip.
// In the worst case, the recursion tree explores all possible combinations of the array, leading to 2^n states.
//
// The while loop is used to skip duplicates, and although it may skip multiple elements in a single call,
// each element is skipped only a limited number of times across all recursive calls. Therefore, it does not
// increase the overall time complexity.

// Space Complexity: O(N), since at any time the recursion stack stores at most N recursive calls,
// where N is the length of the array. In the worst case, recursion can go as deep as picking all elements once.

// Key Point:-
// we only add value in path array or remove from target when we are deciding to pick it.
// Why result.push([...path])?
// Because arrays in JavaScript are passed by reference. When we add path directly to result, it stores the reference.
// Since we reuse the same path array across all recursive calls, any change to path will also affect the stored results.
// To avoid this, we create a copy of path using the spread operator and store that copy in the result array.

var combinationSum2 = function(nums, target) {
    nums.sort((a,b) => a-b);
    let result = [];
    dfs(0, target, []);
    function dfs(index, target, path){
        if(target === 0){
            result.push([...path]);
            return ;
        }

        if(target<0 || index === nums.length){
            return;
        }
         
        path.push(nums[index]);
        dfs(index+1, target-nums[index], path);
        path.pop();
        let nextIndex = index;
        while(nextIndex+1 < nums.length && nums[nextIndex] === nums[nextIndex+1]){
            nextIndex++;
        }
        dfs(nextIndex+1, target, path);
    }

    return result;
};