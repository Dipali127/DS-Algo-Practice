// Leetcode Problem:- 134
// Problem Overview (Easy Technical Language)
// You are given:
// An array gas[i] → amount of gas available at station i.
// An array cost[i] → amount of gas needed to travel from station i to station i+1.

// A car:
// Starts with 0 fuel (empty tank).
// Can start from any gas station index.
// Travels circularly, meaning after the last station it goes back to station 0.

// Your task:
// Find the index of the gas station from where the car can start, complete the full circle, and come back 
// to the same station without the fuel ever becoming negative.
// If it is impossible → return -1.

// Important rule:
// If gas[i] - cost[i] ever becomes negative while traveling, then we cannot start from this station or 
// any station before it, so we shift the starting station to i + 1.

// Optimal Approach:
//
// Approach:
// - I will take a variable totalGas which will store the total (gas - cost) for all stations.
// This also helps in checking whether completing the circular route is possible or not.
//
// - I will use two more variables:
// 1. fuelInTank → initialized to 0, represents the current fuel in the car's tank.
// 2. startGasIndex → initialized to 0, represents the index from which the journey should start.
//
// - While traversing the gas stations, I will compute
// costOfIthGasStation = gas[i] - cost[i]
// and add this value to both totalGas and fuelInTank.
//
// - After updating, if fuelInTank becomes negative, it means the car cannot start from
// the current startGasIndex because the fuel dropped below 0.
// So, I will reset:
// fuelInTank = 0
// startGasIndex = i + 1 → meaning we now attempt to start from the next station.
//
// - After traversing the entire array, if totalGas is negative, it means the total gas available
// is less than the total cost required → completing the circuit is impossible → return -1.
//
// - Otherwise, return startGasIndex — the index from which completing the circle is possible.
//
// Time Complexity: O(N), because we traverse the gas array once.
// Space Complexity: O(1), because only a few extra variables are used.

// Note:
// Even though the route is circular, we do not need to traverse the array again after the last index.
// The variable totalGas already handles the circular condition.

// After completing one full traversal of the gas array:

// If totalGas < 0, it means the total gas available is less than the total cost required to complete the
// full circular route, so completing the circle is impossible.

// If you want, I can add the positive-case line as well:

// If totalGas ≥ 0, completing the circular route is possible, and the startGasIndex found using the
// greedy approach will be the correct starting point.

var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0, fuelInTank = 0, startGasIndex = 0;
    for(let i = 0; i < gas.length; i++){
        let costOfIthGasStation = gas[i] - cost[i];
        totalGas+= costOfIthGasStation;
        fuelInTank+= costOfIthGasStation;

        if(fuelInTank < 0){
            fuelInTank = 0;
            startGasIndex = i+1;
        }
    }

    return totalGas < 0 ? -1 : startGasIndex;
};