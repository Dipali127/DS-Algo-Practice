// Explanation:
// first, I will move the top (N-1) disks from the source rod to the helper rod, using the destination rod as an auxiliary.
// next, I will move the Nth (largest) disk directly from the source rod to the destination rod.
// finally, I will move the N-1 disks from the helper rod to the destination rod, using the source rod as an auxiliary.
// TC:- O(2^N) because, for each value of N, the function is recursively called twice, leading to an exponential growth in the number of calls.
// SC:- O(N), which accounts for the maximum depth of the recursion stack used to store function calls during execution.
// The minimum number of moves required to solve the Tower of Hanoi problem with N disks is given by the formula:
// Moves = 2^𝑁-1

function towerOFhanoi(n, source, helper, destination) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${destination}`);
      return;
    }
    
    towerOFhanoi(n - 1, source, destination, helper);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOFhanoi(n - 1, helper, source, destination);
  }
  
  let n = 3;
  towerOFhanoi(n, "A", "B", "C");
  