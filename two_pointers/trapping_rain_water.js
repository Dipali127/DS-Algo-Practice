// Leetcode Problem: 42
// Understanding the Problem:
// The goal of the Trapping Rain Water problem is to calculate the total amount of water trapped after 
// raining.
// For each index (bar), we compute how much water can be stored above the current bar.

// Brute Force Approach:
// Approach:
// To solve the Trapping Rain Water problem, I observe that the water trapped at each bar depends on the 
// tallest bar on its left and the tallest bar on its right. 
// The water level at each bar (index) is determined by the minimum of the left maximum height bar and the 
// right maximum height bar because water can only be stored up to the shorter height of the surrounding bars.
// We then subtract the current height bar from the minimum height bar value because water will start fill 
// from above the current height of the bar upto shorter height of the surrounding bar.

// To compute the amount of water that can be trapped at each bar:
// 1. First, find the tallest bar on the left of the current bar and store it in `leftMax`.
// 2. Then, find the tallest bar on the right of the current bar and store it in `rightMax`.
// 3. The water level at each bar (index) is determined by the minimum of the left maximum height bar and 
// the right maximum height bar because water can only be stored up to the shorter height of the surrounding
// bars.
// We then subtract the current height bar from the minimum height bar value because water will start fill 
// from above the current height of the bar and it only fill upto shorter height of the surrounding bar.
// 5. Add the result to `totalWaterTrapped`.
// Finally, return `totalWaterTrapped`, which represents the total amount of water that can be trapped across all bars.

// Time Complexity (TC): O(N^2)
// For each bar, we compute `leftMax` and `rightMax` by scanning the array to the left and right, 
// respectively, resulting in O(N) operations per bar. 
// Since we do this for every bar, the total time complexity is O(N * N) = O(N^2).

// Space Complexity (SC): O(1)
// No additional space is used other than a few variables for tracking water and maximum heights.
4
// Notes:
// - If the current bar's height is equal to either leftMax or rightMax, no water will be trapped above it 
//   because the water level becomes equal to the current bar's height.
// - If both the left and right bars are taller than the current bar,
//   water can be trapped above the current bar, and the amount is determined by the shorter of the two 
//   surrounding bars.
// - The inner loops start from the current index because it may be possible that the current height bar
//   itself is the left maximum or the right maximum, and no greater value exists on one or both side.

var trap = function(height) {
   let totalWater = 0;
    for(let i = 0; i < height.length; i++){                                             
        let leftMax = 0, rightMax = 0;
        for(let j = i; j >= 0; j--){
            leftMax = Math.max(leftMax, height[j]);
        }
        
        for(let j = i; j < height.length; j++){
            rightMax = Math.max(rightMax, height[j]);
        }
        
        let waterAtcurrentBar = Math.min(leftMax, rightMax) - height[i];
        totalWater+=waterAtcurrentBar; 
    }
    
    return totalWater;
}


// Optimal Approach: prefix Sum
// approach:
// Instead of finding leftMax and rightMax for each building/bar separately, I will precompute them using
// two arrays: leftMax and rightMax where, leftMax stores the maximum left height for each building(bar) and
// rightMax stores the maximum right height for each building(bar) of the height array.
// Using these precomputed values, I can directly determine the amount/level of water that can sit at each
// building/bar while iterating through the height array.

// TC: O(N), because we traverse the array three times sequentially. Since sequential traversals are added,
// the total complexity is O(3N), which simplifies to O(N).
// SC: O(N), Since additional arrays are used to store the leftMax and rightMax values.

var trap = function(height){
    let leftMax = [height[0]];
    for(let i = 1; i < height.length; i++){
        leftMax[i] = Math.max(leftMax[i-1], height[i]);
    }

    let rightMax = [];
    rightMax[height.length - 1] = height[height.length - 1];
    for(let i = height.length - 2; i >= 0; i--){
        rightMax[i] = Math.max(rightMax[i+1], height[i]);
    }

    let totalWater = 0;
    for(let i = 0; i < height.length; i++){
        totalWater+= Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return totalWater;
}

// Most Optimal Approach: Using the Two-Pointer Method
// Approach:
// Since water can only be stored up to the minimum of the maximum heights on the left and right sides of
// each bar, instead of precomputing these heights and storing them in extra arrays,
// we can calculate them dynamically while iterating using two pointers.

// We place one pointer (`left`) at the beginning and another pointer (`right`) at the end of the array.
// While iterating through the array, we keep track of the maximum heights seen so far and store them in
// `leftMax` and `rightMax`.
// leftMax = tallest bar seen so far from the left side up to the current left pointer.
// rightMax = tallest bar seen so far from the right side up to the current right pointer.

// If the height of the bar at the left pointer is smaller than or equal to the height of the bar at the
// right pointer, it means that the left side determines how much water can be trapped for the current bar.
// We update `leftMax` to be the maximum of the current `leftMax` and `height[left]`.
// Then, we compute the trapped water at the `left` pointer as `leftMax - height[left]`
// (subtracting the current height because water starts filling from above the current bar up to the
//  shorter height of the surrounding bar).
// Then, we compute the exact amount of water the current bar can store.
// We add this amount to the total water trapped.
// Finally, we move the left pointer to the right (`left++`).

// If the height of the bar at the right pointer is smaller than the height of the bar at the left pointer,
// the right side determines how much water can be trapped for the current bar.
// We update `rightMax` to be the maximum of the current `rightMax` and `height[right]`.
// We compute the trapped water at the `right` pointer as `rightMax - height[right]`,
// and add this to the total water trapped.
// Then, we move the right pointer to the left (`right--`).

// This approach avoids using extra space and reduces the time complexity to O(N), as we only traverse the
// array once.

// Time Complexity (TC): O(N), since both pointers traverse the height array only once.
// Space Complexity (SC): O(1), since no additional space is used.

// Why didn't we sort the array?
// Because sorting the array would change the original positions of the bars.

// Why do you process the left side when height[left] <= height[right]?
// We always process the side with the smaller current height because the opposite side already provides a
// boundary that is at least as tall as the current bar. Therefore, for the current left bar, the amount of
// trapped water can be determined using leftMax. So we compute leftMax - height[left] and move the left 
// pointer. Similarly, when height[right] < height[left], we process the right side using rightMax.

  var trap = function (height) {
    let totalWater = 0;
    let leftMax = 0, rightMax = 0, left = 0, right = height.length - 1;

    while(left < right){
        if(height[left] <= height[right]){
            leftMax = Math.max(leftMax, height[left]);
            totalWater+= leftMax - height[left];
            left++;
        }else{
            rightMax = Math.max(rightMax, height[right]);
            totalWater+= rightMax - height[right];
            right--;
        }
    }

    return totalWater; 
};