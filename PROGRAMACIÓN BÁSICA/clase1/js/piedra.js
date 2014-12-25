//funcion numero aleatorio
function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo)
	return numero;
}

var piedra= 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4

//Arrays o vectores
var opciones=["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);  
// por default la maquina en el ejemplo elegira siempre papel

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);
//alert("Elegiste: "+ opcionUsuario);

//Acontinuacion Condicionales:
//Los bloques de codigo no terminan en ;
// y es un bloque cuando tinen { }

alert("Eligiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]); 
if(opcionUsuario == piedra)
{
	//alert("Elegiste Piedra!");
	if(opcionMaquina == piedra)
	{
		alert("Empate!");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Perdiste :(");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Ganaste!"); 
	}
	else if(opcionMaquina == lagarto)
	{
		alert("Aplasta: Ganaste!"); 
	}
	else if(opcionMaquina == spock)
	{
		alert("Vaporizado: Perdiste :,("); 
	}
	



}
else if (opcionUsuario == papel) 
{
	//alert("Elegiste Papel!");
	if(opcionMaquina == piedra)
	{
		alert("Ganaste!");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Empate");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Perdiste :("); 
	}
	else if(opcionMaquina == lagarto)
	{
		alert("Comido: Perdiste!"); 
	}
	else if(opcionMaquina == spock)
	{
		alert("Refuta: Ganaste!"); 
	}


}
else if (opcionUsuario == tijera) 
{
	//alert("Elegiste Tijera!");
	if(opcionMaquina == piedra)
	{
		alert("Perdiste :(");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Ganaste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Empate"); 
	}
	else if(opcionMaquina == lagarto)
	{
		alert("Decapita: Ganaste!"); 
	}
	else if(opcionMaquina == spock)
	{
		alert("Roto: Perdiste :,("); 
	}
}
else if (opcionUsuario == lagarto) 
{
	
	if(opcionMaquina == piedra)
	{
		alert("Aplastado: Perdiste :(");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Come: Ganaste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Decapitado: Perdiste :("); 
	}
	else if(opcionMaquina == lagarto)
	{
		alert("Empate!"); 
	}
	else if(opcionMaquina == spock)
	{
		alert("Envenena: Ganaste!"); 
	}
}
else if (opcionUsuario == spock) 
{
	
	if(opcionMaquina == piedra)
	{
		alert("Vaporiza: Ganaste!");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Refutado: Perdiste");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Rompe: Ganaste!"); 
	}
	else if(opcionMaquina == lagarto)
	{
		alert("Envenenado: Perdiste!"); 
	}
	else if(opcionMaquina == spock)
	{
		alert("Empate"); 
	}
}	
else
{
	alert("¿Pos qué chingaos??");
}