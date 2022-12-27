/**
 * main
 */
console.log("*********************");
menu();
console.log("*********************");

var readline = require("readline-sync");
var action="";
while(action !==3){
   action = readline.questionInt("veillez entrer votre choix "); 
switch(action){
    case 1: console.log("la factorielle: ");
    var nombre=readline.questionInt("quel nombre voulez vous ?");
    console.log("le resultat de !%d est %d",nombre, calculFac(nombre));

    break;
    case 2: console.log("fais de la somme ");
    var nombre=readline.questionInt("quel nombre voulez vous ?");
    console.log("la somme de les premiers  %d chiffre est %d",nombre, calculSomme(nombre));

    break;
    case 3: console.log("A+");
    break;
    default: "non traité";
}
}

/**
 *function
 */
function menu(){
    var txt="1/Factorielle \n";
    txt += "2/Somme \n";
    txt += "3/Quitter \n";
    console.log(txt);
}
function calculFac(nombre){
    var fac=1;
    for(var i=1; i<=nombre; i++){
        fac=fac*i;
    }
    return fac;
}

function calculSomme(nombre){
    var somme=0;
    for(var i=1; i<=nombre; i++){
        somme+=i;
    }
    return somme;
}