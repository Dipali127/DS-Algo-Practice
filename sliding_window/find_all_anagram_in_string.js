// Leetcode Problem:- 438
// brute force approach:
// approach:-
// consider each possible substring in string 's' that has the same length as string 'p'.
// for each substring, create a map to store the frequency of each character in string 'p'.
// iterate through the current substring of 's' starting from the current index and 
// check if a character exists in the map, decrement its count. 
// after traversing the current substring, check if all values in the map are zero. it means the current substring is an anagram of string 'p'.
// if an anagram is found, add the starting index of the current substring to the result array.
// once, found all the starting index in string 's' which is an anagram of string 'p' return resultArray.
// TC: O(N * M), where N is the length of 's' and M is the length of 'p'.
// SC: O(M), for storing the frequency map of string 'p'.
 
var findAnagrams = function(s,p) {
    let resultArray = [];
    for(let i=0;i<s.length;i++){
        let map = new Map();
        for(let j=0;j<p.length;j++){
            if(map.has(p[j])){
                map.set(p[j],map.get(p[j])+1);
            }else{
                map.set(p[j],1);
            }
        }

        for(let k=i;k< i+p.length;k++){
            if(map.has(s[k])){
                map.set(s[k],map.get(s[k])-1);
            }
        }

       let flag = true;
       for(let value of map.values()){
        if(value !== 0){
                flag = false;
                break;
            }
       }

        if(flag){
            resultArray.push(i);
        }
    }

    return resultArray;
}

// Optimal approach:- using sliding window with two pointer technique and hash map.
// first store all the characters of string 'p' into hash map.
// extend the window by moving pointer 'j' towards right meanwhile check if current iterated character exists in the 
// hash map then decrement that character's count from the hash map.
// once the window size is equal to the length of 'p', check if all character counts in the hash map are zero.
// if they are zero, it means we found the substring in string 's' which is an anagram of string 'p'.
// if an anagram is found, add the starting index of the current substring to the result array.
// after that, shrink the current window. Before shrinking, check if the character pointed by pointer 'i' exists in 
// the hash map. if it does, increment its count in the hash map and then move the pointer 'i' to the right.
// once all starting indices of substrings in string 's' which are anagrams of string 'p' are found, return resultArray.
// TC: O(N), where N is the length of 's', since each character is traversed once using start and end pointers.  
// SC: O(1), since the hash map stores at most 26 characters (for lowercase English letters), which is constant space.  

 var findAnagrams = function(s,p) {
    let map = new Map();
    let i=0, j=0, resultArray = [];
    for(let k=0;k<p.length;k++){
        if(map.has(p[k])){
            map.set(p[k],map.get(p[k])+1);
        }else{
            map.set(p[k],1);
        }
    }
    while(j<s.length){
        if(map.has(s[j])){
            map.set(s[j],map.get(s[j])-1);
        }

      if(j-i+1 === p.length){
        let flag = true;
       for(let value of map.values()){
        if(value !== 0){
                flag = false;
                break;
            }
       }

        if(flag){
            resultArray.push(i);
        }

        if(map.has(s[i])){
        map.set(s[i],map.get(s[i])+1);
      }
      i++;
      }
      j++;
    }

    return resultArray;
 }
