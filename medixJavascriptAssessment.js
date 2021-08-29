/**
* Each question is separate from each other and has its own Window context
*
* No time limit, take as long as you need
* Free to type your answers on the editor as it will be auto-saved
* Please explain your answers thoroughly as needed
* If you don't know the answer to a question, you are allowed to skip
*/




/*********************************************************
* Question 1: If I run the following code on the browser, what will happen?
*
* JavaScript concept: hoisting
*/

var text = 'outside';

function logText() {
  console.log(text);

  // so if i change the order of the inner var to before the console log, itll work!
  var text = 'inside';
}

logText(); // What is the output?
// Original Answer = 'outside' 
// Result: Incorrect!
// Correct Answer = undefined





/*********************************************************
* Question 2: If I run the following code on the browser, what will happen?
*
* JavaScript concepts: variable scope and hoisting
*/

const firstVar = 'firstVar';
const secondVar = 'secondVar';

function outerFunction() {
  const firstVar = 'firstVar again';

  console.log("outerFunction firstVar", firstVar);

  const thirdVar = 'thirdVar';

  innerFunction();

  function innerFunction() {
    console.log("innerFunction thirdVar", thirdVar);
    console.log("innerFunction secondVar", secondVar);
  }
}

outerFunction(); // What is the output?
/* Original Answer: 
firstVar again

thirdVar
secondVar

Result: Correct!
*/




/*********************************************************
* Question 3: If I run the following code on the browser, what will happen?
*
* JavaScript concepts: `this` keyword and execution context
*/

var message = 'Hello';

var obj = {
  message: 'Hello there',
  logMessage,
};

function logMessage() {
  console.log(this.message);
}

logMessage(); // What is the output?


obj.logMessage(); // What is the output?


logMessage.bind(obj)(); // What is the output?

/* Original Answer:
'Hello'
'Hello there'
'Hello there'

Result: Incorrect!

Correct Answer:
undefined
'Hello there'
'Hello there'

*/




/*********************************************************Check this.
* Question 4: If I run the following code on the browser, what will happen?
*
* JavaScript concepts: variable scope, hosting, ES6
*/

// function userDetails(username) {
//   if (username) {
//     console.log(salary);
//     console.log(age);

//     let age = 30;
//     var salary = 10000;
//   }

//   console.log(salary);
//   console.log(age);
// }

// userDetails('John'); // What is the output?
// Original Answer
// 30
// 10000

// Undefined
// Undefined

// Answer: Incorrect

// Correct Answer:
// undefined, reference error, variable must be before console log in the local scope






/*********************************************************
* Question 5: If I run the following code on the browser, what will happen?
*
* JavaScript concepts: event loop, call stack, job queue
*/

//
function greeting() {
  console.log('Hi from greeting function');
}
//

console.log('Hi from global');

//
var timeout = setTimeout(function () {
  console.log('Hi from setTimeout');
  clearTimeout(timeout);
}, 100);
//

var interval = setInterval(function () {
  console.log('Hi from setInterval');
  clearInterval(interval);
}, 0);

greeting(); // What is the output? 

// Original Answer: 'Hi from greeting function'
// Incorrectl;

// Correct Answer: 
// Hi from global
// Hi from greeting function
// Hi from setInterval
// Hi from setTimeout













// Second List of Challenges:


/**
 * Challenge 1 - Reverse a string
 *
 * Create a function that takes a string as an argument and return the string as reversed
 * @example reverseString('this is a string') // 'gnirts a si siht'
 */


 function reverseString(string) {
	let answer = string.split('').reverse().join('')
}


reverseString('this is a string'); // 'gnirts a si siht'
reverseString('Backward'); // 'drawkcaB'

// Answer: Incorrect, just needed return to be correct. 






/**
 * Challenge 2 - Get unique values of an array
 *
 * Create a function that takes an array as an argument and return the array with unique values
 * @example uniqueArrayValues([5, 5, 7, 6, 2, 4, 6, 2]) // [5, 7, 6, 2, 4]
 */

function uniqueArrayValues(array) {
  let uniques = []
	for(let i = 0; i < array.length; i++){
    if(!(uniques.includes(array[i]))){
      uniques.push(array[i])
    }
   
  }
    return uniques

}


console.log(uniqueArrayValues([5, 5, 7, 6, 2, 4, 6, 2])); // [5, 7, 6, 2, 4]
uniqueArrayValues([100, 5, 74, 74, 100]); // [100, 5, 74]

// Incorrect: did not know the answer
// All I needed was array method .includes. 






/**
 * Challenge 3 - Get the sum of an array values
 *
 * Create a function that takes an array as an argument and return the sum of the array values
 * @example getSumValue([5, 82, 2, 100]) // 189
 */


function getSumValue(array) {
  let total = 0;
	for(let num of array){
    total += num
  }
  return total;
}


console.log(getSumValue([5, 82, 2, 100])) // 189
// getSumValue([7, 1.34, 1.2]) // 9.54

// Incorrect, array was spelled 'arr' not 'array;
// also total needed to be instantiated
//but the right idea was there. 







/**
 * Challenge 4 - Filter key/value that does not have integer value
 *
 * Create a function that takes an object as an argument and remove key/value with value that is not an integer
 * @example filterObject({ a: 'a string', b: 123, c: null, d: 3.14 }) // { b: 123 }
 */


function filterObject(object) {
  // let filteredObject;

  // object.entries((item) => {
  //   if (item.isNumber()){
  //     filtereditem
  //   }
  // })
// let filtered;

//   for(let prop in object){
//     if(typeof prop == 'number'){
//       filtered.prop = prop
//     }
//   }
//   return filtered;

Object.keys(object).forEach(key => {
  if (typeof object[key] !== 'number' || !Number.isInteger(object[key])) delete object[key];
});
return object;

}


console.log(filterObject({ a: 'a string', b: 123, c: null, d: 3.14 })); // { b: 123 }
// filterObject({ d7: '3.14', b3: 6, a6: 2021, a2: 0 }); // { b3: 6, a6: 2021 }
// Wrong, but had a good general idea..
// Here is the correct answer.






/**
 * Challenge 5 - Deep clone an object
 *
 * Create a function that takes an object as an argument and return the deeply cloned object
 * @example deepCloneObject({ a: 'A', b: { c: {  d: 'nested' } } }) // { a: 'A', b: { c: {  d: 'nested' } } }
 */


function deepCloneObject(object) {
	let deepClone = {}
  

}

// deepCloneObject({ a: 'A', b: { c: {  d: 'nested' } } }); // { a: 'A', b: { c: {  d: 'nested' } } }

