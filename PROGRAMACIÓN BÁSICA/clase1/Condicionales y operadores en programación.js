//JAVASCRIPT
//Consola en google es alt + cmd + j

var perro = {
	fuerza: 100,
	peso: 18,
	tipo: "aventurero",
	agilidad: 65,
	higiene: false,
	amor: true,
	edad: 2,
	salud: "vacunado",
	nombre: "Ciruelejo"
};

var gato = {
	fuerza: 40,
	peso: 4,
	tipo: "casero",
	agilidad: 100,
	higiene: true,
	amor: false,
	edad: 0,
	salud: "inmune",
	nombre: "Carnicero"
};

var mascota = perro;
var puntos = 0;

if(mascota.fuerza > 90)
{
	puntos++;
}
if (mascota.peso < 5)
{
 	puntos++;
}
if (mascota.tipo == "casero") 
{
 	puntos = puntos + 2;
}
if(mascota.agilidad >= 70)
{
	puntos++;
}
if(mascota.higiene == true)
{
	puntos++;
}
if(mascota.amor !=true)
{
	puntos++;
}
if(mascota.edad > 1 && mascota.edad < 4)
{
	puntos += 2;
}
else if (mascota.edad == 0) 
{
	puntos++;
}
else
{
	puntos--;
}

if(mascota.salud == "vacunado" || mascota.salud == "inmune")
{
	puntos++;
}
alert("Tu mascota " + mascota.nombre + " tiene " + puntos);