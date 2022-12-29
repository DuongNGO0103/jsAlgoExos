var readline = require("readline-sync");
var p1 = ["Tya", 21, false];
var p2 = ["Milo", 30, true];
var p3 = ["Lili", 15, false];
var persos = [p1, p2, p3];
afficherMenu();
var choix = -1;
while (choix !== 0) {
  choix = readline.questionInt("Quel est votre choix ?");

  switch (choix) {
    case 1:
      afficherPersos(persos);
      break;
    case 2:
      var moyenneAge = calculMoyenne(persos);
      console.log("La moyenne d'age des personnages est de: " + moyenneAge);
      break;
    case 3:
      var perso = AjoutUnPerso();

      afficherUnPerso(perso);
      persos.push(perso);
      break;
    case 4: 
    if(persos.length>0){
      afficherUnPerso(persos[persos.length-1]);
      var saisie=0;
      while(saisie !==1 && saisie !==2){
        saisie= readline.questionInt("voulez-vous vraiment supprimer? 1-Oui // 2 -Non")
      }
      if(saisie===1){
        persos.pop();
        console.log("le personnage est bien supprimé");
      }else{
        console.log("Annulé")
      }
    }else{
      console.log("le tableau est vide");
    }
    break;
  case 5: 
  var nom = readline.question("Quel nom voulez vous supprimer? ");
   var indice= recherchePerso(nom, persos);
  if (indice !==-1){
    afficherUnPerso(persos[indice]);
  }else{
    console.log("le personnage ayant le nom" + nom+"n'exite pas");
  }
  break;
  }
  
}

function recherchePerso(n,p){
  for(var i=0; i< p.length; i++){
    if(p[i][0].toLowerCase()=== n.toLowerCase()){
      return i;
    }
  }
  return -1;
}
/**
 * 
 * @returns {Array} un tableau d'afficher un perso
 */
function AjoutUnPerso(){
var nom= readline.question("Quel est votre Nom? ");
var age= readline.questionInt("Quel age avez vous ? ");
var perso=[];
perso.push(nom);
perso.push(age);
var sexInt= -1;
while(sexInt !==1 && sexInt!==2){
  sexInt= readline.questionInt("veillez vous entrer votrer sexe 1/ Homme 2/Femme ");
}
if(sexInt===1){
  perso.push(true)
}else{
  perso.push(false);
}
return perso;
}

/**
 *
 * @param {Array} p tableau de persos;
 * @returns {numero} moyenne d'age de persos;
 */

function calculMoyenne(p) {
  var moyenne = 0;
  for (var i = 0; i < p.length; i++) {
    moyenne += p[i][1];
  }
  moyenne /= p.length;
  return moyenne;
}

/**
 * fonction permettant d'afficher un Menu
 */
function afficherMenu() {
  console.log("*******MENU******* \n");
  console.log("1/ Afficher les personnages \n");
  console.log("2/ Calcul de la moyenne d'age \n");
  console.log("3/ Ajouter un personnage \n");
  console.log("4/ Supprimer un personnage \n");
  console.log("5/ Afficher un personnage saisi au claiver \n");
  console.log("0/ Quitter \n");
  console.log("*******ÈND******* \n");
}

/**
 * fonction permettant afficher une liste de persos
 * @param {Array} p tableau de persos
 */
function afficherPersos(p) {
  for (var i = 0; i < p.length; i++) {
    console.log("*************");
    afficherUnPerso(p[i]);
  }
}

/**
 * fonction permettant d'afficher un perso
 * @param {Array} p  tableau d'un perso
 */

function afficherUnPerso(p) {
  console.log("Nom: " + p[0]);
  console.log("Age: " + p[1]);
  console.log("Sexe: " + (p[2] ? "Homme" : "Femme"));
}
