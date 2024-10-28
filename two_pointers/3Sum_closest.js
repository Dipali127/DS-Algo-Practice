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
// SC:- o(1), since only a constant amount of additional space is used.

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
// sort the given array 'nums' and use two-pointer technique to get closest sum equals target.
// use a fixed pointer 'i' for one number and two pointers 'l' and 'm' for the other two numbers.
// the left pointer 'l' starts just after 'i', and the right pointer 'm' starts at the end of the array.
// the sum of the three numbers is calculated, and the closest sum to the target is updated accordingly.
// if the current sum is less than the target, increment the left pointer to increase the sum.
// if the current sum is greater than or equal to the target, decrement the right pointer to decrease the sum.
// TC:- O(N^2), due to nested loop.
// SC:- O(1), since no additional space is used.
// Note: If the problem does not ask for returning indices, first sort the array and use the two-pointer method to find the closest sum efficiently. 

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
