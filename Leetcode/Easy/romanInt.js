/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 
12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
 */


// var romanToInt = function(s) {
//     let dict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
//     let dict2 = { 
//                 'IV': 4, 'IX': 9,
//                'XL': 40, 'XC': 90,
//                'CD': 400, 'CM': 900
//             }
    
// let val = 0
//     for (let i = 0; i < s.length; i++){
//         let double = s.slice(i, i+2)
//         console.log(double)
//         if(dict2[double]){
//             val += dict2[double]
//             s = s - double

//         }
//     }
//     console.log(s)

//     if(s){
//         for (let letter of s.split('')){
//             val += dict[letter]
//         } 
//     }
//     return val;
// };

// let input = 'IVII'
// console.log(romanToInt(input))




// Attempt 2

// function romanToInt(s){
//     let result=0;  
//     const roman={I:1,IV:4,V:5,IX:9,X:10,XL:40,L:50,XC:90,C:100,CD:400,D:500,CM:900,M:1000}
//     for(let i=0;i<s.length;i++){
//         if(i<i+1 && roman[s[i]+s[i+1]]){
//             result+=roman[s[i]+s[i+1]]
//             i++
//         }else{
//             result+=roman[s[i]]
//         }
       
//     }
//       return result

//     }

// let total = 0;

// let dict = {I: 1, V: 5, X: 10,L: 50, C: 100, D: 500, ': 1000}


// let i = 0; 
//     while (i < s.length){
//         if (dict[s[i]] < dict[s[i + 1]]){
//             total += (dict[s[i+1] - dict[s[i]]])
//             console.log(total)
//             i += 2
          
//         }
//         else {
//             total += dict[s[i]]
//             i += 1
//         }   
//     }

//     return total;





// var romanToInt = function (s) {
//     const romanNumbers = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//     };

//     let result = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i + 1] && romanNumbers[s[i + 1]] > romanNumbers[s[i]]) {
//             result -= romanNumbers[s[i]];
//         } else {
//             result += romanNumbers[s[i]];
//         }
//     }
//     return result;
// };

// let input = 'IV'
// console.log(romanToInt(input))



var romanToInt = function (s) {
    const romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;
    let i = 0;
   while ( i < s.length) {
        if (romanNumbers[s[i + 1]] > romanNumbers[s[i]]) {
            result += (romanNumbers[s[i + 1]] - romanNumbers[s[i]]);
            i += 2
        } else {
            result += romanNumbers[s[i]];
            i += 1
        }
    }
    return result;
};

let input = 'IVIM'
console.log(romanToInt(input))