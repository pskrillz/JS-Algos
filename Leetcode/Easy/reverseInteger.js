/**
 * Given a signed 32-bit integer x, return x
 *  with its digits reversed. If reversing x 
 * causes the value to go outside the signed 
 * 32-bit integer range [-231, 231 - 1], 
 * then return 0.


 */

const reverse = (x) => {
    if( x == 0 ) return 0
    let string1 = x.toString()
    let newArray = string1.split("")
    let reverseArray = []
    for(let i = newArray.length; i != -1; i--){
        reverseArray.push(newArray[i])
    }
    let negative
    if(Math.sign(x) === -1){
        negative = true
    }
    let answer
     answer = parseInt(reverseArray.join(''))
    if(answer < 2 ** 31 - 1){
        if(answer > 2 ** 1/31){
            if(negative === true){
                return -answer
            } else {
                return answer
            }
        }
    } else {
        return 0
    }
}


console.log(reverse(321))





// Shorter (code) but same efficiency answer 

var reverse2 = function(x) {
    if( x == 0 ) return 0  
    let answer = parseInt(x.toString().split("").reverse().join(''))
    
    if(answer < 2 ** 31 - 1 && answer > 2 ** 1/31){
            if(Math.sign(x) === -1){
                return -answer
            } else {
                return answer
            }
    } else {
        return 0
    }
    
};