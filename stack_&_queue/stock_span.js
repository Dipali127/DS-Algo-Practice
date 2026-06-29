// Geeks for Geeks
// Problem Statement:
// We are given an array representing the daily stock prices.
// The stock span for the i-th day is the number of consecutive previous days (including the current day)
// whose stock price is less than or equal to the current day's stock price.
// let arr = [100, 80, 90, 120];


// Brute Force Approach:
// Approach:
// Take a result array of length equal to the stock price array and initialize every element with 1 because
// the current day is always included in the span.
// Traverse the stock price array using nested loops, where the outer loop traverses each day and the inner
// loop traverses backward to count the consecutive previous days whose stock price is less than or equal to
// the current day's stock price.
// Stop traversing backward as soon as a previous day having a greater stock price is found because the span
// ends there.
// Store the calculated span in the result array.
// Finally, return the result array.

// Time Complexity:- O(N²), Explanation:-
// O(N) is used by the outer loop to traverse through each day, and in the worst case,
// O(N) is used by the inner loop to traverse backward and count the consecutive previous
// days whose stock price is less than or equal to the current day's stock price.

// Space Complexity:- O(N), Explanation:-
// O(N) is used by the result array to store the stock span for each day.

class Solution {
    calculateSpan(arr) {
        let result = new Array(arr.length).fill(1);

        for(let i = 0; i < arr.length; i++){
            let span = 0;

            for(let j = i; j >= 0; j--){
                if(arr[i] >= arr[j]){
                    span++;
                }else{
                    break;
                }
            }

            result[i] = span;
        }

        return result;
    }
}


// Optimal Approach:
// Approach:
// I will use a stack to store the indices of the stock prices.
// The reason for using a stack is that it maintains the indices of the previous days having greater stock prices,
// which helps us compute the stock span, i.e., the number of consecutive previous days (including the current day)
// whose stock price is less than or equal to the current day's stock price.
// While traversing each day, I remove all those previous days from the stack whose stock price is less than or equal
// to the current day's stock price because they can never act as the previous greater stock price for the current day
// or any future day.
// After these removals, if the stack becomes empty, it means there is no previous day having a greater stock price.
// Therefore, all the previous days, including the current day, are part of the span, so the span is currentIndex + 1.
// Otherwise, the top of the stack gives me the index of the nearest previous day having a greater stock price.
// Using that index, I can compute the stock span as:
// span = currentIndex - previousGreaterIndex
// Finally, I push the current day's index onto the stack so that it can act as the previous greater day for future days.

// Time Complexity:- O(N), Explanation:-
// A single loop is used to traverse through each day.
// Even though a while loop is used, the overall number of operations is O(N) because each index
// is pushed onto the stack exactly once and popped from the stack at most once.

// For each day, the while loop does not traverse through all the previous days like the brute-force approach.
// It only runs when the current day's stock price is greater than or equal to the stock price at the index
// stored on the top of the stack.
// Otherwise, it does not execute, and we simply push the current day's index onto the stack.
// Push Operation is exactly N since we push the index of every day onto the stack exactly once.
// Pop Operation is at most N because each index can be popped from the stack at most once.
// Therefore, the total number of stack operations is O(N) for push + O(N) for pop = O(2N),
// which simplifies to O(N).

// Space Complexity:- O(N), Explanation:-
// O(N) is used by the result array to store the stock span for each day.
// O(N) is used by the stack to store the indices of the previous days having greater stock prices.

// Note:- The stack maintains a monotonically decreasing order (from bottom to top) of stock prices.

class Solution {
    calculateSpan(arr) {
        let result = new Array(arr.length).fill(1);
        let stack = [];

        for(let i = 0; i < arr.length; i++){

            while(stack.length > 0 && arr[i] >= arr[stack[stack.length - 1]]){
                stack.pop();
            }

            if(stack.length === 0){
                result[i] = i + 1;
            }else{
                result[i] = i - stack[stack.length - 1];
            }

            stack.push(i);
        }

        return result;
    }
}


