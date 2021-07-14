// "onclick"run function to change class property to display:block from display:none;
// Get the modal


var modalNPS = document.getElementById("modalNPS");
var modalDS = document.getElementById("modalDS");

// Get the button that opens the modal
var botonNPS = document.getElementById("abreNPS");
var botonDS = document.getElementById("abreDS");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("cerrar-modal")[0];


// When the user clicks on the button, open the modal 
botonNPS.onclick = function () {
  console.log("Opened NPS modal")
  modalNPS.style.display = "block";
}
botonDS.onclick = function () {
  modalDS.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  console.log("Closed NPS modal")
  modalNPS.style.display = "none";
}
span.onclick = function () {
  modalDS.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}