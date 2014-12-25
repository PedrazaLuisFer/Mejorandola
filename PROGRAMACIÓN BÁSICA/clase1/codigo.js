

var peso;
var pesoEnMarte; // CamelCase

alert("¿Quieres saber tu peso en Marte?");
peso= prompt("¿Cuál es tu peso?", "100");
peso= parseInt(peso);

pesoEnMarte = (peso / 9.81) * 3.711;

alert( "Tu peso en Marte es: " + pesoEnMarte + " Kg " );
//alert(peso + 10 + " Kg ");
//Todo lo que escriban con prompt lo toma como caracter

//parseInt: convierte una cadena de texto en un numero.

//alert: Función 
//src: es la fuente donde me voy a traer otros archivos
//  (): parametros de la función
// "" : Cadenas de texto 
// var nombre = "Luis";
//var apellido = "Guerrero";
// var edad = 24;

 //alert(nombre + " " + apellido + "\n" + edad + " años. " );
//alert(5+8 +"2")