var readline = require("readline-sync");
var menu = " ";
menu += "1/Bonjour\n";
menu +="2/coucou\n";
menu +="3/Salut\n";
menu +="0/ Quitter \n";
console.log(menu);
var saisie = " ";
while(saisie!==0){
    saisie = readline.questionInt("entrer 1-3" );
switch(saisie){
    case 1: console.log("Bonjour");
    break;
    case 2:console.log("Coucou");
    break;
    case 3:console.log("salut");
    break;
    case 0: console.log("vous avez quitté le menu");
    break;
    default: console.log("non traité");
}
}
