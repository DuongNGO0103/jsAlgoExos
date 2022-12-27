
var readline = require ("readline-sync");
var saisie = readline.questionInt("quel nombre voulez vous?");
var resultat = 1;
var i = 1;
do {
    resultat = resultat*i;
    console.log(i + "eme passage -resultat: " + resultat);
      i ++;
}while(i<=saisie)