// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

// Variables for elements
const firstOutputEl = document.getElementById("first-output-el");
const secondOutputEl = document.getElementById("second-output-el");
const generateBtnEl = document.getElementById("generate-btn");

// Function to generate random 15 character password
function generatePassword() {
  password = "";
  for (let i = 0; i < 16; i++) {
    randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// Function to add password to textContent of output elements
function displayPasswords() {
  let firstPassword = generatePassword();
  let secondPassword = generatePassword();
  firstOutputEl.textContent = firstPassword;
  secondOutputEl.textContent = secondPassword;
}

// Event listener for button
generateBtnEl.addEventListener("click", displayPasswords);
