// Optimal Approach:-
// i will take one variable `maxReach`, initialized to 0, which will keep track of the farthest position we can reach from the current position.
// i will take two more variables: `currentReach`, which keeps track of the farthest position we can reach before making the next jump, and `jump`, which counts the number of jumps taken.
// i will iterate through the array, and for each index `i`, I will update `maxReach` with the maximum between the current `maxReach` and the sum of the current index and the current iterated element.
// if the curret index 'i' reaches 'currentReach', it means we need to make a jump, so update 'currentReach' with 'maxReach' and increment 'jump'.
// TC: O(N), as we traverse the array once.
// SC: O(1), as no additional space is used.

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