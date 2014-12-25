//Backend

var database = {
	usuario: "fernando",
	password: "mejorandola"
}; 

console.log("Arracando server de Node");

//require es una instruccion de javascript que corre en
//	lado del servidor.

//parsear: cambiar de un formato a otro
var express = require("express");
var parcero = require("body-parser");
var web = express();
web.use( parcero.urlencoded() );
var servidor;

servidor = web.listen(8080, function () {
	console.log("Servidor Arrancado :D");
});

//-------------HOME
web.get("/", function (req, res){
//------ 127.0.0.1:8080  ip local de todos 
//Para el puerto 80, se necesita ejecutar como administrador
//		para eso se necesita: sudo node backend.js

	res.sendfile("formulario.html");
});
// ------- aqui acaba el home

web.post("/entrar", function (req, res){
	if(req.body.usuario == database.usuario && req.body.clave == database.password)
	{
		res.send("Bienvenido al area secreta!");
	}
	else
	{
		res.send("Shuu, shuuu, fuera de aqui!!!");
	}
});

//req.body = por donde llegan las variables post
//req.query = por donde llegan las variables get


//Prueba de URLs amigables 
//Prueba de variables GET
web.get("/test", function (req, res) {
	res.send("Buen trabajo, lograste un servidor web desde :D" + luis);
});
//requerimiento y respuesta : require, response

web.get("/hola/mama-es-linda", function (req, res) {
	res.send("Hola <strong>mamá</strong>, estoy triunfando o/");
});
//para verla en la WEB la dirección es: 
//					http://127.0.0.1:8080/hola/mama-es-linda