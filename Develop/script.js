// To generate a password, we need to add a variety of characters

var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";


// Get references to the #generate element
// When I click on the button, I am getting a pop up window.

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var passLength = prompt("How many characters would you like your password to contain?"); // prompt
  if (passLength < 8 || passLength > 128) {
    console,log("User's answer:", passLength);
    alert("ALERT: The password must be 8 - 128 characters.");
  } else {
    // https://www.w3schools.com/jsref/met_win_confirm.asp
    confirm(passLength);
  }
  var passwordSpecialChar = confirm("Click OK to confirm including special characters.");
  if confirm(passwordSpecialChar) == true {
    else alert("You've opted out of using special characters.")
  }

  var passwordNumbers = confirm("Click OK to confirm including numeric characters."); 
  if confirm(passwordNumbers) == true {
    else alert("You've opted out of using numbers.")
  }

  var passwordLowerChar = confirm("Click OK to confirm including lowercase characters.");
  if confirm(passwordLowerChar) == true {
    else alert("You've opted out of using lower case characters.")
  }

  var passwordUpperChar = confirm("Click OK to confirm including uppercase characters.");
  if confirm(passwordUpperChar) == true {
    else alert("You've opted out of using upper case characters.")
  }
}

if (!passwordSpecialChar && !passwordNumbers && !passwordLowerChar && !passwordUpperChar) {

} else if()

generatePassword = () {

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  return completePassword;
}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
