// adding all variables
special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
commonlet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
capitallet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let confirmCom;
let confirmCap;
let confirmNum;
let confirmSpe;


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

function GenPassword(){
  promptLet = parseInt(prompt ("How many characters would you like your password to be (must be between 8 and 128)"));

  if (!promptLet) {
    alert ("Please enter a value to begin")
  } else if (promptLet > 128 || promptLet < 8) {
    alert ("The value has to be between 8 and 128")
  } else {
    confirmCom = confirm ("Want to add common letters?");
    confirmCap = confirm ("want to add capital letters?");
    confirmNum = confirm ("want to add numbers?");
    confirmSpe = confirm ("want to add special characters?");
  } 

  if (!confirmCom && !confirmCap && !confirmNum && !confirmSpe) {
    combo = alert("You must use some input to generate a password")
  } else if ( confirmCap && confirmCom && confirmNum && confirmSpe) {
    combo = numb.concat (special, commonlet, capitallet);
  } else if ( confirmCap && confirmCom && confirmNum && !confirmSpe) {
    combo = numb.concat (commonlet, capitallet);
  } else if ( confirmCap && confirmCom && !confirmNum && confirmSpe) {
    combo = capitallet.concat (commonlet, special);
  } else if ( confirmCap && !confirmCom && confirmNum && confirmSpe) {
    combo = capitallet.concat (numb, special);
  } else if ( !confirmCap && confirmCom && confirmNum && confirmSpe) {
    combo = commonlet.concat (special, numb);
  }

    else if ( confirmCap && confirmCom && !confirmNum && !confirmSpe) {
    combo = capitallet.concat (commonlet);
  } else if ( confirmCap && !confirmCom && confirmNum && !confirmSpe) {
    combo = capitallet.concat (numb);
  } else if ( !confirmCap && confirmCom && confirmNum && !confirmSpe) {
    combo = commonlet.concat (numb);
  } else if ( confirmCap && !confirmCom && !confirmNum && confirmSpe) {
    combo = capitallet.concat (special);
  } else if ( !confirmCap && confirmCom && !confirmNum && confirmSpe) {
    combo = commonlet.concat (special);
  } else if ( !confirmCap && !confirmCom && confirmNum && confirmSpe) {
    combo = numb.concat (special);
  }

    else if ( confirmCap && !confirmCom && !confirmNum && !confirmSpe) {
    combo = capitallet;}

    else if ( !confirmCap && confirmCom && !confirmNum && !confirmSpe) {
    combo = commonlet;}

    else if ( !confirmCap && !confirmCom && confirmNum && !confirmSpe) {
    combo = numb;}

    else if ( !confirmCap && !confirmCom && !confirmNum && confirmSpe) {
    combo = special;}

  
  let arraypassword = [];

  for (let i = 0; i < promptLet; i++) {
    let combochoice = combo[Math.floor(Math.random() * combo.length)];
    arraypassword.push (combochoice); }

  let stringpassword = arraypassword.join("");

  console.log (stringpassword);
    


}

function writePassword() {
  let password = GenPassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;}
  
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input



// Add event listener to generate button





