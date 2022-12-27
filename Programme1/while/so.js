var readline = require("readline-sync");
var saisie = " ";
do {
saisie = readline.questionInt("Veuillez saisir un chiffre entre 1 et 5: ");
}while(saisie<1 || saisie >5)
// je sors saisie >= 1 && saisie <=5 --> 1 <= saisie <=5
console.log("vous avez saisie :" + saisie)