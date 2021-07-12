// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
//   first turn numbers to strings
  let str1 = String(num1);
  let str2 = String(num2);
//   make sure arrays have same length
  if (str1.length !== str2.length) return false;
  let freq1 = countFreq(str1);
  let freq2 = countFreq(str2);

  for (let i in freq1){
    if (freq1[i] !== freq2[i]) return false; 
  }
  return true;
}

function countFreq(str) { 
  let freq = {};
  for (let num of str) {
    freq[num] = (freq[num] + 1) || 1;
  }
  return freq;
} 