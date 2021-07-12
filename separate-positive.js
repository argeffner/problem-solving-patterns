// add whatever parameters you deem necessary
// need to rearrange the array so that the postive numbers are on the left and the negative numbers are on the right
// time complexity O(n)
// for this I need to compare two numbers best to go from ends to center
// don't need to arrange min to max or vice versa only need positive on left and negative on right
function separatePositive(arr) {
// best to use a while loop that way you can manipulate direction or array 
let right = arr.length - 1;
let left = 0;
while (left < right) {
  if (arr[left] < 0 && arr[right] > 0) {
    let a = arr[left];
    arr[left] = arr[right];
    arr[right] = a;

    left++;
    right--;
    }
//   if left is positive add 1 to left
  else if (arr[left] > 0) left++;
//   if right is negative subtract 
  else if (arr[right] < 0) right --;
  }
  return arr;
}
