// Leetcode Problem:- 137
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

// approach3:-
// sort the array 'nums' in non-decreasing (ascending) order.
// iterate through the array 'nums' starting from index 1.
// while iterating, check if the current number is not equal to the previous number.
// if they are not equal, it indicates that the current number is the single number.
// if the loop completes without finding a single number, return the last element in the array.
// TC:- O(NLOGN), Explanation:-
// O(N log N):- to sort the array 'nums'.
// O(N):- to iterate through the array 'nums'.
// Overall, TC:- O(N log N) + O(N) = O(N log N).
// SC:- O(1), since no additional space is used.

var singleNumber = function(nums) {
   nums.sort((a,b) => a-b);
   for(let i=1; i<nums.length; i+=3){
    if(nums[i] !== nums[i-1]){
        return nums[i-1];
    }
   }

   return nums[nums.length-1];

};