var readline = require("readline-sync");
var s1 = readline.questionInt("premier nombre : ");
var s2 = readline.questionInt("deuxieme nombre: ");
var s3 =readline.questionInt("troisieme nombre: ");
var s4 =readline.questionInt("quatrieme nombre: ");

var m1 = calculMoyenne(s1,s2,s3,s4)
console.log("la moyenne des 4 nombres saisis au clavier est de: " + m1)

function calculMoyenne(a1,a2,a3,a4){
return (s1+s2+s3+s4)/4;
}
