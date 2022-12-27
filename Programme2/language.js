var readline = require("readline-sync");
var pseudo = readline.question("veuillez vous entrer votre nom? ");
function ditBonjour(pseudo){
    console.log("--------------------");
    console.log("Bonjour %s ",pseudo);
    console.log("Hello %s ",pseudo);
    console.log("Hola %s ",pseudo);
    console.log("--------------------");
}
ditBonjour(pseudo);
