// Una matriz es: colección de información basada en el mismo concepto
// ejemplo: Menu: Productos =0 , Ventas =1 , Contrato = 2
// y todo eso es un Array unidimensional --------- Vector

//var menu = ["Productos", "Ventas", "Contacto"]; // este es un array = vector
//document.write( menu[0] ) ;

//var foda = [ ["Fuerza", "Oportunidad"] , ["Debilidades" , "Amenazas"] ];
//document.write(foda[0][0] ); //error en js es = undifined
function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo)
	return numero;
}


function explosion()
{

	alert("BOOOM!!");
	document.write("<h1> BOOM! Elegiste un area minada :( </h1>");

}

//explosion(); ----- > A si se invoca la funcion 

function ganaste()
{
	document.write("Eres un ganador :)");
}


//Campo de Batalla es una matriz de 3 x 3

// 1 = Bomba. 0 = No hay bomba
var campo = [ [ 1 , 0 , 0 ] , 
			  [ 0 , 1 , 0 ] , 
			  [ 1 , 1 , 1 ] ];                 // Array de arrays
			  								// array multidimensional

var textos= ["Cesped"," Bomba"]   //Cesped = 0. Bomba = 1.

var x, y;

alert("Estás en un campo minado\n" +
	   "Elije una posición entre el 0 y el 2 para X y para Y ");

x = prompt("Posición en X? (Entre 0 y 2)");
y = prompt("Posición en Y? (Entre 0 y 2)");


if(x <= 2 && y <= 3)
{
	var posicion = campo[x][y];
	document.write("Elegiste " + textos[posicion] + "<br/>");
	if(posicion == 1) 
	{
		explosion();
	}
	else
	{
		ganaste();
	}

}
else
{
	document.write("Te saliste del campo!");
	explosion();
}














/*if (campo[1][0] == 1)
{
	explosion();
								PRUEBA!
}
else
{
	ganaste();
} */


















