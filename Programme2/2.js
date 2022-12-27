/**
 * main
 */
var action = "";
while(action !==0){
console.log("*********************");
menu();
console.log("*********************");
var readline=require("readline-sync")
action = readline.questionInt("votre choix ");

switch(action){
    case 1: console.log("calcul de la factorielle");
    var nombre = readline.questionInt("Quel nombre voulez vous?");
    console.log("La factorielle de "+nombre + "=" + calculFactorielle(nombre));
    break;
    case 2: console.log("calcul de la somme");
    var nombre = readline.questionInt("Quel nombre voulez vous?");
    console.log("La somme de "+nombre + "=" + calculSomme(nombre));
    break;
    case 0: console.log("A+ ")
    break; 
    default: console.log("Cas non pris en compte");
}
}

/**
 * functions
 */

function menu(){
    
    var txt = "1/ Factorielle\n";
    txt+="2/Somme\n";
    txt+="0/quitter";
    
    console.log(txt);
 
}
function calculFactorielle(nombre){
    var resultat = 1;
    for(var i=1; i<=nombre; i++){
        resultat = resultat * i;
    }
    return resultat;
}

function calculSomme(nombre){
    var resultat = 0;
    for(var i = 1; i<=nombre;i ++){
        resultat = resultat+i;
    }
    return resultat;
}