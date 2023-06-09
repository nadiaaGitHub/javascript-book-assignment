//Q1.Declare a variable called age & assign to it your age. Show your age in an alert box.
var age;
age = 20;
alert("I am " + age + " Years Old");

// //Q2.Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “Youhave visited this site N times”.
var visit;
visit = +prompt();
alert("You have visit this site " + visit + " times.");

//Q3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear;
birthYear = +prompt("Enter Your Birth Year");
document.write("My Birth Year is " + birthYear + ".<br>" + "Data Type of My declared variable is Number.");

//Q4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var Name;
Name = prompt("Enter Your Name: ");
var Product;
Product = prompt("Enter your order Item Name:" + "<br>" + "1.T-shirt \n2.sweater \n3.jacket \n4.coat \n5.jeans \n6.socks \n7.shorts \n8.tracksuit");
var itemNumber;
itemNumber = +prompt("How many item you want to purchase?");
document.write( "<br>"+"<strong>" + Name + "</strong>" + " Ordered " + "<strong>" + itemNumber + "  " + Product + "(s)" + "</strong>" + " on XYZ Clothing store.")
