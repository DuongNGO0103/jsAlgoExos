var readline = require("readline-sync");
var txt = "vous avez sélectionné "
console.log(
"1/ Ajouter un joueur\n" +
"2/ Modifier un joueur \n"+
"3/ Supprimmer un joueur \n"
);
var menu = readline.questionInt("quel est votre choix? ");
switch (menu) {
  case 1:
    console.log(txt + ": Ajouter un joueur");
    break;
  case 2:
    console.log(txt + ": Modifier un joueur");
    break;
  case 3:
    console.log(txt + ": Supprimer un jouer");
    break;
    default: console.log("non traité");
}
