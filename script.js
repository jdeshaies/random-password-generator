// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    // Sets the boolean of the password being between 8 to 128 characters to false
    var passwordLengthCriteria = false;
    // Number of characters in password
    var passwordLength = 0;

    // Loop to check whether determined password length is between 8 and 128 characters and gives error if not
    do {
      passwordLength = window.prompt("How long would you like the password to be? (Must be between 8 and 128 characters)");
      if (passwordLength >= 8 && passwordLength <= 128) {
        passwordLengthCriteria = true;
      } else {
        var errorMessage = window.alert("Password must be between 8 and 128 characters");
      }
    } while (!passwordLengthCriteria);

  passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
