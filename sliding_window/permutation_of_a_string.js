// Leetcode Problem:- 567
// Definition of Permutation:
// if two strings have the same characters with the same frequency, in a different order, they are permutations 
// of each other. A permutation of a string is any rearrangement of its characters.
// For example, the string "abc" has permutations like "abc", "acb", "bac", "bca", "cab", and "cba".

// Brute force approach:-
// from checkInclusion function iterates through all possible substrings of s2 of size s1.length.
// for each substring, calls the isPermutation function. 
// isPermutation function first compares the lengths of the two strings; if they are unequal, it immediately returns false.
// Otherwise, it creates a frequency map for the characters in s1 and decrements the frequencies based on the characters 
// in the second string.
// Finally, checks if all values in the frequency map are zero; if they are, the strings are permutations, and the function returns true, otherwise false. 
// TC:- O(N*M), where N is the length of string s1 and M is the length of string s2.
// The outer loop iterates O(M-N+1) and in each iteration, substring() and isPermutation() both take O(N).
// So, overall time complexity:- O(N*M) 
// SC:- O(N), substring() method creates a new string of size 𝑁 and the isPermutation function uses a frequency
// map of size O(N) So, the overall space complexity is O(N).

var checkInclusion = function(s1, s2) {
    for (let i = 0; i < s2.length - s1.length; i++) {
        let substr = s2.substring(i, i + s1.length);
        if (isPermutation(s1, substr)) {
            return true;
        }
    }
    return false;
};

function isPermutation(s1, s2) {
    if (s1.length !== s2.length) {
        return false; // If lengths are different, they can't be permutations
    }

    let map = new Map();

    // Count the frequency of characters in s1
    for (let i = 0; i < s1.length; i++) {
        map.set(s1[i], (map.get(s1[i]) || 0) + 1);
    }

    // Decrease the frequency of characters in s2
    for (let j = 0; j < s2.length; j++) {
        if (map.has(s2[j])) {
            map.set(s2[j], map.get(s2[j]) - 1);
        } else {
            return false; // If s2 has a character not in s1, it's not a permutation
        }
    }

    // Check if all frequencies are zero
    for (let value of map.values()) {
        if (value !== 0) {
            return false; // If any character count is not zero, it's not a permutation
        }
    }

    return true; // If all character counts match
}

// Optimal Approach:
// approach:
// first store all the characters of string s1 in map.
// extend the window using pointer 'end' and check if the currect window characters are in map then reduce their
// frequency by 1 then check if the current window's characters frequency becomes zero. if it it means current
// window substring is permutation of string s1 .
// but if not then current window substring is not a permutation of string s1 then shrink the window from left to find 
// the permutation of string s1 but before shrinking the window check first that if the current window left value
// is in set then increment its frequency as it not a part of a new window and we dont need it now.
// once find the permutation string return true otherwise return false.
// TC:- O(N), as this approach(sliding window) traverse each characters of both string once.
// SC:- O(N), to store each characters of string s1 into map.

var checkInclusion = function (s1, s2) {
    let start = 0, end = 0, map = new Map();
    for (let i = 0; i < s1.length; i++) {
        if (map.has(s1[i])) {
            map.set(s1[i], map.get(s1[i]) + 1);
        } else {
            map.set(s1[i], 1);
        }
    }

    while (end < s2.length) {
        if (map.has(s2[end])) {
            map.set(s2[end], map.get(s2[end]) - 1);
        }

        if (end - start + 1 === s1.length) {
            let allZero = true;
            for (let val of map.values()) {
                if (val !== 0) {
                    allZero = false;
                    break;
                }
            }

            if (allZero) {
                return true;
            }

            if (map.has(s2[start])) {
                map.set(s2[start], map.get(s2[start]) + 1);
            }
            start++;
        }


        end++;
    }

    return false;
};
