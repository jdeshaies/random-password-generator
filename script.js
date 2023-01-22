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

    // Sets the character type criteria (lowercase, uppercase, special, or numeric) to true
    var upperCaseCriteria = true;
    var lowerCaseCriteria = true;
    var specialCriteria = true;
    var numericCriteria = true;

    // Arrays containing uppercase, lowercase, special, and numeric characters
    var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCaseCharacers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "<", ">", "?", ",", ".", "/", "{", "}", "[", "]", ";", ":",];
    var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    // Sets the boolean for a valid response for the questions around character type to false
    var validResponse = false;

    // Sets the error message to validate user input to blank string
    var errorMessage = "";

    // Loop to check whether determined password length is between 8 and 128 characters and gives error if not
    do {
      passwordLength = window.prompt("How long would you like the password to be? (Must be between 8 and 128 characters)");
      if (passwordLength >= 8 && passwordLength <= 128) {
        passwordLengthCriteria = true;
      } else {
        errorMessage = window.alert("Password must be between 8 and 128 characters");
      }
    } while (!passwordLengthCriteria);


    do {
      var uppercaseChoice = window.prompt("Would you like your password to contain uppercase characters?");

      // Makes response uppercase
      uppercaseChoice.toUpperCase();

      if (uppercaseChoice === "YES" || uppercaseChoice === "Y") {
        validResponse = true;
        var validationMessage = window.alert("Your password will have uppercase characters")
      } else if (uppercaseChoice === "NO" || uppercaseChoice === "N") {
        upperCaseCriteria = false;
        validResponse = true;
        var validationMessage = window.alert("Your password will not have uppercase characters")
      } else {
        errorMessage = window.alert("Please enter 'Yes', 'Y', 'No', or 'N'");
      }
    } while (!validResponse);
   





  passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
