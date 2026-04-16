//                                              About Backtracking
// Definition
// Backtracking is a recursive technique where we explore all possible choices and undo (backtrack/remove) our 
// decisions to try other possibilities.
// Note:- While backtracking/reversing, we remove previously made choices to explore new possibilities.
// Simple Words:- Try → Explore → Undo/remove → Try next new path
// 
// Core Idea
// Make a choice
// ↓
// Go deeper (recursion)
// ↓
// Undo/remove the choice
// ↓
// Try next choice

// Example:- find all Subsets of an array : [1,2]
// So, subsets will be:-
// []
// [1]
// [1,2]
// [2]
// Here, first we take 1 → go deeper → then remove 1 → and try without 1.

// Universal Template:-
function backtrack(path, choices) {
    // Base case
    if (/* solution found */) {
        result.push([...path]);
        return;
    }

    for (let choice of choices) {
        // choose current value
        path.push(choice);

        // explore
        backtrack(path, choices);

   // undo/remove the choice to explore another path
        path.pop();
    }
}

// Index-Based Template (Subsets / Combination Sum):-
function backtrack(start, path) {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
        path.push(nums[i]);

        backtrack(i + 1, path);

        path.pop();
    }
}

// When to Use Backtracking
// “find all combinations”
// “generate all possibilities”
// “print all paths”

// Examples:
// Subsets
// Combination Sum
// Permutations

// Time Complexity of Backtracking:-
// Exact number of recursive calls is difficult to compute, So we estimate using recursion tree.
//  Identify:
//    a) Branching Factor (B) = number of choices at each step.
//    b) Depth (D) = maximum length of path (worst case).
// Total recursive calls (approx): ≈ B^D
// Final Time Complexity:O(B^D × work per solution)

// Notes:
// - Backtracking often generates all possible solutions. So, complexity is usually exponential or factorial.
// - Sometimes extra cost is added (like copying arrays).