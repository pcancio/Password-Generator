// Assignment Code
var generateBtn = document.querySelector("#generate");

// "ABCDEFGHIJKFLMNOPQRSTUVWXYZ";

// "abcdefghijklmnopqrstuvwxyz";

// "!#$5&()*+,-./:;<=>?@^[\\]^_`{|}~";

// "0123456789";


// Generate password
function generatePassword() {
const totalLength = prompt("How many characters would you like to use?");
if(totalLength >= 8 && totalLength <= 128) {
  alert(`Your new password will be ${totalLength} characters long.`)
}

let upper = confirm("Would you like to include upper case letters");
let lower = confirm("Would you like to include lower case letters?");
let symbol = confirm("Would you like to include special characters?");
let number = confirm("Would you like to include numbers?");

let allCharacters = ""; 

if(upper) {
  allCharacters += "ABCDEFGHIJKFLMNOPQRSTUVWXYZ";
}
if(lower) {
  allCharacters += "abcdefghijklmnopqrstuvwxyz";
}
if(symbol) {
  allCharacters += "'!#$5&()*+,-./:;<=>?@^[\\]^_`{|}~'";
}
if(number) {
  allCharacters += "0123456789";
}
// generate password that matches selected criteria
 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
