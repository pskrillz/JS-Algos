/*
Write a function that takes an array of 
numbers and returns the smallest number
*/

function returnSmallest(arr){
    let smallest = arr[0]

   for (let i = 1; i < arr.length - 1; i++) {
       (smallest < arr[i]) ? smallest = smallest : smallest = arr[i]
    }

return smallest
}
let array = [5, 2, 1, 7, 3]

console.log(returnSmallest(array))

// Worst case: O(n) => Linear


function isEven(n){
    return n % 2 === 0
}

console.log(isEven(5))

// Time Complexity: O(1) => Constant