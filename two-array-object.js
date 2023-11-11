"use strict";

/**Takes an input one array of keys and one array of values
 * Create an object that matches the keys and corresponding values
 * Returns object containing matching keys and values
 */
function twoArrayObject(keys, values) {
  const keyValMatcher = {};
  let keyPointer = 0;
  let valuePointer = 0;
  while(keyPointer !== keys.length || valuePointer !== values.length){
    if(valuePointer === values.length){
      keyValMatcher[keys[keyPointer]] = null;
      keyPointer++;
    }
    else if(keyPointer === keys.length){
      break;
    }
    else{
      keyValMatcher[keys[keyPointer]] = values[valuePointer];
      keyPointer++;
      valuePointer++;
    }
  }
  return keyValMatcher;
}
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2]));
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]));
