// Problem:-
// Two strings are identical/similar if they contain the same distinct characters, regardless of their order 
// and regardless of how many times a character appears.

// For example:
// "good" and "god"

// Let's look at the characters;
// good contains:  g, o, d And god contains:  g, o, d
// So, they have the same characters.
// Therefore, good ↔ god is a valid pair.

// Note:- pair can be more than two, example:- ["abc", "bca", "cab", "xyz", "zyx"];

// Solution:
let array = ["good", "god", "yarn", "bac", "aabc"];
console.log(identicalString(array))

function identicalString(array){
    let map = new Map();
    let countPair = 0;
    
    for(let i = 0; i < array.length; i++){
        let set = new Set(array[i]);
        let arr = [...set].sort();
        
        let str = arr.join("");
        if(map.has(str)){
            map.set(str, map.get(str) + 1);
        }else{
            map.set(str, 1);
        }
    }
    
    for(let val of map.values()){
           countPair += val * (val - 1) / 2;
    }
    
    return countPair;
}