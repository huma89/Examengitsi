/*var element=document.getElementById("parrafoUno");
element.textContent= "Paco de día y Carlos de noche"
console.log(element.textContent);

var min=1;
var max=2;
var cont=0;
var num = Math.random() * (max - min) + min;
var element= document.getElementById("Has acertado");
num= Math.round(num);
alert(num);

var numUsuario= prompt("Introduce un numero porfa");

if (numUsuario==num && cont>4) {

  while (numUsuario==num) {

    element.textContent.getElementById("Has acertado");

    cont++;

  }

}*/

//Icialización
var numAleatorio=0;
var numUsuario=0;
var numTexto="";
var intentos=0;

//Num aleatorio
numAleatorio= Math.random() * (10 - 1) +1
numAleatorio= Math.round(numAleatorio);
console.log(numAleatorio);

//Bloque pregunta usuario
do {

  numTexto=prompt("Dime numero entre uno y diez");
  numUsuario=parseInt(numTexto);
  console.log(numUsuario);
  intentos++;

} while (numUsuario!=numTexto);

//Sacar resultados
var element=document.getElementById("numAleatorio");
element.textContent= numAleatorio;

var element=document.getElementById("numUsuario");
element.textContent= numUsuario;

var element=document.getElementById("intentos");
element.textContent= intentos;
