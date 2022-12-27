
/**
 * function
 */
function tirets(){
    var x = " ";
        for(var i=1; i <= 50; i++){
        x+= "-";
        };
    console.log(x); 
}
function afficherLigne(){
for( var i=1; i<= 4; i++){
    tirets();
}
}
/**
 * main
 */
for(var j=1; j<=4; j++){
    if(j===1){
        console.log("Bonjour");
    }else if(j===2){
        console.log("salut");
    }else {
        console.log("bobo");
    }
afficherLigne();
}







