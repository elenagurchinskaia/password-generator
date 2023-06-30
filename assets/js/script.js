// To generate a password, we need to add a variety of characters
var generateBtn = document.querySelector("#generate");
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// When I click on the button, I am getting a pop up window.
function writePassword() {
  var password = generatePassword();
  // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

console.log("Your password:");
// Then I select a password parameters.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

function generatePassword() {
  var useChar = "";
  // Select length of the password.
  var passLength = prompt(
    "How many characters would you like your password to contain?"
  );
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    console.log("User's answer:", passLength);
    alert("ALERT: The password must be 8 - 128 characters.");
    return "";
  }
  // Confirm if lower case characters are needed.
  var passwordLowerChar = confirm(
    "Click OK to confirm including lowercase characters."
  );
  if (passwordLowerChar == true) {
    useChar += lowerChar;
  }
  // Confirm if upper case characters are needed.
  var passwordUpperChar = confirm(
    "Click OK to confirm including uppercase characters."
  );
  if (passwordUpperChar == true) {
    useChar += upperChar;
  }
  // Confirm if numbers are needed.
  var passwordNumbers = confirm(
    "Click OK to confirm including numeric characters."
  );
  if (passwordNumbers == true) {
    useChar += numbers;
  }
  // Confirm if special characters are needed.
  var passwordSpecialChar = confirm(
    "Click OK to confirm including special characters."
  );
  if (passwordSpecialChar == true) {
    useChar += specialChar;
  }
  console.log(useChar);
  // If the user opt out of all given options, return to the main.
  if (
    passwordLowerChar +
      passwordUpperChar +
      passwordNumbers +
      passwordSpecialChar ===
    0
  ) {
    alert("Please, select a character type.");

    return "";
  }
  // Generate a random password.
  var pw = "";

  // Credits: Ben Martin
  // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  for (var i = 0; i <= passLength; i++) {
    var random = Math.floor(Math.random() * useChar.length - 1);
    pw += useChar[random];
  }
  return pw;
}

// Add event listener to generate button.
// Ref: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
generateBtn.addEventListener("click", writePassword);
