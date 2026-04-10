// GFG Problem:
// Problem:- In the Tower of Hanoi problem, we need to count the number of moves required to transfer all disks
// from source to destination. 
// Rules to move disk from source to destination:-
//                            We can move only one disk at a time.
//                            We cannot place a larger disk on top of a smaller disk.

// Approach:
// To solve this problem, I’ll use recursion because the problem has a natural recursive structure.
// To move n disks from source to destination:
// First, I move n-1 disks from source to auxiliary using destination as helper.
// Then, I move the nth (largest) disk from source to destination.
// Finally, I move the n-1 disks from auxiliary to destination using source as helper.
// This breaks the problem into smaller subproblems, which makes recursion a good fit.
// Even though, i dont know how to move n−1 disks directly, but i trust the recursive function to do it correctly.
// I know the solution for one disk that when n is equal to 1, i will simply move that one disk from source to destination.
// 
// For counting the number of moves:
// Count increments at the base case for each smallest disk move and once per recursive level for moving the largest disk.
// Time Complexity = O(2ⁿ), because each function makes two recursive calls, and the total number of calls across all 
// levels forms a geometric series: 1 + 2 + 4 + 8 + ... + 2ⁿ⁻¹ = 2ⁿ − 1 ≈ O(2ⁿ)

// Example of recursive calls at each level:
// Level 0 → 2⁰ = 1 call
// Level 1 → 2¹ = 2 calls
// Level 2 → 2² = 4 calls
// ...
// Level n−1 → 2ⁿ⁻¹ calls
// S = 2⁰ + 2¹ + 2² + ... + 2ⁿ⁻¹
// This is a geometric series: S = 2ⁿ − 1
// The total is 2ⁿ − 1, and in Big-O we ignore the constant term (−1), so it becomes O(2ⁿ).

// Space Complexity = O(n), because at any time the recursion stack stores only one path (either left or right recursive
// calls), and the maximum depth of recursion is n.

class Solution {
    towerOfHanoi(n, source, helper, destination) {
        let count = 0;
        toh(n, source, helper, destination)
        function toh(n, source, helper, destination){
            if(n === 1){
                count++;
                return;
            }
            
            toh(n-1, source, destination, helper)
            count++;
            toh(n-1, helper, destination, source)
            
        }
        
        return count;
        
    }
}
  