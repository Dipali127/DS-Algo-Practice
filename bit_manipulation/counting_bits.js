// Leetcode Problem:- 338
// Brute force approach
// Approach:-
// initialize a 'result' array to store the count of 1s (set bits) for each number from 0 to n.
// for each number 'i' from 0 to n, use a variable 'num' to hold the value of 'i'.
// then count the number of set bits (1s) in 'num' by repeatedly applying the bitwise operation 'num = num & (num - 1)'.
// This operation removes the rightmost set bit (1) in 'num' during each iteration of the while loop.
// and this loop continues until 'num' becomes 0, and track how many times the loop runs, which is the count of 1 bits for 'i'.
// after finding the count of ones for current number 'i', push it into the result array and finally return it.
// Time Complexity: O(N * k)
// - For each number up to N, we count the set bits using the operation (num = num & (num - 1)).
// - This operation runs in O(k) time, where k is the number of set bits in the current number.
// - Therefore, the overall complexity is O(N * k).
// Space Complexity: O(N)
// - We store the count of set bits for each number from 0 to N in the 'result' array.


var countBits = function(n) {
    let result = [];
    for(let i=0; i<=n; i++){
        let count = 0, num = i;
        while(num>0){
            num = num & (num-1)
            count++;
        }

        result.push(count);
    }

    return result;
};

// Optimal Appraoch:
// Approach:-
// use the 'result' array to store the count of set bits (1s) for each number from 0 to n.
// The idea is to utilize the fact that:
// - for even numbers, the number of set bits is the same as i/2 (since dividing by 2 in binary shifts all 
// bits to the right, which does not change the number of 1s).
// - For odd numbers, the number of set bits is one more than i/2 (because the least significant bit is 
// always 1 for odd numbers).
// TC: O(N), because we compute the count of 1s for each number from 0 to n in constant time.
// SC: O(N), for storing the count of set bits for each number.
// Note:- here, i am reusing the previously computed count of bits for even and odd numbers to improve the efficiency of 
// the algorithm.
// Math.floor() always rounds down to the nearest integer, meaning it discards the decimal part and keeps the lower integer.
var countBits = function(n) {
    let result = [];
    if (n === 0) {
        return [0];
    }

    // Binary of 0 has 0 number of bits set as 1
    result.push(0);

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            result[i] = result[i/2];
        } else {
            result[i] = result[Math.floor(i/2)]+1;
        }
    }

    return result;
};
