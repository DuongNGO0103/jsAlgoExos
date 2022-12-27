var tab = [5,12,18,13,14,10,7];
var somme=0;
for(var i = 0; i<tab.length; i++){
somme= somme + tab[i];
// console.log(somme);
}
var moyenne=somme/tab.length;

console.log("la moyenne est de : " + moyenne);
//math.round() lam tron so ko có đuôi: 11.28
console.log("la moyenne est de : " + (Math.round(moyenne)));
// làm tròn số và chèn luôn cái đuôi từ .28 thành 3: 113
console.log("la moyenne est de : " + (Math.round(moyenne*10)));
// 11.3
console.log("la moyenne est de : " + (Math.round(moyenne*10))/10);
// 11286 thành 11.286
console.log("la moyenne est de : " + (Math.round(moyenne*1000))/1000);