var readline= require("readline-sync");
/**
 * main
 */

menu();
var tab= [];
var choix =-1;
while(choix !==0){
   choix = readline.questionInt("Quel est votre choix? :"); 
switch(choix){
    case 1: console.log("afficher la tableau");
    tableauAffichage(tab);
    break;
    case 2: console.log("Calculer la moyenne: "+ calculeMoyenne(tab));
    break;
    case 3: tab=saisirTab();
    break;
    case 0: console.log("A+");
    break;
    default: console.log("non traité");
}
}
/**
 * function
 */
function menu(){
    var menu = "1/ Afficher tableau \n";
    menu += "2/ Calculer la moyenne \n";
    menu += "3/ Saisir un tableau \n";
    menu += "0/ Sortir";

    console.log(menu);
}

function tableauAffichage(tableau){
for(var i=0; i< tab.length; i++){
    console.log("indice: " + i + "- valeur: " + tab[i]);
}
}
function calculeMoyenne(tableau){  
    var somme = 0;
    for(var i=0; i< tableau.length; i++){
    somme +=tableau[i];

    }
    var moyenne= somme/tableau.length;
    return moyenne;
}
 

function saisirTab(){
 var taille = readline.questionInt("quelle taille de tableau vous voulez entrer ");
 var nombres = [];
   for(var i=0; i< taille; i++){
    nombres.push(readline.questionInt("indice" + i + ": "));
}
return nombres;
}

