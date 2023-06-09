// 1. Consider you have following code snippet:
// (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

// Get element of id "main-content" and assign them in a variable
var mainContent = document.getElementById("main-content");

// Display all child elements of "main-content" element
var childElements = mainContent.childNodes;
console.log(childElements);

// Get all elements of class "render" and show their innerHTML in browser
var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

// Fill input value whose element id is "first-name"
document.getElementById("first-name").value = "John";

// Repeat for id "last-name" and "email"
document.getElementById("last-name").value = "Doe";
document.getElementById("email").value = "johndoe@example.com";

// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”

// i. What is node type of element having id “form-content”.
var formContent = document.getElementById("form-content");
console.log(
  "Node type of element with id 'form-content': " + formContent.nodeType
);

// ii. Show node type of element having id “lastName” and its child node.
var lastName = document.getElementById("lastName");
console.log("Node type of element with id 'lastName': " + lastName.nodeType);
console.log(
  "Node type of child node of element with id 'lastName': " +
    lastName.childNodes[0].nodeType
);

// iii. Update child node of element having id “lastName”.
lastName.innerHTML = "Last Name: Smith";

// iv. Get First and last child of id “main-content”.
var mainContent = document.getElementById("main-content");
console.log(
  "First child of element with id 'main-content': " +
    mainContent.firstChild.innerHTML
);
console.log(
  "Last child of element with id 'main-content': " +
    mainContent.lastChild.innerHTML
);

// v. Get next and previous siblings of id “lastName”.
console.log(
  "Next sibling of element with id 'lastName': " +
    lastName.nextSibling.innerHTML
);
console.log(
  "Previous sibling of element with id 'lastName': " +
    lastName.previousSibling.innerHTML
);

// vi. Get parent node and node type of element having id “email”.
var email = document.getElementById("email");
console.log("Parent node of element with id 'email': " + email.parentNode.id);
console.log("Node type of element with id 'email': " + email.nodeType);
