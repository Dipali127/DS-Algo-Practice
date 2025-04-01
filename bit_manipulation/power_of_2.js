// Since a power of two has only one set bit in its binary representation, performing a bitwise AND operation between n and n - 1 results in 0. If n & (n - 1) == 0, it means n is a power of two.
// TC:- O(1), since bitwise operations take constant time.
// SC:- O(1), since no extra space is used.
var isPowerOfTwo = function(n) {
    if(n <= 0){
        return false;
    }

    return (n & (n - 1)) === 0;
};