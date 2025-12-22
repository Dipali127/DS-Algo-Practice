// GeeksForGeeks Problem
// Brute force approach:
// approach:-
// consider each possible substring in string 'txt' that has the same length as string 'pat'.
// for each substring, create a map to store the frequency of each character in string 'pat'.
// iterate through the current substring of 'txt' starting from the current index and 
// check if a character exists in the map, decrement its count. 
// after traversing the current substring, check if all values in the map are zero. it means the current substring is an anagram of string 'pat'.
// if an anagram is found, increment the count.
// once, found all the starting index in string 'txt' which is an anagram of string 'pat' return resultArray.
// TC: O(N * M), where N is the length of 'txt' and M is the length of 'pat'.
// SC: O(M), for storing the frequency map of string 'pat'.

class Solution {
    search(pat,txt){
        let count = 0;
        for(let i=0;i<txt.length;i++){
            let map = new Map();
            for(let k=0;k<pat.length;k++){
                if(map.has(pat[k])){
                    map.set(pat[k],map.get(pat[k])+1);
                }else{
                    map.set(pat[k],1);
                }
            }
            
            for(let j=i;j<i+pat.length;j++){
                if(map.has(txt[j])){
                    map.set(txt[j],map.get(txt[j])-1);
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
                count++;
            }
            
        }
        
        return count;
    }
}

// Optimal approach:- using sliding window and map.
// first store all the characters of string 'pat' into hash map.
// extend the window by moving pointer 'j' towards right meanwhile check if current iterated character exists in 
// the hash map then decrement that character's count in the hash map.
// once the window size is equal to the length of 'pat', check if all character counts in the hash map are zero.
// if they are zero, it means we found the substring in string 'txt' which is an anagram of string 'pat'.
// if an anagram is found, increment the count.
// after that, shrink the current window. Before shrinking, check if the character pointed by pointer 'i' exists
// in the hash map. if it does, increment its count in the hash map and then move the pointer 'i' to the right.
// once all starting indices of substrings in string 'txt' which are anagrams of string 'pat' are found, 
// return resultArray.
// TC: O(N), where N is the length of 'txt'. as each characters are traversed a constant number of times.
// SC: O(M), for storing the frequency map of string 'pat'.

class Solution {
    search(pat,txt){
        let count = 0;
        let map = new Map();
        for(let i=0;i<pat.length;i++){
            if(map.has(pat[i])){
                map.set(pat[i],map.get(pat[i])+1);
            }else{
                map.set(pat[i],1);
            }
        }
        
        let i=0,j=0;
        while(j<txt.length){
            if(map.has(txt[j])){
                map.set(txt[j],map.get(txt[j])-1);
            }
            
            let flag = true;
            if(j-i+1 === pat.length){
                for(let value of map.values()){
                    if(value !== 0){
                        flag = false;
                        break;
                    }
                }
                
                if(flag){
                    count++;
                }
                
                if(map.has(txt[i])){
                    map.set(txt[i],map.get(txt[i])+1);
                }
                
                i++;
            }
            
            j++;
        }
        
        return count;
    }
}





