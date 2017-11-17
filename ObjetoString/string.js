//Definición de una frase

var parrafolargo="Este es un ejemplo\
de un parrafo super largo\
con mucho texto";

console.log(parrafolargo);
//Cabe en Twitter?
if(parrafolargo.length<140) {
  var parrafoTwitter=parrafolargo;
  console.log(parrafolargo.length);
  console.log(parrafolargo);
  console.log("Cabe en Twitter!");
}
