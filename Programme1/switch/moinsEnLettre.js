var readline = require("readline-sync");
var moisEnLettre = readline.question("Veiller vous entrer le mois: ");
var txt = "la coresspondance est : ";
switch (moisEnLettre){
case "Janvier":
case "janvier": console.log(txt + "1");
break;
case "Feb":
case "feb": console.log(txt+ "2");
break;
case "Mars":
case "mars": console.log(txt +"3");
break; 
case "Avril":
case "avril": console.log(txt + "4");
break;
case "Mai":
case "mai": console.log(txt + "5");
break;
case "Juin":
case "juin": console.log(txt + "6");
break;
case "Juillet":
case "juillet": console.log(txt + "7");
break;
case "Aout":
case "aout": console.log(txt + "8");
break;
case "Sep":
case "sep": console.log(txt + "9");
break;
case "Oct":
case "oct": console.log(txt + "10");
break;
case "Nov":
case "nov":console.log(txt +"11");
break;
case "Dec":
case "dec": console.log(txt+"12");
break;
default: console.log("non traité");
}