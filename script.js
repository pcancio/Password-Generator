// Assignment code here
// Arrays of possible characters
var upperCase= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numCase = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCase = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// Function to get correct length
function passwordLength() 
{
  // ask user to enter length 
  var length = window.prompt("How many characters do you want in your password?");
   if (length < 8 || length > 128) 
  {
    window.alert("Your password has to have more than 8 or fewer than 128 characters.");
    return passwordLength();
  }
  return parseInt(length);
}
// ask user for character type option
function getUsersOption() {
  var option = 
  {
    combineArray: [],
    hasUpperCase: window.confirm("Confirm your password will have at least one uppercase letter."),
    hasLowerCase: window.confirm("Confirm your password will have at least one lowercase letter."),
    hasNumCase: window.confirm("Confirm your password will have at least one number."),
    hasSpecialCase: window.confirm("Confirm your password will have at least one special character."),
  }
  // if it doesn't match parameters then start again.
  if (option.hasUpperCase === false && option.hasLowerCase === false && option.hasNumCase === false && option.hasSpecialCase === false) 
  {
    window.alert("Uh-oh! Your password needs to meet the parameters.");
    return getUsersOption();
  }
   // check Uppercase
   if (option.hasUpperCase) {
     option.combineArray = option.combineArray.concat(upperCase);
   }
  // Check Lowercase
  if (option.hasLowerCase) {
    option.combineArray = option.combineArray.concat(lowerCase);
  }

  // Check Number
  if (option.hasNumCase) {
    option.combineArray = option.combineArray.concat(numCase);
  }

  // Check Special
  if (option.hasSpecialCase) 
  {
    option.combineArray = option.combineArray.concat(specialCase);
  }
  return option;
}

// Generate the password at random
function randomGenerateChar(characters) 
{
  return characters[Math.floor(Math.random() * characters.length)];
}

// Generate Password Function
var generatePassword = function () 
{
  var length = passwordLength();
  var charArrays = getUsersOption();
  // Password function
  var password = function () 
  {
    var temp = [];
    var result = "";
    // While the Array is not equal to length input by users
    while (temp.length != length) 
    {
      //get a character from the combineArray
      temp.push(randomGenerateChar(charArrays.combineArray));
    }
    
    // Combine the Array into a string
    result = temp.join('');
    // return the string
    return result;
  }
  return password();
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