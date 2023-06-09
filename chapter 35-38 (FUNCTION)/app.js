//Q1. Write a function that displays current date & time in your browser.
function displayCurrentDateTime() {
    var currentDateTime = new Date();
    var currentDate = currentDateTime.toDateString();
    var currentTime = currentDateTime.toLocaleTimeString();
    document.write("Current Date: " + currentDate + "<br>");
    document.write("Current Time: " + currentTime + "<br>");
}
displayCurrentDateTime();

//Q2. Write a function that takes first & last name and then it greets the user using his full name.
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    document.write("Hello, " + fullName + "! Welcome!" + "<br>");
}
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
greetUser(firstName, lastName);

//Q3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
function addNumbers() {
    var num1 = +prompt("Enter the first number:");
    var num2 = +prompt("Enter the second number:");
    var sum = num1 + num2;
    return sum;
}
var result = addNumbers();
document.write("The sum is: " + result + "<br>");

//Q4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
function calculator(num1, num2, operator) {
    var result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return "Invalid operator";
    }

    return result;
}
var number1 = +prompt("Enter the first number:");
var number2 = +prompt("Enter the second number:");
var operation = prompt("Enter the operator (+, -, *, /):");

var result = calculator(number1, number2, operation);
document.write("The result is: " + result + "<br>");

//Q5. Write a function that squares its argument.
function squareNumber(number) {
    var square = number * number;
    return square;
}
var input = +prompt("Enter a number:");
var result = squareNumber(input);
document.write("The square of " + input + " is: " + result + "<br>");

//Q6. . Write a function that computes factorial of a number.
function computeFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        var factorial = 1;
        for (var i = number; i >= 2; i--) {
            factorial *= i;
        }
        return factorial;
    }
}
var input = +prompt("Enter a number:");
var result = computeFactorial(input);
document.write("The factorial of " + input + " is: " + result + "<br>");

//Q7. Write a function that take start and end number as inputs & display counting in your browser.
function countNumbers(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
var startNumber = +prompt("Enter the start number:");
var endNumber = +prompt("Enter the end number:");
countNumbers(startNumber, endNumber);

// //Q8. Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs.Outer function : calculateHypotenuse() Inner function: calculateSquare()
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
        return side * side;
    }

    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse;
}
var baseLength = +prompt("Enter the length of the base:");
var perpendicularLength = +prompt("Enter the length of the perpendicular:");
var hypotenuseLength = calculateHypotenuse(baseLength, perpendicularLength);
document.write("The length of the hypotenuse is: " + hypotenuseLength + "<br>");

// //Q9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i.Arguments as value
// ii.Arguments as variables
function calculateRectangleAreaValue(width, height) {
    var area = width * height;
    return area;
}
function calculateRectangleAreaVariables(width, height) {
    var area = width * height;
    return area;
}
var areaValue = calculateRectangleAreaValue(5, 3);
document.write("The area of the rectangle is: " + areaValue + "<br>");
var rectangleWidth = 5;
var rectangleHeight = 3;
var areaVariables = calculateRectangleAreaVariables(rectangleWidth, rectangleHeight);
document.write("<br>");
document.write("The area of the rectangle is: " + areaVariables + "<br>");

//Q10. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
function isPalindrome(str) {
    var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    var reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}

var input = prompt("Enter a string:");
var result = isPalindrome(input);

if (result) {
    document.write("The string \"" + input + "\" is a palindrome." + "<br>");
} else {
    document.write("The string \"" + input + "\" is not a palindrome." + "<br>");
}

// //Q11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
function capitalizeFirstLetter(str) {
    var words = str.split(' ');

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var firstLetter = word.charAt(0).toUpperCase();
        var restOfWord = word.slice(1).toLowerCase();
        words[i] = firstLetter + restOfWord;
    }

    return words.join(' ');
}
var inputString = prompt("Enter a string:");
var capitalizedString = capitalizeFirstLetter(inputString);
document.write("Capitalized string: " + capitalizedString + "<br>");

// //Q12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = '';

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}
var inputString = prompt("Enter a string:");
var longestWord = findLongestWord(inputString);
document.write("Longest word: " + longestWord + "<br>");

//Q13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of  occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'
function countLetterOccurrences(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }

    return count;
}
var inputString = 'JSResourceS.com';
var inputLetter = 'o';
var occurrences = countLetterOccurrences(inputString, inputLetter);
document.write("Number of occurrences of '" + inputLetter + "': " + occurrences + "<br>");

// //Q14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
function countLetterOccurrences(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }

    return count;
}

var inputString = 'JSResourceS.com';
var inputLetter = 'o';
var occurrences = countLetterOccurrences(inputString, inputLetter);
document.write("Number of occurrences of '" + inputLetter + "': " + occurrences);


