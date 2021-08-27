/* Blind 75 #2


You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.



*/

// My Attempt #1

let input = [7,1,5,3,6,4]

function calcBestProfit(prices){
    if(prices.length == 1) return 0
    let lowest = 10; 
    let lowestPos;
    
    for(let i=0;i<prices.length;i++){
        if(prices[i] < lowest){
            if(i != prices.length - 1){
            lowest = Math.min(prices[i], lowest)
            lowestPos = i
            }
        }
    }
    
    greatest = 0;
    
    for(let j = lowestPos;j < prices.length; j++){
        greatest = Math.max(prices[j], greatest)
    }
    
    let result = greatest - lowest
    
    return Math.sign(result) == -1 ? 0: result 
    
}

//console.log(calcBestProfit(input))

// Does not pass all test cases;
// Only gets the lowest, and the biggest number after that, doesnt account for bigger profits earlier (outside of the lowest)


/*

Simple bruteforce solution:: 

(java)
public class Solution {
    public int maxProfit(int prices[]) {
        int maxprofit = 0;
        for (int i = 0; i < prices.length - 1; i++) {
            for (int j = i + 1; j < prices.length; j++) {
                int profit = prices[j] - prices[i];
                if (profit > maxprofit)
                    maxprofit = profit;
            }
        }
        return maxprofit;
    }
}

*/


// My Solution: One Pass O(n)

var maxProfit = (prices) => {
    let lowest = Number.MAX_VALUE;
    let maxProfit = 0
    
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < lowest) {
            lowest = prices[i]
        } else if (prices[i] - lowest > maxProfit){
            maxProfit = prices[i] - lowest
        }
    }
    
    return maxProfit
    
};

console.log(maxProfit(input))
