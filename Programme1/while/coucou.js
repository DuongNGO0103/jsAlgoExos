var readline = require("readline-sync");
var message = "";
do {
    message = readline.question("Saisir coucou: ");
} while(message !== "coucou");
