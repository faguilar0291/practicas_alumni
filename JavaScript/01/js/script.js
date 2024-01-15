//El alert es una ventana de notificación que aparece por encima
// de la ventana de navegación, la cual requiere tu atención y presionar
// un botón aceptar para poder cerrarlo
// alert("Ale es un gay"); <--lo comento para que no molesta cada vez que carga la página

//window.prompt uso de ventana la cual se muestra por encima de la página a la cual accedemos
//la misma sirve para pedir información que luego almacenamos en una variable
//se crea una variable y al mismo tiempo se le asigna el valor que nos devuelve el prompt
let promptContenido = window.prompt("Hola, cuál es tu nombre?", "tu respuesta aquí");
console.log("El prompt nos devuelve: ", promptContenido);

//ventana de confirmación
let confirm = window.confirm("Eres gay?");
console.log("El usuario dice: ", confirm);

//el console.log nos muestra un mensaje en la consola del navegador
//es muy útil para probar el funcionamiento del código
console.log("Hola");

//"let" sirve para crear variables que podrán ser modificadas a futuro
// se puede o no asignar el contenido al declarar la variable
let nombre = "pepe";
let numero = 5;

console.log("el nombre guardado en la variable nombre es:", nombre);
console.log("el número guardado en la variable numero es:", numero);

//comparadores relacionales > mayor, < menor, >= mayo igual, <= menor igual
// == igual que, != distinto
//se usan para comparar dos valores que pueden ser letras, números o booleanos

let numero1 = 5;
let numero2 = 10;

let resultado = numero1 > numero2;
console.log("El primer número es mayor al segundo? --> ", resultado);
resultado = numero1 < numero2;
console.log("El primer número es menor al segundo? --> ", resultado);
resultado = numero1 >= numero2;
console.log("El primer número es mayor igual al segundo? --> ", resultado);
resultado = numero1 <= numero2;
console.log("El primer número es menor igual al segundo? --> ", resultado);
resultado = numero1 == numero2;
console.log("El primer número es igual al segundo? --> ", resultado);
resultado = numero1 != numero2;
console.log("El primer número es distinto al segundo? --> ", resultado);


const main = document.querySelector(".main");
