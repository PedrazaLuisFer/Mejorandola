
console.log("Iniciando server de Node");

//libreria Drone dentro de una variable
//Drone Control Code
var arDrone = require("ar-drone");
var drodinez = arDrone.createClient();

function bateria()
{
	console.log("Batería: " + drodinez.battery());
}

function despegar_drone()
{
	drodinez.config("control:altitide_max", 100000);
	drodinez.takeoff(); //despegar
	rotar_drone();
}

function rotar_drone()
{
	drodinez.stop();
	drodinez.calibrate(0);
	drodinez.up(1); //elevarse
}

function aterrizar_drone()
{
	drodinez.stop();
	drodinez.land(); //aterriza
}

//Express y servidor web
var express = require("express");
var web = express();
var servidor;

servidor= web.listen(8080, function(){
	console.log("Servidor Arrancado :D");
});


web.get("/", function (req, res){
	console.log("Home");
	bateria();
	res.sendfile("opciones.html");
});

//Despegar URL
web.get("/despegar", function (req, res){
	console.log("Despegando");
	bateria();
	despegar_drone();
	res.sendfile("opciones.html");
});

web.get("/aterrizar", function (req, res){
	console.log("Aterrizando");
	aterrizar_drone(); 
	bateria();
	res.sendfile("opciones.html");
});

// para instalar la libreria de drone es:
// sudo npm -g install ar-drone ("Manera global con sudo")
// npm install ar-drone ("Manera local")


// 	 https://github.com/diegoug/  codigo avanzado con el teclado

// Emulador voxel drone.