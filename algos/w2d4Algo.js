var nums = [23, 0, 30, 24, 6, 8, 1, 22, 7];
var nums2 = [4, 9, 11, 2, 3, 15, 100, 21, 17];

function searchForNum(arr, numToFind) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == numToFind) {
      return i;
    }
  }
  return -1;
}

// console.log(searchForNum(nums, 111));

var nestedNumbs = [
  [4, 8, 12],
  [3, 6, 9],
  [10, 100, 1000],
];

function searchNestedArray(arr, numToFind) {
  for (let i = 0; i < arr.length; i++) {
    let currentSubArray = arr[i];
    for (let j = 0; j < currentSubArray.length; j++) {
      if (arr[i][j] == numToFind) {
        return { i, j };
      }
    }
  }
}

console.log(searchNestedArray(nestedNumbs, 9));
