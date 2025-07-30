// Leetcode Problem: 84
// Problem Statement:
// Given an array 'height' of integers representing the histogram's bars where the width of each bar is 1,
// return the area of the largest rectangle in the histogram.
// Brute-force Approach:
// Approach:
// Traverse through each bar of the histogram, and for each bar 'i', expand the left and right pointers 
// until you find bars whose heights are shorter than the current bar (i.e., keep moving left and right 
// while the heights are greater than or equal to height[i]).
// Once the left and right boundaries are found, calculate the width of the rectangle as (right - left - 1), 
// since left and right point to the first bars that are shorter than the current height (or out of bounds), 
// so we subtract 1 to exclude those invalid positions.
// For each bar, calculate the area and update maxArea if this rectangle has a larger area than previously found.

// Time Complexity: O(N^2)
// For each bar in the histogram, we expand left and right to find the largest possible rectangle that 
// includes the current bar. In the worst case, we may traverse the entire array for each bar, leading to 
// O(N) operations for each of the 'N' bars. Therefore, the overall time complexity is O(N²).
// Space Complexity: O(1)
// No additional space is required, so the space complexity is constant.

// Note: 
// A valid rectangle for a given bar includes those bars to the left and right of the current bar 
// whose heights are greater than or equal to the height of the current bar.


var largestRectangleArea = function (height) {
    let maxArea = 0;
    for (let i = 0; i < height.length; i++) {
        let left = i, right = i;
        while (left >= 0 && height[left] >= height[i]) {
            left--;
        }
        while (right < height.length && height[right] >= height[i]) {
            right++;
        }
        let width = right - left - 1;
        let area = width * height[i];
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
};

// Optimal Approach:
// Approach:
// Instead of using a nested loop to find the bar whose height is greater than or equal to the current bar, 
// I use two stacks to store the previous smaller index and the next smaller index for each bar. 
// In the brute-force approach, the left and right indices stop iterating once they find a bar whose height 
// is smaller than the current bar. This observation helps us optimize the approach using stacks.

// In the stack-based approach, I do the same thing as in the brute-force approach. That means I take
// two stacks, 'prevSmaller' and 'nextSmaller', where I store the indices of the previous and next smaller bars
// for each bar.

// I call a function `prevSmaller`, which returns the indices of all the previous smaller heights 
// for each bar. Then, I call a function `nextSmaller`, which returns the indices of all the next smaller 
// heights for each bar. 
// I then iterate through the `height` array, and for each bar, compute the width using the 
// `previousSmaller` and `nextSmaller` arrays. 
// Finally, I compute the area using the width and the current height while updating `maxArea`.  

// Inside the `prevSmaller` function:
// Create an array `ps` of size `height.length` and initially fill all the elements with -1, 
// since the left pointer may move out of bounds (before index 0). 
// If it does, that means there is no previous smaller height, so we keep the default value -1.

// For the current bar, use a stack to keep track of indices.
// While the stack is not empty and the height of the bar at the index on top of the stack is greater than or equal 
// to the current height, we pop from the stack since we need a smaller height.
// If the stack is not empty after popping, the top of the stack now gives the index of the previous smaller 
// height, which we update in `ps[i]`.
// Always push the current index onto the stack.

// Inside the `nextSmaller` function:
// Create an array `ns` of size `height.length` and fill all elements with `height.length`, 
// since the right pointer may move out of bounds (beyond the last index), which means there is no next smaller bar.
// Use a stack to keep track of indices. For each bar, pop indices from the stack while the current bar is smaller 
// than the height at the index on top of the stack. This is because the current index is the next smaller element 
// for the index at the top of the stack. Therefore, update the `ns` array at the popped index with the current index.
// Otherwise, push the current index onto the stack.

// Time Complexity: O(N)
// - O(N): To get previous smaller indices for each bar.
// - O(N): To get next smaller indices for each bar.
// - O(N): To compute the area for each bar.
// Overall TC = O(N + N + N) = O(N)

// Space Complexity: O(N)
// - Due to stack space used to store indices.


var largestRectangleArea = function (height) {
    let maxArea = 0;
    let previousSmaller = prevSmaller(height);
    let nexSmaller = nextSmaller(height);
    for(let i = 0; i < height.length; i++){
        let width = nexSmaller[i] - previousSmaller[i] - 1;
        let area = width * height[i];
        maxArea = Math.max(area, maxArea);
    }
    return maxArea;
};

// Function to find the previous smaller element for each bar
function prevSmaller(height) {
    let ps = new Array(height.length).fill(-1); 
    let stack = [];
    
    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[stack[stack.length - 1]] >= height[i]) {
            stack.pop();
        }
        if (stack.length) {
            ps[i] = stack[stack.length - 1];
        }
        
        stack.push(i);
    }
    
    return ps;
}

// Function to find the next smaller element for each bar
function nextSmaller(height) {
    let ns = new Array(height.length).fill(height.length); 
    let stack = [];
    
    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[stack[stack.length - 1]] > height[i]) {
            ns[stack.pop()] = i;
        }
        
        stack.push(i);
    }
    
    return ns;
}