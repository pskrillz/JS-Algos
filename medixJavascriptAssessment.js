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

function userDetails(username) {
  if (username) {
    console.log(salary);
    console.log(age);

    let age = 30;
    var salary = 10000;
  }

  console.log(salary);
  console.log(age);
}

userDetails('John'); // What is the output?
30
10000

Undefined
Undefined







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

'Hi from greeting function'






















































// Test 1 Question 1


var text = 'outside';

function logText() {
  console.log(text);

  // so if i change the order of the inner var to before the console log, itll work!
  var text = 'inside';
}

logText(); // What is the output?
// correct answer = undefined



//////////////////////////////


// Other example
// var test = "I'm global";

// function testScope() {
//   var test = "I'm local";

//   console.log (test);     
// }

// testScope();           // output: I'm local

// console.log(test);





//// TODO: Analyze take-aways later.