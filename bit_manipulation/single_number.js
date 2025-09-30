// Leetcode Problem:- 136
// Brute force appraoch:- Use of a Hashmap 
// first, check if the 'nums' array contains only a single value. If so, return nums[0] directly.
// Otherwise, iterate through the 'nums' array and store the frequency of each element in a hashmap (Map).
// and iterate through the map to find the key (number) that has a frequency of 1, which is the single number.
// after iterating through the map return that single number. 
// TC:- O(N), where 'N' is the number of elements in the 'nums' array, since we traverse the 'nums' array and the map.
// SC:- O(N), in the worst case, we might store all elements of 'nums' in the map.

var singleNumber = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }else{
            map.set(nums[i],1);
        }
    }
    
    let keys;
    map.forEach((value,key)=>{
        if(value==1){
            keys = key;
        }
    })

    return keys;
};

// Optimal Approach:- Using Bit Manipulation
// - When dealing with duplicate values, the XOR operator (^) can be utilized to find the unique value 
//   among them.
//  This approach use the properties of XOR, which are:
//         (1) x ^ x = 0 (any number XORed with itself yields 0)
//         (2) x ^ 0 = x (any number XORed with 0 yields the number itself)
// - By XORing all numbers in the array, duplicate numbers will cancel each other out, leaving only the
//   unique number as the result. 
// Example:- for the input array [2, 2, 1], The operation proceeds as follows: 
//                  - Initial result: 0
//                  - 0 ^ 2 = 2
//                  - 2 ^ 2 = 0 (the duplicate cancels out)
//                  - 0 ^ 1 = 1 (the unique number remains)
// - Therefore, the single number that appears only once in the array is 1.
// TC:- O(N), where 'N' is the number of elements in the 'nums' array, since we traverse the array once.
// SC:- O(1), since no additional space is used.

var singleNumber = function(nums){
    let result = 0;
    for(let num of nums){
        result^=num;
    }

    return result;
}