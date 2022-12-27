var readline=require("readline-sync");
var tab=[4,7,5,16];
var saisie=readline.questionInt("Quel nombre voulez-vous? ");


if(divibleParNombre(tab, saisie)){
console.log("le tableau contient que des valeurs divisibles par " +saisie);
}else {
    console.log("le tableau contient pasque des valeurs divisibles par " +saisie);
}
function divibleParNombre(tab, saisie){

    for(var i=0; i<tab.length; i++){
          console.log(tab[i]);
    if(tab[i]%saisie!==0){
        // dùng để check số nào ko chia hết cho 2
        return false
    }
}
//nếu ko có trường hợp nào bị false nghĩa là ko vào if thì kết luận một lần ở ngoài vòng for là true
return true;
}
    
