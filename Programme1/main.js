var readline = require("readline-sync");

var age = 18;
console.log((age<=18)?"mineur":"majeur");

var sportif= false;
console.log((sportif)?"bien":"devrait faire du sport");

var sexe = true;
var sexeEnMot = (sexe) ? "Femme": "Homme";
console.log(sexeEnMot);

var saisie1 = readline.questionInt("entrer votre chiffre ? ");
var parite =((saisie1 % 2) === 0? "pair":"impair");
console.log(parite);

var saisie2= readline.questionInt("votre chiffre divisable par 4? ");
var parite2=((saisie2 % 4) === 0? "divisible par 4":"pas divisible par 4");
console.log(parite2);