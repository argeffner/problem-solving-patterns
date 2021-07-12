// add whatever parameters you deem necessary
// given two strings and the second string should have all letters of first string ( and in sequence)
// ex: ('arc'), ('larac') because letters even with extra letters, the string is still in sequence 
function isSubsequence(str1, str2) {
//   in this situation I would use a while loop to allow movement of two different arrays
  let l1 = 0;
  let l2 = 0;
  let r2 = str2.length;
  // count is useed to make sure that the sequence is correct
  let count = 0; 
  while (l2 < r2) {
    //   only moves longer string 
      if (str1[l1] !== str2[l2]) {
        l2++;
    // moves both string itterations and adds count
      } else if (str1[l1] === str2[l2]) {
        count++;
        l1++;
        l2++;
      }
  }
  return (count === str1.length) ? true : false;
}
