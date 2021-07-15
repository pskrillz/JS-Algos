/*
Return the nth element 
of a fibonacci sequence

fib = [1, 1, 2, 3, 5, 8, 13, 21]

*/

function returnFibonacci(n){
    let nums = [1, 1] // 1
    for(let i = 0; i < n; i++){ // 1
        nums.push(nums[i] + nums[i+1]) // n => 5
    }
    return nums[n - 1] // 1
}

// T = 3 + 1 * n
// T = O(n) => Linear Time Complexity

console.log(returnFibonacci(5))