/*
Determine whether an input is a prime number
*/


function isPrime(n){

    for (let i = 2; i < n; i ++){   // 1
        if( Math.floor(n / i) == n / i) // n - 2
        return false;  // 1
    }
    return true; // 1
}

console.log(isPrime(5))
console.log(isPrime(9))

// How to handle deriving the time complexity with multiple cases

// Best case: number = 1 OR number = 2 => O(1)


/* Improved solution */

function isPrimeSq(n){

    for (let i = 2; i < Math.sqrt(n); i ++){   // 1
        if( Math.floor(n / i) == n / i) // n - 2
        return false;  // 1
    }
    return true; // 1
}

// Worst Case: number = 27,277 = (Improved: O(sqrt(n)))



/* Most Optimized */

export default function trialDivision(number) {
    // Check if number is integer.
    if (number % 1 !== 0) {
      return false;
    }
  
    if (number <= 1) {
      // If number is less than one then it isn't prime by definition.
      return false;
    }
  
    if (number <= 3) {
      // All numbers from 2 to 3 are prime.
      return true;
    }
  
    // If the number is not divided by 2 then we may eliminate all further even dividers.
    if (number % 2 === 0) {
      return false;
    }
  
    // If there is no dividers up to square root of n then there is no higher dividers as well.
    const dividerLimit = Math.sqrt(number);
    for (let divider = 3; divider <= dividerLimit; divider += 2) {
      if (number % divider === 0) {
        return false;
      }
    }
  
    return true;
  }


