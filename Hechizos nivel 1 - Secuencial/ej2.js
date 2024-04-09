const leer = require("prompt-sync")();

/**
 * Ej 2 
 * Clase de Encantamientos
 * Para saber el total de ingredientes necesarios en la clase de hoy tenemos que saber el numero de estudiantes y libros a usar 
 
 * Los estudiante tiene que traer su propia varita, los que no traigan no podran practicar los encantamientos
 * 
 * Por ejemplo si hay 7 varitas y 4 libros a usar los ingredientes necesarios son 29
 */
let estudiantes = 0;
let libros= 0;

//* Donde podemos saber el total triplicando la cantidad de varitas por estudiante y duplicando la cantidad de libros 

console.log("hola, ingrese la cantidad de estudiantes presentes");
estudiantes = Number(leer());
console.log("Tambien ingrese la cantidad de libros que van a usar")
libros = Number(leer());

function ingredientesNecesarios(estudiantes, libros) {
    let elTripleDeVaritas = estudiantes * 3;
    let elDobleDeLibros = libros * 2;
    let cantIngredientes = elDobleDeLibros + elTripleDeVaritas;
    return console.log(`esta es la cantidad de ingredientes que necesitan ${cantIngredientes}`)
}


ingredientesNecesarios(estudiantes, libros);