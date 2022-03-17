const sortNums = (arr) => {
  let myArr = [];

  for (i = 0; i < arr.length; i++) {
    let product = arr[i] * (i + 1);
    myArr.push(product);
  }
  let newArr = myArr.sort();
  return newArr;
};

let sortArr = [23, 2, 3, 4, 5];
let duplicateArr = [];

sortArr.forEach((element, index) => {
  duplicateArr.push(element * (index + 1));
});

console.log(duplicateArr.sort((a, b) => a - b));

function sortByProduct(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * (i + 1));
    console.log(arr[i] * (i + 1));
  }

  let bananas = newArr.sort(function (a, b) {
    return a - b;
  });

  return bananas;
}

let myArray = [23, 2, 3, 4, 5];
console.log(sortByProduct(myArray));

function sortByProduct(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * (i + 1));
    console.log(arr[i] * (i + 1));
  }

  //bubble sort
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (newArr[i] < newArr[j]) {
        temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
  }

  return bananas;
}

function sortArr(num) {
  let arr = [];
  let count = 1;
  for (let i = 0; i < num.length; i++) {
    arr.push(num[i] * count);
    count++;
  }
  return arr;
}

console.log(sortArr([23, 2, 3, 4, 5]));
