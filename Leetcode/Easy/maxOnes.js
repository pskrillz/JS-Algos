// Given a binary array nums, return the maximum number of consecutive 1's in the array.

//inputs 
let input = [0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1]

var findMaxConsecutiveOnes = function(nums) {
    let longestStreak = 0
    let currStreak = 0
    
    i = 0
    
  while(i <= nums.length){
      if(nums[i] == 1){
          currStreak++
          // this var makes it so that it constantly is set to the highest number of the two, either the existing longestStreak or the new currStreak
          longestStreak = Math.max(longestStreak, currStreak)
      } else {
          currStreak = 0;
      }
      i++
  }
    
    return longestStreak
};

console.log(findMaxConsecutiveOnes(input))