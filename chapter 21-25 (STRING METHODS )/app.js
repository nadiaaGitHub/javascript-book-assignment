//Q1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

console.log("Hello, " + fullName + "! Welcome!");

//Q2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
var favoriteModel = prompt("Enter your favorite mobile phone model:");

var inputLength = favoriteModel.length;

document.write("My favorite phone is:  " + favoriteModel + "<br>");
document.write("The length of string: " + inputLength + "<br>");

//Q3. . Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser
var word = "Pakistani";
var letter = "n";

var index = word.indexOf(letter);
document.write("String: " + word + "<br>");
document.write("Index of 'n' is: " + index + "<br>");

//Q4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser
var word = "Hello World";
var letter = "l";

var index = word.lastIndexOf(letter);
document.write("String: " + word + "<br>");
document.write(" Last Index of 'l' is: " + index + "<br>");

//Q5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser
var word = "Hello World";
var index = 3;

var character = word.charAt(letter);
document.write("String: " + word + "<br>");
document.write(" Last Index of 'l' is: " + character + "<br>");

//Q6. Repeat Q1 using string concat() method.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName.concat(" ", lastName);

console.log("Hello, " + fullName + "! Welcome!");

//Q7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser
var word = "Hyderabad";
var replacedWord = word.replace("Hyder", "Islam");

document.write("City: " + word + "<br>");
document.write("After Replacement: " + replacedWord + "<br>");

// //Q8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMessage = message.replace(/and/g, "&");

document.write("Original message: " + message + "<br>");
document.write("Replaced message: " + replacedMessage + "<br>");

//Q9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser
var str = "472";
var num = Number(str);

document.write("Value: " + str + "<br>");
document.write("Converted number: " + num + "<br>");
document.write("Type number: " + typeof num);

//Q10. Write a program that takes user input. Convert and show the input in capital letters.
var userInput = prompt("Enter your input:");
var capitalizedInput = userInput.toUpperCase();

document.write("User Input: " + userInput + "<br>");
document.write("Uper Case: " + capitalizedInput);

//Q11. Write a program that takes user input. Convert and show the input in title case
function convertToTitleCase(str) {
    var words = str.toLowerCase().split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    var titleCaseStr = words.join(" ");

    return titleCaseStr;
}

var userInput = prompt("Enter your input:");
var titleCaseInput = convertToTitleCase(userInput);

document.write("User Input: " + userInput + "<br>");
document.write("Title Case Input: " + titleCaseInput);

// //Q12. Write a program that converts the variable num to string.
// var num = 35.36; Remove the dot to display “3536” display in your browser.
var num = 35.36;
var numString = num.toString();
var numWithoutDot = numString.replace(".", "");

document.write("Number: " + num + "<br>");
document.write("Result: " + numWithoutDot + "<br>");

// //Q13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
function isValidUsername(username) {
    var specialSymbols = ['@', '.', ',', '!'];
  
    for (let i = 0; i < username.length; i++) {
      if (specialSymbols.includes(username[i])) {
        return false; // Invalid username
      }
    }
  
    return true; // Valid username
  }
  
  function promptUsername() {
    var username = prompt("Enter your username:");
  
    while (!isValidUsername(username)) {
      username = prompt("Enter a valid username (without special symbols [@ . , !]):");
    }
    alert("Username:", username);
  }
  promptUsername();
  
  //Q14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
function searchItem(item) {
  var lowercaseItem = item.toLowerCase();
  var lowercaseItems = items.map(item => item.toLowerCase());
  if (lowercaseItems.includes(lowercaseItem)) {
    alert(`"${item}" is found in the list.`);
  } else {
    alert(`"${item}" is not found in the list.`);
  }
}
var userInput = prompt("Enter an item to search:");
searchItem(userInput);

// //Q15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
function isValidPassword(password) {
    var hasAlphabets = /[a-zA-Z]/.test(password);
    var hasNumbers = /[0-9]/.test(password);
    var startsWithLetter = /^[a-zA-Z]/.test(password);
    var isLengthValid = password.length >= 6;
    return hasAlphabets && hasNumbers && startsWithLetter && isLengthValid;
  }
  function promptPassword() {
    var password = prompt("Enter your password:");
    while (!isValidPassword(password)) {
      password = prompt("Enter a valid password:\nRequirements:\n- Should contain alphabets and numbers\n- Should not start with a number\n- Must be at least 6 characters long");
    }
    alert("Password:", password);
  }
  promptPassword();

//   //Q16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”; Display the elements of array in your browser.
var university = "University of Karachi";
var array = university.split(" ");
document.write("Array Elements: " + array);

//Q17. Write a program to display the last character of a user input.
var userInput = prompt("Enter a string:");
var lastCharacter = userInput.charAt(userInput.length - 1);
document.write("User Input: " + userInput + "<br>");
document.write("Last Character: " + lastCharacter + "<br>");

//Q18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
function countOccurrences(sentence, word) {
  sentence = sentence.toLowerCase();
  var words = sentence.split(" ");
  var count = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i] === word.toLowerCase()) {
      count++;
    }
  }
  
  return count;
}

var sentence = "The quick brown fox jumps over the lazy dog";
var word = "the";

var occurrences = countOccurrences(sentence, word);
console.log("Number of occurrences of the word '" + word + "': " + occurrences);


  
  








