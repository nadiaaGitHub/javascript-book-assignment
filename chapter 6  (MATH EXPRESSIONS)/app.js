//Q1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
let a = 10;
document.write("<h2>Result:</h2>");
document.write("The value of a is: " + a + "<br>");
document.write("___________________" + "<br><br>" );

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// //Q2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var e = 2, b = 1;
var result = --e - --b + ++b + b--;
document.write("a is: " + e + "<br>" + "b is: " + b + "<br>" + "Result is: " + result + "<br><br>");

//Q3. Write a program that takes input a name from user & greet the user.
var inputName = prompt("Enter your name:");
alert("Hello, " + inputName + "! Welcome!");

//Q4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
// Take input from the user
var number = +prompt("Enter a number:");
if (number === null || number === "") {
    number = 5;
  }
  document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

// //Q5. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");

var totalMarks = 100;

var obtainedMarks1 = +prompt("Enter obtained marks for subject 1:");
var obtainedMarks2 = +prompt("Enter obtained marks for subject 2:");
var obtainedMarks3 = +prompt("Enter obtained marks for subject 3:");

var sub1Percwntage = obtainedMarks1/100 * 100;
var sub2Percwntage = obtainedMarks2/100 * 100;
var sub3Percwntage = obtainedMarks3/100 * 100;

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 +"</td><td>"+ sub1Percwntage +"</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 +"</td><td>"+ sub2Percwntage + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 +"</td><td>"+ sub3Percwntage + "</td></tr>");
document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
document.write("<tr><th colspan='3'>Percentage: " + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");

