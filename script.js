// declare variables and arrays to use later
var bank = [];
var password = '';
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z'];
var special = [' ', '!', '"', '#', '$', '&', '%', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];

function generatePassword(){
  bank = [];
  // prompt for character length
  var characterPrompt = prompt('How many characters should your password include? Please enter an number between 8 and 128.');
  // convert input from string to number
  var characterCount = Number(characterPrompt);
  // check for validity criteria
  if (Number.isInteger(characterCount) === false || characterCount < 8 || characterCount > 128) {
    // if invalid, alert and start function over
    alert('Invalid character length. Please try again using solely integers between 8 and 128!');
    generatePassword();
    // if valid, proceed with asking questions
  } else {
    // prompt for numbers
    var inquireNumbers = confirm('Do you want to include numbers?');
    // if numbers are desired, add to bank array
    if (inquireNumbers) {
      bank.push(...numbers)
    }; 
    // prompt for lower case 
    var inquireLower = confirm('Do you want to include lowercase letters?');
    // if lowercase are desired, add to bank array
    if (inquireLower) {
      bank.push(...lower);
    }; 
    // prompt for capital letters
    var inquireCapitals = confirm('Do you want to include capital letters?');
    // if yes, add capitals to bank
    if (inquireCapitals) {
      bank.push(...upper)
    }; 
    // prompt for special characters
    var inquireSpecial = confirm('Do you want to include special characters?');
    // if yes, add specials to bank
    if (inquireSpecial) {
      bank.push(...special)
    }; 
    // edge case = no characters to build bank -> alert and restart function
    if (!(inquireNumbers) && !(inquireLower) && !(inquireCapitals) && !(inquireSpecial)) {
      alert('Error: We have no characters to build your password. Please start again.')
      generatePassword()
    }; 

    // create random order of bank's characters at length of desired password
    function randomOrder() {
      passwordArray = [];
      for (let i=0; i<characterCount; i++) {
        passwordArray.push(bank[Math.floor(Math.random()*bank.length)])
      };

      // OPTIONAL CODE LINES 59 TO 128 - IF WE WANT TO ENSURE PASSWORD CONTAINS AT LEAST ONE CHARACTER FROM EACH CHARACTER TYPE DESIRED. Many password generators do not do this as it therefore limits potential possible passwords and is therefore less secure

      // if numbers are wanted, ensure password includes a number
      let numberValidity = false;
      if (inquireNumbers) {
        for (let i=0; i<passwordArray.length; i++) {
          for (let j=0; j<numbers.length; j++) {
            // if there is a match -> stop and break out of loop
              if (passwordArray[i] === numbers[j]) {
                numberValidity = true;  
                break;
              } 
          }
        } 
        // if there is not a number, repeat randomizing function
        if (numberValidity != true) {
          randomOrder();
        };
      };  
      // if lowercase are wanted, ensure password includes a lowercase letter 
      let lowerValidity = false;
      if (inquireLower) {
        for (let i=0; i<passwordArray.length; i++) {
          for (let j=0; j<lower.length; j++) {
              // if there is a match -> STOP and break out of loop
              if (passwordArray[i] === lower[j]) {
                lowerValidity = true;  
                break;
              } 
          }
        } 
        // if there is not a lower case letter, repeat randomizing function
        if (lowerValidity != true) {
          randomOrder();
        }
      };
      // if capitals are wanted, ensure password includes a capital letter 
      let capitalValidity = false;
      if (inquireCapitals) {
        for (let i=0; i<passwordArray.length; i++) {
          for (let j=0; j<upper.length; j++) {
            // if there is a match -> STOP and break out of loop
              if (passwordArray[i] === upper[j]) {
                capitalValidity = true;  
                break;
              } 
          }
        } 
        // if there is not a capital letter, repeat randomizing function
        if (capitalValidity != true) {
          randomOrder();
        }
      };
      // if specials are wanted, ensure password includes a special character 
      let specialValidity = false;
      if (inquireSpecial) {
        for (let i=0; i<passwordArray.length; i++) {
          for (let j=0; j<special.length; j++) {
            // if there is a match -> STOP and break out of loop
              if (passwordArray[i] === special[j]) {
                specialValidity = true;  
                break;
              } 
          }
        } 
        // if there is not a special, repeat randomizing function
        if (specialValidity != true) {
          randomOrder();
        }
      };
    };

    // call randomizing function
    randomOrder();

    // delete commas from array; format as a string;
    password = passwordArray.join('');
  }; 
// provide password to user;
  return password;
};




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