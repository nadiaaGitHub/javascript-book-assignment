//Q1. Write a program that takes a character (number or string)in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var input = prompt("Enter a character:");
var charCode = input.charCodeAt(0);
if (charCode >= 48 && charCode <= 57) {
    console.log("The input is a number.");
} else if (charCode >= 65 && charCode <= 90) {
    console.log("The input is an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
    console.log("The input is a lowercase letter.");
} else {
    console.log("The input is not a number or letter.");
}

//Q2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var number1 = parseInt(prompt("Enter the first integer:"));
var number2 = parseInt(prompt("Enter the second integer:"));
if (number1 === number2) {
    console.log("The two integers are equal.");
} else {
    var largerNumber = number1 > number2 ? number1 : number2;
    console.log("The larger number is: " + largerNumber);
}

//Q3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var number = +prompt("Enter a number:");
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

//Q4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.
var character = prompt("Enter a character:");
var lowercaseCharacter = character.toLowerCase();
var isVowel =
    lowercaseCharacter === "a" ||
    lowercaseCharacter === "e" ||
    lowercaseCharacter === "i" ||
    lowercaseCharacter === "o" ||
    lowercaseCharacter === "u";
console.log("Is the character a vowel? " + isVowel);

// //Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
var correctPassword = "Password123";
var userPassword = prompt("Enter your password:");
if (!userPassword) {
 alert("Please enter your password.");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect password.");
}

//Q6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

//Q7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
var time = +prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");
if (time >= 0 && time <= 2359) {
  if (time >= 0 && time < 1200) {
    console.log("Good morning!");
  } else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
  } else if (time >= 1700 && time < 2000) {
    console.log("Good evening!");
  } else {
    console.log("Good night!");
  }
} else {
  console.log("Invalid time format entered.");
}


