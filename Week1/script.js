
function validate() {

    // get what the user typed
    var name     = document.getElementById("name").value;
    // INPUT boxes store what the user TYPED → use .value
    var email    = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm  = document.getElementById("confirm").value;
    // document as the whole webpage
  
    // clear old error messages first
    // PARAGRAPH <p> stores text to DISPLAY → use .textContent
    document.getElementById("nameError").textContent     = "";
    document.getElementById("emailError").textContent    = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent  = "";
    document.getElementById("successMsg").textContent    = "";


    // track if anything is wrong
    var isValid = true;
  
    // check name
    if (name == "") {
      document.getElementById("nameError").textContent = "Please enter your name.";
      isValid = false;
    }
  
    // check email has @ in it
    if (email == "") {
      document.getElementById("emailError").textContent = "Please enter your email.";
      isValid = false;
    } else if (email.includes("@") == false) {
      document.getElementById("emailError").textContent = "Email must include @";
      isValid = false;
    }
  
    // check password length
    if (password.length < 8) {
      document.getElementById("passwordError").textContent = "Password is too short! Min 8 characters.";
      isValid = false;
    }
  
    // check passwords match
    if (confirm != password) {
      document.getElementById("confirmError").textContent = "Passwords do not match!";
      isValid = false;
    }
  
    // if no errors, show success
    if (isValid == true) {
      document.getElementById("successMsg").textContent = "Account created! Welcome :)";
    }
  
  }

// "hey, find the button, and when it's clicked, run validate()"
document.getElementById("myButton").addEventListener("click", validate);