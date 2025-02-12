// Leetcode Problem:- 42
// Understanding the Problem:- The goal is to calculate how much water can be trapped between the bars after it rains.
// Brute force approach:
// approach:
// The idea to solve this problem is: I will run a loop, and for each building (bar) in the height array, I will find out the amount of water that can sit on top of the current iterated building (bar) and add it to the totalwaterTrapped variable. 
// To compute the amount of water that can sit on top of a building, I will first find the tallest building to the left of the current iterated building and store it in the leftMax variable. Then, I will find the tallest building to the right of the current iterated building and store it in the rightMax variable. 
// I will take the minimum between leftMax and rightMax because water can only be stored up to the height of the shorter building. 
// Then, I will subtract it from the height of the current building, as water starts filling above it. 
// After finding the amount of water that can sit on top of the current building, I will add it to the totalwaterTrapped variable.
// Finally, I will return totalwaterTrapped, which contains the total amount of water that can be stored between the buildings.
// TC:- O(N^2), because for each building, i have computed `leftMax` and `rightMax`, which require an O(N) scan. 
// Since this computation is performed for every building, 
// the overall time complexity becomes O(N * N) = O(N^2).
// SC:- O(1), since no additional space is used.
var trap = function(height) {
    let totalwaterTrapped = 0;
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
        totalwaterTrapped+=  waterAboveCurrentBuilding;
    }

    return totalwaterTrapped;
}

// Optimal Approach: prefix Sum
// approach:
// Instead of finding leftMax and rightMax for each building separately, I will precompute them using two arrays: leftMax and rightMax where, leftMax[i] stores the maximum height of buildings from index 0 to the current index i and rightMax[i] stores the maximum height of buildings from index i to the last index of the array.
// Using these precomputed values, I can directly determine the amount of water that can sit on top of each building while iterating through the height array.
// TC: O(N), as I only use a single loop to iterate through the height array.
// SC: O(N), since additional arrays are used to store the leftMax and rightMax values.
var trap = function(height) {
    function getLeftMaxArray(height){
        let leftMax = new Array(height.length);
        leftMax[0] = height[0];
        for(let i = 1; i < height.length; i++){
            leftMax[i] = Math.max(leftMax[i-1], height[i]);
        }

        return leftMax;
    }

    function getRightMaxArray(height){
        let rightMax = new Array(height.length);
        rightMax[height.length-1] = height[height.length - 1];
        for(let i = height.length - 2; i >= 0; i--){
            rightMax[i] = Math.max(rightMax[i+1], height[i]);
        }

        return rightMax;
    }

    let leftMax = getLeftMaxArray(height);
    let rightMax = getRightMaxArray(height);

    let sum = 0;
    for(let i = 0; i < height.length; i++){
        let width = 1;
        let minHeight = Math.min(leftMax[i], rightMax[i]) - height[i];
        sum+= minHeight;  
    }

    return sum;
};

// Most Optimal Approach:
// approach:
// To improve space complexity, I will use the two-pointer approach with left and right pointers, where;
// left is initially set to index 0 and right is initially set to the last index of the height array.
// i will use of two variable leftMax and rightMax to maintain the maximum height encountered so far from the left and maximum height encountered so far from the right.
// I will run a while loop until left is less than right and inside the loop; i will check If height[left] <= height[right], if it is then i will update leftMax for the building at the left pointer. Then, I will compute the trapped water by subtracting height[left] from leftMax and add it to the totalWaterTrapped variable since water starts filling above the building and increment left.
// Otherwise (if height[left] > height[right]), then I will update rightMax for the building at the right pointer. Then, I will compute the trapped water by subtracting height[right] from rightMax and add it to totalWaterTrapped and decrement right.
// TC:- O(N), as we traverse the array only once.
// SC:- O(1), since no additional space is used.
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