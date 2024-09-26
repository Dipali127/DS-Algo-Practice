// Leetcode Problem:- 1356
// Approach: Optimal Force Approach:
// approach:-
// sort the given array based on the number of 1's (bits) in the binary representation of each number.
// If two numbers have the same number of 1's, they are sorted by their numeric value.
// Steps:
//  Apply the built-in `sort()` function on the array.
//  Inside the sort, use a custom comparison function that:
//     - Counts the number of 1's in the binary representation of each number using `findBitCount()`.
//     - If two numbers have the same bit count, compares their numeric values and sorts them accordingly.
//     - Otherwise, sorts the numbers based on the bit count (number of 1's).
// `findBitCount()` function is used to count the number of 1's in the binary representation of each number.
// Time Complexity:- O(NLOGN * logM), Explanation:- sorting the array using built-in sort function take O(NLOGN) complexity
// and for each comparison, we are counting the number of 1's in both numbers, which takes `O(log M)` time in the worst case.
// Overall, TC:- O(NLOGN * LOGM).
// SC:- O(LOGN), due to the recursion stack used in the sorting algorithm (e.g., QuickSort).

var sortByBits = function(arr) {
    // Comparison function based on bit count and value
    arr.sort((a, b) => {
        let countA = findBitCount(a);
        let countB = findBitCount(b);

        // If bit counts are the same, sort by numeric value
        if (countA === countB) {
            return a - b;
        }
        // Otherwise, sort by bit count
        return countA - countB;
    });

    return arr;
};

// Function to count the number of 1's in the binary representation of a number
function findBitCount(n) {
    let count = 0;
    while (n > 0) {
        n = n & (n - 1); 
        count++;
    }
    return count;
}


