// How to decide which solution to use for a particular DSA problem?

// Case 1:- If only n (size of input) is given:
// When we run the code, the computer typically has around 1 second to execute it,
// which is approximately equal to 10⁷ to 10⁸ operations.
// For safety, we usually consider 10⁷ (10,000,000) operations.
// Based on this, we can decide which solution to use.

// Let’s take an example:
// If the constraint is 1 ≤ n ≤ 300, then we consider the worst case, i.e., n = 300.

// For O(n²) solution:
// 300 × 300 = 90,000 ≤ 10⁷ ✅ (acceptable)
// That means an O(n²) solution is acceptable.

// For O(n³) solution:
// 300 × 300 × 300 = 27,000,000 > 10⁷ ❌ (not acceptable or borderline)
// That means an O(n³) solution is not acceptable.


// Case 2:- If both n (size of input) and t (number of test cases) are given:
// If there are multiple test cases, then total operations ≈ t × complexity of one test case.

// Example:
// If t = 100 and each test case uses O(n²) time complexity where n = 300:
// Total operations = 100 × 90,000 = 9,000,000 ≤ 10⁷ ✅ (acceptable)


// Key Points:
//  - While finding the best solution for a particular DSA problem, always consider the worst-case value of n.
//  - If both n and t are given, then use both to determine the best solution.