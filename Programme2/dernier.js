console.log("*******************************");
var menu = "1/Factorielle \n";
menu += "2/Somme \n";
menu += "3/Quitter \n";
console.log(menu);
console.log("*******************************");
var readline = require("readline-sync");


while(choix !==3){
var choix = readline.questionInt("quel est votre choix? ");
var nom = readline.questionInt("quel nombre voulez-vous? ");
console.log("*******************************");
    menuChoix(choix,nom);
    console.log(menu);
console.log("*******************************");
};

function fac(nom) {
    var resultat = 1;
    for (var i = 1; i <= nom; i++) {
      resultat = i * resultat;
    }
    return resultat;
  }
  
function somme(nom) {
    var som = 0;
    for (var i = 1; i <= nom; i++) {
      som = i + som;
    }
    return som;
  }
  function menuChoix(choix, nom){
    if (choix === 1){
        console.log("le resultat de ! %d", nom, fac(nom));
    } else if(choix ===2){
        console.log("le resultat de 5 premier chiffres %d", nom, somme(nom));
    } else{
        console.log("j'ai pas compris");
    }
  }
