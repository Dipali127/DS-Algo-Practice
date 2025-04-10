// Leetcode Problem:- 1876
// Brute force approach:
// approach:-
// Consider all possible substrings of size 3 and use a Set to store unique characters of that substring.
// For each substring, check whether all characters are unique by verifying that the size of the Set is 3.
// If yes, then increment the goodString count.
// TC:- O(N), Explanation:-
// O(N-2):- used by outer loop where outer loop runs n-2 times.
// O(3):- used by inner loop, as the inner loop runs exactly 3 times for each iteration of the outer loop
// because we're checking substrings of length 3.
// But we ignore constant parts, so overall, TC:- O(N).
// SC:- O(1), because the Set only stores up to 3 characters (since the substring length is fixed at 3),
// which is a constant space.


 var countGoodSubstrings = function(s) {
    let goodString = 0;
    for(let i = 0; i <= s.length - 3; i++){
        let set = new Set();
        for(let j = i; j < i+3; j++){
            set.add(s[j]);
        }

        if(set.size === 3){
            goodString++;
        }
    }

    return goodString;
};

// Optimal Approach: using a sliding window with one pointer technique.
// approach:
// Consider each substring of size three, and start from index 1 to correctly access a substring of length three
// using characters at positions i-1, i, and i+1.
// For each such substring, check if all characters are unique.
// If they are, increment the goodSubstring count.
// After iterating through each possible substring of size three, return goodSubstring,
// which stores the total count of all valid substrings with unique characters.
// TC: O(N), where N is the length of the string.
// SC: O(1), since no additional space is used apart from the goodSubstring variable.

var countGoodSubstrings = function(s) {
    let goodString = 0;
    for(let i = 1; i < s.length - 1; i++){
        if(s[i-1] !== s[i] && s[i+1] !== s[i] && s[i-1] !== s[i+1]){
            goodString++;
        }
    }

    return goodString;
};
