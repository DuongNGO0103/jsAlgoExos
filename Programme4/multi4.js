var readline = require("readline-sync"); 
var p1 = ['Tya',21,false];
var p2 = ['Milo', 30, true];
var p3 = ['Lili', 15, false];
var perso=[p1,p2,p3];
menu();
var choix = -1;
while(choix !==0){
    
    choix = readline.questionInt("Quel est votre choix? ");
switch(choix){
    case 0: console.log("A+");
    break;
    case 1: console.log(afficherPersos(perso));
    break;
    case 2: console.log("moyenne age");
    break;
    case 3: console.log("Ajoute");
    break;
    case 4: console.log("Supprim");
    break;
    case 5: console.log("afficher");
    break; 
    default: console.log("non traité");

}
}

/**
 * function permettant afficher le menu
 */
function menu(){
    var txt="********************************* \n";
    txt+="1/Afficher les personnages \n";
    txt+="2/Calcul de la moyenne d'age \n";
    txt+="3/Ajouter un personnage \n";
    txt+="5/Afficher un personnage saisi un clavier \n";
    txt+="4/Supprimer un personnage \n";
    txt+="0/Quitter \n";
    txt+="*************************************";
    console.log(txt);
}

/**
 * Fonction qui permet d'afficher une liste de personnages
 * @param {Array} tab: tab: tableau de personnage
 */

function afficherPersos(tab){

    for (var i=0; i < tab.length; i++){
    console.log("*******************");
    console.log("Perso: "+ (i+1) +":");
    afficherPerso(tab[i]);
}
}
/**
 * fonction permettant d'afficher un personnage
 * @param {Array} tab : tableau contenant les informations d'un personnage
 */

function afficherPerso(tab){
console.log("nom: " + tab[0])
console.log("age: " + tab[1])
console.log("sexe: " + tab[2]);
}