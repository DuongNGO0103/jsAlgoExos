var readline = require("readline-sync");

/**
 * Main
 */
var chiffre1 = 2; 

var chiffre2 = readline.questionInt("quel nombre voulez-vous?");
ajoute5(chiffre1);
ajoute5(chiffre2);


/**
 * function 
 */

function ajoute5(nombreEntrer) {
    var resultat = 5 + nombreEntrer;
    console.log("le resultat est + "+ resultat)
}

