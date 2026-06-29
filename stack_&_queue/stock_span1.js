// Leetcode Problem:- 901
// Brute Force Approach:
// Approach:
// Since prices are received one by one through the next(price) function, first store the current stock price
// in an array so that all the previously received stock prices are available.
// To compute the span for the current stock price, traverse the array backward starting from the current day.
// Count the consecutive previous days (including the current day) whose stock price is less than or equal to
// the current day's stock price.
// Stop traversing as soon as a previous day having a greater stock price is found because the span ends there.
// Finally, return the calculated span.

// Time Complexity:- O(N) per next() call, Explanation:-
// In the worst case, we traverse backward through all the previously received stock prices.
// This happens when all the previous stock prices are less than or equal to the current stock price.
//
// If next() is called N times, the total time complexity becomes:
// O(1 + 2 + 3 + ... + N) = O(N²).

// Space Complexity:- O(N), Explanation:-
// O(N) is used by the array to store all the stock prices received through the next(price) calls.

var StockSpanner = function() {
    this.arr = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.arr.push(price);
        let span = 0;
        for(let i = this.arr.length - 1; i >= 0; i--){
            if(this.arr[i] <= price){
                span++;
            }else{
                break;
            }
        }

    return span;
};

// Optimal Approach:
// Approach:
// Use a stack to store pairs of [stockPrice, span].
// The reason for storing the span along with the stock price is that it
// allows us to skip multiple previous days at once instead of checking
// each day individually.
//
// For every new stock price:
// Start with span = 1 because the current day is always included in the span.
//
// While the stack is not empty and the current stock price is greater than
// or equal to the stock price stored on the top of the stack,
// remove that stock price from the stack because it can never act as the
// previous greater stock price for the current day or any future day.
//
// While removing a stock price, add its stored span to the current span.
// This works because the popped stock price already represents a group of
// consecutive previous days whose stock prices are less than or equal to it.
// Therefore, instead of counting those days one by one, we directly add
// the stored span.
//
// After all removals, push the pair [currentStockPrice, currentSpan] onto
// the stack so that it can help compute the span for future stock prices.
//
// Finally, return the current span.

// Time Complexity:- O(1) Amortized per next() call, Explanation:-
//
// Even though a while loop is used, each stock price is pushed onto the
// stack exactly once and popped from the stack at most once.
//
// Push Operation is exactly N since every stock price is pushed once.
// Pop Operation is at most N because every stock price can be popped only once.
//
// Therefore, over N calls to next(), the total number of stack operations
// is O(N) for push + O(N) for pop = O(2N), which simplifies to O(N).
//
// Hence, the amortized time complexity of each next() call is O(1).

// Space Complexity:- O(N), Explanation:-
// O(N) is used by the stack to store pairs of [stockPrice, span].

var StockSpanner = function() {
    // Stack stores [stockPrice, span]
    this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {

    // Current day itself contributes a span of 1.
    let span = 1;

    // Remove all previous stock prices that are less than or equal to
    // the current stock price because they can never act as the previous
    // greater stock price for the current day or any future day.
    while(this.stack.length > 0 &&
          price >= this.stack[this.stack.length - 1][0]){

        // Add the span of the popped stock price instead of counting
        // each day individually.
        span += this.stack.pop()[1];
    }

    // Store the current stock price along with its span.
    this.stack.push([price, span]);

    return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */