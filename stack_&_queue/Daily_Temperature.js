// Leetcode Problem - 739
// You are given an array of daily temperatures.
// For each day, find how many days you need to wait until you see a warmer temperature.
// If a warmer temperature never comes, put 0 for that day.
// let temperatures = [73,74,75,71,69,72,76,73];

// Brute Force Approach:
// Approach:
// Take a result array of length equal to the temperature array and fill all indices initially with 0 so that if a warmer
// day is not found for any day, keep 0 for that day.
// Traverse the temperature array using nested loops, where the outer loop traverses through all the days and, for each
// day, the inner loop finds the first warmer day than the current day.
// Once a warmer day is found, store the difference between the indices of the warmer day and the current day in the
// result array and break the loop, since we found the warmer day.
// Finally, return the result array.

// Time Complexity:- O(N^2), Explanation:-
// O(N) is used by the outer loop to traverse through each day, and O(N) is used by the inner loop to find the warmer
// day for the current day.
// Space Complexity:- O(N), used by the result array to store how many days each day has to wait to get a warmer day.

var dailyTemperatures = function(temperature) {
    let result = new Array(temperature.length).fill(0);

    for(let i = 0; i < temperature.length; i++){
        for(let j = i+1; j < temperature.length; j++){
            if(temperature[i] < temperature[j]){
                result[i] = j - i;
                break;
            }
        }
    }

    return result;
};


// Optimal Approach 1: left to right traversal
// Approach:
// Take a result array of length equal to the temperature array and fill all indices initially with 0 so that if a warmer
// day is not found for any day, keep 0 for that day.
// Use a stack to store the indices of the days that are waiting for their warmer day.
// Traverse the temperature array from left to right.
// While traversing the temperature array,
// Run a while loop until the stack length is greater than 0 and the current day's temperature is greater than the
// temperature of the day whose index is stored on the top of the stack. If this is the case, then store the difference
// between the indices of the current day and the day index stored on the stack in the result array at the top index
// stored on the stack.
// Continue running the while loop as long as the condition inside it is met.
// If the condition inside the while loop is not met, then add the current index onto the stack.
// Finally, return the result array.

// Time Complexity:- O(N), Since a single loop is used to traverse through each day.
// Even though a while loop is used, the overall number of operations is O(N) because each index is pushed onto the
// stack once and popped from the stack at most once.

// For each day, the while loop does not traverse through all the remaining days like the brute-force approach.
// It only runs when the current temperature is greater than the temperature at the index on the top of the stack.
// Otherwise, it doesn't execute, and we simply push the current index onto the stack.
// Push Operation is exactly N since we push the index of every day onto the stack exactly once.
// Pop Operation is at most N because each index can be popped from the stack at most once when the condition inside 
// the while loop is met.
// Therefore, the total number of stack operations is O(N) for push + O(N) for pop = O(2N), which simplifies to O(N).

// Space Complexity:- O(N), Explanation:-
// O(N) used by the stack to store the indices of the days that are waiting for their warmer day.
// O(N) used by stack to the indices of day who are waiting for their warmer day.

var dailyTemperatures = function(temperature){
    let result =  new Array(temperature.length).fill(0);
    let stack = [];
    for(let i = 0; i < temperature.length; i++){
        while(stack.length > 0 && temperature[i] > temperature[stack[stack.length-1]]){
            result[stack[stack.length-1]] = i - stack.pop();
        }

        stack.push(i);
    }

    return result;
}

// Optimal Approach 2: - Right to Left Traversal
// Approach:
// Take a result array of length equal to the temperature array and fill all indices initially with 0 so that if a warmer
// day is not found for any day, keep 0 for that day.
// Use a stack to store the indices of the days that can act as the next warmer day for the untraversed days on the left.
// Traverse the temperature array from right to left.
// While traversing the temperature array,
// Run a while loop until the stack length is greater than 0 and the current day's temperature is greater than or equal
// to the temperature of the day whose index is stored on the top of the stack. If this is the case, then pop the index
// from the stack because we are looking for a warmer day whose temperature is greater than the current day's temperature.
// Continue running the while loop as long as the condition inside it is met.
// If the stack is not empty after the while loop, then the index stored on the top of the stack represents the next
// warmer day. Store the difference between that index and the current index in the result array.
// Push the current index onto the stack because it can act as the next warmer day for the untraversed days on the left.
// Finally, return the result array.

// Time Complexity:- O(N), Explanation:-
// Since a single loop is used to traverse through each day.
// Even though a while loop is used, the overall number of operations is O(N) because each index is pushed onto the
// stack exactly once and popped from the stack at most once.

// For each day, the while loop does not traverse through all the remaining days like the brute-force approach.
// It only runs when the current temperature is greater than or equal to the temperature at the index on the top of the
// stack. Otherwise, it doesn't execute, and we simply push the current index onto the stack.
// Push Operation is exactly N since we push the index of every day onto the stack exactly once.
// Pop Operation is at most N because each index can be popped from the stack at most once when the condition inside
// the while loop is met.
// Therefore, the total number of stack operations is O(N) for push + O(N) for pop = O(2N), which simplifies to O(N).

// Space Complexity:- O(N), Explanation:-
// O(N) used by the result array to store how many days each day has to wait to get a warmer day.
// O(N) used by the stack to store the indices of the days that can act as the next warmer day for the untraversed days
// on the left.

var dailyTemperatures = function(temperature){
    let result = new Array(temperature.length).fill(0);
    let stack = [];
    for(let i = temperature.length-1; i >= 0; i--){
        while(stack.length > 0 && temperature[i] >= temperature[stack[stack.length-1]]){
            stack.pop();
        }

        if(stack.length){
            result[i] = stack[stack.length-1] - i;
        }

        stack.push(i);
    }

    return result;
}