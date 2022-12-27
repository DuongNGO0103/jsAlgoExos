
console.log(ditBonjour("fr") + "tya");
console.log("-----------------------");
console.log(ditBonjour("en") + "boba");
console.log("-----------------------");
console.log(ditBonjour("es") + "Lola");
console.log("-----------------------");

function ditBonjour(langue){
    
  switch (langue.toLowerCase()) {
    case "fr": return "Bonjour ";
    break;
    case "en": return "Hello ";
    break;
    case "es": return "hola ";
    break;
    default: return "pls entrer les autres mots"
  }
    
}
