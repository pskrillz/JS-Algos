/*

Given a single array of numbers, and a target value as inputs,
return the indexes of two numbers that will equal the target (only one)

*/


let nums = [2,7,11,15]
let target = 9;

var twoSum = function(nums, target) {
    let map = new Map()
    let result = []
    let complement;
    
    for(let i = 0; i < nums.length; i++){
        complement = target - nums[i]
        if(map.has(complement)){
            result = [map.get(complement), i]
            return result
        } else {
            map.set(nums[i], i)
        }
    }
        
    };


    console.log(twoSum(nums, target))