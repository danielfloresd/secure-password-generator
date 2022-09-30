/* 
  Randon password generator
  Generate password using the following conditions:
  -Length of the password. Length must be between 8 a 128 characters.
  -Uppercase selection: Y/N
  -Lowercase selection: Y/N
  -Numeric selection: Y/N
  -Special character selection: Y/N
*/

//Define alphabet in lower and upper case
const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const ALPHABET_UPPERCASE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Special characters: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
const SPECIAL = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
// Define numbers 
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const PASSWORD_LEN_MIN = 8;
const PASSWORD_LEN_MAX = 128;

function generatePassword() {
  var passwordLength = 0;
  var isUpperCase = false;
  var isLowerCase = false;
  var isNumeric = false;
  var isSpecial = false;
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
  isLowerCase = window.confirm("Use lowercase characters?");
  isUpperCase = window.confirm("Use uppercase characters?");
  isNumeric = window.confirm("Use numeric characters?");
  isSpecial = window.confirm("Use special characters?");

  // Check that at least one character type is selected
  if (!isUpperCase && !isLowerCase && !isNumeric && !isSpecial) {
    window.alert("Must select at lease one set of characters (lowecase,uppercase,numeric and/or special)");
    // Return empty password
    return password;
  }

  // Select characters based on type selected
  // Lowercase selected
  if (isLowerCase) {
    // Add lowercase characters to selection list
    availableChars = ALPHABET;
  }
  // Uppercase selected
  if (isUpperCase) {
    // Add upercase characters to selection list
    // availableChars = [...availableChars, ...ALPHABET_UPPERCASE];
    availableChars = availableChars.concat(ALPHABET_UPPERCASE);
  }
  // Numeric characters selected
  if (isNumeric) {
    // Add numeric characters to selection list
    // availableChars = [...availableChars, ...NUMBERS];
    availableChars = availableChars.concat(NUMBERS);
  }
  //Special characters selected
  if (isSpecial) {
    // Add special characters to selection list
    // availableChars = [...availableChars, ...SPECIAL];
    availableChars = availableChars.concat(SPECIAL);
  }

  var confirm = window.confirm("Generating password from the following character set:\n" + availableChars.join("") + "\nPress OK to continue...");

  //User cancel password generation
  if (!confirm) {
    return password;
  }
  // Random password generation
  for (var i = 0; i < passwordLength; i++) {
    // Generate random character index
    var randomIndx = Math.floor(Math.random() * availableChars.length);
    // Select random character type
    var newChar = availableChars[randomIndx];
    password = password + newChar;
  }

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
