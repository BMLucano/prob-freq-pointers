"use strict";

/**Accepts a sorted array and a number.
 * Checks if there is a pair of numbers in the array whose average equals given target average.
 * Returns true if yes, false if no.
 *
 * [3, 3, 6, 12, 19], 8 -> false
 * [1, 2, 3], 2 -> true
 */
function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  while(left < right){
    let avg = (nums[left] + nums[right]) / 2;
    if(avg === targetAvg){
      return true;
    }else if(avg > targetAvg){
      right--;
    }else{
      left++;
    }
  }
  return false;
}

