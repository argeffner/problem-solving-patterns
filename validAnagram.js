function validAnagram(string1, string2) {
// pass in two strings and check if the have same frequency of letters
  if (string1.length !== string2.length) return false; // check for same string length

  let f1 = countFreq(string1);
  let f2 = countFreq(string2);
  // for object need to iterate over keys or values
  for (let key in f2) {
    //check if string1 has same keys as string2
    // check if freq count for letter is same for string 1 and string 2
    if (f1[key] !== f2[key]) return false;
  }
  return true;
}

function countFreq(str) {
  const freq = {};
  for (let val of str) {
      // add count of 1 for key or the existing count + 1.
     freq[val] = (freq[val] + 1) || 1;
  }
  return freq;
}