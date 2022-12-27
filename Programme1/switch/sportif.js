var readline = require("readline-sync");
var sport = readline.questionInt("vous choisiez quel numero (1-3)");
switch(sport){
    case 1: 
        console.log("foot");
    case 2:
        console.log("rudyman");
    case 3:
        console.log("Tennisman");
    break;
    default: console.log("cas non traité");
}