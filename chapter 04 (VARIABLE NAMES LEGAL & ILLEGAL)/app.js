//Q1. Declare 3 variables in one statement.
var variable1, variable2, variable3;
variable1 = prompt("Name");
variable2 = prompt("Father Name");
variable3 = prompt("Last Degree");
alert("Name: " + variable1 + "\n" + "Father Name: " + variable2 + "\n" + "Last Degree: " + variable3);

//Q2. Declare 5 legal & 5 illegal variable names.
document.write("<strong>" + "legal variables:" + "</strong>" + "<br>" + "1. myVariable" + "<br>" + "2. count" + "<br>" + "3. userName" + "<br>" + "4. totalScore" + "<br>" + "5. isLoggedin" + "<br>" + "<strong>" + "Illegal variables:+" + "</strong>" + "<br>" + "1. 123variable (starts with a number)" + "<br>" + "2. my-variable (contains a hyphen)" + "<br>" + "3. var (reserved keyword)" + "<br>" + "4. function (reserved keyword)" + "<br>" + "5. var (reserved keyword)" + "<br>");

//Q3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,______ and ______.For example $my_1stVariable
// c) Variables must begin with a ______, ______ or_____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
document.write("<strong>" + "Rules for naming JS Variables:" + "</strong>" + "<br>" + "Variable names can only contain, numbers, $ and _.For example $my_1stVariable" + "<br>" + "Variables must begin with a letter, $ or_. For example $name, _name or name" + "<br>" + "Variable names are case sensitive" + "<br>" + "Variable names should not be JS keyword.");