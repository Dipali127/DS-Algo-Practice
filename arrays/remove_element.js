// Leetcode Problem:- 27
// Brute force approach:-
// approach:-
// iterate through the given array nums and check if the current iterated value is equal to the given val. if it is, 
// remove that value by using the splice method. 
// after removing an element, decrement the loop index i by 1 to ensure the next element is not skipped, 
// as the array length decreases and the elements shift left.
// TC: O(N^2), because the splice method is used inside the loop to remove elements, and each splice operation 
// modifies the array.
// SC: O(1), as no additional space is used.

var removeElement = function (nums, val) {
    for(let i=0;i<nums.length;i++){
        if(nums[i] === val){
            nums.splice(i,1);
            i--;
        }
    }

    return nums.length;
}

// Optimal Approach: using two pointers
// approach:-
// initialize a pointer 'j' with 0. This pointer will be used to update the given array 'nums' in such a way that
// all the elements that are not equal to 'val' will be placed at the beginning of the array.
// iterate through the array 'nums' using a for loop with pointer 'i':
//   - if the current iterated element 'nums[i]' is not equal to 'val', assign it to 'nums[j]' and increment 'j'.
//   - this effectively shifts all the elements that are not equal to 'val' towards the beginning of the array.
// after the loop finishes, 'j' will represent the new length of the modified array, which includes only the elements
// that are not equal to 'val'.
// return 'j', which contains the length of the array 'nums' after removing all occurrences of 'val'.
// TC:- O(N), where 'N' is the number of elements in the given array 'nums', since we iterate through the array once.
// SC:- O(1), as there is no additional space used apart from the pointer 'j'.

var removeElement = function (nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i];
        }
    }

    return j;
}