const form = document.getElementById("mailingList");
const myInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm_password");

// When the passwords dont match, the message appears.
function checkPassword2() {
  if (myInput.value !== confirmInput.value) {
    confirmInput.setCustomValidity("Passwords do not match.");
    document.getElementById("message").style.display = "block";
    confirmInput.style.border = "1px solid red";
    myInput.style.border = "1px solid red";
  } else {
    confirmInput.setCustomValidity("");
    document.getElementById("submit").classList.add("glow-on-validation");
    document.getElementById("message").style.display = "none";
    confirmInput.style.border = "1px solid green";
    myInput.style.border = "1px solid green";
  }
}

myInput.addEventListener("input", checkPassword2);
confirmInput.addEventListener("input", checkPassword2);

form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
  }
});
