var readline = require("readline-sync")
var capital = readline.questionInt("entrer votre capital? ");
var taux= readline.questionInt("entrer votre taux? ");
var duree = readline.questionInt("entrer votre duree? ");


console.log("--------------------------------");

console.log("votre mensualite sera de %d par mois", calculMensualite(capital, taux, duree));

function calculMensualite(capital, taux, duree){
    var i = taux/100/12; 
    var n = duree*12;
    var p = (1+ Math.pow((1+i),-n))
    //hàm mũ: math.pow(nombre, số mũ)
    var mensualite = capital * (i/(1-Math.pow(1+i,-n)));
    // hàm làm tròn số
    return math.round(mensualite);
}