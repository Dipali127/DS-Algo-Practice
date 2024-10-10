// Leetcode Problem:- 139
// Brute force approach: [Top-Down Approach] (Using Recursion)
// Approach:-
// store the wordDict strings into a set for fast lookup of the substrings.
// call the function 'solve' from the main function 'wordBreak'.
// Inside the function 'solve':
// i have used a pointer 'idx' which represents the starting index of the substring, and 'l' is used to
// represent the length of the substring being checked.
// Base Case:-
// if 'idx' reaches the length of the string (n), it means the entire string has been segmented,
// and the function returns true. 
// otherwise for each 'l' from 1 to n, extract the substring of length 'l' starting from 'idx'.
// if this substring exists in the set and the recursive call with the updated index returns true, 
// otherwise, continue the loop.
// if no valid segmentation is found, return false.
// TC:- O(N^3), Explanation:-
// O(N):- first recursive call(i.e: outer loop, where idx starts from 0 and goes up to n (the length of the string s), 
// runs n times. This loop represents where we start our substring from.)
// O(N):- loop indside the function 'solve'(i.e: for each idx, we have an inner loop where l (the length of the 
// substring starting from idx) also runs from 1 to n. This loop is responsible for generating substrings of varying lengths.
// O(N):- for each iteration of the inner loop, we create a substring from idx to idx + l. The time to create
// this substring is proportional to the length of the substring, which is O(l). 
// Since l can go up to n, this takes O(n) in the worst case.
// Overall TC:- O(N × N × N) = O(N³).
// SC:- O(N), Explanation:
// O(N):- to store wordDict into a set.
// O(N):- stack space used by recursive function (up to n recursive calls).
// Overall, SC:- O(N).

var wordBreak = function(s, wordDict) {
    let n = s.length;
    let set = new Set(wordDict); 

    return solve(0, s, set, n);
};

function solve(idx, s, set, n) {
    if (idx === n) {
        return true;
    }

    for (let l = 1; l <= n; l++) {
        let temp = s.substring(idx, idx + l); 
        if (set.has(temp) && solve(idx + l, s, set, n)) {
            return true;
        }
    }

    return false;
}

// Optimal Approach:- [Top-Down Approach](Using Recursion + Memoization)
// Approach:-
// use a 'dp' array to store the previously computed results of subproblems to avoid redundant calculations.
// call the function 'solve' from the main function 'wordBreak'.
// Inside the function 'solve':
// a pointer 'idx' represents the starting index of the substring, and 'l' is used to represent the length of the substring being checked.
// Base Case:-
// if 'idx' reaches the length of the string (n), it means the entire string has been segmented, and the function returns true.
// if the value at the current index 'idx' is already computed (i.e., it's not -1 in 'dp'), return it.
// otherwise, for each 'l' from 1 to n, extract the substring of length 'l' starting from 'idx'.
// if this substring exists in the set and the recursive call with the updated index (idx + l) returns true,
// then return true. Otherwise, continue the loop.
// if no valid segmentation is found, return false, and store this result in the 'dp' array.
// Time Complexity: O(N^2), Explanation:
// O(N):- the outer recursive calls iterate through each starting index (idx) from 0 to n (the length of the string s).
// O(N):- for each idx, the inner loop iterates over possible substring lengths (l) from 1 to n.
// O(N):- creating the substring takes O(l) time, where l can be up to n, 
// leading to the overall time complexity of O(N^2) in the worst case due to memoization which prevents re-computation 
// of the same state.
// So, overall TC:- O(N × N) = O(N^2).
// Space Complexity:- O(N), Explanation:
// O(N):- the dp array stores results for each starting index(i.e dp[idx]), leading to O(n) space used.
// O(N):- the stack space used by the recursive function can go up to n in the worst case.
// Overall SC:- O(N) + O(N) = O(N).
// note:- 'dp' array store boolean value(i.e true(1)).
 
var wordBreak = function(s, wordDict) {
    let n = s.length;
    let set = new Set(wordDict); 
    let dp = new Array(n).fill(-1);
    return solve(0, s, set, n, dp);
};

function solve(idx, s, set, n, dp) {
    if (idx === n) {
        return true;
    }
    
    if(dp[idx] !== -1){
        return dp[idx];
    }
    for (let l = 1; l <= n; l++) {
        let temp = s.substring(idx, idx + l); 
        if (set.has(temp) && solve(idx + l, s, set, n, dp)) {
            return true;
        }
    }

    return dp[idx] = false;
}

