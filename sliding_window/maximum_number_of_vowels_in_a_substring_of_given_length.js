// Leetcode Problem:- 1456
// Brute force approach:
// approach: 
// iterate through each possible substring of length 'k' starting from every index 'i' in the string 's'.
// for each starting index 'i', count the number of vowels in the substring of length 'k'.
// update `maxVowelCount` if the current substring contains more vowels than the previous vowelCounts.
// once, iterate through each substring of length 'k' return maxVowelCount.
// TC:- O(N * k), where N is the length of the string and k is the length of the substring. 
// as for each subtring , the inner loop runs for 'k' steps.
// SC:- O(1), as there is no additional space used apart from a few variables.

var maxVowels = function (s, k) {
    let maxVowelCount = 0;
    for (let i = 0; i < s.length; i++) {
        let vowelCount = 0;
        for (let j = i; j < i + k; j++) {
            if (checkVowels(s[j])) {
                vowelCount++;
            }
        }

        maxVowelCount = Math.max(maxVowelCount, vowelCount);
    }

    return maxVowelCount;
};

function checkVowels(char) {
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        return true;
    }

    return false;
}

// Optimal approach: Sliding Window
// approach:
// start by counting the number of vowels in the initial window of size 'k'.
// then, slide the window one character at a time to the right of the given string 's'.
// and add the vowel count of the new character entering the window.
// subtract the vowel count of the character that is leaving the window.
// keep track of the maximum number of vowels found in any window of size 'k'.
// TC: O(N), where N is the length of the string, as wee iterate through the string once.
// SC: O(1), as there is no additional space used apart from a few variables. 

var maxVowels = function(s, k){
    let currentVowelcount = 0, maxVowelcount = 0;
    for(let i=0;i<k;i++){
        if(checkVowels(s[i])){
            currentVowelcount++;
        }
    }

    maxVowelcount = currentVowelcount;
    for(let i = k;i<s.length;i++){
        if(checkVowels(s[i])){
            currentVowelcount++;
        }

        if(checkVowels(s[i-k])){
            currentVowelcount--;
        }

        maxVowelcount = Math.max(maxVowelcount,currentVowelcount);
    }

    return maxVowelcount;
}

function checkVowels(char){
    return['a','e','i','o','u'].includes(char);
}