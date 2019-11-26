{
  /* // variables
        // variables for lowercase letters, uppercase letters etc */
}

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "+"];
var possibleCharacters = [];
var password = [];
var numberOfChars = [];
var chooseNumber;

document
  .getElementById("generatePassword")
  .addEventListener("click", function() {
    // Prompts to ask the user

    alert("Welcome to my Password Generating page!");

    // Prompt and then we'll save input as a variable

    // lowercase
    // boolean

    var lowercaseConfirm = confirm("Do you want to use lowercase letter?");

    // uppercase
    // boolean

    var uppercaseConfirm = confirm("Do you want to use uppercase letter?");

    // numbers
    // boolean

    var numbersConfirm = confirm("Do you want to use numbers?");

    // special characters
    // boolean

    var specialConfirm = confirm("Do you want to use special characters?");

    function numberOfChar() {
      // How many characters
     chooseNumber = prompt("Choose a number between 8 and 128");

      if (chooseNumber < 8) {
        alert("Please choose a number that is more than 8");
        numberOfChar();
      } else if (chooseNumber > 128) {
        alert("Please choose a number that is less than 128");
        numberOfChar();
      }
    }

    numberOfChar();
    // Make random password
    // if statement to see what characters the users wants
    // one if statement for each character type

    if (specialConfirm) {
      possibleCharacters.push(special);
    }
    if (numbersConfirm) {
      possibleCharacters.push(number);
    }
    if (uppercaseConfirm) {
      possibleCharacters.push(uppercase);
    }
    if (lowercaseConfirm) {
      possibleCharacters.push(lowercase);
    }

    function passwordGenerator() {
      console.log(possibleCharacters);
      // use possible characters to make a random password
      for (var i = 0; i < chooseNumber; i++) {
        console.log("i is " + i);
        // Take a random character from possible characters array
        // Generate a random number
        var char = Math.floor(Math.random() * possibleCharacters.length);
        var char2 = Math.floor(Math.random() * possibleCharacters[char].length);

        password.push(possibleCharacters[char][char2]);

      }

        console.log(password)
        document.getElementById("displayBox").value = password.join("");

    }

    passwordGenerator();
  });


// // Let user make a new password
