var readline = require("readline-sync");
var nombre= readline.questionInt("Quel nombre voulez-vous ? ");

var diviseur = readline.questionInt("quel est le diviseur ?");

if(estDivisible(nombre, diviseur)){
console.log("le nombre " + nombre + "est divisible par" + diviseur);
}else{
console.log("le nombre " + nombre + " n'est divisible par" + diviseur);
}
function estDivisible(nombre, diviseur){
    // if(nombre % diviseur ===0){
    //     return true;
    // // }else{
    //     return false;  
//   }
//nếu hàm trả về giá trị true hay false thì nên làm theo cách dưới
    return (nombre % diviseur ===0);
}
