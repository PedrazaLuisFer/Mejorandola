//Forma correcta de programar orientada a objetos en  JS es con Protoype
//Prototype es convertir un objeto que tenga sub funciones
//function Persona(n)

//objeto persona
var Persona = function (n)
{
	this.nombre = n;
	//this se refiere a variables relacionadas con la definicion 
	//del objeto pegadas a la instancia

	//Si no usaramos this la variable se volveria global para 
	//todas las clases
}
Persona.prototype.hola = function () 
{
	alert(this.nombre);
}

//copias del objeto
//instancias
var luis = new Persona("Luis");
var jaime = new Persona("Jaime");

luis.hola();
jaime.hola();
----------------------------------------------------------------
 // Variables estaticas

 var n = 1.5;
 var a = Math.floor(n);
 //resultado 1
//floor = funcion estatica , son globales
- las funciones estaticas son funciones que yo puedo invocar sin
 crear una instancia del objeto

- Con prototype creamos funciones estaticas

----------------------------------------------------------------
Dinero!!! Plata!!!! 

Cursos:
2.-Frontend
1.-Backend
3.-DesarrolloMovil

4.-Diseño Gráfico
5.-Diseño de Interfaces

----------------------------------------------------------------
--Frontend:
Nvegador
tegnologias: HTML5, CSS3, JS (Lenguaje de Programación interactivo)




--Backend: 
Servidor: puertos
lenguajes: php , python , nodejs, ruby
	servidores: NGINX, APACHE, nodejs
Base de datos:
MySql , mongoDB

Cliente y servidor:
Cliente es: al humano que esta haciendo algo, al resultado Final.
Servidor es : a lo que corre detras del humano, a lo que uno no ve.

Stack: serie de tegnologias
	Lamp: APACHE, MySql, php

Tecnicas para conectarse a un servidor:
	GET
	POST
	AJAX
	Sockets
----------------------------------------------------------------



