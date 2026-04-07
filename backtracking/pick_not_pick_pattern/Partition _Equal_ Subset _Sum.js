// LeetCode Problem:- 416
// Problem:- Given an integer array nums, return true if you can partition the array into two subsets
// such that the sum of the elements in both subsets is equal, or false otherwise.

// Brute Force Approach:
// Approach:
// Since the problem is about exploring all subsets and finding two subsets whose sums are equal,
// it follows a pick/not-pick pattern.
// For each element, we either include it or exclude it, forming a decision tree.
// So, I will use recursion with backtracking to explore all possible combinations.

// Inside canPartition function:
// Compute the sum of all elements of the given nums array, then check if that sum modulo 2 is equal to 0.
// If it's not, return false immediately, which helps avoid calling the dfs function unnecessarily.
// Otherwise, call the dfs function with parameters:
// - index (initially 0)
// - currentSum (initially 0), which will compute the sum at each recursive call.

// Inside dfs function:
// Base Case:
// (i) If currentSum equals partitionSum (total sum of the array divided by 2), return true.
// (ii) If index is out of bounds or currentSum is greater than partitionSum, return false.

// Recursive Logic:
// Add the current element to currentSum.
// Recursively explore the current path.
// Backtrack by removing the current element from currentSum.
// Recursively explore the path without the current element.

// After exploring all possibilities, return the result.

// Time Complexity: O(2^n), since at each level there are two recursive calls and the recursion goes n levels deep.
// Total number of subsets = 2^n.

// Explanation:
// Level 0 -> 2^0 = 1 call
// Level 1 -> 2^1 = 2 calls
// Level 2 -> 2^2 = 4 calls
// ...
// Level n -> 2^n calls
// Total calls = 2^0 + 2^1 + 2^2 + ... + 2^n = 2^(n+1) - 1 ≈ O(2^n)

// Space Complexity: O(n), since at any time the recursion stack stores at most n calls (depth of recursion).

// Why return in pick and not-pick recursive calls?
// Because if we don’t return immediately at any recursive level, 
// it’s possible to miss the correct subset whose sum equals half of the total sum of the array.

// Why are we checking any level of subset's sum with totalSumOfGivenArray/2?
// Because if any subset's sum equals totalSumOfGivenArray/2,
// it means the remaining elements will also sum to totalSumOfGivenArray/2.
// Hence, the array can be divided into two subsets with equal sums.

var canPartition = function(nums) {
    let totalSum = nums.reduce((acc, itrt) => acc + itrt, 0);
    if(totalSum % 2 !== 0) return false;
    let partitionSum = totalSum / 2; 
    
    function dfs(index, currentSum){
        if(currentSum === partitionSum) return true;
        if(index >= nums.length || currentSum > partitionSum) return false;
        
        // pick current level element
        if(dfs(index + 1, currentSum + nums[index])) return true;
        // not pick current level element
        if(dfs(index + 1, currentSum)) return true;
        
        return false; // no valid path found
    }

    return dfs(0, 0);
};

// Optimal Approach:- Using DP (Memoization)

// Problem in brute force:- 
// According to the given constraints (1 <= nums.length <= 200), 
// a brute force recursive solution takes O(2^n) time, which is not feasible.
// So, to avoid Time Limit Exceeded, we optimize it using DP (memoization).

// Approach:
// I will first solve the problem using recursion with the pick/not-pick pattern.
// Then, I will optimize it using memoization to avoid recomputing the same states.

// For memoization:
// I will use a 2D DP array where dp[index][currentSum] stores whether it is possible 
// to reach the target (partitionSum) starting from that state.

// If I revisit the same (index, currentSum), I will return the stored result 
// instead of recomputing it.

// Inside canPartition function:
// Compute the total sum of the array.
// If totalSum % 2 !== 0, return false immediately because we cannot divide it into two equal subsets.
// Otherwise, compute partitionSum = totalSum / 2.

// Initialize a 2D dp array of size [nums.length][partitionSum + 1] 
// and fill it with undefined (means not yet computed).

// Call dfs(0, 0, dp).

// Inside dfs function:
// Base Case:
// (i) If currentSum === partitionSum, return true.
// (ii) If index >= nums.length OR currentSum > partitionSum, return false.

// Memoization check:
// If dp[index][currentSum] is already computed, return that value.

// Recursive Logic:
// (i) Pick the current element → dfs(index + 1, currentSum + nums[index])
// (ii) Not pick the current element → dfs(index + 1, currentSum)

// Store the result (true/false) in dp[index][currentSum] 
// so that it can be reused later.

// Return dp[index][currentSum].

// Time Complexity (DP):
// O(n * partitionSum), since each state (index, currentSum) is computed only once.

// Space Complexity:
// O(n * partitionSum) for DP array + O(n) recursion stack.

// Why DP works:
// DP avoids recomputing the same (index, currentSum) states multiple times,
// reducing the time complexity from exponential O(2^n) to polynomial time.

// Extra Information:-
// For nums = [1,2,3]:
// index → 0 to 2 and currentSum → 0 to 3
// So dp array will have 3 rows and 4 columns.

var canPartition = function (nums) {
    let totalSum = nums.reduce((acc, itrt) => acc + itrt, 0);
    if (totalSum % 2 !== 0) return false;
    let partitionSum = totalSum / 2;
    let dp = new Array(nums.length).fill(0).map(() => new Array(partitionSum + 1).fill
        (undefined));
    return dfs(0, 0, dp)
    function dfs(index, currentSum, dp) {
        if (currentSum === partitionSum) return true;
        if (index >= nums.length || currentSum > partitionSum) return false;
        
        // check is current recursive call exist in dp array
        if (dp[index][currentSum] !== undefined) return dp[index][currentSum];
         
        // pick current level element
        let pick = dfs(index + 1, currentSum + nums[index], dp);
        // not pick current level element
        let notPick = dfs(index + 1, currentSum, dp);

        // store current level boolean value(either true or false) getting from by picking
        // or not picking current element into current index and current sum in dp array.
        dp[index][currentSum] = pick || notPick;
        return dp[index][currentSum];
    }
};

