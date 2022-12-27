var readline = require("readline-sync");
var ageEnChiffre = parseInt(readline.question("veillez entrer voter chiffre (16-24): "));
if(ageEnChiffre >= 16 && ageEnChiffre <=17 ){
    console.log("Mineur");
}else if (ageEnChiffre <= 20){
    console.log("majeur")
}else if (ageEnChiffre <= 24){
    console.log("Adulte");
}else{
    console.log("age non pris en compt");
}
