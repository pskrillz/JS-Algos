// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

let input = [2, 6, 3, 7, 10]

// var sortedSquares = function(nums) {
//     let arr = []
//     for(let num of nums){
//         arr.push(num**2)
//     }
//     arr.sort((a,b) => a - b)

//     return arr
// };

//console.log(sortedSquares(input))

// Testing For Each


// var sortedSquares = function(nums) {
//         let arr = []
//         let arr2 = []
//         for(let num of nums){
//             arr.push(num**2)
//         }
//         arr.sort((a,b) => a - b)
        
//         arr.forEach(item => arr2.push(item/2))

//         return arr2;
//     };
    
//     console.log(sortedSquares(input))

/* forEach just does an execution on each item, it doesnt change the array or return anything.
Not so much, ‘return’, as carry out prescribed steps on each item in the array it is called upon. 
In as much, it is not far off from an ordinary for loop except that it is a higher order function that takes a callback -its basically a loop
*/

var sortedSquares = function(nums) {
    let arr = []

    for(let num of nums){
        arr.push(num**2)
    }
    arr.sort((a,b) => a - b)
    
    let newArr = arr.map(item => item = item/2)

    return newArr;
};

console.log(sortedSquares(input))

/**
 * .map does not change the array, but its computations can be assigned to a new variable...
 */
