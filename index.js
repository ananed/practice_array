// Write a function 'sum' that computes the sum of the numbers in an array.

function sumElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// Write a function 'max' that accepts an array of numbers and returns the
// *largest* number in the array.

function largestNumber(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > i; j--) {
      if (arr[i] < arr[j]) {
        largest = arr[j];
      }
    }
  }
  return largest;
}

// Use .split to write a function 'longestWord' that takes a string as an
// argument and returns the longest word.

function longestWord(str) {
  let largestW;
  let words = str.split("");

  for (let i = 0; i < words.length; i++) {
    for (let j = words.length; j < i; j--) {
      if (words[i] < words[j]) {
        largestW = words[j];
      }
    }
  }
  return largestW;
}

// Write a function 'remove' that accepts an *array* and an *element*,
// and  returns an array with all occurrences of the *element* removed.

const removeElement = (arr, element) => (arr.filter((a) => a != element))

// Write a function 'evens' that accepts an array as an argument,
// and returns an array consisting of all the *even* numbers in that array.

function evens(arr) {
  let evenVector = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenVector[j] = arr[i];
      j++;
    }
  }
  return evenVector;
}
