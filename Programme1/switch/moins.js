var readline = require("readline-sync");
var moisEnChiffre = parseInt(readline.question("veillez entrer les chiffre (1-12)"));
switch(moisEnChiffre){
    case 1: 
        console.log("Janvier"); //no phan bien ===; et ==
    break;
    case 2:
        console.log("Feb");
    break;
    case 3:
        console.log("Mars");
    break;
    case 4: 
        console.log("avril");
    break;
    case 5:
        console.log("mai");
    break;
    case 6:
        console.log("juin");
    break;
    case 7:
        console.log("juillet");
    break;
    case 8:
        console.log("aout");
    break;
    case 9:
        console.log("sep");
    break;
    case 10:
        console.log("oct");
    break;
    case 11:
        console.log("nov");
    break;
    case 12:
        console.log("Dec");
    break;
    default:
        console.log("non traité");
} 