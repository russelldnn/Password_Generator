// adding all variables
special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", "/"];
numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
commonlet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
capitallet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// adding confirmation variables for below
let confirmCom;
let confirmCap;
let confirmNum;
let confirmSpe;


// assigning generateBtn to the id generate
let generateBtn = document.querySelector("#generate");

// The base function to handle promps and data collection
function GenPassword(){
  promptLet = parseInt(prompt ("How many characters would you like your password to be (must be between 8 and 128)"));

//if else statements to validate the users choices, confirmations result in a boolean trigger
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

  //A series of If else statements to account for the users choices (set for 4/4 and 3/4)
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

  //A series of If else statements to account for the users choices (set for 2/4)
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


  //A series of If else statements to account for the users choices (set for 1/4)
    else if ( confirmCap && !confirmCom && !confirmNum && !confirmSpe) {
    combo = capitallet;}

    else if ( !confirmCap && confirmCom && !confirmNum && !confirmSpe) {
    combo = commonlet;}

    else if ( !confirmCap && !confirmCom && confirmNum && !confirmSpe) {
    combo = numb;}

    else if ( !confirmCap && !confirmCom && !confirmNum && confirmSpe) {
    combo = special;}

  
  // setting a variable for the resulting array  
  let arraypassword = [];

  // for loop with random logic to select the password pushed to above array
  for (let i = 0; i < promptLet; i++) {
    let combochoice = combo[Math.floor(Math.random() * combo.length)];
    arraypassword.push (combochoice); }


  // joining the array into a string with no spaces
  let stringpassword = arraypassword.join("");

  //calling the function to be used
  Output(stringpassword);

  return

  //using text content to set password to the dialouge box
  function Output(stringpassword) {
    document.getElementById("password").textContent = stringpassword;}

}
  

//event listener outside the function to call the function when the button is pressed
generateBtn.addEventListener("click", GenPassword);
