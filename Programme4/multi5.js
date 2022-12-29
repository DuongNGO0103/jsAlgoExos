var readline = require("readline-sync");
var p1 = ["Tya", 21, false];
var p2 = ["Milo", 30, true];
var p3 = ["Lili", 15, false];
var persos = [p1, p2, p3];

afficherMenu();
var choix = -1;
while (choix !== 0) {
  choix = readline.questionInt("Quel est votre choix ? ");
  switch (choix) {
    case 1:
      afficherPersos(persos);
      break;
    case 2:
      var moyenneAge = calculMoyenn(persos);
      console.log("la moyenne d'age des personnages est de: " + moyenneAge);
      break;
    case 3:
      // Tạo hàm rỗng, stocker trong một tableau p
      var p = creerPerso();
      // add p vào tab mẹ
      persos.push(p);
      console.log("le personnage est bien crée");
      //hiển thị tab mới
      afficherUnPerso(p);
      break;
    case 4:
      //1. kiểm tra xem còn gì để xóa ko

      if (persos.length > 0) {
        //h2. hiển thị tab cuối để hỏi có muốn xóa ko

        afficherUnPerso(persos[persos.length - 1]);
        //h3. tạo một saisie và hỏi: nếu ko chọn 1 và 2 thì sẽ lặp lại câu hỏi
        var saisie = 0;
        while (saisie !== 1 && saisie !== 2) {
          saisie = readline.questionInt(
            "voulez-vous vraiment supprimer ? 1 Oui - 2:non"
          );
        }
        //4. nếu chọn 1 thì sẽ xóa tab cuối và hiện ra đã xóa
        if (saisie === 1) {
          persos.pop();
          console.log("le personnage est bien supprimé");
        } else {
          console.log("Annulé");
        }
      } else {
        console.log("vide");
      }
      break;

    case 5:
      //1. hỏi tên muốn xóa
      var nom = readline.question("Quel est le nom recherche? ");
      //mục đích là tìm đc indice của tableau đó, phải tìm i
      var indice = recherchePerso(nom, persos);
      //2. (lam xong ham recherchePerso nếu indice khác-1(dưới hàm ko thấy tên thì sẽ cho return -1) ==> có tên trùng
      if (indice !== -1) {
        //cho hien thi persos(i) tra ve ben duoi
        afficherUnPerso(persos[indice]);
      } else {
        console.log("le personnage ayant le nom" + nom + "n'exite pas");
      }
      //mỗi persos[i] là một tableau nhỏ
      break;
    case 0:
      console.log("A+");
      break;
    default:
      console.log("non traité");
  }
}

/**
 * function permetant afficher une liste de persos
 * @param {Array} tab tableau de persos
 */
function afficherPersos(tab) {
  for (var i = 0; i < tab.length; i++) {
    console.log("Perso: " + (i + 1));
    afficherUnPerso(tab[i]);
    console.log("*************");
  }
}

/**
 * function permetant afficher un perso
 * @param {Array} tab tableau de perso
 */

function afficherUnPerso(tab) {
  console.log("Nom: " + tab[0]);
  console.log("Age: " + tab[1]);
  console.log("sexe: " + (tab[2] ? "Homme" : "Femme"));
}
/**
 * function permetant d'afficher menu
 */
function afficherMenu() {
  var txt = "******* MENU ****** \n";
  txt += "01/ Afficher les personnages \n";
  txt += "02/ Calcul de la moyenne d'age \n";
  txt += "03/ Ajouter un personnage \n";
  txt += "04/ Supprimer un personnage \n";
  txt += "05/ Afficher un personnage saisi au clavier \n";
  txt += "0/ Quitter\n";
  txt += "***************** \n";
  console.log(txt);
}

/**
 * functiun permettant de calculer le moyenne d'age
 * @param {Array} tab tableau de personage
 * @returns {number} return un number
 */

function calculMoyenn(tab) {
  var moyenne = 0;
  for (var i = 0; i < tab.length; i++) {
    moyenne += tab[i][1];
  }
  moyenne /= tab.length;
  return moyenne;
}
/**
 *
 * @returns {Array} return un array
 */

function creerPerso() {
  //tạo tab rỗng
  var perso = [];
  //tạo câu hỏi để có giá trị nom, age
  var nom = readline.question("Quel est votre? ");
  var age = readline.questionInt("Quel age avez vous?");
  //tạo sexeInt với 1, và 2
  var sexeInt = 0;
  //miễn là giá trị khác 1 và 2 thì sẽ hiển thị câu hỏi sexe
  while (sexeInt !== 1 && sexeInt !== 2) {
    sexeInt = readline.questionInt("Quel est le sexe? (1: homme /2: femme) ");
  }
  //nếu nhập 1 thì add vào perso giá true
  if (sexeInt === 1) {
    perso.push(true);
  }
  perso.push(nom);
  perso.push(age);
  return perso;
}
//1.para là tên cần tìm và tab có tên cần tìm
function recherchePerso(nom, tab) {
//2.miễn là i < chiều tài tab, vào vòng for
  for (var i = 0; i < tab.length; i++) {
//3.nếu tabn io tương đương với name kèm chuyển hết ra chữ thường
    if (tab[i][0].toLowerCase() === nom.toLowerCase()) {
      //4.  nếu có bằng nom thì trả về i và ra khỏi vòng lặp và ra khỏi luôn function ==> nó sẽ 
      return i;
      //5. i này sẽ đi vào afficherun Perso và hiện ra luôn
    }
  }
  //6. nếu ko bao giờ  vào được if, thì khi đủ i++, và khỏi vòng lặp thì sẽ trả về -1
  return -1;
}
