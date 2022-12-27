var readline = require("readline-sync");
   var tab=[];
for(var i=1; i<=5; i++){
    tab[i]= readline.questionInt("Saisir la note " + i);
}
console.log(tab);
calculMoyenne(tab);

function calculMoyenne(tab){
var moyenne= 0;
for(var j=0; j<tab.length; j++){
var b=moyenne+=tab[j];
}

}

