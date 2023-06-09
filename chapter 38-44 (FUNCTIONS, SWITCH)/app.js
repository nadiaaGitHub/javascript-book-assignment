//Q1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
function power(a, b) {
    var result = Math.pow(a, b);
    return result;
}
var base = +prompt("Enter the base value:");
var exponent = +prompt("Enter the exponent value:");

var powerResult = power(base, exponent);
document.write(base + " raised to " + exponent + " is " + powerResult + "<br>");

//Q2. . Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, …
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  var inputYear = +prompt("Enter a year:");
  
  if (isLeapYear(inputYear)) {
    document.write(inputYear + " is a leap year." + "<br>");
  } else {
    document.write(inputYear + " is not a leap year." + "<br>");
  }

// //Q3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions 
// Function to calculate the semi-perimeter of the triangle
function calculateSemiPerimeter(a, b, c) {
    var semiPerimeter = (a + b + c) / 2;
    return semiPerimeter;
  }
  function calculateTriangleArea(a, b, c) {
    var semiPerimeter = calculateSemiPerimeter(a, b, c);
    var area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
    return area;
  }
  var sideA = +prompt("Enter the length of side A:");
  var sideB = +prompt("Enter the length of side B:");
  var sideC = +prompt("Enter the length of side C:");
  
  var triangleArea = calculateTriangleArea(sideA, sideB, sideC);
  document.write("The area of the triangle is " + triangleArea.toFixed(2) + "<br>");
  
//Q4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.
function calculateAverage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var average = totalMarks / 3;
    return average;
  }
  function calculatePercentage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var totalObtainedMarks = subject1 + subject2 + subject3;
    var percentage = (totalObtainedMarks / totalMarks) * 100;
    return percentage;
  }
  function mainFunction() {
    var subject1Marks = +prompt("Enter marks obtained in subject 1:");
    var subject2Marks = +prompt("Enter marks obtained in subject 2:");
    var subject3Marks = +prompt("Enter marks obtained in subject 3:");
  
    var averageMarks = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
    var percentageMarks = calculatePercentage(subject1Marks, subject2Marks, subject3Marks);
  
    document.write("Average marks: " + averageMarks.toFixed(2) + "<br>");
    document.write("Percentage marks: " + percentageMarks.toFixed(2) + "%" + "<br>");
  }
  mainFunction();
 
//Q5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now  
function customIndexOf(string, searchChar) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === searchChar) {
        return i;
      }
    }
    return -1; // Character not found
  }
  
  var str = "Hello, world!";
  var searchChar = "o";
  var index = customIndexOf(str, searchChar);
  document.write("Index of '" + searchChar + "': " + index + "<br>");
  
//Q6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
function removeVowels(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var newSentence = '';
  
    for (var i = 0; i < sentence.length; i++) {
      var char = sentence[i].toLowerCase();
      if (!vowels.includes(char)) {
        newSentence += sentence[i];
      }
    }
  
    return newSentence;
  }
  
  var sentence = "This is a sample sentence.";
  var result = removeVowels(sentence);
  document.write("Original sentence: " + sentence + "<br>");
  document.write("Sentence without vowels: " + result + "<br>");
  
// //Q7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.
// For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.
function countSuccessiveVowels(text) {
    var count = 0;
    text = text.toLowerCase();
  
    for (var i = 0; i < text.length - 1; i++) {
      var currentChar = text[i];
      var nextChar = text[i + 1];
  
      switch (currentChar) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          switch (nextChar) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
              count++;
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    }
  
    return count;
  }
  
  var sentence = "Pleases read this application and give me gratuity";
  var result = countSuccessiveVowels(sentence);
  document.write("Number of occurrences of successive vowels: " + result + "<br>");

//Q8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
function convertToMeters(distanceInKm) {
    return distanceInKm * 1000;
  }
  
  function convertToFeet(distanceInKm) {
    return distanceInKm * 3280.84;
  }
  
  function convertToInches(distanceInKm) {
    return distanceInKm * 39370.1;
  }
  
  function convertToCentimeters(distanceInKm) {
    return distanceInKm * 100000;
  }
  var distanceInKm = +prompt("Enter the distance between two cities in kilometers:");
  
  var distanceInMeters = convertToMeters(distanceInKm);
  var distanceInFeet = convertToFeet(distanceInKm);
  var distanceInInches = convertToInches(distanceInKm);
  var distanceInCentimeters = convertToCentimeters(distanceInKm);
  
  document.write("Distance in kilometers: " + distanceInKm + " km<br>");
  document.write("Distance in meters: " + distanceInMeters + " m<br>");
  document.write("Distance in feet: " + distanceInFeet + " ft<br>");
  document.write("Distance in inches: " + distanceInInches + " in<br>");
  document.write("Distance in centimeters: " + distanceInCentimeters + " cm<br>");

//Q9.  Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.
function calculateOvertimePay(hoursWorked) {
 var regularHours = 40;
var overtimeRate = 12.00;

  if (hoursWorked <= regularHours) {
    return 0;
  } else {
   var overtimeHours = hoursWorked - regularHours;
    var overtimePay = overtimeHours * overtimeRate;
    return overtimePay;
  }
}

var hoursWorked = 45;
var overtimePay = calculateOvertimePay(hoursWorked);
console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));

//Q10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
function calculateCurrencyNotes(amountInHundreds) {
var denomination100 = 100;
var denomination50 = 50;
var denomination10 = 10;

  var numNotes100 = Math.floor(amountInHundreds);
  var numNotes50 = 0;
  var numNotes10 = 0;

  if (numNotes100 > 0) {
    numNotes50 = Math.floor((amountInHundreds % denomination100) / denomination50);
    numNotes10 = Math.floor((amountInHundreds % denomination50) / denomination10);
  }

  return {
    "100": numNotes100,
    "50": numNotes50,
    "10": numNotes10
  };
}
var amountInHundreds = 4;
var currencyNotes = calculateCurrencyNotes(amountInHundreds);
alert("Number of 100 notes: " + currencyNotes["100"] + "<br>");
alert("Number of 50 notes: " + currencyNotes["50"] + "<br>");
alert("Number of 10 notes: " + currencyNotes["10"] + "<br>");
