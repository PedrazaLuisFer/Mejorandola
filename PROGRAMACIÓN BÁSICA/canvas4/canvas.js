//variables globales
var dibujo, lienzo, t, b;
function inicio()
{
	t = document.getElementById("usuario");
	b = document.getElementById("dibujalo");
	dibujo = document.getElementById("dibujito");	
	lienzo = dibujo.getContext("2d"); 
	// 2d: por contexto solo en eje de coordenadas X, y

	b.addEventListener("click", dibujarGrilla);

//Grilla por funcion
	//dibujarGrilla(lienzo);


//Cuadrado	
	lienzo.moveTo(0,0);
	lienzo.lineTo(300,0);
	lienzo.lineTo(300,300);
	lienzo.lineTo(0,300);
	lienzo.lineTo(0,0);
	lienzo.strokeStyle = "#F00"; //Colores RGB Hexadecimal
	lienzo.stroke(); //stroke: Pincelada o Trazo

//Circulo
	lienzo.beginPath(); // Trazo nuevo con otro color
	lienzo.strokeStyle = "#00F";
	lienzo.arc(150,150,100, (Math.PI * 2), false); //dibujo
	lienzo.closePath();
	lienzo.stroke();

//Linea Recta
	// lienzo.moveTo(150,150);
	// lienzo.lineTo(250,150);
	
	
}

function dibujarGrilla () // l = lienzo  
{
	var l=lienzo;
	var rayas = Number(t.value);
	var ancho = 300, alto = 300;
	var linea;
	var anchoLinea = ancho / rayas;
	var limiteX = ancho / anchoLinea;
	var limiteY = alto / anchoLinea;

//verticales	
	for(linea = 0; linea <= limiteX; linea++)
	{
		punto= linea * anchoLinea;
		l.beginPath();
		l.strokeStyle = "#AAA";
		l.moveTo(punto, 0);
		l.lineTo(punto, 300);
		l.stroke();
		l.closePath();
	}
//horizontales
	for(linea = 0; linea <= limiteY; linea++)
	{
		punto= linea * anchoLinea;
		l.beginPath();
		l.strokeStyle = "#AAA";
		l.moveTo(0, punto);
		l.lineTo(300, punto);
		l.stroke();
		l.closePath();
	}
}


//TAREA
	//RELLENAR EL CIRCULO DE ALGUN COLOR
	//PONER LAS LINEAS EN DIAGONAL

