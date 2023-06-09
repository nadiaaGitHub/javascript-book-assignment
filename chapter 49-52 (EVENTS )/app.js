// 1. Create a signup form and display form data in your web
// page on submission.

function displayFormData() {
  var firstName = document.getElementsByName("firstName")[0].value;
  var lastName = document.getElementsByName("lastName")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var password = document.getElementsByName("password")[0].value;

  var formData =
    "First Name: " +
    firstName +
    "\n" +
    "Last Name: " +
    lastName +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "Password: " +
    password;

  alert(formData);
}

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.
function showDetails() {
  var details = document.getElementById("details");
  details.style.display = "block";
}

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.
function addStudent() {
  event.preventDefault(); // Prevent form submission

  // Get the student details from the form
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var grade = document.getElementById("grade").value;

  // Create a new row in the table with the student details
  var table = document.getElementById("studentTable");
  var row = table.insertRow(-1);
  var nameCell = row.insertCell(0);
  var ageCell = row.insertCell(1);
  var gradeCell = row.insertCell(2);
  var deleteCell = row.insertCell(3);
  var editCell = row.insertCell(4);
  nameCell.innerHTML = name;
  ageCell.innerHTML = age;
  gradeCell.innerHTML = grade;

  // Create delete button and attach event listener
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", function () {
    deleteRow(this);
  });
  deleteCell.appendChild(deleteButton);

  // Create edit button and attach event listener
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.addEventListener("click", function () {
    showEditForm(row);
  });
  editCell.appendChild(editButton);

  // Clear the form inputs
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("grade").value = "";
}
