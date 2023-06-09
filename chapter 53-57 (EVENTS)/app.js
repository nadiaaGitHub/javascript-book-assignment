// 1. Consider you have 4 images in a file as shown below:
// Now When you click on an image it should display in a modal.
// Modal code is available in this assignment file.

// Modal functions
function openModal(src) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.
// Paragraph zoom functions
function zoomIn() {
  var paragraph = document.getElementById("myParagraph");
  var fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
  paragraph.style.fontSize = fontSize + 10 + "px";
}

function zoomOut() {
  var paragraph = document.getElementById("myParagraph");
  var fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
  paragraph.style.fontSize = fontSize - 10 + "px";
}
