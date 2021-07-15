/**
 * Determine whether the input number
 * is a power of two. 
 */

function isPowerTwo(num){
    let result = num / 2
    do {
        if(result % 2 !== 0){
            return false;
        }
        result = result / 2
    } while (result !== 1)

 return true
}

/* test cases */
// console.log(isPowerTwo(1)) 
// console.log(isPowerTwo(24)) 
// console.log(isPowerTwo(28)) 
// console.log(isPowerTwo(32))
// console.log(isPowerTwo(64))


// Time Complexity = logarithmic => O(log n)

// Improved solution with bitwise calculation

function isPowerOfTwo(num){
    if(num <= 1) return false;
return (num & (num - 1)) === 0
}


console.log(isPowerOfTwo(1)) 
console.log(isPowerOfTwo(24)) 
console.log(isPowerOfTwo(28)) 
console.log(isPowerOfTwo(32))
console.log(isPowerOfTwo(64))

// Time Complexity = constant => O(1)