var slash = "";
for (var i = 1; i<=20; i++){
    slash +="/";
}

var antiSlash = "";
for (var j= 1; j<=20; j++){
    antiSlash +="\\";
}

for(var z=1; z<=5; z++){
    if(z%2 === 0){
        console.log(slash);
    }else{
        console.log(antiSlash);
    }
}

