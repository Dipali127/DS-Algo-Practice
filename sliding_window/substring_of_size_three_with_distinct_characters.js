// Leetcode Problem:- 1876
// Brute force approach:
 // approach:-
 // consider all possible substring of size 3 and store all characters frequency of that substring into map
 // and check for each subtring contain unique characters by verifying that each character has a frequency
 // of 1. if yes then increment the uniqueSubstring count.
 // TC:- O(N), Explanation:-
 // O(N-2):- used by outer loop where outer loop runs n-2 times.
 // O(3):- used by inner loop , as the inner loop runs exactly 3 times for each iteration of the outer loop
 // because we're checking substrings of length 3.  
 // so overall, TC:- O(N).
 // SC:- O(1), because the Map only stores up to 3 characters (since the substring length is fixed at 3),
 // which is a constant space.

var countGoodSubstrings = function(s) {
    let uniqueSubstring = 0;
    for(let i=0;i<s.length-2;i++){
        let map = new Map();
        for(let j=i;j<i+3;j++){
            if(!map.has(s[j])){
                map.set(s[j],1);
            }else{
                map.set(s[j],map.get(s[j])+1);
            }
        }

        let count = 0;
        map.forEach((value,key)=>{
            if(value === 1){
                count++;
            }
        })

        if(count === 3){
           uniqueSubstring++; 
        }
    }

    return uniqueSubstring;
};

// Optimal Approach: using sliding window.
// Approach:
// pointer `j`is used to expand the window by including characters from the string and store into a `Map` 
// that stores the frequency of each character within the window.
// once the window size reaches 3 (i.e., when `j - i + 1 === 3`), it checks if all characters in the window are unique
// by iterating over the map.
// if all characters are unique (i.e., their frequency is 1), the `uniqueSubstring` count is incremented.
// the window is then slid by decrementing the count of the character at the `i` pointer in the map, and 
// 'i' is incremented to shrink the window from the left side. The `count` variable is reset to 0 for the next window 
// evaluation. the loop continues until `j` reaches the end of the string.
// TC: O(N), where N is the length of the string.
// SC: O(1), because the map only holds up to 3 characters at any time.

var countGoodSubstrings = function(s) {
    let uniqueSubstring = 0, count = 0,i = 0, j=0;
    let map = new Map();
    while(j<s.length){
        if(!map.has(s[j])){
            map.set(s[j],1);
        }else{
            map.set(s[j],map.get(s[j])+1);
        }

        if(j-i+1 === 3){
            map.forEach((value,key) => {
                if(value === 1){
                    count++;
                }
            })

            if(count === 3){
                uniqueSubstring++;
            }

            map.set(s[i],map.get(s[i])-1);
            i++;
            count = 0;
        }

        j++;
    }
    return uniqueSubstring;
} 