let arr = [1, 2, 3, 4, 5];

console.log("Length of array:", arr.length);

console.log("Array as string:", arr.toString());

console.log("Element at index 2:", arr.at(2));

let lastElement = arr.pop();
console.log(lastElement, arr);

arr.push(6);
console.log(arr);

let firstElement = arr.shift();
console.log(firstElement, arr);

arr.unshift(0);
console.log(arr);

delete arr[2];
console.log(arr);

let newArr = arr.concat([7, 8, 9]);
console.log(newArr);

let copiedArr = newArr.copyWithin(0, 3, 5);
console.log(copiedArr);

let nestedArr = [1, [2, [3, 4]], 5];
console.log(nestedArr.flat(2));

let toSplicedArr = newArr.toSpliced(2, 2, 12, 13);
console.log("New array with toSpliced:", toSplicedArr);

let slicedArr = newArr.slice(1, 4);
console.log("Sliced array:", slicedArr);

console.log("Index of 6:", newArr.indexOf(6));

let unsortedArr = [5, 2, 9, 1];
console.log(
  "Sorted array:",
  unsortedArr.sort((a, b) => a - b)
);

newArr.forEach((item, index) =>
  console.log(`Element at index ${index}:`, item)
);

let count = 0;
while (count <= 5) {
  console.log(count);
  count++;
}

let number = 5;
do {
  console.log(number);
  number++;
} while (number < 1);
