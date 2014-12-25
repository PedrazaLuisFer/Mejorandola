var palabra = "Accesibilidad";
var hombre, l, espacio;
//Declaracion de laClase Ahorcado 
var Ahorcado = function(con)
{	

	//--- this es las variables locales de la clase, accesibles 
	//en toda la clase
	//-- this.contexto es el context de dibujo del canvas, que 
	// llega por parametro desde la variable "con" 
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0,
	this.vivo = true;

	this.dibujar();

}

Ahorcado.prototype.dibujar = function()
{
	var dibujo = this.contexto;

	//Dibujando el poste
	dibujo.beginPath();
	dibujo.moveTo(150,100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.lineWidth = 15;
	dibujo.strokeStyle = "#000000";
	dibujo.stroke();
	dibujo.closePath();

	if(this.intentos > 0)
	{
		//intentos = 1 ----> rostro
		dibujo.beginPath();
		dibujo.arc(150,140, 40,0, Math.PI * 2, false);
		dibujo.strokeStyle = "#F00"
		dibujo.lineWidth = 5;
		dibujo.stroke();
		dibujo.closePath();

		if(this.intentos >1)
		{
			//intentos = 2 ---> torso
		dibujo.beginPath();
		dibujo.moveTo(150,180);
		dibujo.lineTo(150,250);
		dibujo.strokeStyle = "#F00"
		dibujo.lineWidth = 5;
		dibujo.stroke();
		dibujo.closePath();

			if(this.intentos > 2)
			{
					//intentos = 3 ---> brazos
			dibujo.beginPath();
			dibujo.moveTo(120,220);
			dibujo.lineTo(150,180);
			dibujo.lineTo(180,220);
			dibujo.strokeStyle = "#F00"
			dibujo.lineWidth = 5;
			dibujo.stroke();
			dibujo.closePath();


				if(this.intentos > 3)
				{
							//intentos = 4 ---> piernas
				dibujo.beginPath();
				dibujo.moveTo(120,290);
				dibujo.lineTo(150,250);
				dibujo.lineTo(180,290);
				dibujo.strokeStyle = "#F00"
				dibujo.lineWidth = 5;
				dibujo.stroke();
				dibujo.closePath();	

					if(this.intentos > 4)
					{
						//intentos = 5 ---> ojos muertos
						dibujo.beginPath();
						//Ojo izquierdo
						dibujo.moveTo(125,120);
						dibujo.lineTo(145,145);
						dibujo.moveTo(145,120);
						dibujo.lineTo(125,145);

						//Ojo derecho
						dibujo.moveTo(155,120);
						dibujo.lineTo(175,145);
						dibujo.moveTo(175,120);
						dibujo.lineTo(155,145);

						dibujo.strokeStyle = "blue";
						dibujo.lineWidth = 5;
						dibujo.stroke();
						dibujo.closePath();
					}

				}	
			}
		}
	}
}
Ahorcado.prototype.trazar = function()
{
	this.intentos++;
	if(this.intentos >= this.maximo)
	{
		this.vivo = false;
		alert("Estas muerto!");
	}
	this.dibujar();
}


function iniciar ()
{	
	l = document.getElementById("letra");
	var b = document.getElementById("boton");
	var canvas = document.getElementById("c");
	canvas.width = 500;
	canvas.height = 400;
	var contexto = canvas.getContext("2d"); //webgl es para 3d
	hombre= new Ahorcado(contexto);

	//Covierte a mayúscula un texto, es una funcion dentro de prototype
	// toLowerCase es para minúsculas
	palabra = palabra.toUpperCase();    
	//alert( palabra.length );  cantidad de letras
	//alert(palabra[5]); recorre letra por letra
	//alert(palabra);

	//Declaro un array con n espacios de acuerdo al largo de la palabra
	espacio = new Array(palabra.length);

	//Agregamos una función que se dispare al dar click al boton
	b.addEventListener("click", agregarLetra);
	//  espacio

	mostrarPista(espacio);

	//hombre.trazar();
	// hombre.trazar();
	// hombre.trazar();
	// hombre.trazar();
	// hombre.trazar();

}

function agregarLetra()
{
	//guardarme la letra elegida en la variable letra
	var letra = l.value;
	l.value = "";
	// hombre.trazar();
	// alert(hombre.vivo);
	mostrarPalabra(palabra, hombre, letra);
}

function mostrarPalabra(palabara, ahorcado, letra)
{
	var encontrada = false;
	var p;
	letra= letra.toUpperCase();
	//recorrer la palabra
	//por cada p dentro de la palabra
	//iterador que indica cada una de las posiciones de mi palabra
	for(p in palabra)
	{					// Ciclo for in! 
		//alert(palabra[p]); 
		if(letra == palabra[p])
		{
			espacio[p] = letra; //en esa posicion del array pero en espacio pongame la letra
			encontrada =true;
		}
	}
	mostrarPista(espacio);

	if(!encontrada) //Si NO lo encontré
	{
		ahorcado.trazar();
	}	

	if(!ahorcado.vivo)
	{
		//mostrar la palabra entera
	}
}

function mostrarPista(espacio)
{
	var pista = document.getElementById("pista");
	var texto = ""; //guardamos el texto ahi que va creando
	var i; // variable iteradora
	var largo = espacio.length; //espacio del array

	//Mientras la variable i sea = a 0 , mientras i sea < que el  largo, i ++
	//Para una i que empieza en 0, mientras  i sea menor que largo, 
	//sumele uno a i cada ves que yo hago el ciclo
	for(i=0; i<largo; i++) 
	{
		if(espacio[i] != undefined )
		{
			texto = texto + espacio[i] + " "; 
		}
		else
		{
			texto +="_ "; // 
		}
	}
	pista.innerText = texto;
 
}





// Tarea
// 1.-Mostrar la Palabra entera al Morir
// 2.-Elijan de un array de palabras aleatorias
//HACER UN JUEGO ORIGINAL--- CANVAS ; JS ; HTML

