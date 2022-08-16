const { $CombinedState } = require("@reduxjs/toolkit");

function getInputValue() {
  // Selecting the input element and get its value
  let inputVal = document.getElementById("inputId").value;
  // Displaying the value
  if (inputVal == "Krithika") {
    document.getElementById("addcontent").innerHTML =
      "Hi " + inputVal + "!!, your images are ready";
    document.getElementById("tuntun").style.display = "block";
    document.getElementById("grandma").style.display = "block";
    document.getElementById("whitepig").style.display = "block";
  }
  if (inputVal == "Dinesh") {
    document.getElementById("addcontent").innerHTML =
      "Hi " + inputVal + "!!, your images are ready";
    document.getElementById("Bheem").style.display = "block";
    document.getElementById("Bheem1").style.display = "block";
  }
}
