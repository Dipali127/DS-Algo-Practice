// Leetcode Problem:- 16
// Brute force approach:
// approach:-
// use three nested loops to iterate through each possible combination of three numbers in the array.
// - the outer loop fixes the first number of the triplet.
// - the middle loop picks the second number after the first.
// - and the inner loop picks the third number after the second.
// for each triplet, calculate the sum and check if its absolute difference from the target
// is smaller than the absolute difference of the current closest sum from the target.
// If it is, update `closestSum` to this new sum.
// After all combinations have been checked, return the closest sum found.
// Note:- 
// Math.abs(target - sum): This calculates the absolute difference between the current triplet sum and the target. 
// It tells us how far the sum is from the target.
// Math.abs(target - closestSum): This calculates the absolute difference between the closest sum found so far and 
// the target. It tells us how far this closest sum is from the target.
// if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
//                   closestSum = sum;
//               }  -> This check if the absolute difference of the current sum (sum) from the target is less than the
// absolute difference of the current closest sum (closestSum) from the target.
// if it is, it means that the current sum is closer to the target than the previously stored closest sum.
// TC:- O(N^3), due to the three nested loops.
// SC:- O(1), since only a constant amount of additional space is used.

var threeSumClosest = function (nums, target) {
    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                    closestSum = sum;
                }
            }
        }
    }

    return closestSum;
};

// Optimal Approach: Using Two-Pointer Method
// Approach:
// Sort the given array 'nums' and use the two-pointer technique to find the sum closest to the target.
// Initialize `closestSum` to Infinity to keep track of the closest sum found so far.
// Traverse through the given array 'nums' using an outer loop. For each element, 
// use two pointers: 'start' (pointing to the next element after the current one) 
// and 'end' (pointing to the last element of the array).
// Run a while loop until 'start' is less than 'end' and calculate the sum of 
// the current element, 'start', and 'end'.
// If the absolute difference between the target and the current sum is smaller 
// than the absolute difference between the target and the closest sum so far, 
// update `closestSum` with the current sum.
// If the current sum is less than the target, increment 'start' to increase the sum.
// If the current sum is greater than the target, decrement 'end' to decrease the sum.
// Time Complexity: O(N^2), due to the nested loop.
// Space Complexity: O(1), since no additional space is used.
// Note: If the problem does not require returning indices, first sort the array 
// and then use the two-pointer method to efficiently find the closest sum.

var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i <= nums.length - 3; i++) {
        let l = i + 1, m = nums.length - 1;
        while (l < m) {
            let sum = nums[i] + nums[l] + nums[m];
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }
            if (sum < target) {
                l++;
            } else {
                m--;
            }
        }
    }

    return closestSum;
};
