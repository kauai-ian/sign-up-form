const form = document.getElementById("mailingList");
const myInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm_password");
const submitButton = document.getElementById("btn");

// prevents submission of form if passwords dont match. If match and all other fields valid, then redirect to welcome page.
document.addEventListener("submit", function (event) {
  if (!checkPassword()) {
    event.preventDefault();
    console.log("not cleared", event);
  } else {
    window.location.href = "./login.html";
    form.submit();
    console.log("submitted", event);
  }
});


// When the passwords dont match, the message appears.
function checkPassword() {
  console.log("called", {
    password: myInput.value,
    cpassword: confirmInput.value,
  });
  if (myInput.value !== confirmInput.value) {
    confirmInput.setCustomValidity("Passwords do not match.");
    document.getElementById("btn").classList.remove("glow-on-validation");
    document.getElementById("message").style.display = "block";
    confirmInput.style.border = "1px solid red";
    myInput.style.border = "1px solid red";
  } else {
    confirmInput.setCustomValidity("");
    document.getElementById("btn").classList.add("glow-on-validation");
    document.getElementById("message").style.display = "none";
    confirmInput.style.border = "1px solid green";
    myInput.style.border = "1px solid green";
  }
}

// calls the function when the confirm password field is edited
confirmInput.addEventListener("change", checkPassword);

