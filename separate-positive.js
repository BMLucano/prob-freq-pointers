"use strict";

/** Takes as input an array of non-zero numbers
 *  Separates the positive numbers to the left and negative numbers to the right
 *  Returns array
 */
function separatePositive(nums) {
  let start = 0;
  let end = nums.length-1;
  while(start < end){
    if(nums[start] < 0 && nums[end] > 0){
      let tmp = nums[start];
      nums[start] = nums[end];
      nums[end] = tmp;
      start++;
      end--;
    }
    else if(nums[start] > 0){
      start++;
    }
    else{
      end--;
    }
  }
  return nums;
}

console.log(separatePositive([2, -1, -3, 6]));
console.log(separatePositive([-5, 5]));
console.log(separatePositive([1, 2, 3]));