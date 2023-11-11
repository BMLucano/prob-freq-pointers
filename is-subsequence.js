// add whatever parameters you deem necessary & write docstring
function isSubsequence(s1, s2) {
  let s1Pointer = 0;
  let s2Pointer = 0;

  while (s1Pointer !== s1.length || s2Pointer !== s2.length){
    if(s1[s1Pointer] === s2[s2Pointer]){
      s1Pointer++
      s2Pointer++
    }else if(s1Pointer === s1.length){
      return true;
    }else if(s1[s1Pointer] !== s2[s2Pointer]){
      s1Pointer = 0
    }else if(s2Pointer === s2.length){
      break;
    }
  }
  return false;
}
console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'acb'))