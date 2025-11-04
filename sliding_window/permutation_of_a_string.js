// Leetcode Problem: 567
// Definition of Permutation:
// If two strings have the same characters with the same frequency but in a different order, 
// they are permutations of each other. A permutation of a string is any rearrangement of its characters.
// For example, the string "abc" has permutations like "abc", "acb", "bac", "bca", "cab", and "cba".

// Brute force approach:
// Consider (take) each possible substring from string s2 And for each substring, first store the 
// frequency  of characters of string s1 in a hash map. 
// Then iterate through the current substring of string s2 and 
// check if the current character exists in the hash map. If it does, decrement its count. 
// Meanwhile, iterate through the hash map and check if all the frequencies for the current substring 
// of s2 are zero. If they are, it means we found a permutation of s1 in string s2 and we immediately return true.
// If, after checking all substrings, we haven’t found a permutation of string s1 in s2, then return false.
// TC: O(N*M), where N is the length of string s1 and M is the length of string s2.
// The outer loop iterates O(M-N+1) times, and in each iteration, substring() and isPermutation() both take O(N).
// So, the overall time complexity is O(N*M).
// SC: O(M), since for each substring we store the frequency of characters of s1 in a hash map.

var checkInclusion = function(s1, s2) {
    for(let i = 0; i <= s2.length - s1.length; i++){
        let map = new Map();
        for(let k = 0; k < s1.length; k++){
            if(map.has(s1[k])){
                map.set(s1[k], map.get(s1[k])+1);
            }else{
                map.set(s1[k], 1);
            }
        }

        for(let j = i; j < i+s1.length; j++){
            if(map.has(s2[j])){
                map.set(s2[j], map.get(s2[j])-1);
            }
        }

        let flag = true;
        for(let val of map.values()){
            if(val > 0){
                flag = false;
                break;
            }
        }

        if(flag){
            return true;
        }
    }

    return false;
};

// Optimal Approach:
// approach:
// first store all the characters of string s1 in hash map.
// extend the window using pointer 'end' and check if the currect window characters exist in hash map then reduce their
// frequency by 1 then check if the current window's length is equal to s1.length, if it is then check that
// all the character's frequency for current substring of s2 in hash map becomes zero. if it is, it means current
// window substring is permutation of string s1 .
// but if not then current window substring is not a permutation of string s1 then shrink the window from left to find 
// the new window of permutation of string s1 but before shrinking the window check first that if the current window left 
// value exist in hash map then increment its frequency since that character is not a part of a new window and we dont 
// need it.
// once find the permutation string return true otherwise return false.
// TC:- O(N), as this approach(sliding window) traverse each characters of both string once.
// SC:- O(N), to store each characters of string s1 into hash map.

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
