var bank = [];
var passwordJumble = [];
var passwordSlice = [];
var passwordArray = [];
var password = '';
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z'];
var special = [' ', '!', '"', '#', '$', '&', '%', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];
// backslash

function generatePassword(){
  // prompt for character length
  var characterPrompt = prompt('How many characters would you like? Please enter an integer between 8 and 128.');
  // convert from string to number
  var characterCount = Number(characterPrompt);
  // check for validity criteria
  if (Number.isInteger(characterCount) === false || characterCount < 8 || characterCount > 128) {
    // if invalid, start over
    alert('Invalid character length. Please try again!');
    generatePassword();
    // if valid, proceed with asking questions
  } else {
    // prompt on desire for numbers
    var inquireNumbers = confirm('Do you want to include numbers?');
    // if numbers are desired, add to bank array
    if (inquireNumbers) {
      bank.push(...numbers)
    } else {
      // otherwise move on
    }
    // prompt for lower case 
    var inquireLower = confirm('Do you want to include lowercase letters?');
    // if lowercase desired, add to bank array
    if (inquireLower) {
      bank.push(...lower);
    } else {
        // otherwise move on
    }
    var inquireCapitals = confirm('Do you want to include capital letters?');
    // if yes, add lower case and capitals to bank
    if (inquireCapitals) {
      bank.push(...upper)
    } else {
      // otherwise move on
    }
    // prompt special characters
    var inquireSpecial = confirm('Do you want to include special characters?');
    // if yes, push to bank
    if (inquireSpecial) {
      bank.push(...special)
    } else {
      // if specials are not desired, move on
    } 
    // edge case = no characters to build bank
    if (!(inquireNumbers) && !(inquireLower) && !(inquireCapitals) && !(inquireSpecial)) {
      alert('Error: We have no characters to build your password. Please start again.')
      generatePassword()
    } 
    // using characterCount for password length, iterate through for loop adding random element from array
    console.log(bank);

    // create random order of bank characters
    for (let i=0; i<bank.length; i++) {
      passwordJumble.push(bank[Math.floor(Math.random()*bank.length)])
    };
    console.log(passwordJumble);

    // slice down random list to correct character count
    passwordSlice = passwordJumble.slice(0, characterCount);
    console.log(passwordSlice);

    // delete commas from array
    passwordArray = passwordSlice.join('');
    console.log(passwordArray);

    // convert array to string
    password = passwordArray.toString();
    console.log(password);
    console.log(typeof password);
    console.log(password.length);
    // password needs to have at least one character from each desired category; if not should repeat creation

    // if inquireNumbers === true and password contains one character within numbers array, 

    // check if inquireLower === true and password contains one character within lower array, 

    // check if inquireUpper === true and password contains one character within upper array,

    // check if inquireSpecial === true and password contains one character within special array, 

    // return password if all criteria are met. Otherwise repeat password generation.

  } 

  return "password"
}

// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
