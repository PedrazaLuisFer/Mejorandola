function aleatorio(minimo,maximo){
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opcion = ["Piedra","Papel","Tijera","Lagarto","Spock"]

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("Ingrese su opción: ", 0);

if(opcionUsuario >= 0 && opcionUsuario < 5 && opcionMaquina >= 0 && opcionMaquina < 5){

alert("Usted eligio: " + opcion[opcionUsuario] + ", la Máquina eligio: " + opcion[opcionMaquina]);

var resultado = [ 	[ "EMPATE CON", "TAPADO POR", "APLASTA A", "APLASTA A", "VAPORIZADO POR"] ,
		  			[ "TAPA A", "EMPATA CON", "CORTADO POR", "DEVORADO POR", "REFUTA A"] ,
		  			[ "APLASTADO POR", "CORTA A", "EMPATA CON", "DECAPITA A", "DESTROZADO POR"] ,
		  			[ "APLASTADO POR", "DEVORA A", "DECAPITADO POR", "EMPATA CON", "ENVENENA A"] ,
		  			[ "VAPORIZA A", "REFUTADO POR", "DESTROZA A", "ENVENENADO POR", "EMPATA CON"] ]

alert(opcion[opcionUsuario] + " " + resultado[opcionUsuario][opcionMaquina] + " " + opcion[opcionMaquina]);
}
else{
	alert("Juego invalido, intentelo nuevamente!!!");
}