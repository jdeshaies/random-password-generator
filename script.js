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
    var specialCharacterCriteria = true;
    var numericCharacterCriteria = true;

    // Arrays containing uppercase, lowercase, special, and numeric characters
    var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCaseCharacers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "<", ">", "?", ",", ".", "/", "{", "}", "[", "]", ";", ":",];
    var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    // Sets the boolean for a valid response for the questions around character type to false
    var validResponse = false;

    // Sets the error and validation message to validate user input to blank string
    var errorMessage = "";
    var validationMessage = "";

    // Loop to check whether determined password length is between 8 and 128 characters and gives error if not
    do {
      passwordLength = window.prompt("How long would you like the password to be? (Must be between 8 and 128 characters)");
      if (passwordLength >= 8 && passwordLength <= 128) {
        passwordLengthCriteria = true;
      } else {
        errorMessage = window.alert("Password must be between 8 and 128 characters");
      }
    } while (!passwordLengthCriteria);

    // Loop to check whether user enter valid response for uppercase question (Yes or No) and gives error if not
    do {
      var upperCaseChoice = window.prompt("Would you like your password to contain uppercase characters?");

      // Makes response uppercase
      upperCaseChoice = upperCaseChoice.toUpperCase();

      if (upperCaseChoice === "YES" || upperCaseChoice === "Y") {
        validResponse = true;
        validationMessage = window.alert("Your password will have uppercase characters")
      } else if (upperCaseChoice === "NO" || upperCaseChoice === "N") {
        upperCaseCriteria = false;
        validResponse = true;
        validationMessage = window.alert("Your password will not have uppercase characters")
      } else {
        errorMessage = window.alert("Please enter 'Yes', 'Y', 'No', or 'N'");
      }
    } while (!validResponse);

    // Resets validResponse back to false
    validResponse = false;

    // Loop to check whether user enter valid response for lowercase question (Yes or No) and gives error if not
    do {
      var lowerCaseChoice = window.prompt("Would you like your password to contain lowercase characters?");

      // Makes response uppercase
      lowerCaseChoice = lowerCaseChoice.toUpperCase();

      if (lowerCaseChoice === "YES" || lowerCaseChoice === "Y") {
        validResponse = true;
        validationMessage = window.alert("Your password will have lowercase characters")
      } else if (lowerCaseChoice === "NO" || lowerCaseChoice === "N") {
        lowerCaseCriteria = false;
        validResponse = true;
        validationMessage = window.alert("Your password will not have lowercase characters")
      } else {
        errorMessage = window.alert("Please enter 'Yes', 'Y', 'No', or 'N'");
      }
    } while (!validResponse);

    // Resets validResponse back to false
    validResponse = false;

    // Loop to check whether user enter valid response for special character question (Yes or No) and gives error if not
    do {
      var specialCharacterChoice = window.prompt("Would you like your password to contain special characters?");
  
      // Makes response uppercase
      specialCharacterChoice = specialCharacterChoice.toUpperCase();
  
      if (specialCharacterChoice === "YES" || specialCharacterChoice === "Y") {
        validResponse = true;
        validationMessage = window.alert("Your password will have special characters")
      } else if (specialCharacterChoice === "NO" || specialCharacterChoice === "N") {
        specialCharacterCriteria = false;
        validResponse = true;
        validationMessage = window.alert("Your password will not have special characters")
      } else {
        errorMessage = window.alert("Please enter 'Yes', 'Y', 'No', or 'N'");
      }
    } while (!validResponse);

    // Resets validResponse back to false
    validResponse = false;

    // Loop to check whether user enter valid response for numeric character question (Yes or No) and gives error if not
    do {
      var numericCharacterChoice = window.prompt("Would you like your password to contain special characters?");
  
      // Makes response uppercase
      numericCharacterChoice = numericCharacterChoice.toUpperCase();
  
      if (numericCharacterChoice === "YES" || numericCharacterChoice === "Y") {
        validResponse = true;
        validationMessage = window.alert("Your password will have numeric characters")
      } else if (numericCharacterChoice === "NO" || numericCharacterChoice === "N") {
        numericCharacterCriteria = false;
        validResponse = true;
        validationMessage = window.alert("Your password will not have numeric characters")
      } else {
        errorMessage = window.alert("Please enter 'Yes', 'Y', 'No', or 'N'");
      }
    } while (!validResponse);

  passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
