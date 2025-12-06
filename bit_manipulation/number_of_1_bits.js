// Leetcode Problem:- 191
// Conclusion of both approaches:-
// The bit manipulation approach is more efficient, especially when the number of set bits is low.
// This is because the bit manipulation approach only runs as many iterations as there are set bits (k),
// while the brute-force approach checks every bit of the number, leading to O(log N) time complexity.
// Therefore, the bit manipulation approach can be faster in cases where the number of set bits is small,
// while the brute-force approach has to inspect every bit of the number, which may result in more iterations.

// Brute force approach:
// approach:-
// I will iterate over each bit of 'n', and for each bit, I will check if the current or least significant
// bit (LSB) is '1', If it is, I will increment the counter 'count'. After that, I will divide the number
// by 2 (using floor division), which effectively shifts all the bits of 'n' to the right, removing the
// least significant bit each time.
// This process continues until 'n' becomes 0, and finally, I return the count.
// TC:- O(log N), Explanation:-
// O(log N), as each division by 2 shifts the bits to the right, reducing the number of bits in the number, Since
// diving by 2 discard the right most bit(which is LSB).
// The number of iterations is proportional to the number of bits in the binary representation of 'n'.
// SC: O(1), as no additional space is used other than the count variable.
// Note:- In any number n, the number of bits required to represent it is roughly log₂(n). 
// When iterating through the bits, the number of iterations is proportional to the number of bits in n, which is log₂(n).

var hammingWeight = function (n) {
    let count = 0;
    while (n > 0) {
        if(n%2 === 1){
            count++;
        }
        n = Math.floor(n / 2);
    }

    return count;
};



// Optimal Approach:- Using Bit Manipulation.
// approach:-
// I will use the bitwise AND operator (&) between the given number 'n' and 'n - 1' which effectively
// removes the rightmost set bit (1) at each step.
// and i will take one count variable which will keep track of the number of set bits.
// I will continue this process using a while loop until all the set bits of the binary representation of the 
// given number become zero (0).
// Explanation:-
// - For any given 'n', the expression 'n & (n - 1)' flips the rightmost set bit to 0.
// - Example:- If n = 6 (binary 110), n - 1 = 5 (binary 101), and n & (n - 1) = 4 (binary 100).
// - This effectively counts the number of set bits by repeatedly removing the least significant set bit.
// TC:- O(k), where k is the number of set bits (1s) in the binary representation of 'n',
// as the time complexity is proportional to the number of set bits in 'n'.
// SC: O(1), since no additional space is used. 

var hammingWeight = function (n) {
    let count = 0;
    while (n > 0) {
        n = n & n - 1;
        count++;
    }

    return count;
};
