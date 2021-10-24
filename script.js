// Assignment Code
var generateBtn = document.querySelector("#generate");

// "ABCDEFGHIJKFLMNOPQRSTUVWXYZ";

// "abcdefghijklmnopqrstuvwxyz";

// "!#$5&()*+,-./:;<=>?@^[\\]^_`{|}~";

// "0123456789";


// Generate password
function generatePassword() {
const totalLength = prompt("How many characters do you want in your password?");
if(totalLength >= 8 && totalLength <= 128) {
  alert(`Your new password will be ${totalLength} characters long.`)
}

let upper = confirm("Click to confirm including upper case letters.");
let lower = confirm("Click to confirm including lower case letters.");
let symbol = confirm("Click to confirm including special characters.");
let number = confirm("Click to confirm including numbers.");

let allCharacters = ""; 
let password = "";

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
// create a for loop to iterate over the chosen characters
// return the generated password
 else {
   alert("Your password must be 8 to 128 characters long!")
 }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
