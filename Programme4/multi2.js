var p1 = ['Tya',21,false];
var p2 = ['Milo', 30, true];
var p3 = ['Lili', 15, false];
afficherPerso(p2);
var perso=[p1,p2,p3];
for (var i=0; i<perso.length; i++){
    console.log("*******************");
    console.log("Perso: "+ (i+1) +":");
    afficherPerso(perso[i]);
}
function afficherPerso(tab){
console.log("nom: " + tab[0])
console.log("age: " + tab[1])
console.log("sexe: " + ((tab[2])?"Homme":"Femme"));
}