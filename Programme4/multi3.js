var persos = [
    ['Toto',4,17],
    ['Titi',11,12],
    ['Tata',12,14],
];
for(var i=0; i< persos.length; i++){
console.log("la moyenne de note de " + persos[i][0] + calculMoyenne(persos[i]));
};


function calculMoyenne(tab){
    var moyenne= 0;
    var nbNotes= 0;
    for(var i=0; i< tab.length; i++){
        if(typeof(tab[i])==="number"){
            moyenne+=tab[i];
            nbNotes++;
        }
    }
    moyenne/=nbNotes;
    return moyenne;
}