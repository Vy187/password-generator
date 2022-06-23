// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  document.querySelector("#password").value = password;
}

function generatePassword() {
  criteria = getCriteria();
  console.log(criteria);

  return "hola";
}

function getCriteria() {
  criteria = [];
  do {
    criteria[0] = window.prompt("How long do you want the password to be from 8-128?");
    if (isNaN(criteria[0]) || criteria[0] == null) {
      window.alert("Invalid Input");
    } else if (criteria[0] < 8 || criteria[0] > 128) {
      window.alert("Input has to be 8-128");
    }
  } while (isNaN(criteria[0]) || criteria[0] == null || criteria[0] < 8 || criteria[0] > 128);

  do {
    criteria[1] = window.confirm("Do you want it to include lowercases?");
    criteria[2] = window.confirm("Do you want it to include uppercases?");
    criteria[3] = window.confirm("Do you want it to include numbers?");
    criteria[4] = window.confirm("Do you want it to include special characters?");
    if(criteria[1] == false && criteria[2] == false && criteria[3] == false && criteria[4] == false){
      window.alert("Please select one criteria");
    }
  } while(criteria[1] == false && criteria[2] == false && criteria[3] == false && criteria[4] == false);

  return criteria;
}

// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);
