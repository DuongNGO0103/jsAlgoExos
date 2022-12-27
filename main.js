// récupérer le module readline-sync
var readline = require("readline-sync");
// question qui permet de récupérer Int
var moisEnChiffre = readline.questionInt("quel mois de l'annee voulez vous?");
console.log("mois saisi " + moisEnChiffre);
if (moisEnChiffre ===1) {
    console.log("le mois %d est janvier", moisEnChiffre);
}else if(moisEnChiffre ===2) {
    console.log("le mois %d est Feb", moisEnChiffre);
}else if(moisEnChiffre===3){
    console.log("le mois %d est Mars", moisEnChiffre);
}else if(moisEnChiffre ===4){
    console.log("le mois %d est Avril", moisEnChiffre);
}else if(moisEnChiffre ===5){
    console.log("le mois % d est Mai", moisEnChiffre);
}else if(moisEnChiffre ===6) {
    console.log("le mois %d est Juin", moisEnChiffre);
}else if(moisEnChiffre ===7){
    console.log("le mois %d est Juillet", moisEnChiffre);
}else if(moisEnChiffre ===8){
    console.log("le mois %d est aout", moisEnChiffre);
}else if(moisEnChiffre ===9){
    console.log("le mois %d est septembre", moisEnChiffre);
}