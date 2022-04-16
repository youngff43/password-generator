// Global variables 
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var totalNumbers = "1234567890";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var passwordLength;
var lowerCaseCheck;
var upperCaseCheck;
var numberCheck;
var characterCheck;
var password = "";

// Write password to the #password input
function writePassword() {
  // determine password length
  let done = false;
  do {
    passwordLength = prompt("How many characters long do you want your password? (It must be between 8 and 128)");
    if (passwordLength === null) continue;
    if (passwordLength<8 || passwordLength>128) alert("You must choose a password between 8 and 128 characters.");
    else done = true;
  } while(!done);

  //This is the section to determine password type 
  lowerCaseCheck = confirm("Do you want to include lower case letters in the password?");
  upperCaseCheck = confirm("Do you want to include upper case letters in the password?");
  numberCheck = confirm("Do you want to include numerics in the password?");
  if (lowerCaseCheck || upperCaseCheck || numberCheck) characterCheck = confirm("Do you want to include special characters in the password?");
  else characterCheck = true;

  //Generating the password 
  let validCharacters = "";
  if (lowerCaseCheck) validCharacters += lowerCase;
  if (upperCaseCheck) validCharacters += upperCase;
  if (numberCheck) validCharacters += totalNumbers;
  if (characterCheck) validCharacters += specialCharacters;
  for (let i=0; i<passwordLength; i++) {
    const random = Math.floor(Math.random() * validCharacters.length);
    password += validCharacters[random];
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
