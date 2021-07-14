

/*
Write an algorith that takes 
an array of numbers as input and
generates the sum of those number. 

Define the complexity of that algorithm
and determine what the lowest possible 
Time Complexity is for this problem. 
*/


// Linear Solution

let array1 = [1, 2, 3, 5, 6, 7, 8]

function arraySum(array){
    let sum = 0; // 1
    array.forEach((item) => sum += item) // 7 => n
    return sum; // 1
}

console.log(arraySum(array1))

// T = 1 + 1 + n (or)
// T = 2 + 1 * n
// T = n
// O(n) linear complexity




