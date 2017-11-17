//Array ejemplo:

/*var problaciones=[];


for (var i = 0; i < poblaciones.length; i++) {
  poblaciones [i]=prompt("Introduce una poblacion", "");
  poblaciones.push(promt);
  console.log(compra[i]);
}
*/

//Inicialización

var poblaciones=[];
var resultadodeUsuario="";

//Solicitar provincias

for (var i = 0; i<3; i++) {

  resultadodeUsuario=prompt("Dame una población de la provincia de Valencia");
  poblaciones.push(resultadodeUsuario);
  console.log(poblaciones[i]);

}
