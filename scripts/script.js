// Assignment code here
// Password conditions
//  -Length of the password. Length must be between 8 a 128 characters
//  -Uppercase selection: Y/N
//  -Lowercase selection: Y/N
//  -Numeric selection: Y/N
//  -Special character selection: Y/N
// !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

// Enum types for characters
const numCharTypes = 4;
const charTypes = {
  UpperCase: 0,
  LowerCase: 1,
  Numeric: 2,
  SpecialChar: 3
};
// Define english alphabet
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Define special characters
const special = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ']', "^", "_", "`", "{", "|", "}", "~"]
special.push('\'');

const minLength = 8;
const maxLength = 128;

function generatePassword() {
  var passwordLength = 8;
  var isUpperCase = true;
  var isLowerCase = true;
  var isNumeric = true;
  var isSpecialChar = true;

  passwordLength = window.prompt("Enter password lenght (8-128)");

  // console.log("Password length:" + passwordLength);
  // Check password length
  if (passwordLength < minLength || passwordLength > maxLength) {
    // console.log("Invalid password lenght:" + passwordLength);
    window.alert("Invalid password lenght");
    return;
  }

  isUpperCase = window.confirm("Use uppercase?");
  console.log("Use uppercase? " + isUpperCase);
  isLowerCase = window.confirm("Use lowercase?");
  isNumeric = window.confirm("Use numeric?");
  isSpecialChar = window.confirm("Use special characters?");

  // Check that at least one character type is selected
  if (!isUpperCase && !isLowerCase && !isNumeric && !isSpecialChar) {
    // console.log("Invalid type selections");
    window.alert("Must select at lease one set of characters (uppercase,lowecase,numeric or special)");
    return;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomType = randomCharType(isUpperCase, isLowerCase, isNumeric, isSpecialChar);
    // console.log(i + " Random Type: " + randomType);

    var newChar;
    if (randomType == charTypes.UpperCase) {
      newChar = randomChar(alphabet);
    } else if (randomType == charTypes.LowerCase) {
      newChar = randomChar(alphabet).toLowerCase();
    } else if (randomType == charTypes.Numeric) {
      newChar = randomChar(numbers);
    } else {
      newChar = randomChar(special)
    }
    password = password + newChar;
    // Select random character type
  }
  return password;
}

function randomChar(charList) {
  indx = randomNum(charList.length);
  return charList[indx];
}

// Given the user define conditions return a random character type
function randomCharType(upper, lower, numeric, special) {
  while (true) {
    var randomType = randomNum(numCharTypes);
    if (randomType == charTypes.UpperCase && upper)
      return randomType;
    else if (randomType == charTypes.LowerCase && lower) {
      return randomType;
    } else if (randomType == charTypes.Numeric && numeric) {
      return randomType;
    } else if (randomType == charTypes.SpecialChar && special) {
      return randomType;
    }
  }
}

function randomNum(range) {
  return Math.floor(Math.random() * range);
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
