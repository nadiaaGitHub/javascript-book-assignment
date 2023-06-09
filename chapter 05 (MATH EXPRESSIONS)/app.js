//Q1.Write a program that take two numbers & add them in a new variable. Show the result in your browser
var firstNumber = +prompt("Enter Your First Number");
var secondNumber = +prompt("Enter Your Second Number");
var sum = (firstNumber + secondNumber);
document.write("Sum of " + firstNumber + " and " + secondNumber + "  is " + sum + ".<br>");

//Q2. Repeat task1 for subtraction, multiplication, division & modulus.
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;
document.write("Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "<br>");
document.write("Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "<br>");
document.write("Division: " + num1 + " / " + num2 + " = " + division + "<br>");
document.write("Modulus: " + num1 + " % " + num2 + " = " + modulus + "<br>");

//Q3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

var myVariable; // a. Declare a variable
document.write("Value after variable declaration is: " + myVariable + "<br>");// b. Show the value of the variable in the browser

myVariable = 5;// c. Initialize the variable with some number
document.write("Initial value: " + myVariable + "<br>");// d. Show the value of the variable in the browser

myVariable++;// e. Increment the variable
document.write("Value after increment is: " + myVariable + "<br>");// f. Show the value of the variable in the browser

myVariable += 7;// g. Add 7 to the variable
document.write("Value after addition is: " + myVariable + "<br>");// h. Show the value of the variable in the browser

myVariable--;// i. Decrement the variable
document.write("Value after decrement is: " + myVariable + "<br>");// j. Show the value of the variable in the browser

var remainder = myVariable % 3;// k. Show the remainder after dividing the variable's value by 3
document.write("The remainder is: " + remainder + "<br>");// l. Show the remainder in the browser

//Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write(" Total Cost to buy 5 tickets to a Movie is " + totalCost + " PKR.<br>");

// //Q5. Write a script to display multiplication table of any number in your browser. 
var number = +prompt("Enter the number you want to display multiplication table");
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
    var result = number * i;
    document.write(number + " x " + i + " = " + result + "<br>");
}

// //Q6.The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemp = 25;
var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");
var fahrenheitTemp2 = 70;
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5 / 9;
document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");

// //Q7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser
var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;
var item1Cost = item1Price * item1Quantity;
var item2Cost = item2Price * item2Quantity;
var totalCost = item1Cost + item2Cost + shippingCharges;
document.write("<h2>Shopping Chart</h2>");
document.write("Price of Item 1 is   " + item1Price + "<br>");
document.write("Quantity of Item 1 is   " + item1Quantity + "<br>");
document.write("Price of Item 2 is  " + item2Price + "<br>");
document.write("Quantity of Item 2 is  " + item2Quantity + "<br>");
document.write("Shipping Charges is  " + shippingCharges + "<br>");
document.write("Total Cost of your order is  " + totalCost + "<br>");

//Q8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks = 98;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h2>Mark Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%" + "<br>");

//Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var usdToPkrRate = 104.80;
var sarToPkrRate = 28;
var usdAmount = 10;
var sarAmount = 25;
var pkrAmount = (usdAmount * usdToPkrRate) + (sarAmount * sarToPkrRate);
document.write("<h2>Currency in PKR</h2>");
document.write("Total Currency in PKR:  " + pkrAmount + "<br>");

// //Q10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var number = 7;
var result = ((number + 5) * 10) / 2;
document.write("Initial Number: " + number + "<br>");
document.write("Result after Arithmetic Operations: " + result + "<br>");

// //Q11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: “They are either NN or NN years old
var currentYear = +prompt("Enter Current year.");
var birthYear = +prompt("Enter Birth year.");
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("<h2>Age Calculator</h2>");
document.write("Current year is: " + currentYear + "<br>");
document.write("Birth year is: " + birthYear + "<br>");
document.write("Your age is: " + age2 + "<br>");

// //Q12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.(Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * 2;
document.write("<h2>The Geometrizer</h2>");
document.write("Radius of a circle: "+ radius+"<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>" );

// //Q13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”
let favoriteSnack = prompt("Your Favorite Snack");
let currentAge = +prompt("your current age");
let maximumAge = 65;
let amountPerDay = 3;
let yearsRemaining = maximumAge - currentAge;
let snacksPerYear = amountPerDay * 365;
let snacksForLifetime = snacksPerYear * yearsRemaining;
document.write("<h2>Lifetime Supply Calculator</h2>");
document.write("Favorite Snake:  " + favoriteSnack + "<br>" + "Current Age: "+ currentAge + "<br>" + "Estimate Maximum Age: " + maximumAge + "<br>" + "Amoun of Snack Per Day: " + amountPerDay + "<br>" + "You will need " + snacksForLifetime + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + "<br>");