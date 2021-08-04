/**
 * You are given a set of certain amount of available coins, 
 * and you have a target value, and you have to write an algo
 * that returns the number of each coin to use to get the 
 * target value. 
 * 
 * You want to reach the target value using the least amount 
 * of coins. 
 * 
 */

// inputs
const availCoins = [100, 50, 20, 10, 5, 2, 1];
const targetVal = 50;


/**
 * 1. verify the inputs/problem- 
 *      (out loud) Are the coins ordered (sorted) and "stable"?
 *      Should we get an exact solution or round to have
 *      fewer coins? (modify the target amount allowed?)
 * 2. Think about the problem + verbal solution-
 *      Try a greedy approach first. Go through all coins and 
 *      decide for each if it should be used. 
 * 3. Write down a first version
 */

function changeMaker(coins, val){
    let remainingAmount = val


    let coinsUsed = {
        numberOfCoins: 0
    }


    for(const item of coins){
        const count = Math.floor(remainingAmount / item);
        // this creates the key-value pair inside the coinsUsed object 
        coinsUsed[item] = count
        remainingAmount = remainingAmount - (item * count)
        coinsUsed.numberOfCoins += count
    }
    return coinsUsed;
}

console.log(changeMaker(availCoins, targetVal))


// Time complexity (Greedy Solution): linear time = O(n)