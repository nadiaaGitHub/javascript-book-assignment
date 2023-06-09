//1. Show an alert box on click on a link
function showAlert() {
  alert("You clicked the link!");
}
// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

function showMessage(message, img) {
  alert(message);
  img.style.display = "block";
}

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
//  Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
function increase() {
  var counter = document.getElementById("counter");
  var value = parseInt(counter.innerHTML);
  value++;
  counter.innerHTML = value;
}

function decrease() {
  var counter = document.getElementById("counter");
  var value = parseInt(counter.innerHTML);
  value--;
  counter.innerHTML = value;
}
