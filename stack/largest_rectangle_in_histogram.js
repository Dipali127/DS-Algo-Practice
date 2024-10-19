// Leetcode Problem:- 84
// Problem Says:
// Given an array 'height' of integers representing  the histogram's bar where width of each bar is 1, return the 
// area of the largest rectangle in the histogram. 
// Brute force approach:
// approach:-
// traverse through each bar of histogram and for each bar 'i', expand as far left and right as possible until you
// reach bars that are shorter than the current bar (i.e., keep moving left and right while the heights are greater
// than or equal to height[i]).
// once the left and right boundaries are determined, calculate the width of the rectangle as right - left - 1 
// (since left and right go beyond the bounds of the valid rectangle). 
// and for each bar, calculate the area and update maxArea if this rectangle has a larger area than previously found.
// TC:- O(N^2), as for each bar in the histogram, we expand left and right to find the largest possible rectangle that
// includes the current bar and in the worst case, we may traverse the entire array for each bar, leading to O(N) 
// operations for each of the 'N' bars. Therefore, the overall time complexity is O(N²).
// SC:- O(1), since no additional space is required.

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
// approach:-
// call a function prevSmaller, which returns the indices for all the previous smaller heights for each bar. 
// then call a function nextSmaller, which returns the indices for all the next smaller heights for each bar. 
// iterate through the height array, and for each bar, compute the width using the previousSmaller and nextSmaller
// arrays and compute the area using the width and the current iterated height while updating maxArea.  
// Inside 'prevSmaller' function:-
// create an array 'ps' of size 'height.length' and initially fill all elements with -1, which indicates that there is
// no previous smaller height for the current height.
// for the current iterated bar, use a stack to keep track of indices. 
// until the stack is not empty and the height at the index of the top of the stack is greater than or equal to the 
// current height, pop from the stack and alter this if the stack is not empty it means that the index at the top of
// the stack will be the previous smaller index, which we will update to ps[i].
// otherwise, push the current index onto the stack.
// Inside 'nextSmaller' function:-
// create an array 'ns' of size 'height.length' and fill all elements with height.length, indicating that there is no
// smaller height to the right initially.
// use a stack to track indices and for each bar, pop from the stack until the current bar is smaller than the height
// at the index of the top of the stack.
// once the current bar is less than the top of the stack, update the ns array with the index of the current bar.
// otherwise, push the current index onto the stack. 
// TC:- O(N), Explanation:-
// O(N):- to get previous smaller indices for each bar of height.
// O(N):- get the next smaller indices for each bar of height.
// O(N):- to compute width for each bar 'height' array.
// overall, TC:- O(N) + O(N) + O(N) = O(N).
// SC:- O(N), space used by stack to store indices.

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