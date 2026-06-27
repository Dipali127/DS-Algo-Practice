// Leetcode Problem: 42
// Understanding the Problem:
// The goal of the Trapping Rain Water problem is to calculate the total amount of water trapped after raining.
// For each index (bar), we compute how much water can be stored above it.

// Brute Force Approach:
// Approach:
// To solve the Trapping Rain Water problem, I observe that the water trapped at each bar depends on the tallest bar on 
// its left and the tallest bar on its right. 
// The water level at each bar (index) is determined by the minimum of the left maximum height bar and the right maximum 
// height bar because water can only be stored up to the shorter height of the surrounding bars.
// We then subtract the current height bar from the minimum height bar value because water will start fill from above the 
// current height of the bar and it only fill upto shorter height of the surrounding bar.

// To compute the amount of water that can be trapped at each bar:
// 1. First, find the tallest bar to the left of the current bar and store it in `leftMax`.
// 2. Then, find the tallest bar to the right of the current bar and store it in `rightMax`.
// 3. The water level at each bar (index) is determined by the minimum of the left maximum height bar and the right 
// maximum height bar because water can only be stored up to the shorter height of the surrounding bars.
// We then subtract the current height bar from the minimum height bar value because water can only occupy the space 
// above the current bar up to the shorter height of the surrounding bars.
// 5. Add the result to `totalWaterTrapped`.
// Finally, return `totalWaterTrapped`, which represents the total amount of water that can be trapped across all bars.

// Time Complexity (TC): O(N^2)
// For each bar, we compute `leftMax` and `rightMax` by scanning the array to the left and right, respectively,
// resulting in O(N) operations per bar. Since we do this for every bar, the total time complexity is O(N * N) = O(N^2).

// Space Complexity (SC): O(1)
// No additional space is used other than a few variables for tracking water and maximum heights.

// Notes:
// - If the height of either the left or right bar is equal to the current bar,
//   no water will be trapped above it because the water would overflow (since both sides are at the same level).
// - If both the left and right bars are taller than the current bar,
//   water can be trapped above the current bar, and the amount is determined by the shorter of the two surrounding bars.
// - We include the current bar in the scan for `leftMax` and `rightMax` because
//   the current bar itself may be the maximum on one or both sides.
// - The inner loops start from the current index because it might be possible that the current bar itself is the left
//   maximum or the right maximum, and no greater value exists on one side.

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
// Instead of finding leftMax and rightMax for each building/bar separately, I will precompute them using two arrays: 
// leftMax and rightMax where, leftMax stores the maximum height on the left for each building(bar) and rightMax stores
// the maximum height on the right for each building(bar) of the height array.
// Using these precomputed values, I can directly determine the amount/level of water that can sit at each building/bar 
// while iterating through the height array.

// TC: O(N), as I only use a single loop to iterate through the height array.
// SC: O(N), since additional arrays are used to store the leftMax and rightMax values.

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

// Most Optimal Approach: Using the two-pointer method
// Approach:
// Since water can only be trapped up to the minimum of the tallest heights on the left and right sides of each bar,
// instead of precomputing these heights and storing them in extra arrays,
// we can calculate them dynamically while iterating using two pointer. 

// We place one pointer (`left`) at the beginning and another pointer (`right`) at the end of the array.
// While iterating through the array, we keep track of the maximum heights seen so far and store them in `leftMax` and
// `rightMax`.
// leftMax = tallest bar seen so far from the left side up to the current left pointer.
// rightMax = tallest bar seen so far from the right side up to the current right pointer.
// If the height at the left pointer is smaller than or equal to the height at the right pointer,
// it means that the left side determines how much water can be trapped for the current bar. 
// We update `leftMax` to be the maximum of the current `leftMax` and `height[left]`.
// Then, we compute the trapped water at the `left` pointer as `leftMax - height[left]`
// (subtracting the current height because water can occupy the space above the current bar upto the shorter height 
//  of the surrounding bar).
// Then, compute the exact amount of water a current bar can store).
// We add this amount to the total water trapped.
// Finally, we move the left pointer to the right (`left++`).

// If the height at the right pointer is smaller than the height at the left pointer,
// the right side determines how much water can be trapped for the current bar.
// We update `rightMax` to be the maximum of the current `rightMax` and `height[right]`.
// We compute the trapped water at the `right` pointer as `rightMax - height[right]`,
// and add this to the total water trapped.
// Then, we move the right pointer to the left (`right--`).

// This approach avoids using extra space and reduces the time complexity to O(N), as we only traverse the array once.
// Time Complexity (TC): O(N), since both pointers traverse the height array once.
// Space Complexity (SC): O(1), since no additional space is used.

// Note:- When height[left] <= height[right], it means that for current bar we will use height of left bar which has 
// minimum value as compared to height of bar at right pointer and this height of bar at left has maximum than current bar
// so, height of bar at left is sufficient to compute that how much water current bar will store.
// And after getting minimum between leftMax and rightMax for current bar, subtracting current height bar from that 
// minimum height bar between leftMax and rightMax will decide that how much water level will be store on the current bar.
    let totalwaterTrapped = 0;
    let left = 0, right = height.length - 1;
    let leftMax = height[left], rightMax = height[right]
    while(left < right){
        if(height[left] <= height[right]){
            leftMax = Math.max(leftMax, height[left]);
            totalwaterTrapped+= leftMax - height[left];
            left++;
        }else{
            rightMax = Math.max(rightMax, height[right]);
            totalwaterTrapped+= rightMax - height[right];
            right--;
        }
    }

    return totalwaterTrapped;
}
