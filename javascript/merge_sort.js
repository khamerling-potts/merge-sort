function merge(arr1, arr2) {
  // type your code here
  const result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    const element1 = arr1[0];
    const element2 = arr2[0];
    if (element1 < element2) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  const leftover = arr1.length > arr2.length ? arr1 : arr2;
  return result.concat(leftover);
}

//console.log(merge([3, 5, 9, 12], [4, 6, 13, 15]));

function mergeSort(arr) {
  debugger;
  // type your code here
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
