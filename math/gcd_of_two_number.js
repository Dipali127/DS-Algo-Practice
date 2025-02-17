// what is GCD(greatest common divisor):- Greatest Common Divisor (GCD) of two numbers is the largest number
//  that divides both numbers without leaving a remainder.
// Approach: Using the Euclidean Algorithm (Subtraction Method)
// (1) If one of the numbers becomes 0, return the other number, 
//     because any number's GCD with 0 is the number itself.  
// (2) If a is equal to b (base case), return either a or b. This means we have found the GCD.  
// (3) Otherwise, if a is greater than b, recursively call the gcd function with (a - b, b) to reduce the
//  larger number to smaller.  
//     If b is greater than a, recursively call the gcd function with (a, b - a).  
//     Repeat step (3) until a equals b.  
//  
// Time Complexity: O(min(a, b)), because the function runs until one of the numbers becomes 0.  
// Space Complexity: O(min(a, b)), due to recursive calls stored in the stack.  
// Note:- GCD (Greatest Common Divisor) and HCF (Highest Common Factor) are the same.
let a = 2, b = 4;
console.log(findgcd(a, b));

function findgcd(a, b) {
    if (a === 0) {
        return b;
    }
    if (b === 0) {
        return a;
    }
    if (a === b) {
        return a;
    }
    return a > b ? findgcd(a - b, b) : findgcd(a, b - a);
}

// Optimal Approach: Optimized Euclidean Algorithm (Division Method)
// Approach:  
// - Until b is not equal to 0, store b in a temporary variable.  
// - Update b to a % b and set a to the previous value of b.  
// - Repeat this process until b becomes 0, then return a.  
// - The idea behind solving the GCD of two numbers this way is that taking the remainder reduces the problem 
// size more efficiently than subtraction.   
// TC: O(log(min(a, b))), as each step reduces the problem size logarithmically in terms of the smaller number.  
// SC: O(1), as it uses only a few variables and no recursion.  

let x = 2, y = 4;
console.log(findgcd(x, y));

function findgcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
