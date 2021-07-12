// add whatever parameters you deem necessary
function averagePair(arr, val) {
// pass in an array and check if any two values return an average that is the value
  let left = 0;
  let right = arr.length - 1;
// create while loop and compare the avg to see if you need to move left or right
  while (left < right) {
    //   avg will change in the loop;
    let avg = (arr[left] + arr[right]) / 2;
    // first check if avg = val
    if (val === avg) return true;
    // now decrease range 
    else if (val < avg) right --;
    else if (val > avg) left ++;
  }
  // if loop stops then the val != avg
  return false;
} 


// [1,2,3,4,5,6] 4.5 
// [1,2,3,4,5,6] 2.5 