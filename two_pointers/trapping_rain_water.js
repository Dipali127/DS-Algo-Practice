// Leetcode Problem:- 42
// Understanding the Problem:
// The goal is to calculate how much water can be trapped between the bars after it rains.

// Brute Force Approach:
// Approach:
// The idea to solve this problem is to run a loop, and for each building (bar) in the height array,
// I will find out the amount of water that can sit above the current bar and add it to the
// totalWaterTrapped variable.
// To compute the amount of water that can sit above a bar, I will first find the tallest building to the left
// of the current bar and store it in the leftMax variable.
// Then, I will find the tallest building to the right of the current bar and store it in the
// rightMax variable.
// Next, I will take the minimum between leftMax and rightMax because water can only be stored up to the
// height of the shorter bar on either side.
// Then, I will subtract the height of the current building from this minimum, because water starts filling
// above the bar's height(this happen when height of left and right bar equal to current bar).
// After calculating the amount of water that can sit above the current bar,
// I will add it to the totalWaterTrapped variable.
// Finally, I will return totalWaterTrapped, which contains the total amount of water that can be stored
// between the buildings.

// TC: O(N^2), because for each building, I compute `leftMax` and `rightMax`, which require an O(N) scan.
// Since this computation is performed for every building,
// the overall time complexity becomes O(N * N) = O(N^2).
// SC: O(1), since no additional space is used.
// Note:-
// If the height of the left or right bar is equal to the current bar, no water will be trapped above that bar
// because the water will overflow (since both sides are at the same level).
// If the height of the left and right bars are greater than the current bar, water can be trapped above the current bar,
//  and the amount of trapped water is determined by the smaller of the two surrounding heights (either leftMax or 
// rightMax).
// The reason we iterate from the current bar itself to calculate the leftMax and rightMax is that, in some cases, 
// the current iterated bar may be the leftMax or rightMax.
var trap = function(height) {
    let totalWaterTrapped = 0;
    for(let i = 0; i < height.length; i++){
        let leftMax = 0;
        for(let j = i; j >= 0; j--){
            leftMax = Math.max(leftMax, height[j]);
        }
        let rightMax = 0;
        for(let j = i; j < height.length; j++){
            rightMax = Math.max(rightMax, height[j]);
        }

        let waterAboveCurrentBuilding = Math.min(leftMax, rightMax) - height[i];
        totalWaterTrapped += waterAboveCurrentBuilding;
    }

    return totalWaterTrapped;
}


// Optimal Approach: prefix Sum
// approach:
// Instead of finding leftMax and rightMax for each building separately, I will precompute them using two arrays: 
// leftMax and rightMax where, leftMax stores the maximum height for each building(bar) of the height and
// rightMax stores the maximum height for each building(bar) of the height.
// Using these precomputed values, I can directly determine the amount of water that can sit on top of each building 
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

// Most Optimal Approach: using two pointer method
// approach:
// Since water can only be stored up to the minimum of the tallest heights on the left and right sides, 
// instead of precomputing these heights and storing them in extra arrays, 
// we calculate them while iterating. To do this efficiently, we use the two-pointer approach:
// We place one pointer (left) at the beginning and another pointer (right) at the end of the array.
// While iterating through the array, we keep track of the maximum heights seen so far (leftMax and rightMax).
// If the height at the left pointer is smaller than or equal to the height at the right pointer,
// it means that the left side will help compute the water stored at that index:
// We update leftMax to be the maximum of the current leftMax and height[left].
// We calculate the trapped water at the left pointer as leftMax - height[left], and add this to the total water trapped.
// Then, we move the left pointer to the right (i.e., left++).
// If the height at the right pointer is smaller than the height at the left pointer, the right side will 
// help compute the water stored at that index:
// We update rightMax to be the maximum of the current rightMax and height[right].
// We calculate the trapped water at the right pointer as rightMax - height[right], and add this to the total
//  water trapped.
// Then, we move the right pointer to the left (i.e., right--).
// This approach avoids using extra space and reduces the time complexity to O(N), as we only traverse the array once.
// Time Complexity (TC): O(N), since we traverse the array only once.
// Space Complexity (SC): O(1), since no additional space is used.


var trap = function(height){
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