// Leetcode Problem :- 75
// Problem statement :- Sort the colors of the given array in such a way that it contains
// all 0's followed by 1's followed by 2's.

// Brute force approach:
// Approach:- Use a loop.
// Use three pointers c0, c1, and c2 which will keep track of the count of 0's, 1's, and 2's.
// Traverse through the given array using a for loop.
// While traversing, check if the current value is 0, then increment c0.
// If the value is 1, increment c1, and if the value is 2, increment c2.
// After that, take one pointer i which will help to replace the given array in sorted order.
// Run three while loops until c0, c1, and c2 become 0 to replace the array with sorted colors.

// TC:- O(N), Explanation:-
// O(N):- used to run the first for loop to traverse through the given array.
// O(K):- used to run three different while loops, whose overall complexity is O(3K) = O(K),
// after removing the constant.
// So, overall TC:- O(N) + O(K) = O(N), Since in asymptotic notation, we consider the dominant term, i.e.,
// the term that grows the fastest as n increases.
// SC:- O(1), Since no additional space is used apart from few pointers which will take constant space.

var sortColors = function(nums) {
   let c0 = 0, c1 = 0, c2 = 0;

   for(let i = 0; i < nums.length; i++){
      if(nums[i] === 0){
         c0++;
      } else if(nums[i] === 1){
         c1++;
      } else if(nums[i] === 2){
         c2++;
      }
   }

   let i = 0;

   while(c0 > 0){
      nums[i] = 0;
      c0--;
      i++;
   }

   while(c1 > 0){
      nums[i] = 1;
      c1--;
      i++;
   }

   while(c2 > 0){
      nums[i] = 2;
      c2--;
      i++;
   }
};


// Optimal Approach:
// Approach:-

// Since, according to the problem, we have to solve the given sort colors problem in one pass
// (i.e., using a single traversal), we take three pointers: left, mid, and right.
// The left pointer represents the position for 0s, the mid pointer is used for traversal,
// and the right pointer represents the position for 2s.

// We use the mid pointer to traverse through the whole array,
// whereas left and right are used for swapping elements to place them correctly.

// We run a while loop until mid <= right so that we also process the case
// when mid and right are at the same index.

// While traversing the array:
// - If the value at mid is 0, swap it with left and increment both left and mid.
// - If the value at mid is 2, swap it with right and decrement right.
// - If the value at mid is 1, just increment mid (no swap needed since 1 is already in correct region).

// TC:- O(N)
// Since only a single while loop is used to traverse the array.

// SC:- O(1)
// Since no additional space is used apart from a few pointers.

// Note:- Why not increment mid while decrementing right?
// => Because after swapping nums[mid] with nums[right], the new value at mid
// might still be unsorted (it could be 0, 1, or 2).
// So we must re-check the current mid value instead of moving forward.

// KEY POINT:
// The array is divided into regions:
// [0 ... left-1] → all 0s
// [left ... mid-1] → all 1s
// [mid ... right] → unknown
// [right+1 ... end] → all 2s

var sortColors = function(nums){
    let left = 0, mid = 0, right = nums.length - 1;

    while(mid <= right){
        if(nums[mid] === 0){
            let temp = nums[left];
            nums[left] = nums[mid];
            nums[mid] = temp;
            left++;
            mid++;
        } else if(nums[mid] === 2){
            let temp = nums[mid];
            nums[mid] = nums[right];
            nums[right] = temp;
            right--;
        } else { // nums[mid] === 1
            mid++;
        }
    }
}