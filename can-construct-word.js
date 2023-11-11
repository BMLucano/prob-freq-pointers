"use strict";

/**Takes input of string word and a string of letters.
 * Checks if a word can be built with letters given.
 * Returns true if yes, false if no.
 * ('aabb', 'bcabad') -> true
 * ('aa', 'abc') -> false
 */
function canConstructWord(word, letters) {
  const letterFreq = getFrequencyCounter(letters);

  for(let char of word){
    if(char in letterFreq && letterFreq[char] !== 0){
      letterFreq[char] -= 1;
    }else{
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
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }
  return freqs;
}
