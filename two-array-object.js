// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  const newObj = {};
//   in this example arr1 is always longer than arr2 
// unless otherwise specified I will simply use arr1 instead of a general i loop
  for (let i in arr1) {
    //  store key arr1[i] and store value arr2[i] and if there is no value put null
      newObj[arr1[i]] = arr2[i] || null;
  }
  return newObj;
}
