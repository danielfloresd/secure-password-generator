/* 
  Randon password generator
  Generate password using the following conditions:
  -Length of the password. Length must be between 8 a 128 characters.
  -Uppercase selection: Y/N
  -Lowercase selection: Y/N
  -Numeric selection: Y/N
  -Special character selection: Y/N
*/

//Define alphabet in upper and lower case
var ALPHABET_UPPERCASE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var ALPHABET_LOWERCASE = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Special characters: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
var SPECIAL = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Define numbers 
var NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const PASSWORD_LEN_MIN = 8;
const PASSWORD_LEN_MAX = 128;

function generatePassword() {
  var passwordLength = 0;
  var isUpperCase = true;
  var isLowerCase = true;
  var isNumeric = true;
  var isSpecialChar = true;
  var availableChars = [];
  var password = "";

  passwordLength = window.prompt("Enter password lenght (8-128)");

  // Check password length
  if (passwordLength < PASSWORD_LEN_MIN || passwordLength > PASSWORD_LEN_MAX) {
    window.alert("Invalid password lenght:" + passwordLength + "\nMust be between " + PASSWORD_LEN_MIN + " and " + PASSWORD_LEN_MAX);
    // Return empty password
    return password;
  }

  // Customer input
  isUpperCase = window.confirm("Use uppercase characters?");
  isLowerCase = window.confirm("Use lowercase characters?");
  isNumeric = window.confirm("Use numeric characters?");
  isSpecialChar = window.confirm("Use special characters?");

  // Check that at least one character type is selected
  if (!isUpperCase && !isLowerCase && !isNumeric && !isSpecialChar) {
    window.alert("Must select at lease one set of characters (uppercase,lowecase,numeric or special)");
    // Return empty password
    return password;
  }

  // Select characters based on type selected
  if (isUpperCase) {
    availableChars = availableChars.concat(ALPHABET_UPPERCASE);
  }
  if (isLowerCase) {
    availableChars = availableChars.concat(ALPHABET_LOWERCASE);
  }
  if (isNumeric) {
    availableChars = availableChars.concat(NUMBERS);
  }
  if (isSpecialChar) {
    availableChars = availableChars.concat(SPECIAL);
  }

  window.alert("Generating password from the following character set:\n" + availableChars);
  // Random password generation
  for (var i = 0; i < passwordLength; i++) {
    // Generate random character index
    var randomIndx = Math.floor(Math.random() * availableChars.length);
    // Select random character type
    var newChar = availableChars[randomIndx];
    password = password + newChar;
  }

  window.alert("Secure password sucessfully generated")
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
