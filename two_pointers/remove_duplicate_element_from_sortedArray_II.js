// Leetcode Problem : 80
// Brute force approach:-
// approach:-
// iterate through the given array 'nums' and for each element, check if it is equal to the second next element 
// (nums[i] === nums[i+2]).
// If a duplicate is found (i.e., nums[i] === nums[i+2]), remove the duplicate element using the splice method.
// after removing an element, decrement the loop index i by 1 to ensure the next element is not skipped, 
// as the array length decreases and the elements shift left.
// TC: O(N^2), because the splice method is used inside the loop to remove elements, and each splice operation 
// modifies the array.
// SC: O(1), as no additional space is used.

var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 2]) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
};

// Optimal Approach:-
// take two pointers i and j, where i pointer represent to last unique element of the given array 'nums' and pointer
// j is used to traverse the given array 'nums'.
// set i to 1. this will keep track of the position where the next unique element should be placed.
// start j from 2, as i initially points to the second element which is considered unique.
// while iterating, for each element at index j, check if it is different from the element at index i (nums[j] !== nums[i]).
// if the current element nums[j] is different from nums[i-1], it is a new unique element:-
//       - increment i to move to the next position for the unique element.
//       - assign nums[j] to nums[i] to place the new unique element in the correct position.
// after the loop completes, i will point to the index of the last unique element.
// return number of unique elements i.e: i + 1 because i is a zero-based index.
// TC:- O(N), where 'N' is the number of elements in the given array 'nums', since we iterate through the array once.
// SC:- O(1), as there is no additional space used apart from the pointer 'j'.

 var removeDuplicates = function(nums) {
    let i = 1;
    for(let j=2;j<nums.length;j++){
        if(nums[j] !== nums[i-1]){
            i++;
            nums[i] = nums[j];
        }
    }

    return i+1;
 }
