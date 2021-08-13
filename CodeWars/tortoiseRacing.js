/* 6kyu problem **
Two tortoises named A and B must run a race.
 A starts with an average speed of 720 feet per hour.
  Young B knows she runs faster than A, and furthermore 
  has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet
 lead but B's speed is 850 feet per hour. 
 How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0)
and v2 (B's speed, integer > 0) and a lead g (integer > 0)
how long will it take B to catch A?

The result will be an array [hour, min, sec] 
which is the time needed in hours, minutes and seconds 
(round down to the nearest second) or a string in some 
languages.


Examples:
(form of the result depends on the language)

race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"

*/
// Solution 1: Bruteforce... should be O(n) time complexity

// const calcCatchUpTime = (v1, v2, g) => {
//     let timeArr = [0, 0, 0]
//     let hour = 3600, min = 60, sec = 1
//     let totalSec = -1;
    
//     let aDist = g; let bDist = 0;
    
//     while(bDist < aDist){
//       bDist += v2/3600; aDist += v1/3600;
//       totalSec += 1
      
//     }
    
//     while(totalSec !=0){
//        if(totalSec > hour){
//           timeArr[0] = Math.floor(totalSec/hour)
//           totalSec = totalSec % hour
//         } else if (totalSec > min){
//           timeArr[1] = Math.floor(totalSec/min)
//           totalSec = totalSec % min
//         } else{
//           timeArr[2] = totalSec
//           totalSec = 0
//         }
//     }
    
//     return timeArr;
  
// }

// console.log(calcCatchUpTime(80, 91, 37))

// Solution is correct but on codewars the testcases time out-
// Need to find more efficient solution. 
// EDIT: Kata had rounding error- known issue - 

// Final Solution (mine)

function calcCatchUpTime2(v1, v2, g) {
    if(v1 >= v2) return null
    
      let timeArr = [0, 0, 0]
      let hour = 3600, min = 60, sec = 1
      let totalSec = -1;
      let aDist = g; let bDist = 0;
      
      while(bDist < aDist){
        bDist += (v2/3600); aDist += (v1/3600);
        totalSec += 1
      }
    
      while(totalSec !=0){
         if(totalSec > hour ){
            timeArr[0] = Math.floor(totalSec/hour)
            totalSec = totalSec % hour
          } else if (totalSec > min){
            timeArr[1] = Math.floor(totalSec/min)
            totalSec = totalSec % min
          } else{
            timeArr[2] = totalSec;
            totalSec=0
          }
      }

      return timeArr;
  }

console.log(calcCatchUpTime2(80, 91, 37)) // should return [3, 21, 49]


// Best Solutions:
/* #1:
function race(v1, v2, g){
  let time=g/(v2-v1);
  return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
}

/* #2
function race(v1, v2, g) {
  if (v2 < v1) { return null; }
  
  var seconds = Math.floor(g / (v2 - v1) * 3600);
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds - h * 3600) / 60);
  var s = seconds - h * 3600 - m * 60;
  
  return [h, m, s];
}


*/