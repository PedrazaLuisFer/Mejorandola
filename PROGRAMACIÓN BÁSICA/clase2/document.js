//normalmente los objetos se declaran con la primera...
//letra en Mayuscula.


//Definiciones : 
//Clase: es una Declaración de Objeto
//Objeto:
//Metodo = Funcion. un metodo es una funcion metida dentro de un objeto
//Atributo = Variable. cuando la variable es parte del objeto se llama atributo

//---------------------------------------------------
//La Funcion: ocurre por fuera de un objeto
//Un Metodo: es la que ocurre por dentro de un objeto
//Un Atributo: es lo que ocurre por dentro de un objeto
//Una Variable: ocurre por fuera de un objeto

// FORMA CORRECTA DE CREAR UN OBJETO:

function Pokemon(n,v,a)  //Función con Parametros
{
    this.grito = "Pika!";
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.gritar = function ()
    {
        alert(this.grito);
    }
}

function inicio()
{
	alert("Esto es después del inicio");
    var rattata = new Pokemon("Rattata", 40, 2);
    rattata.vida = rattata.vida - 13;
    nombrePokemon.innerText = rattata.nombre;
    datosPokemon.innerText = ("El Pokemon se llama: " + rattata.nombre
    	+ " \nTiene una vida de: " +rattata.vida + " \nSu ataque es de: " + rattata.ataque
    	+ " \nSu grito es: " + rattata.grito);
    
    //vida, ataque grito
}

alert("Esto es antes del inicio");
//Variables
//	Asignacion por valor
//	Asignacion por referencia



//function Pokemon(nombrePokemon, vidaPoke, ataPoke)	//variables de Parametro se asignan a....
//{
//	var estructuraPokemon =
//	{
//	 nombre: nombrePokemon,			//Variables de Estructura
//	 vida: vidaPoke
//	 ataque: ataPoke
//	 datos:{tipo: "Tierra" , debilidad: "Fuego"}  //objetos dentro de objetos
//	};
//	return estructuraPokemon;
//}

//var pikachu = Pokemon("Pikachu", 100 , 55);
//var bulbasaur = Pokemon("Bulbasaur", 90, 50);

// console.log(bulbasaur); //inspecciona elementos


















// DOCUMENT OBJECT MODEL

//navigator , window , document

//Objeto
//	Variables
//	Funciones



//document.write("Hola mamá!");
//var pi = 3.141592654;
//pi = Math.floor(pi);  //Math es un objeto. floor = piso.  ceil = techo.
//document.write(pi);

//var maxima;
//maxima = Math.max( 4 , 5, 3,,12,45,23,45, 100);  //este es un listado de parameros. no un array
//document.write(maxima);

