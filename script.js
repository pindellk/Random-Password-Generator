// Assignment Code
var generateBtn = document.querySelector("#generate");

function getCriteria() {
  // Create empty array to pass user input into
  var userInput = [];

  // Create variables for password criteria
  var lowercaseInput = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseInput = lowercaseInput.toUpperCase();
  var numericInput = "0123456789";
  var specialInput = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

  // Prompt user for criteria input and append userInput array
  if (confirm("Do you want lowercase letters?")) {
    userInput.push(lowercaseInput);
  }
  if (confirm("Do you want uppercase letters?")) {
    userInput.push(uppercaseInput);
  }
  if (confirm("Do you want numbers?")) {
    userInput.push(numericInput);
  }
  if (confirm("Do you want special characters?")) {
    userInput.push(specialInput);
  }
  return userInput;
}

// Generage password
function generatePassword() {
  // Create empty password string
  var password = "";
  var getInputs = getCriteria();
  // Propmpt user to enter desired password length
  var passwordLengthInput = (prompt("Enter a numeric length greater than 8 and less than 128 characters."));
  var passwordLength = parseInt(passwordLengthInput);

  // Validate password length
  if (passwordLength < 8) {
    alert("Please enter a value greater than 8.");
    return '';
  } else if (passwordLength > 128) {
    alert("Please enter a value less than 128.");
    return '';
  }

  // Select random numbers for each index of passwordLength
  var randomInt;
  for (i = 0; i < passwordLength.length; i++) {
    randomInt = Math.floor(Math.random() * Math.floor(getInputs.length));
    password += getInputs[randomInt];
  }
  console.log(password.length);
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
