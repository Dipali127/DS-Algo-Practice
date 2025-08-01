// Leetcode Problem:-217
// Brute force approach:-
// Use of a nested loops to find duplicate elements in the array where the outer loop iterates through each element 
// of the array, while the inner loop iterates through the elements after the current element pointed to by the outer
// loop and for each pair of elements, check, If a duplicate is found (nums[i] === nums[j]), return true immediately.
// If the loops completes without finding any duplicates, return false.
// TC:- O(N^2), because of the nested loop to find duplicate.
// SC:- O(1), since no space is used.

var containsDuplicate = function(nums){
    for(let i = 0; i < nums.length-1; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                return true;
            }
        }
    }

    return false;
}

// Optimal Approach:
// use of a Set to store unique elements of the array and while iterating through the array, check if the current iterated
// element already exists in the hash set. If it does, this means a duplicate element found, and return true.
// And if the element is not in the has set, add it to the hash set and continue the iteration.
// Once the loop completes without finding any duplicates, return false. 
// TC:- O(N), to iterate through the array to store unique element of it into hash set.
// SC:- O(N), to store element of an array into hash set.

var containsDuplicate = function(nums) {
    let set  = new Set();
    for(let i =0;i<nums.length;i++){
        if(set.has(nums[i])){
            return true;
        }else{
            set.add(nums[i])
        }
    }



    return false;
};