const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Cálculo del Hechizo Patronus:
 * Solicita al usuario la edad del mago y la cantidad de días de práctica del hechizo Patronus, luego calcula la potencia del hechizo. La potencia se obtiene duplicando la edad sumado a la mitad de todos los días de practica realizados para dominar el Patronus
 * 
 * Por ejemplo si la edad es 25 y los días de practica son 158 entonces su potencia con el hechizo patronus es de 129
 */

let edadDelMago = 0;
let diasPracticados = 0;

console.log("Ingrese la edad del mago");
edadDelMago= Number(leer());
console.log("Cuantos dias practicaste el hechizo Patronus?");
diasPracticados = Number(leer());


function potenciaHechizoPatronus(edadDelMago, diasPracticados) {
    let potenciaDeHechizo = (edadDelMago * 2) + (diasPracticados / 2);
    return console.log(`La potencia del hechizo Patronus es de: ${potenciaDeHechizo}`)
}


potenciaHechizoPatronus(edadDelMago, diasPracticados);