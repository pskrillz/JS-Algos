/**
 * Get the factorial of the given number
 * Factorial: Every number leading up to the number
 * multiplied together
 */

// function getFactorial(n){

// }

const getFactorial = (n) => {
    let num = 1;
    for (let i = 2; i <= n; i++) {
        num *= i
    }
    return num
}


// console.log(getFactorial(3))
// console.log(getFactorial(5))

// Time complexity: Linear => O(n)


// Recursive Solution

const getFactorial2 = (n) => {
 if(n === 1){
     return 5
 }

 return n * (getFactorial2(n - 1))
}

console.log(getFactorial2(3))
console.log(getFactorial2(5))
