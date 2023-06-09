//Q1. Declare and initialize an empty multidimensional array. (Array of arrays)
var multiArray = [[]];

//Q2. Declare and initialize a multidimensional array representing the following matrix:
const matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
document.write(matrix[1][2]); // Output: 6  

//Q3. Write a program to print numeric counting from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Q4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
const tableNumber = +prompt('Enter the number for the multiplication table:');
const tableLength = +prompt('Enter the length of the multiplication table:');

document.write('<h3>Multiplication Table of ' + tableNumber + ':</h3>');

for (let i = 1; i <= tableLength; i++) {
  const result = tableNumber * i;
  document.write(tableNumber + ' x ' + i + ' = ' + result + '<br>');
}

//Q5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// //Q6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
console.log("Counting:");
for (let i = 1; i <= 15; i++) {
  console.log(i);
}
// Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
console.log("Reverse counting:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
console.log("Even:");
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
// Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
console.log("Odd:");
for (let i = 1; i <= 19; i += 2) {
  console.log(i);
}
// Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
console.log("Series:");
for (let i = 1; i <= 10; i++) {
  console.log(i * 2 + "k");
}


//Q7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.After searching, prompt the user whether the given item is found in the list or not. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
function searchItem(item) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] === item) {
      return true;
    }
  }
  return false;
}
var userInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am:");
var isFound = searchItem(userInput);
if (isFound) {
  console.log(`"${userInput}" is found in the list.`);
  alert(`"${userInput}" is available in the in the Bakery.`);
} else {
  console.log(`"${userInput}" is not found in the list.`);
  alert(`"${userInput}" is not found in the list.`);
}

//Q8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
var A = [24, 53, 78, 91, 12];
var largest = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}
document.write("Array items: " + A + "<br>");
document.write("The largest number in the array is: " + largest + "<br>");

//Q9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
var A = [24, 53, 78, 91, 12];
var smallest = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}

document.write("Array items: " + A + "<br>");
document.write("The smallest number in the array is: " + smallest + "<br>");

//Q10. Write a program to print multiples of 5 ranging 1 to 100.
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(i);
  }
}

