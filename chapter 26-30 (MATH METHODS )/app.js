// //Q1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var number = +prompt("Enter a positive integer:");
if (isNaN(number) || number <= 0) {
  document.write("Invalid input. Please enter a positive integer.");
} else {
  document.write("<strong>Number:</strong> " + number + "<br>");
  var rounded = Math.round(number);
  document.write("<strong>Round off value:</strong> " + rounded + "<br>");
  var floor = Math.floor(number);
  document.write("<strong>Floor value:</strong> " + floor + "<br>");
  var ceil = Math.ceil(number);
  document.write("<strong>Ceil value:</strong> " + ceil + "<br>");
}

// //Q2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var number = parseFloat(prompt("Enter a negative floating-point number:"));
if (isNaN(number) || number >= 0) {
  document.write("Invalid input. Please enter a negative floating-point number.");
} else {
  document.write("<strong>Number:</strong> " + number + "<br>");
  var rounded = Math.round(number);
  document.write("<strong>Round off value:</strong> " + rounded + "<br>");
  var floor = Math.floor(number);
  document.write("<strong>Floor value:</strong> " + floor + "<br>");
  var ceil = Math.ceil(number);
  document.write("<strong>Ceil value:</strong> " + ceil + "<br>");
}

//Q3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var number = +prompt("Enter a number:");
var absoluteValue = Math.abs(number);
document.write("The absolute value of " + number + " is " + absoluteValue);

//Q4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("The value of the dice is: " + diceValue);

//Q5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
var coinValue = Math.random() < 2 ? "Heads" : "Tails";
document.write("The value of the coin is: " + coinValue);

//Q6. Write a program that shows a random number between 1 and 100 in your browser.
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: : " + randomNumber);

// //Q7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
var userInput = + prompt("Enter your weight:");
var weight = parseFloat(userInput);
if (isNaN(weight)) {
  document.write("Invalid input. Please enter a valid weight.");
} else {
  document.write("Your weight is: " + weight + " kgs");
}

//Q8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = +prompt("Guess the secret number (between 1 and 10):");
if (isNaN(userInput) || userInput < 1 || userInput > 10) {
  document.write("Invalid input. Please enter a number between 1 and 10.");
} else if (userInput === secretNumber) {
  document.write("Congratulations! You guessed the secret number.");
} else {
  document.write("Oops! The secret number was " + secretNumber + ". Try again!");
}

