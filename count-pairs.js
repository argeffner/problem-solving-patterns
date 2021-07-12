// add whatever parameters you deem necessary
// checks if pair of numbers in an array sum to the value
// counts the number of pairs and returns tht number
// I would make it so that in each ittereation it takes total - num
// if the num is in the array then it will count
function countPairs(arr, val) {
// make a second array the is a deep copy make a new set
  let copy = new Set(arr);
  let count = 0;
  for (let num of arr) {
//   need to first delete the value otherwise it will count itself
    copy.delete(num);
  // see if val - num returns a number in the array 
    if (copy.has(val - num)) {
        count ++;
    }
  }
  return count;
}
