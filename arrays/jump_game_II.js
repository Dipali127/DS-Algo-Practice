// Optimal Approach:-
// I will take one variable `maxReach`, initialized to 0, which will keep track of the farthest position 
// we can reach while traversing the array.
// I will take two more variables: `currentReach`, which represents the farthest position we can reach 
// within the current jump, and `jump`, which counts the number of jumps taken.
// I will iterate through the array up to the second last index (nums.length - 1), because once we reach 
// the last index, no more jumps are required and by the previous jump only we can reach to last index.
// For each index `i`, I will update `maxReach` with the maximum between the current `maxReach` and 
// (i + nums[i]), which is the farthest position we can jump to from the current index.
// If the current index `i` reaches `currentReach`, it means we have reached the end of the current jump’s range. 
// Therefore, we need to make another jump. So, update `currentReach` with `maxReach` and increment `jump`, 
// since we have taken one jump.
// Finally, return `jump` as the minimum number of jumps needed to reach the last index.
//
// TC: O(N), as we traverse the array once.
// SC: O(1), as no additional space is used.

// Dry Run Example:- nums = [2,3,1,1,4]
// Step 1 (i = 0):
// i = 0, currentReach = 0
// Since i === currentReach, it means we’ve reached the end of the first range (starting point that is index 0).
// To move further, we must take our first jump.
// So:
// jump = 1
// Update currentReach = maxReach = 2
//
// Step 2 (i = 1):
// nums[1] = 3 → maxReach = max(2, 1 + 3) = 4
// Now check: i === currentReach?
// 1 === 2 → false
// So we don’t need to jump here, because we’re still within the current range (up to index 2).


var jump = function (nums) {
    let maxReach = 0;
    let currentReach = 0;
    let jump = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);
        if(i === currentReach){
            currentReach = maxReach;
            jump++;
        }
    }

    return jump;
};