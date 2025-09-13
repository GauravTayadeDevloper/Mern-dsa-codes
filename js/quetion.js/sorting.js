let arr = [1, 5, 9, 7, 3, 4, 6, 8, 6, 9, 5, 7, 23, 98, 90, 69, 99, 6565]

//select minimum and swap
function selectionSort(arr) {
  // Write your code here

  for (let i = 0; i <= arr.length - 2; i++) {
    let min = i;
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;

  }
  return arr;
}
console.log("selection Sort " + selectionSort(arr))


//push last element at athe last by adjacent swapping

// function bubbleSort(arr)
// {
//     for(let i = 0;i<arr.length-1;i++)
//     {
//         for(let j = 0 ; j<arr.length-i-1;j++)
//         {
//             if(arr[j] >arr[j+1])
//             {
//                 // let temp = arr[j]
//                 // arr[j] = arr[j+1]
//                 // arr[j+1] = temp;

//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }

//     return arr
// }
let arr1 = [1, 2, 3, 4, 5] // BEST N  WORST N^2
function bubbleSort(arr1) {
  for (let i = arr1.length - 1; i >= 1; i--) {
    let swap = false;
    for (let j = 0; j <= i - 1; j++) {

      if (arr1[j] > arr1[j + 1]) {
        [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]]
        swap = true;
      }

    }
    if (!swap) {
      break;
    }
  }

  return arr1
}
console.log("Bubble sort " + bubbleSort(arr1));
console.log("Bubble sort " + bubbleSort(arr));

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      j--;
    }
  }
  return arr;
}
console.log("Insertion Sort " + insertionSort(arr))

function mergeSort(arr) { 
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid)
  let right = arr.slice(mid);
  let shortedleft = mergeSort(left)
  let shortright = mergeSort(right)
  return merge(shortedleft, shortright);
}

function merge(l, r) {
  let result = [];
  let i = 0, j = 0;
  while (i < l.length && j < r.length) {
    if (l[i] < r[j]) {
      result.push(l[i]);
      i++
    }
    else {
      result.push(r[j]);
      j++;
    }
  }
  while (i < l.length) {
    result.push(l[i]);
    i++;
  }
  while (j < r.length) {
    result.push(r[j])
    j++;
  }
  return result;
}
console.log("Merge Sort " + mergeSort(arr))

function quickSort(arr) {


  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    }
    else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log("Quick Sort " + quickSort(arr))


  