// Create variable linked to #generate in index.html
var generateBtn = document.querySelector("#generate");

function getCriteria() {
  // Create empty string to pass criteria into
  var criteria = "";

  // Create variables for password criteria
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperLetters = lowerLetters.toUpperCase();
  var numbers = "0123456789";
  var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

  // Prompt user for criteria and concatenate criteria string
  if (confirm("Do you want lowercase letters?")) {
    criteria += lowerLetters;
  }
  if (confirm("Do you want uppercase letters?")) {
    criteria += upperLetters;
  }
  if (confirm("Do you want numbers?")) {
    criteria += numbers;
  }
  if (confirm("Do you want special characters?")) {
    criteria += specialChars;
  }
  return criteria;
}

// Generate password
function generatePassword() {
  // Create empty password string
  var password = "";
  var criteria = getCriteria();

  // Prompt user to enter desired password length
  var desiredLengthInput = (prompt("Enter a desired password length (minimum characters: 8, maximum characters: 128)")); // string
  var passwordLength = parseInt(desiredLengthInput); // integer

  // Validate password length
  if (passwordLength < 8) {
    alert("Please enter a value greater than 8.");
    return '';
  } else if (passwordLength > 128) {
    alert("Please enter a value less than 128.");
    return '';
  }

  // Generate random integers for each index of the input password length 
  var randomInt;
  for (i = 0; i < passwordLength; i++) {
    randomInt = Math.floor(Math.random() * Math.floor(criteria.length));
   // Append empty password string with random character from the criteria
    password += criteria[randomInt];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
