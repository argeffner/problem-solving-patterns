// add whatever parameters you deem necessary
function constructNote(str1, str2) {
//  check if all the characters in str1 are in str2
  let f1 = countFreq(str1);
  let f2 = countFreq(str2);
  
  // need to check f1 because f2 will have extra keys and values
  for (let key in f1) {
    // make sure that key of f1 is in f2
    if (f2.hasOwnProperty(key) !== true) return false;
    // check if frequency of str1 is <= str2
    if (f1[key] > f2[key]) return false;
  }
  return true;
}
// make function that separates letters from string and counts frequency of letters
function countFreq(str) {
  let freq = {}; 
  for (let val of str) {
    freq[val] = (freq[val] + 1) || 1;
  }
  return freq;
}