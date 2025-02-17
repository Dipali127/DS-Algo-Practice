// Prime Number Definition:
// A prime number is a number greater than 1 that is divisible only by 1 and itself.

// Brute force approach:
// approach:
// I will run a loop from 2 to less than n because 0 and 1 are not prime numbers.
// inside the loop, I will check if the current iterated number is prime by calling the isPrime function.
// if the current number is prime, I will increment the count by 1.
// after the loop, I will return the count, which will contain the number of prime numbers less than n. 
// Inside the isPrime function:
// I will run a loop from 2 to less than num to check if the number is divisible by any other number.
// if the number is divisible by any other number, I will immediately return false, indicating that it's not prime.
// if no divisors are found, i will return true, indicating that the number is prime.
// Time Complexity: O(N²) because the outer loop runs n times, and for each number, the isPrime function checks divisibility from 2 to num-1.
// In the worst case, this results in O(n * n) time complexity.
// SC:- O(1) since no auxiliary space(additional) space is used apart from count variable.

var countPrimes = function(n) {
    let count = 0;
    for(let i = 2; i < n; i++){
        if(isPrime){
            count++;
        }
    }

    return count;

    function isPrime(num){
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return false;
            }
        }

        return true;
    }
};

// Optimal approach: using Sieve of Eratosthenes
// approach:
// Instead of checking for each number whether it is prime or not, which increases the time complexity, 
// I will use the Sieve of Eratosthenes. This approach marks all multiples of a given number as non-prime 
// since they are divisible by a prime number. 
// what i wil do, i will run a loop until the square root of 'n' because all numbers greater than the square root must have already been marked by smaller numbers as non-prime.
// and In each iteration, if the current number is prime, I will mark all of its multiples as non-prime 
// (set them to 0) because multiples of any prime number cannot be prime themselves. 
// TC:- O(N LOG LOG N) 
// The outer loop runs up to √N, checking each number to see if it's prime. 
// For each prime number found, the inner loop marks all its multiples as non-prime. 
// This marking of multiples leads to a total complexity of O(N log log N) across all primes.
// Inner loop explanation: As the numbers get larger, fewer multiples need to be marked, which results in the logarithmic reduction (log log N) in the total number of operations.
// SC: O(N) since, we use an array (isPrime) of size N to store whether a number is prime or not, 
// so the space complexity is proportional to N.

var countPrimes = function(n) {
    let count = 0;
    let isPrime = new Array(n).fill(1);
    isPrime[0] = isPrime[1] = 0;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(isPrime[i]){
            for(let j = i*i; j <= n; j+=i){
                isPrime[j] = 0;
            }
        }
    }

    for(let num of isPrime){
        if(num){
            count++;
        }
    }

    return count;
}