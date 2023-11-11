"use strict";

/** Takes input two positive integers
 *  Checks if two numbers have same frequency
 *  Returns true if so otherwise returns false
 */
function sameFrequency(posInt1, posInt2) {
  let intStr1 = String(posInt1);
  let intStr2 = String(posInt2);
  let intStr1Frequency = getFrequencyCounter(intStr1);
  let intStr2Frequency = getFrequencyCounter(intStr2);
  for(let digit in intStr1Frequency){
    if(intStr1Frequency[digit] !== intStr2Frequency[digit]){
      return false;
    }
  }
  return true;
}

/** Accepts a string.
 * Creates an object of letters and their frequency.
 * Returns frequency object.
*/
function getFrequencyCounter (items){
  const freqs = {};

  for(const item of items){
    // const curr = freqs[item] || 0;
    freqs[item] = ++freqs[item] || 1;
  }
  return freqs;
}

console.log(sameFrequency(123, 321));
console.log(sameFrequency(34, 14));