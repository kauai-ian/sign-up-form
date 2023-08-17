let myInput = document.getElementById("password")
let confirmInput = document.getElementById("confirm_password")

// when the user clicks on the confirm password field, show the message & give box outline color red  
confirmInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// when the user clicks on the back outside the password field, hide the message 
confirmInput.onblur = function() {
    document.getElementById("message").style.display = "none";
    
}



