//Q1. Declare an empty array using JS literal notation to store student names in future.
var studentNames = [];

//Q2. Declare an empty array using JS object notation to store student names in future.
var studentNames = new Array();

//Q3. Declare and initialize a strings array.
var fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits[0]);  // Output: apple
console.log(fruits[1]);  // Output: banana
console.log(fruits[2]);  // Output: orange
console.log(fruits[3]);  // Output: grape

//Q4. Declare and initialize a numbers array.
var numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);  // Output: 1
console.log(numbers[1]);  // Output: 2
console.log(numbers[2]);  // Output: 3
console.log(numbers[3]);  // Output: 4
console.log(numbers[4]);  // Output: 5

//Q5. Declare and initialize a boolean array.
var booleanArray = [true, false, true, false];
console.log(booleanArray[0]);  // Output: true
console.log(booleanArray[1]);  // Output: false
console.log(booleanArray[2]);  // Output: true
console.log(booleanArray[3]);  // Output: false

//Q6. Declare and initialize a mixed array.
var mixedArray = [1, "apple", true, 3.14, false];
console.log(mixedArray[0]);  // Output: 1
console.log(mixedArray[1]);  // Output: "apple"
console.log(mixedArray[2]);  // Output: true
console.log(mixedArray[3]);  // Output: 3.14
console.log(mixedArray[4]);  // Output: false

//Q7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed ualifications in your browser like:
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h3>Qualifications:</h3>");
document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");

//Q8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
var studentNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;
var percentages = [];
for (var i = 0; i < scores.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    percentages.push(percentage.toFixed(2));
}
for (var i = 0; i < studentNames.length; i++) {
    document.write(studentNames[i] + "  is: " + scores[i] + ". Percentage:  " + percentages[i] + "%" + "<br>");
}

// //Q9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.
var colors = ["Red", "Green", "Blue"];
document.write("<h3>Original Array:</h3>");
document.write(colors.join(", ") + "<br>");

var colorToAddToBeginning = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(colorToAddToBeginning);
document.write("<h3>Updated Array (Added color to the beginning):</h3>");
document.write(colors.join(", ") + "<br>");

var colorToAddToEnd = prompt("Enter a color to add to the end of the array:");
colors.push(colorToAddToEnd);
document.write("<h3>Updated Array (Added color to the end):</h3>");
document.write(colors.join(", ") + "<br>");

colors.unshift("Yellow", "Orange");
document.write("<h3>Updated Array (Added two colors to the beginning):</h3>");
document.write(colors.join(", ") + "<br>");

colors.shift();
document.write("<h3>Updated Array (Deleted the first color):</h3>");
document.write(colors.join(", ") + "<br>");

colors.pop();
document.write("<h3>Updated Array (Deleted the last color):</h3>");
document.write(colors.join(", ") + "<br>");

var indexToAdd = prompt("Enter the index where you want to add a color:");
var colorToAdd = prompt("Enter the color name to add:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<h3>Updated Array (Added color at a specific position):</h3>");
document.write(colors.join(", ") + "<br>");

var indexToDelete = prompt("Enter the index where you want to delete color(s):");
var numberOfColorsToDelete = prompt("Enter the number of colors you want to delete:");
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("<h3>Updated Array (Deleted color(s) from a specific position):</h3>");
document.write(colors.join(", ") + "<br>");

//Q10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var scores = [320, 230, 480, 120];
scores.sort(function(a, b) {
  return a - b;
});
document.write("Score of students: 320,230,480,120" + "<br>");
document.write("Ordered Score of student: " + scores + "<br></br>");

//Q11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = [];
selectedCities = cities.slice(2, 4);
document.write("Selected Cities:" + "<br>");
document.write(selectedCities);

//Q12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
document.write("Array:" + "<br>"+ "This,is,my,cat" + "<br></br>")
document.write("String: " +"<br>" + singleString);

//Q13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var fifoArray = ["Keyboard", "Mouse", "Printer", "Moniter"];
doument.write("Devices:" + "<br>" + "Keybord, Mouse, Printer, Moniter" + "<br></br>");
document.write("Out:" + "<br>" + fifoArray.shift() ); // Output: "Value 1"
document.write("Out:" + "<br>" + fifoArray.shift() ); // Output: "Value 2"
document.write("Out:" + "<br>" + fifoArray.shift() ); // Output: "Value 3"
document.write("Out:" + "<br>" + fifoArray.shift() ); // Output: "Value 4"

//Q14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out).
var reverseArray = ["Keyboard", "Mouse", "Printer", "Moniter"];
reverseArray.push(1);
reverseArray.push(2);
reverseArray.push(3);
reverseArray.push(4);
reverseArray.push(5);
while (reverseArray.length > 0) {
  const value = reverseArray.pop();
  console.log(value);
}

//Q15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
var manufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write('<select>');
for (let i = 0; i < manufacturers.length; i++) {
  document.write('<option>' + manufacturers[i] + '</option>');
}
document.write('</select>');
