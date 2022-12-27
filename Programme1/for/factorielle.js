var readline= require("readline-sync");
var saisie = readline.questionInt("Choisir la factorielle a calculer ");
var fac=1;
for(var i=1; i <=saisie; i++ ){
    fac= fac*i; 
    var message = " ";
    message +=i; 
   if(i=== 1){
    message +="er passage - total: ";
   
}else{
    message +="eme passage - total: "
   
}
console.log(message + fac)
}