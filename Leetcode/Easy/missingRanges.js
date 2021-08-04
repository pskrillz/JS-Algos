/**
 * 
 * You are given an inclusive range [lower, upper] and a sorted unique integer array nums,
 *  where all elements are in the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in nums.

Return the smallest sorted list of ranges that cover every missing number exactly. 
That is, no element of nums is in any of the ranges,
 and each missing number is in one of the ranges.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:

Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: ["2","4->49","51->74","76->99"]
Explanation: The ranges are:
[2,2] --> "2"
[4,49] --> "4->49"
[51,74] --> "51->74"
[76,99] --> "76->99"
 */

// inputs
const nums = [1, 10, 29, 50];
const lower = -2;
const upper = 100;

const findMissingRanges = (nums, lower, upper) =>{
    let result = []
    let prev = lower - 1
    for (num of nums){
        let curr = num
        if(prev + 1 <= curr - 1){
            result.push(formatter(prev + 1, curr - 1))
        }
        prev = curr
    }

    result.push(formatter(prev + 1, upper - 1))

    return result;
}


function formatter(lower, upper){
    if(lower == upper){
        return lower
    } else {
        return lower.toString() + "->" + upper.toString();
    }
}

console.log(findMissingRanges(nums, lower, upper))